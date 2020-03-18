const Joke = require("../models/jokes.model");

module.exports.getAllJokes = (req,res) => {
    Joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({
                message: "Something wasn't funny", error: err 
            }));
};

module.exports.getOneSingleJoke = (req,res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => res.json({joke: oneSingleJoke}))
        .catch(err => res.json({
            message: "Something went wrong",
            error: err
        }));
};

module.exports.createNewJoke = (req,res) => {
    console.log(req.body);
    Joke.create(req.body)
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.json({
            message: "New Joke wasn't created",
            error: err
        }));
};

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedJoke => res.json({joke: updatedJoke}))
        .catch(err => res.json({
            message: "Something didn't update",
            error: err
        }));
    
};

module.exports.deleteExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({result: result}))
        .catch(err => res.json({
            message: "Something went wrong",
            error: err
        }))
}

