import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: "", // get quote through API
      author: "", // get author through API
      trimmedQuotes: []
    };
    this.getNewQuote = this.getNewQuote.bind(this);
    this.shareOnTwitter = this.shareOnTwitter.bind(this);
  }

  componentDidMount() {
    fetch("https://talaikis.com/api/quotes/random")
      .then(function(res) {
        return res.json();
      })
      .then(
        function(data) {
          this.setState({
            quotes: data.quote,
            author: data.author
          });
        }.bind(this)
      ).catch(function(err) {
        console.log(err)
      });
  }

  getNewQuote() {
    fetch("https://talaikis.com/api/quotes/random")
      .then(function(res) {
        return res.json();
      })
      .then(
        function(data) {
          this.setState({
            quotes: data.quote,
            author: data.author
          });
        }.bind(this)
      ).catch(function(err) {
        console.log(err);
      });
  }

  shareOnTwitter() {
    window.open(`https://twitter.com/intent/tweet?text="${this.state.quotes}" - ${this.state.author}`);
  }

  render() {
    const { quotes, author } = this.state;

    return (
      <div className="page-wrapper">
        <div id="quote-box">
          <div id="text">
            <blockquote>&ldquo;{quotes}&rdquo;</blockquote>
          </div>

          <cite id="author">- {author}</cite>

          <div className="social-sharing">
            <a href="twitter.com/intent/tweet" id="tweet-quote" onClick={this.shareOnTwitter}>
              <i className="fab fa-twitter-square" />
            </a>
            <a href="https://facebook.com" id="facebook-quote">
              <i className="fab fa-facebook" />
            </a>
          </div>

          <button id="new-quote" onClick={this.getNewQuote}>
            New quote
          </button>
        </div>

        <div className="credit">
          <a
            href="https://github.com/DownTheMatrix"
            target="_blank"
            rel="noopener noreferrer"
            id="credit-link"
          >
            By downthematrix
          </a>
        </div>
      </div>
    );
  }
}

export default App;
