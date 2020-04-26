const User = require('../models/User');

module.exports = {
   async index(req, res) {
      const users = await User.findAll();

      return res.json(users);
   },

   async store(req, res) {
      //o name e o email estão vindo do corpo da requisição
      const { name, email } = req.body;

      const user = await User.create({ name, email });

      return res.json(user);
   }
};