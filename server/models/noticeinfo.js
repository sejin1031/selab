module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'noticeinfo',
      {
       title : {
        type: DataTypes.STRING(45),
        allowNull : true
       },
       writer : {
        type: DataTypes.STRING(45),
        allowNull : true
       },
       date : {
        type: DataTypes.STRING(45),
        allowNull : true
       },
       content : {
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