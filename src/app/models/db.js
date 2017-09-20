const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});

const product = sequelize.define('product', {
  name: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.INTEGER,
  }
});

const order = sequelize.define('order', {
  name: {
    type: Sequelize.STRING,
  },
  total_price: {
    type: Sequelize.INTEGER,
  },
});

order.hasMany(product, {
  foreignKey: 'orderID',
})


sequelize.sync();

exports.sequelize = sequelize;
exports.product = product;
exports.order = order;
