// Create web server for comments service
// Comments service will have the following routes
// POST /comments - Add comment to a post
// GET /comments - Get all comments for a post
// PUT /comments - Update a comment
// DELETE /comments - Delete a comment
const express = require('express');
const app = express();
const port = 3000;

// Add comment to a post
app.post('/comments', (req, res) => {
  res.send('Comment added to post');
});

// Get all comments for a post
app.get('/comments', (req, res) => {
  res.send('Get comments for post');
});

// Update a comment
app.put('/comments', (req, res) => {
  res.send('Update comment for post');
});

// Delete a comment
app.delete('/comments', (req, res) => {
  res.send('Delete comment for post');
});

app.listen(port, () => {
  console.log(`Comments service listening at http://localhost:${port}`);
});