import React from 'react';

const axios = require('axios');

const cmsUrl = process.env.REACT_APP_CMS_URL || 'http://192.168.0.37:8080';
const path =  `${cmsUrl}/fullerton/insurance/life-insurance/?_format=json`;

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/json';

class LifeInsurance extends React.Component {

    constructor() {
        super();
        this.state = {
            template: ''
        }
    }

    componentWillMount() {
        axios.get(path, {
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
        return <div dangerouslySetInnerHTML={{__html: this.state.template}} />
    }
}
            
export default LifeInsurance;