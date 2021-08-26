module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "products",
    {
      name: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.REAL,
      },
    },
    { timestamps: false }
  );
};
