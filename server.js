const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const user = 'prashantjawale13499';
const pass = 'eMzBZTyeG25vguRA'

const uri = "mongodb+srv://"+user+":"+pass+"@cluster0.ifw7run.mongodb.net/User_data?retryWrites=true&w=majority"
mongoose.connect(uri)
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

const orgSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
})

const publicationSchema = new mongoose.Schema({
	user: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	authors: {
		type: String,
		required: true
	},
	keywords: {
		type: String,
		required: true
	},
	abstract: {
		type: String,
		required: true
	},
	pdf: {
		type: String,
		required: true
	},
	draft: {
		type: Boolean,
		required: true
	}
})

const userCollection = mongoose.model("users", userSchema)
const orgCollection = mongoose.model("organization", orgSchema)
const publicationCollection = mongoose.model("papers", publicationSchema)

module.exports = {
	userCollection,
	orgCollection,
	publicationCollection
}