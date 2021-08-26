module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "users",
    {
      login: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
