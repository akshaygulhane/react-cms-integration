import React from 'react';
// require('dotenv').config()
import $ from 'jquery';

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
            loading: true,
            template: ''
        }
    }

    componentWillMount() {
        $.getScript('/js/jquery.min.js', function () {
            $.getScript('/js/slick.min.js', function () {
                $.getScript('/js/custom-script.js');
            });
            $.getScript('/js/common.js');
            $.getScript('/js/matchHeight.js');
        });
       
       
        this.setState({ loading: true }, () => {
            axios.get(path, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
                })
                .then(response => this.setState({
                    loading: false,
                    template: response.data.body[0].value,
                }, function () {
                    console.log('cwm');
                   
                }));
        });
    }

    render() {
        return (
            <div className='template container-fluid'>
                {this.state.loading ? <LoadingSpinner /> : <div dangerouslySetInnerHTML={{ __html: this.state.template }} />}
            </div>
        )
    }
}
      
const loading_styles = {
    'position': 'absolute',
    'left': '50%',
    'top': '50%'
}

const LoadingSpinner = () => (
    <div style={loading_styles}>
        <i className="fa fa-spinner fa-spin" />
    </div>
);

export default PersonalLoan;