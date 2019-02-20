const User = require('../models/users');
const Movie = require('../models/movies');

module.exports = {
    readAll(req, res){
        User.find().then((users) => {
            res.send(users);
        })
    },
    read(req, res){
        // res.send({user: 'Un user avec id ' + req.params.id});
        const {id} = req.params;
        User.findById(id).then((user) => {
            res.send(user);
        })
    },
    create(req, res){
        const name = req.body.name;
        const age = req.body.age;

        const user = new User({name,age});
        const movie = new Movie({title:'First movie', duration: 999});
        user.movies.push(movie);
        user.save().then(() => {
            movie.save().then(() => {
                res.send({result: user})
            });
        });
    },
    delete(req, res){
        const {id} = req.body;
        User.findByIdAndRemove(id).then((user) => {
            res.send(user);
        })
    },
    oldest(req, res){
        User.find().sort({'age': -1}).limit(2).then((user) => {
            res.send(user);
        });
    },
    youngest(req, res){
        User.find().sort({'age': 1}).limit(2).then((user) => {
            res.send(user);
        });
    }
};