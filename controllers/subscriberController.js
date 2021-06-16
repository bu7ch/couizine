const Subscriber = require('../models/subscriber')

exports.getAllSubscribers = (req, res, next) => {
  Subscriber.find({}, (err, subscribers) =>{
    if (err) next(err);
    res.render('subscribers', {subscribers: subscribers});
    next()
  })
}

exports.postSubscribers = (req, res, next) => {
  let newSubscriber = new Subscriber(req.body)
  newSubscriber.save((err, subscriber) => {
    if (err) next(err);
    res.json(subscriber)
  })
}