import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types';

export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'

  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }



  constructor(props) {
    super(props);
    
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsUp`
  }

  async updateNews(){
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.props.page}&apiKey=e512dd2f478a4a99b1c379468230b8f7&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })

  }

  
  async componentDidMount() {
    this.updateNews();
  }

  

  handlePrevClick = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e512dd2f478a4a99b1c379468230b8f7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    })
  }

  handleNextClick = async () => {
    

    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e512dd2f478a4a99b1c379468230b8f7&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      })
    }
  }

  render() {
    return (
      <>

        <div className='container flex justify-content-center'>
          <h2 className='text-center bg-dark text-warning  rounded' style={{marginTop: "90px",padding:"20px 20px"}}>NewsUp - Latest Updates</h2>
          <div className="container">
            {/* <div className="d-grid gap-2 d-md-flex justify-content-md-end my-2">
              <button disabled={this.state.page <= 1} className="btn btn-primary me-md-2 btn-dark text-warning" onClick={this.handlePrevClick} type="button">&larr; Previous</button>
              <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-primary btn-dark text-warning" onClick={this.handleNextClick} type="button">Next &rarr;</button>
            </div> */}
          </div>
          

          
          
          
            <div className="row mx-2">
              {this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 70) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "unknown"} publishedAt={element.publishedAt} />
                </div>;
              })}

            </div>
          
          </div>
        
        <div className="container">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end my-2">
            <button disabled={this.state.page <= 1} className="btn btn-primary me-md-2 btn-dark text-warning" onClick={this.handlePrevClick} type="button">&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-primary btn-dark text-warning" onClick={this.handleNextClick} type="button">Next &rarr;</button>
          </div>
        </div>

      </>
    )
  }
}

export default News