const _ = require('lodash');

const analyzeData = _.memoize(blogs => {
  console.log(blogs.blogs);
  blogs=blogs.blogs;
  const totalBlogs = blogs.length;
  const longestBlog = _.maxBy(blogs, blog => blog.title.length).title;
  const privacyBlogs = _.filter(blogs, blog => blog.title.toLowerCase().includes('privacy'));
  const uniqueTitles = _.uniqBy(blogs, 'title').map(blog => blog.title);

  return {
    totalBlogs,
    longestBlog,
    privacyBlogs: privacyBlogs.length,
    uniqueTitles,
  };
}, blogs => JSON.stringify(blogs));

const searchBlogs = _.memoize((blogs, query) => {
  blogs=blogs.blogs;
  const matchingBlogs = _.filter(blogs, blog => blog.title.toLowerCase().includes(query.toLowerCase()));
  return matchingBlogs;
}, (blogs, query) => JSON.stringify(blogs) + query);

module.exports = { analyzeData, searchBlogs };

