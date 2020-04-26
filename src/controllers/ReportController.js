const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
   async show(req, res) {

      const users = await User.findAll({

         attributes: ['name', 'email'],

         // Encontrar todos usuários que tem email que termina com @rocketseat.com.br
         where: {
            email: {
               [Op.iLike]: '%@rocketseat.com.br'
            }
         },

         // Desses usuários eu quero buscar todos que moram na rua "Rua exemplo"
         include: [
            {
               association: 'addresses',
               where: {
                  street: 'Rua exemplo'
               }
            },

            {
               // Desses usuários eu quero buscar as tecnologias que começam com React
               association: 'techs',
               required: false,
               where: {
                  name: {
                     [Op.iLike]: 'React%'
                  }
               }
            },
         ]
      })

      return res.json(users);
   }
};