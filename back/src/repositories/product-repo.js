const db = require("../models");
const Product = db.products;
const Feedback = db.feedbacks;
const { Op } = require("sequelize");

exports.save = async (product) => {
  return await Product.create({
    name: product.name,
    price: product.price,
  })
    .then((result) => {
      console.log("Created product: " + JSON.stringify(result));
      return result;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.findAll = async () => {
  const result = await Product.findAll();
  return result;
};

/*
exports.findOne = async (id) => {
  const result = await Product.findOne({
    where: {
      id: id,
    },
  });
  return result;
};
*/

exports.findOne = async (id) => {
  return await Product.findByPk(id, {
    include: [
      {
        model: Feedback,
        attributes: { exclude: ["productId"] },
      },
    ],
  })
    .then((product) => {
      return product;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.findByNameAndPrice = async (name, price) => {
  const result = await Product.findAll({
    where: {
      name: name,
      price: price,
    },
  });
  /*
  const result = await Product.findAll({
    where: {
      [Op.and]: [
        { name: name },
        {
          price: {
            [Op.gte]: price,
          },
        },
      ],
    },
  });
  */

  return result;
};

exports.update = async (id, product) => {
  return await Product.update(
    {
      name: product.name,
      price: product.price,
    },
    {
      where: {
        id: id,
      },
      returning: true,
    }
  )
    .then((result) => {
      console.log("Update product: " + JSON.stringify(result));
      return result[1][0]; // Only Postgres, 1 is number of affect records, 0 is first element
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.delete = async (id) => {
  await Product.destroy({
    where: {
      id: id,
    },
  });
};
