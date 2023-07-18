const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        created_on: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        comment_content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: "user",
              key: "id",
            },
          },
          blog_id: {
            type: DataTypes.INTEGER,
            references: {
              model: "blog",
              key: "id",
            },
          },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
      }
);

module.exports = Comment;