import React, { Component } from "react";
import "./App.css";

const quotes = [1, 2, 3, 4, 5];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomIndex: "",  // select a quote randomnly
      quotes: "",  // get quote through API
      author: ""   // get author through API
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    setTimeout(() => {
      this.setState({
        randomIndex: Math.floor(Math.random() * quotes.length)
      });
    }, 500);
  }

  render() {
    const result = quotes[this.state.randomIndex];

    return (
      <div className="page-wrapper">
        <div id="quote-box">
          <div id="text">&ldquo;{result}&rdquo;</div>

          <p id="author">- Author</p>

          <div className="social-sharing">
            <a href="twitter.com/intent/tweet" id="tweet-quote">
              <i className="fab fa-twitter-square" />
            </a>
            <a href="https://facebook.com" id="facebook-quote">
              <i className="fab fa-facebook" />
            </a>
          </div>

          <button id="new-quote" onClick={this.getQuote}>
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
            downthematrix
          </a>
        </div>
      </div>
    );
  }
}

export default App;
