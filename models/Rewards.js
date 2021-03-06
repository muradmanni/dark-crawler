const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Reward extends Model {}

Reward.init(
  {
    reward_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    reward_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reward_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reward_comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reward_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reward_health_points: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 100,
      },
    },
    reward_strength_points: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 100,
      },
    },
    reward_endurance_points: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 100,
      },
    },
    reward_intelligence_points: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 100,
      },
    },
    reward_game_points: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    sequelize,
    modelName: "rewards",
  }
);

module.exports = Reward;
