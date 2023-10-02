const axios = require('axios');
const { analyzeData, searchBlogs } = require('../utils/analytics');
const options = {
  method: 'GET',
  url: 'https://intent-kit-16.hasura.app/api/rest/blogs',
  headers: {
    'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
  }
};
const getBlogStats = (req, res) => {
  axios(options)
    .then(response => {
      const blogData = response.data;
      const statistics = analyzeData(blogData);
      res.json(statistics);
    })
    .catch(err=> {
      console.log(err);
      res.status(500).json({ err: 'Internal Server Error' });
    });
};

const searchBlogsEndpoint = (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

     axios(options)
    .then(response => {
        const blogData = response.data;
        const matchingBlogs = searchBlogs(blogData, query);
        res.json({ matchingBlogs });
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  } 

module.exports = { getBlogStats, searchBlogsEndpoint };
