var Todos = require('../models/todoModel');

module.exports = function(app){

    app.get('/api/setupTodos', function(req, res){
     //seed the database;
        var starterTodos =[
            {
                username: 'test',
                todo: 'Some todo to bring milk',
                isDone:false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Some todo to buy pen',
                isDone:false,
                hasAttachment: false
            },
            {
                username: 'two',
                todo: 'Some todo to bring oil',
                isDone:false,
                hasAttachment: false
            }
        ];

        Todos.create(starterTodos, function(err, results){
            res.send(results);
        });

    });
}
