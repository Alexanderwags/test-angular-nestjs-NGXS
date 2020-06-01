import * as mongoose from "mongoose";

export const TodoSchema = new mongoose.Schema({
	completed: Boolean,
	name: {
		type: Boolean,
		default: false,
	},
	createAt: {
		type: Date,
		default: Date.now,
	},
});
