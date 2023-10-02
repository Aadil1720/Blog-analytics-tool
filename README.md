Introduction

This project is a blog analytics and search tool developed using Express.js and Lodash. 
The tool fetches data from a third-party blog API, performs various analytics, and provides insightful statistics to clients. 
Additionally, it includes a blog search endpoint for filtering blogs based on a provided query.

API Endpoints

1. Get Blog Statistics

Endpoint: /api/blog-stats

Method: GET
Description: Retrieves statistics about the fetched blogs, including the total number of blogs, the title of the longest blog, the number of blogs with "privacy" in the title, and an array of unique blog titles.

2. Search Blogs

Endpoint: /api/blog-search

Method: GET
Description: Searches for blogs based on a provided query. The search is case-insensitive.
Query Parameter:
query: The search query (e.g., query=privacy)
Error Handling
The application handles errors that may occur during data retrieval, analysis, or search. If the third-party API is unavailable or returns an error, an appropriate error message will be provided in the response.
Bonus Challenge: Caching
The application implements a caching mechanism using Lodash's memoize function. This stores the analytics results and search results for a certain period. If the same requests are made within the caching period, the cached results are returned instead of re-fetching and re-analyzing the data.

Error Handling

The application handles errors that may occur during data retrieval, analysis, or search. If the third-party API is unavailable or returns an error, an appropriate error message will be provided in the response.

Bonus Challenge: Caching

The application implements a caching mechanism using Lodash's memoize function. This stores the analytics results and search results for a certain period. If the same requests are made within the caching period, the cached results are returned instead of re-fetching and re-analyzing the data.
