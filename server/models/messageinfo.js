module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'messageinfo',
      {
       send : {
        type: DataTypes.STRING(45),
        allowNull : true
       },
       receive : {
        type: DataTypes.STRING(45),
        allowNull : true
       },
       date : {
        type: DataTypes.STRING(45),
        allowNull : true
       },
       text : {
        type: DataTypes.TEXT,
        allowNull : true
       },
      },
      {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false,
      }
  )};