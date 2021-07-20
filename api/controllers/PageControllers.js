const mongoose = require("mongoose");
const Page = require("../models/Page.js");

const getAllPages = async (req, res) => {
  try {
    let pages = await Page.find({});
    res.json(pages);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

const addPage = async (req, res) => {
  try {
    //Checking if page exists
    let pageExist = await Page.exists({ name: req.body.name });
    if (pageExist)
      return res
        .status(400)
        .json({ error: "Page with that name already exists." });

    const newPage = await Page.create({
      name: req.body.name,
      slug: req.body.slug,
      content: req.body.content,
    });

    return res.status(200).json(newPage);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

module.exports = {
  getAllPages,
  addPage,
};
