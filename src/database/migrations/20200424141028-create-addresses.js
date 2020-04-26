'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('addresses', {

         id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
         },
         //campo que armazena o id do dono do endereço
         user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            //referencia a tabela users no campo id, é como a chave estrangeira
            references: { model: 'users', key: 'id' },
            //o que acontece caso id do usuário seja mudado, no caso muda no endereço também
            onUpdate: 'CASCADE',
            //o que acontece caso id do usuário seja deletado, no caso apaga o endereço também
            onDelete: 'CASCADE',
         },

         zipcode: {
            type: Sequelize.STRING,
            allowNull: false,
         },

         street: {
            type: Sequelize.STRING,
            allowNull: false,
         },

         number: {
            type: Sequelize.INTEGER,
            allowNull: false,
         },

         created_at: {
            type: Sequelize.DATE,
            allowNull: false,
         },

         updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
         },

      });
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('addresses');
   }
};