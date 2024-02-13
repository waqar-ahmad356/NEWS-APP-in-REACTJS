import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
  const api_key = 'e2e9cb0d45c04ea999478659e191dd15';
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${api_key}`;
      let response = await fetch(url);
      let data = await response.json();

      setArticles(data.articles); // Use data.articles instead of data
    }

    fetchData();
  }, [category]);

  return (
    <div>
      <h2 className='text-center mt-4'>
        Latest <span className='badge bg-danger text-center'>News</span>
      </h2>
      {articles.map((article, index) => (
        <NewsItem
          key={index}
          title={article.title}
          description={article.description}
          src={article.urlToImage}
          url={article.url}
        />
      ))}
    </div>
  );
};

export default NewsBoard;
