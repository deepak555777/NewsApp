import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner.js";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
  static defaultProps = {
    country: "IN",
    pagesize: 8,
    category: "general",
    apiKey:"323911f8a62048f1bfdf8690878689eb"
  };

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    console.log("Hello i am constructor of News Component.");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
  }

  async updateNews() {
    this.setState({ loading: true });
    let apiurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&
    &pagesize=${this.props.pagesize}`;
    let data = await fetch(apiurl);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData=async()=>{
    let apiurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=323911f8a62048f1bfdf8690878689eb&page=${this.state.page+1}&
    &pagesize=${this.props.pagesize}`;
    this.setState({page: this.state.page +1})
    let data = await fetch(apiurl);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
    });
  }

  render() {
    return (
      <div className="container pt-5">
        <h1 className="text-center py-5 upper-case">{`NewsMonkey - Top ${this.props.category} Headlines Of ${this.props.country}`}</h1>
        {this.state.loading && <Spinner/>}
        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
      > 
          <div className="container">
               
          <div className="row">
              {this.state.articles.map((element) => {
                  return <div className="col-md-4">
                      <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                  </div>
              })}
          </div>
          </div> 
      </InfiniteScroll>
      </div>
    );
  }
}
