module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "feedbacks",
    {
      description: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );
};
