const Product = require("../domain/product");
const ProductService = require("../services/product-service");
var productService = new ProductService();

exports.get = async (req, res) => {
  res.json(await productService.getAll());
};

exports.getById = async (req, res) => {
  res.json(await productService.getById(req.params.id));
};

exports.getByNameAndPrice = async (req, res) => {
  res.json(
    await productService.getByNameAndPrice(req.query.name, req.query.price)
  );
};

exports.post = async (req, res) => {
  if (req.body.name.length < 2 || req.body.price < 0) {
    res.status(400).send();
  } else {
    let product = await productService.add(
      new Product(req.body.name, req.body.price)
    );

    if (product != null) {
      res.status(201).json(product);
    } else {
      res.status(409).send();
    }
  }
};

exports.put = async (req, res) => {
  res.json(
    await productService.update(
      req.params.id,
      new Product(req.body.name, req.body.price)
    )
  );
};

exports.delete = (req, res) => {
  res.json(productService.delete(req.params.id));
};
