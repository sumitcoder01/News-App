import React from 'react';

export default function NewsItem(props) {

    const {title,description,imageUrl,url,author,date,source} =props;
    return (
        <div className="card my-3">
        <img src={imageUrl ? imageUrl : "https://res.cloudinary.com/pgatour-prod/w_1200,h_628,c_fill,f_auto/pgatour/news/editorial/2023/07/23/harman-trophy-kk.jpg" } className="card-img-top" alt="..." />
        <div className="card-body">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '88%', zIndex: '1'}}>{source}</span>
          <h5 className="card-title">{title ? title :"No Title.."}</h5>
          <p className="card-text">{description ? description:"No Description.."}</p>
          <p className="card-text"><small className="text-muted">By {author? author: "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={url} target="_blank"  rel="noreferrer"  className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    )

};
