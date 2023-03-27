const { Int32 } = require("mongodb");
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://prashantjawale13499:eMzBZTyeG25vguRA@cluster0.ifw7run.mongodb.net/User_data?retryWrites=true&w=majority")
	.then(() => {
		console.log("mongodb connected");
	})
	.catch(() => {
		console.log('failed');
	})

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	affiliation: {
		type: String,
		required: true
	},
	affiliation_address: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	contact_no: {
		type: String,
		required: true
	},
	website: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	status: {
		type: Boolean,
		required: true
	}
})

const collection = mongoose.model("Users", userSchema)

module.exports = collection