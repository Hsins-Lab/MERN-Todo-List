const express = require('express');
const mongoose = require('mongoose');
const keys = require('./configs/keys');

// Import Routes files
const todoRoutes = require('./routes/todos');

// Express settings and middlewares
const app = express();
app.use(express.urlencoded({ extended: true }));

// Connect to Database
const MONGODB_URI = keys.mongoURI;
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true); // Deal with "DeprecationWarning: collection.ensureIndex is deprecated."
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

mongoose.connection.on('connected', () =>
  console.log(`Database connected to: ${MONGODB_URI}`)
);
mongoose.connection.on('disconnected', () =>
  console.log(`Database disconnected`)
);
mongoose.connection.on('error', err =>
  console.log(`Database connect with error: ${err.message}`)
);

// Routes
app.use('/api/todos', todoRoutes);

// Server
const PORT = process.env.PORT || 5566;

app.listen(PORT, () => {
  console.log('┌──────────────────────────────────┐');
  console.log('│   Yelp Camp Server Started...    │');
  console.log(`│   Listening on the port ${PORT}     │`);
  console.log('│                      (´･ω･`)     │');
  console.log('└──────────────────────────────────┘');
});
