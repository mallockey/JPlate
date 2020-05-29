const db = require("../db/db")

const Address = require("./models/address")
const Orders = require("./models/orders")
const Products = require("./models/products")
const Users = require("./models/users")

Users.hasMany(Address)
Address.belongsTo(Users)
Users.hasMany(Orders)
Orders.belongsTo(Users)
Orders.hasMany(Products)

db.sync()
console.log('Synced DB')