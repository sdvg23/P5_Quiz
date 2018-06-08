var express = require('express'); //importa modulo express
var router = express.Router();		//crea app donde se van a instalar los MWs en la variable router

//para bbdd
const Sequelize = require('sequelize');
const quizz = require("../models/index").models.quiz; //importo modelo quiz directamente

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inicio' });
});


/* GET credits page */
router.get('/credits',function(req,res,next) {
	res.render('credits', {title: 'Créditos'});
});

/* GET quizzes page */
router.get('/quizzes',function(req,res,next) {
	//quizlist = "";
	//res.render('quizzes/index', { title: 'Lista de Quizzes', lista : quizlist});
	quizz.findAll()
	.then(quizzes => {
		res.render('quizzes/index', { quizzes } );
	}).catch(Sequelize.ValidationError, error =>{}
	).catch(err => console.log(err));
});


//arranco aplicacion en el puerto 3000
//router.listen(3000);

module.exports = router;
