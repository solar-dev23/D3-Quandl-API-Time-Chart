'use strict';

/**
 * Module dependencies.
 */

var path = require('path'),
    mongoose = require('mongoose'),
    _ = require('lodash'),
    User = mongoose.model('User'),
    StripeEvent = mongoose.model('StripeEvent'),
    path = require('path'),
    config = require(path.resolve('./config/config')),
    stripe = require('stripe')(config.stripe.secret_key),
    errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
    email = require(path.resolve('./modules/core/server/controllers/emails.server.controller'));

var plans = [
      {name:'Premium', price:10,id:'premium',stripe_id:'premium_monthly', period:1},
      {name:'Small Business', price:60,id:'small_business',stripe_id:'small_business_monthly', period:1},
      {name:'Enterprise', price:200,id:'enterprise', stripe_id:'enterprise_monthly', period:1},
      {name:'Premium', price:50,id:'premium',stripe_id:'premium6', period:6},
      {name:'Small Business', price:290,id:'small_business',stripe_id:'small_business6', period:6},
      {name:'Enterprise', price:950,id:'enterprise', stripe_id:'enterprise6', period:6},
      {name:'Premium', price:80,id:'premium',stripe_id:'premium_yearly', period:12},
      {name:'Small Business', price:450,id:'small_business',stripe_id:'small_business_yearly', period:12},
      {name:'Enterprise', price:1400,id:'enterprise', stripe_id:'enterprise_yearly', period:12}
    ];



    /**
     * Get the user's plans
     */
    exports.getMyPlan = function (req, res) {
      var user = req.user;
      if (!user) return res.status(400).json({message:'User is not signed in'});
      for (var i = 0; i < plans.length; i++) {
        if(plans[i].id === user.plan){
          return res.json(plans[i]);
        }
      }
      res.json({name:'Free',id:'free'});
    };


    /**
     * create stripe managed account
     */
    exports.createManagedAccount = function (req, res) {
      var user = req.user;
      if (!user) return res.status(400).json({message:'User is not signed in'});
      var data = {
        managed: true,
        country: 'US',
        legal_entity:req.body,
        tos_acceptance: {
          date: Math.floor(Date.now() / 1000),
          ip: req.connection.remoteAddress
        }
      };

      stripe.accounts.create(data, function(err, account) {
        if(err) return res.status(400).json({message:err.message});
        user.stripeAccount = account.id;
        user.save(function(err, user){
            if(err) return res.status(400).json({message:err.message});
            res.json({id:account.id});
        });
      });
    };


    /**
     * create stripe managed account
     */
    exports.getManagedAccount = function (req, res) {
      var user = req.user;
      if (!user) return res.status(400).json({message:'User is not signed in'});
      if (user.stripeAccount){
        stripe.accounts.retrieve(
          user.stripeAccount,
          function(err, account) {
            if(err) return res.status(400).json({message:err.message});
            res.json(account);
          }
        );
      } else {
        res.json({});
      }
    };


    /**
     * Get the user's subscription
     */
    exports.getMySubscription = function (req, res) {
      var user = req.user;
      if(user.stripeSubscription){
        stripe.subscriptions.retrieve(
          user.stripeSubscription,
          function(err, subscription) {
            if(err){
              res.status(err.status).json({message:err.message});
            } else {
              res.json(subscription);
            }
          }
        );
      } else{
        res.json({});
      }
    };


    /**
     * Get the available plans
     */
    exports.getPlans = function (req, res) {
      res.json(plans);
    };


    /**
     * Get a user's credit card
     */
    exports.getBillingInfo = function (req, res) {
      var user = req.user;
      if(user.stripeCustomer){
        stripe.customers.retrieve(
          user.stripeCustomer,
          function(err, customer) {
            if(err){
              res.status(err.status).json({message:err.message});
            } else {
              res.json(returnCustomerBillingInfo(customer));
            }
          }
        );
      }else{
        res.json([]);
      }
    };


    /**
     * Get a user's credit card
     */
    exports.updateCreditCard = function (req, res) {
      var user = req.user;
      if (!user) return res.status(400).json({message:'User is not signed in'});
      if(user.stripeCustomer){
        stripe.customers.createSource(
          user.stripeCustomer,
          {source: req.body.token },
          function(err, card) {
            if(err){
              res.status(err.status).json({message:err.message});
            } else {
              stripe.customers.update(user.stripeCustomer, {
                default_source: card.id
              }, function(err, customer) {
                res.json(returnCustomerBillingInfo(customer));
              });
            }
          }
        );
      }else{
        res.status(400).json({message:'user has no stripe customer'});
      }
    };



    /**
     * Get a user's invoices
     */
    exports.getInvoices = function (req, res) {
      var user = req.user;
      if (!user) return res.status(400).json({message:'User is not signed in'});
      if(user.stripeCustomer){
        stripe.invoices.list(
          { limit: 100,customer:user.stripeCustomer },
          function(err, invoices) {
            if(err){
              res.status(err.status).json({message:err.message});
            } else {
              res.json(invoices.data);
            }
          }
        );
      }else{
        res.json([]);
      }
    };


   /**
    * Subscribe a user to a plan
    */
    exports.subscribeToPlan = function (req, res) {

      var user = req.user, stripe_plan, user_plan;
      if (!user) return res.status(400).json({message:'User is not signed in'});
      for (var i = 0; i < plans.length; i++) {
        if(plans[i].stripe_id === req.body.plan){
          stripe_plan = plans[i].stripe_id;
          user_plan = plans[i].id;
        }
      }
      if(!stripe_plan) return res.status(400).json({message:'plan not found'});
      if(user.stripeCustomer){
        stripe.customers.createSource(
          user.stripe_customer,
          {source: req.body.token },
          function(err, card) {
            if(err) return res.status(err.status).json({message:err.message});
            stripe.customers.update(user.stripeCustomer, {
              default_source: card.id
            }, function(err, customer) {
              if(user.stripeSubscription){
                updateSubscription(
                  user.stripeSubscription,
                  stripe_plan,
                  user_plan,
                  user,
                  function(err, subscription_id){
                    if(err) return res.status(err.status).json({message:err.message});
                    res.json(user_plan);
                  }
                );
              }else{
                subscribeCustomerToPlan(
                  user.stripeCustomer,
                  stripe_plan,
                  user_plan,
                  user,
                  function(err, subscription_id){
                    if(err) return res.status(err.status).json({message:err.message});
                    res.json(user_plan);
                  }
                );
              }
            });
          }
        );
      } else {
        createCustomer(
          req.body.token,
          user,
          function(err, customer_id){
            if(err) return res.status(err.status).json({message:err.message});
            subscribeCustomerToPlan(
              customer_id,
              stripe_plan,
              user_plan,
              user,
              function(err, subscription_id){
                if(err) return res.status(err.status).json({message:err.message});
                res.json(user_plan);
              }
            );
          }
        );
      }
    };



    /**
     * stripe webhook listener
     */

    exports.onStripeWebhookEvent = function (req, res) {
      if(!req.body || req.body.object !== 'event' || !req.body.id) {
        return res.status('400').send('Event data not included');
      }
      if (req.body.id === 'evt_00000000000000'){
        return res.status(200).end();
      }
      stripe.events.retrieve(req.body.id, function(err, event) {
        StripeEvent.findById(event.id, function(err,stripeEvent){
          if(err) return res.status('400').send(err.message);
          if (stripeEvent){
            res.status(200).send('already processed');
          } else{
            var next = function(err){
              stripeEvent = new StripeEvent();
              stripeEvent._id = event.id;
              stripeEvent.data = event;
              stripeEvent.save(function(err){
                res.status(200).send('ok');
              });
            };
            var customer, invoice;

            if(event.type === 'invoice.payment_succeeded'){
              customer = event.data.object.customer;
              invoice = event.data.object;
              User.findOne({stripe_customer: customer}, function(err, user){
                if(err) return res.status('400').send(err.message);

                email.send(user.email, 'You have a new invoice', {invoice:invoice, name:user.displayName},
                  'modules/users/server/templates/invoice-email', next);
              });

            } else if(event.type === 'invoice.payment_failed'){
              customer = event.data.object.customer;
              invoice = event.data.object;
              User.findOne({stripe_customer: customer}, function(err, user){
                if(err) return res.status('400').send(err.message);

                email.send(user.email, 'Your payment failed', {invoice:invoice, name:user.displayName},
                  'modules/users/server/templates/billing-failed-email', next);
              });

            } else if(event.type === 'customer.subscription.deleted'){
              customer = event.data.object.customer;

              User.findOneAndUpdate(
                {stripe_customer: customer},
                {plan:'free', stripe_subscription: null},
                {new: false},
                function(err, user){
                  if(err) return res.status('400').send(err.message);

                  email.send(user.email, 'Your subscription was cancelled', {name:user.displayName},
                    'modules/users/server/templates/subscription-cancelled-email', next);
              });

            } else {
              next();
            }
          }
        });
      });
    };


    function subscribeCustomerToPlan(customer_id, plan_id, plan, user , next){
       stripe.subscriptions.create({
         customer: customer_id,
         plan: plan_id
       }, function(err, subscription) {
         if(err){
           next(err);
         } else {
           user.stripeSubscription = subscription.id;
           user.plan = plan;
           user.save(function (err) {
             if (err) {
               next(err);
             } else {
               next(err, subscription.id);
             }
           });
         }
      });
   }


   function updateSubscription(subscription_id, plan_id, plan, user , next){
     stripe.subscriptions.update(
       subscription_id,
       { plan: plan_id },
       function(err, subscription) {
         if(err){
           next(err);
         } else {
           stripe.invoices.create({
              customer: subscription.customer
            }, function(err, invoice) {
              user.plan = plan;
              user.save(function (err) {
                if (err) {
                  next(err);
                } else {
                  next(err, subscription.id);
                }
              });
           });
         }
      });
   }

   function createCustomer(token, user, next){
     stripe.customers.create({
       description: 'Customer for '+ user.email,
       source: token // obtained with Stripe.js
     }, function(err, customer) {
       if(err){
         next(err);
       } else {
         user.stripeCustomer = customer.id;
         user.save(function (err) {
           if (err) {
             next(err);
           } else {
             next(err, customer.id);
           }
         });
        }
      });
   }

   function returnCustomerBillingInfo(customer){
     for (var i = 0; i < customer.sources.data.length; i++) {
       if(customer.sources.data[i].id === customer.default_source){
         var fields = ['last4','brand','country','exp_month','exp_year','funding','name'];
         var billing = {};
         for (var j = 0; j < fields.length; j++) {
           billing[fields[j]] = customer.sources.data[i][fields[j]];
         }
         return billing;
       }
     }
   }
