import React, { useState , useEffect  } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



export default function News(props) {

  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults]=useState(0);
  const updateNews= async()=>{
    props.setProgress(12);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(30);
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(50);
    let parseData = await data.json();
    props.setProgress(80);
    setArticles(parseData.articles); 
    setLoading(false);
    setTotalResults(parseData.totalResults);
    props.setProgress(91);
    document.title = `${props.category }- NewsExpress`;
    props.setProgress(100);
  }

   useEffect(() => {
    updateNews();
    
  },[]);

   const fetchMoreData = async () => {
    if(page + 1 <= Math.ceil(totalResults/props.pageSize)){
    setPage(page + 1 );
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
  }
};

    return (
      <>
        <h1 className="my-5 text-center">NewsExpress -Top Headlines on {props.category}</h1>
        <hr/>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Nothing To Show!</b>
            </p>
          }
        >
        <div className="container my-4">
          <div className="row">
        {articles.map(element => {
            return <div className="col-md-4"  key = {element.url} >
                   <NewsItem title ={element.title} description = {element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                  </div>
        } )}
           </div>
        </div>
        </InfiniteScroll>
      </>
    )
};

News.defaultProps = {
  country: 'in',
  category:'general',
  pageSize: 6,
}

News.propTypes = {
  apiKey: PropTypes.string.isRequired,
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
}
