import React from 'react'
import image1 from './Assets/image1.jpg';

const NewsItem = ({title,decription,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 mx-3 my-3 px-2 py-3 d-inline-block" style={{maxWidth:"345px"}}>
  <img src={src?src:image1} style={{width:"325px", height:"200px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{decription?decription.slice(0,90):'This is a good news for pakistan has won the match and babar at the top position.'}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem
