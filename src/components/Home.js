import React from 'react';

const axios = require('axios');
const cmsUrl = 'http://192.168.0.37:8080/fullerton/?_format=json';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/json';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            template: ''
        }
    }

    componentDidMount() {
        axios.get(cmsUrl, {
            headers: {
                'Access-Control-Allow-Origin' : '*'
            }
            })
            .then(response => {
                console.log(response.data);
                
                let htmlBody = response.data.body[0].value;
                this.setState({
                    template: htmlBody
                })
            })
            .catch(err => {
              console.log('ERROR::', err);
            })
    }

    render() {
        // const template = <h1>Hello to Home!</h1>

        return <div dangerouslySetInnerHTML={{__html: this.state.template}} />
    }
}

export default Home;