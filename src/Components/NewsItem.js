import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl,author,publishedAt} = this.props;
    return (
      <div className="newsitem my-3">
        <div className="card" style={{width: "auto"}}  >
          <img src={!imageUrl?"https://www.ohsd.net/cms/lib/WA01919452/Centricity/Page/5501/news.jpg":imageUrl} className="card-img-top" style={{height: "15rem"}}  alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a href={newsUrl} rel="noreferrer"  target='_blank' className="btn btn-sm btn-primary text-warning btn-dark">Read more</a>
              <p className="card-text "><small className="text-muted fst-italic "> By {author} on {new Date(publishedAt).toGMTString() }</small></p>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem