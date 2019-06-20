import React from 'react';
import './App.css';

const axios = require('axios');

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:2369/ghost/api/v2/content/posts?key=c55ee6957c081a5a9b99e57c65')
      .then(response => {
        console.log(response);
        let posts = response.data.posts;
        this.setState({
          posts
        })
      })
  }
  render() {
    let posts_data = this.state.posts.map(post => {
      return <div dangerouslySetInnerHTML={__html: post.html} />
    })

    return (  
      <div className="App">
        <header className="App-header">
          <html>{posts_data}</html>
        </header>
      </div>
    );
  }
}

export default App;
