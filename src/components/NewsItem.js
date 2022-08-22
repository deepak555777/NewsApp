import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
        <div className="card m-3 border border-3 border-dark " style={{width: "22rem"}}>
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title} <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>{source}</span>
  </h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">Published By {author} on {new Date(date).toUTCString()}</small></p>
          <a href={newsUrl} target ="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
        </div>
      </div>
    )
  }
}
