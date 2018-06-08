const Sequelize = require('sequelize'); //importo sequelize.js
const options = { loggin: false, operatorsAliases:false}; //quito trazas por consola
const sequelize = new Sequelize("sqlite:quizzes.sqlite", options); //quizzes.sqlite fichero bbdd

//defino la tabla quizzes
const quiz = sequelize.define('quiz', 	
	{	question: Sequelize.STRING,
		answer: Sequelize.STRING
	}
);

//sincronizo e inicializo la bbdd
sequelize.sync()
.then(()=> quiz.count())
.then(count => {
	if(count===0){
		return quiz.bulkCreate([
				{question:"Capital de Italia", answer:"Roma"},
				{question:"Capital de Francia", answer:"París"},
				{question:"Capital de España", answer:"Madrid"},
				{question:"Capital de Portugal", answer:"Lisboa"}
		]);
	} 
})
.catch(err => console.log(err));

//exporto la tabla quizzes
module.exports = sequelize;

