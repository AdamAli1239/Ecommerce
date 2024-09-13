const ItemModel = require("../models/itemModel");

const createItem = async (req, res) => {
  const { clothingType, colour, size } = req.body;
  try {
    const createdItem = await ItemModel.create({ clothingType, colour, size });
    res.status(200).json(createdItem);
  } catch (error) {
    res.status(400).json({ error: "Error adding this item to the warehouse" });
  }
};

const getTops = async (req, res) => {
  const tops = await ItemModel.find({ clothingType: "tops" });
  if (tops === null) {
    return res.status(404).json({ error: "No Tops left in stock, sorry." });
  }
  res.status(200).json(tops);
};

const getBottoms = async (req, res) => {
  const bottoms = await ItemModel.find({ clothingType: "bottoms" });
  if(bottoms ===null){
    return res.status(404).json({error:'No bottoms in stock at the moment, sory'})
  }
  res.status(200).json(bottoms)
};

const getSweaters = async (req, res) => {
  const sweaters = await ItemModel.find({ clothingType: "sweaters" });
  if(sweaters ===null){
    return res.status(404).json({error:'No sweaters in stock at the moment, sory'})
  }
  res.status(200).json(sweaters)
};

const getPants = async (req, res) => {
  const pants = await ItemModel.find({ clothingType: "pants" });
  if(pants ===null){
    return res.status(404).json({error:'No pants in stock at the moment, sory'})
  }
  res.status(200).json(pants)
};

const getTshirts = async (req, res) => {
  const tshirts = await ItemModel.find({ clothingType: "tshirts" });
  if(tshirts ===null){
    return res.status(404).json({error:'No tshirts in stock at the moment, sory'})
  }
  res.status(200).json(tshirts)
};

const getShorts = async (req, res) => {
  const shorts = await ItemModel.find({ clothingType: "shorts" });
  if(shorts ===null){
    return res.status(404).json({error:'No shorts in stock at the moment, sory'})
  }
  res.status(200).json(shorts)
};
const getSocks = async (req, res) => {
  const socks = await ItemModel.find({ clothingType: "socks" });
  if(socks ===null){
    return res.status(404).json({error:'No socks in stock at the moment, sory'})
  }
  res.status(200).json(socks)
};

module.exports = {
  createItem,
  getTops,
  getBottoms,
  getSweaters,
  getPants,
  getTshirts,
  getShorts,
  getSocks,
};
