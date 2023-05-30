import { createService, findAllService } from "../services/news.service.js";

const create = async (req, res) => {
  try {
    const { title, text, banner } = req.body;

    if (!title || !text || !banner) {
      res.status(400).send({ message: "Submit all fields for registration" });
    }

    await createService({ title, text, banner, user });

    res.send(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const findAll = (req, res) => {
  try {
    const news = req();
    res.send(news);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export { create, findAll };
