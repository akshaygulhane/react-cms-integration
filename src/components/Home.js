import React from 'react';

const axios = require('axios');

const cmsUrl = process.env.REACT_APP_CMS_URL || 'http://192.168.0.37:8080';
const path = `${cmsUrl}/fullerton/?_format=json`;

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const loading_styles = {
    'position' : 'absolute',
    'left' : '50%',
    'top' : '50%'
}

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            template: ''
        }
    }

    componentWillMount() {
        this.setState({ loading: true }, () => {
            axios.get(path, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            })
                .then(response => this.setState({
                    loading: false,
                    template: response.data.body[0].value,
                }));
        });
    }

    render() {
        // const { template, loading } = this.state;
        return (
            <div className='template'>
                {/* <LoadingSpinner /> */}
            { this.state.loading? <LoadingSpinner /> : <div  dangerouslySetInnerHTML={{ __html: this.state.template }} /> }
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