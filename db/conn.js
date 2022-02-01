const mongoose = require('mongoose')

mongoose
	.connect(process.env.DATABASE, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => {
		console.log('DB Connection Successful')
	})
	.catch(() => {
		console.log('DB Connection Failed')
	})
  