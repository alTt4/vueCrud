const Todos = require('../models/todoSchema.js');
exports.list=(req,res) => {
    Todos.find()
      .then((todos) => {
          res.status(200).json(todos)
        })
      .catch(error => res.status(400).json({ error }))
}

// exports.list=(req,res) => {
//     return GenericCtrl(req, res, async () => {
//         const todos = await todoServices.list();
//         if (todos) res.status(200).json(todos);
//     });
// }