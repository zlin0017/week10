// /src/routes/actors.js
const mongoose = require("mongoose");

const Actor = require("../models/actor");
const Movie = require("../models/movie");

module.exports = {
  getAll: function (req, res) {
    Actor.find({})
      .populate("movies")
      .exec(function (err, actors) {
        if (err) {
          return res.status(404).json(err);
        } else {
          res.json(actors);
        }
      });
  },
  createOne: function (req, res) {
    let newActorDetails = req.body;
    newActorDetails._id = new mongoose.Types.ObjectId();

    let actor = new Actor(newActorDetails);
    actor.save(function (err) {
      res.json(actor);
    });
  },
  getBy2000: function(req, res){
    let query = {
      bYear: {
        $gte: 2000
      }
    };
    Actor.find(query, function(err, actors){
      if(err) return res.status(400).json(err);
      res.json(actors);
    });
  },
  // createOne: function (req, res) {
  //     let newActorDetails = req.body;
  //     newActorDetails._id = new mongoose.Types.ObjectId();

  //     Actor.create(newActorDetails, function (err, actor) {
  //         if (err)
  //             return res.json(err);
  //         res.json(actor);
  //     });
  // },

  getOne: function (req, res) {
    Actor.findOne({
        _id: req.params.id
      })
      .populate("movies")
      .exec(function (err, actor) {
        if (err) return res.status(400).json(err);
        if (!actor) return res.status(404).json();
        res.json(actor);
      });
  },


  updateOne: function (req, res) {
    Actor.findOneAndUpdate({
      _id: req.params.id
    }, req.body, function (
      err,
      actor
    ) {
      if (err) return res.status(400).json(err);
      if (!actor) return res.status(404).json();

      res.json(actor);
    });
  },

  deleteOne: function (req, res) {
    Actor.findOneAndRemove({
      _id: req.params.id
    }, function (err, doc) {
      if (err) return res.status(400).json(err);

      res.json(doc);
    });
  },

  addMovie: function (req, res) {
    Actor.findOne({
      _id: req.params.id
    }, function (err, actor) {
      if (err) return res.status(400).json(err);
      if (!actor) return res.status(404).json();

      Movie.findOne({
        _id: req.body.id
      }, function (err, movie) {
        if (err) return res.status(400).json(err);
        if (!movie) return res.status(404).json();

        actor.movies.push(movie);
        actor.save(function (err) {
          if (err) return res.status(500).json(err);

          res.json(actor);
        });
      });
    });
  },



  // {"_id":"5b89971ce7ef9220bcada5c2","actors":[],"title":"FIT2095","year":2015,"__v":0}
  //{"_id":"5b926ce1c7fccd6024641b49","movies":["5b89971ce7ef9220bcada5c2","5b8997c4e7ef9220bcada5c3"],"name":"Viet","bYear":1990,"__v":0}
  deleteMovies: function (req, res) {
    Actor.findOne({
      id: req.params.id
    }, function (err, actor) {
      if (err) return res.status(400).json(err);
      if (!actor) return res.status(404).json();

      actor.movies = [];
      actor.save(function (err) {
        if (err) return res.status(400).json(err);

        res.status(204).json(actor);
      });
    });
  },
  deleteActorMovies: function (req, res) {
    let actorId = req.params.actorId;
    Movie.deleteMany({
      actorId: {
        '$in': actors
      }
    }, function (err, obj) {
      if (!err) {
        Actor.findByIdAndDelete({
          '_id': actorId
        });
      }
    })
  }
}