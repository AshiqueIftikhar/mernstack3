const app = require('./app');
const port = process.env.RUNNING_PORT || 8080;

app.get('/', (req, res) => {
    res.status(200).json({ status: 'success', data: 'Welcome to your Express app!' });
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
