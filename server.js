const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname), {
  index: 'index.html'
}));

// Route /api/* to serverless functions in api/
const chatHandler = require('./api/chat');
const generateProposalHandler = require('./api/generate-proposal');
app.post('/api/chat', chatHandler);
app.post('/api/generate-proposal', generateProposalHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
