import React from 'react';

const axios = require('axios');
const cmsUrl = 'http://192.168.0.37:8080/fullerton/personal-loan?_format=hal_json';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get(cmsUrl)
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
            return <div dangerouslySetInnerHTML={{__html: post.html}} />
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

export default Home;