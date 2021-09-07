const express = require('express');
const cors = require('cors');

const productRoutes = require('./routes/product.routes');


const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


// Endpoints
app.use('/api', productRoutes);

// Error
app.use('/api', (req, res) => {
  res.status(404).send('404 not found...');
});

// Connects our backend code with the database (mongoose)
/*
mongoose.connect('mongodb://localhost:', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));
*/


// Server run
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
