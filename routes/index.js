UserController = require('../controllers/user-controller');
MovieController = require('../controllers/movie-controller');

module.exports = (server) => {

    // USER
    /*
    * UserController.getUsers =
    * server.get('/users', (req, res) => {
    *   UserController.getUsers();
    * }
    * */
    server.get('/users', UserController.readAll);
    server.get('/user/:id', UserController.read);
    server.post('/user', UserController.create);
    server.delete('/user', UserController.delete);
    server.get('/oldest/user', UserController.oldest);
    server.get('/youngest/user', UserController.youngest);

    //MOVIE
    server.get('/movies', MovieController.readAll);
    server.get('/movie/:id', MovieController.read);
    server.post('/movie', MovieController.create);
    server.delete('/movie', MovieController.delete);
};