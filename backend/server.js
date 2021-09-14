const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);

const productRoutes = require('./routes/product.routes');
const orderRoutes = require('./routes/order.routes');


const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


// Endpoints
app.use('/api', productRoutes);
app.use('/api', orderRoutes);

// Error
app.use('/api', (req, res) => {
  res.status(404).send('404 not found...');
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// Connects our backend code with the database (mongoose)
mongoose.connect('mongodb+srv://admin:admin123@cluster0.kmtsd.mongodb.net/skateDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
/*
app.use(session({
  secret: 'shhh!',
  store: new MongoStore({ mongooseConnection: db }),
}));
*/
db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

// Server run
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
