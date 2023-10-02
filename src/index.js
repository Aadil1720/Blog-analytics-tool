const express = require('express');
const blogRoutes = require('./routes/blogRoutes');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use('/api', blogRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
