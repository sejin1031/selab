module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'usersinfo',
      {
       user_id : {
        type: DataTypes.STRING(45),
        allowNull : true
       },
       user_pw : {
        type: DataTypes.STRING(45),
        allowNull : true
       },
       name : {
        type: DataTypes.STRING(45),
        allowNull : true
       },
       grade : {
        type: DataTypes.STRING(45),
        allowNull : true
       },
      },
      {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false,
      }
  )};