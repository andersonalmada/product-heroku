const db = require("../models");
const Feedback = db.feedbacks;

exports.save = async (productId, feedback) => {
  return Feedback.create({
    description: feedback.description,
    rating: feedback.rating,
    productId: productId,
  })
    .then((result) => {
      console.log("Created feedback: " + JSON.stringify(result));
      return result;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.findAll = async () => {
  const result = await Feedback.findAll();
  return result;
};

exports.findOne = async (id) => {
  const result = await Feedback.findOne({
    where: {
      id: id,
    },
  });
  return result;
};

exports.update = async (id, feedback) => {
  return await Feedback.update(
    {
      description: feedback.description,
      rating: feedback.rating,
    },
    {
      where: {
        id: id,
      },
      returning: true,
    }
  )
    .then((result) => {
      console.log("Update feedback: " + JSON.stringify(result));
      return result[1][0]; // Only Postgres, 1 is number of affect records, 0 is first element
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.delete = async (id) => {
  await Feedback.destroy({
    where: {
      id: id,
    },
  });
};
