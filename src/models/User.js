const { Model, DataTypes } = require('sequelize');

class User extends Model {
   //recebe a conexão com a base de dados
   static init(sequelize) {
      //método que permite que seja passado os campos da tabela
      super.init({
         name: DataTypes.STRING,
         email: DataTypes.STRING,
      }, {
         sequelize
      })
   }

   static associate(models) {
      this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
      //o belongsTo diz que o endereço pertence apenas um usuário
      this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' });
   }
}

module.exports = User;