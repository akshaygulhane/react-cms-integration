import React from 'react';
// require('dotenv').config()

const axios = require('axios');
const cmsUrl = process.env.REACT_APP_CMS_URL || 'http://13.233.221.79';
const path = `${cmsUrl}/personal-loan/personal-loan-for-wedding/?_format=json`

// console.log('process.env.REACT_APP_CMS_URL : ', process.env.REACT_APP_CMS_URL);

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/json';

class PersonalLoan extends React.Component {

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
        return <div className='container-fluid' dangerouslySetInnerHTML={{__html: this.state.template}} />
    }
}

export default PersonalLoan;