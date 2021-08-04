import express from "express";
import mongoose from "mongoose";
import colors from "colors";
import Cors from "cors";

import Cards from "./dbCards.js";
//App Config
const app = express();
const port = process.env.PORT || 5000;
const connection_url =
	"mongodb+srv://Wemimo:1409@cluster0.2kqdr.mongodb.net/tinderClone?retryWrites=true&w=majority";
//Middlewares
app.use(express.json());
app.use(Cors());

//Db config
mongoose.connect(connection_url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});
//API Endpoints
app.get("/", (req, res) => res.send("Bravo my life!"));
app.post("/tinder/cards", (req, res) => {
	const dbCard = req.body;
	Cards.create(dbCard, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	});
});
app.get("/tinder/cards", (req, res) => {
	Cards.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});
//Listener
app.listen(port, console.log(`Server running on ${port}`.yellow.bold));
