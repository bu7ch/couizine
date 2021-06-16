const Subscriber = require('../models/subscriber')

exports.getAllSubscribers = (req, res, next) => {
  Subscriber.find({}, (err, subscribers) =>{
    if (err) next(err);
    res.render('subscribers', {subscribers: subscribers});
    next()
  })
}

exports.subscriberPage = (req, res) => {
  res.render('postSub')
}
exports.postSubscribers = (req, res, next) => {
  let newSubscriber = new Subscriber(req.body)
  newSubscriber.save((err, subscriber) => {
    if (err) next(err);
    res.render('thanks')
  })
  exports.editSubscriber = (req, res, next) => {
    Subscriber.findById(req.params.id, (err, subscriber) => {
      if (err) console.error(err)
      Object.assign(subscriber, req.body).save((err, subscriber) => {
        if (err) console.error(err)
        res.json({ message : 'Inscription mise à jour', subscriber})
      })
    })
  }
}