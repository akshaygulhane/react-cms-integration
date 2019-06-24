import React from 'react';
import $ from 'jquery';

const axios = require('axios');

const cmsUrl = process.env.REACT_APP_CMS_URL || 'http://13.233.221.79';
const path = `${cmsUrl}/?_format=json`;

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const loading_styles = {
    'position': 'absolute',
    'left': '50%',
    'top': '50%'
}

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            template: ''
        }
    }

    loadScript = function (src) {
        var tag = document.createElement('script');
        tag.async = false;
        tag.src = src;
        document.getElementsByTagName('body').appendChild(tag);
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


    componentDidMount() {
        console.log('cdm');
    }

    render() {
        // const { template, loading } = this.state;
        return (
            <div className='container-fluid'>
                {/* <LoadingSpinner /> */}
                {this.state.loading ? <LoadingSpinner /> : <div dangerouslySetInnerHTML={{ __html: this.state.template }} />}
            </div>
        )
    }
}

const LoadingSpinner = () => (
    <div style={loading_styles}>
        <i className="fa fa-spinner fa-spin" />
    </div>
);

export default Home;