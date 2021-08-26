const Sequelize = require("sequelize");
require("dotenv/config");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: process.env.DB_DIALECT,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

sequelize.sync({
  alter: true,
});

const db = {};

db.products = require("./product-model")(sequelize, Sequelize);
db.feedbacks = require("./feedback-model")(sequelize, Sequelize);
db.users = require("./user-model")(sequelize, Sequelize);

db.products.hasMany(db.feedbacks);
db.feedbacks.belongsTo(db.products);

module.exports = db;
