import mongoose from "mongoose";
const cardSchema = new mongoose.Schema({
	name: String,
	imageUrl: String,
});

export default mongoose.model("cards", cardSchema);
