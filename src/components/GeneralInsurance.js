import React from 'react';

const axios = require('axios');
const cmsUrl = 'http://192.168.0.37:8080/fullerton/insurance/general-insurance?_format=json';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/json';

class GeneralInsurance extends React.Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         template: ''
    //     }
    // }

    // componentWillMount() {
    //     axios.get(cmsUrl, {
    //         headers: {
    //             'Access-Control-Allow-Origin' : '*'
    //         }
    //         })
    //         .then(response => {
    //             console.log(response.data);
                
    //             let htmlBody = response.data.body[0].value;
    //             this.setState({
    //                 template: htmlBody
    //             })
    //         })
    //         .catch(err => {
    //           console.log('ERROR::', err);
    //         })
    // }

    render() {
        // return <div dangerouslySetInnerHTML={{__html: this.state.template}} />
        return (
            <div className="container-fluid">
            <div className="row">
                <div className="InnerBanner GeneralInBanner">
                    <div className="container">
                        <div className="BannerTaxt">
                            <h1 className="visible-lg visible-md">The Right Insurance Coverage <br />for every situation.
Take Cover, <br />Take Charge!</h1>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="row breadcrumbWrp">
                 <div className="container">
                    <ol className="breadcrumb bgn" itemscope="" itemtype="http://schema.org/BreadcrumbList">
                        <li itemprop="itemListElement" itemscope="" temtype="http://schema.org/ListItem">
                            <a itemprop="item" href="https://www.fullertonindia.com/"><span itemprop="name">Home</span></a><meta itemprop="position" content="1" />
                        </li>
                        <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                            <a itemprop="item" href="https://www.fullertonindia.com/insurance/index.aspx"><span itemprop="name">Insurance</span></a><meta itemprop="position" content="2" />
                        </li>
                        <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                            <span itemprop="name">General Insurance</span><meta itemprop="position" content="3" />
                        </li>
                    </ol>
                </div>
            </div>
            <div className="row padd40 ">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h2 className="headdingLeft">General Insurance</h2>

                            <p>Fullerton India is a Corporate Agent with ICICI Lombard General Insurance Company Ltd. to solicit general insurance products. We offer a wide range of products of ICICI Lombard General Insurance Company to our customers. </p>

                        </div>


                    </div>
                </div>
            </div>

            <div className="row mrb30 traningListBox">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 mrb30">
                            <h2 className="headding">Main products offered by ICICI Lombard General Insurance</h2>


                            <h2 className="headdingLeft">Health Insurance </h2>
                            <div className="banntraning">
                                <img src="/images/Health-Insurance.jpg" className="img-responsive img" alt="" />
                                <br />
                                <br />
                            </div>
                            <p className="style4 col-xs-12 col-sm-3">Various sum insured options up to ` 10 Lakhs </p>
                            <p className="style4 col-xs-12 col-sm-3">Lifetime renewability</p>
                            <p className="style4 col-xs-12 col-sm-3">policy at any </p>
                            <p className="style4 col-xs-12 col-sm-3">No medical tests for people under 46 years of age</p>
                            <p className="style4 col-xs-12 col-sm-3">No sub-limits</p>
                            <p className="style4 col-xs-12 col-sm-3">Hospital Daily Cash and Convalescence Benefit - Optional Cover</p>
                            <p className="style4 col-xs-12 col-sm-3">Donor Expenses and Critical Illness Cover - Optional cover</p>
                            <p className="style4 col-xs-12 col-sm-3">Enjoy Value Added Services as per the plan opte</p>


                        </div>


                        <div className="col-xs-12 mrb30">
                            <div className="row PlLoanContaineBox">
                                <div className="col-xs-12 col-sm-4 ">
                                    <h2 className="headdingLeft">Motor Insurance  </h2>
                                    <img alt="" src="/images/Motor-Insurance.jpg" className="img-responsive" />

                                    <ul className="point">
                                        <li>Access to over 5,600+ network garages for cashless claims servicing across India</li>
                                        <li>Optional accident cover up to<span className="rs"></span> 2 Lakhs for co-passengers</li>
                                        <li>Avail doorstep surveyor facility for your car in case of a break-in insurance</li>
                                        <li>Avail Zero Depreciation Cover - As optional cover</li>
                                    </ul>



                                </div>

                                <div className="col-xs-12 col-sm-4">
                                    <h2 className="headdingLeft">Travel Insurance </h2>
                                    <img alt="" src="/images/Travel-Insurance.jpg" className="img-responsive" />

                                    <ul className="point">
                                        <li>Coverage for people up to 85 years of age without medical check-up as per plan opted</li>
                                        <li>Cashless hospitalization facility available worldwide</li>
                                        <li>Avail of quality health care through our tie up with United Health International (UHI is a leading US based health care provider)</li>
                                        <li>Extend your cover up to a maximum of 360 days (Original policy for 180 days and extension for additional 180 days)</li>
                                        <li>For the first time in India get cover for total loss of checked-in baggage and loss of handbag.</li>
                                    </ul>

                                </div>

                                <div className="col-xs-12 col-sm-4">
                                    <h2 className="headdingLeft">Home Insurance </h2>
                                    <img alt="" src="/images/Home-Insurance.jpg" className="img-responsive" />
                                    <ul className="point">
                                        <li>Comprehensive cover available, which covers both structure and / or contents of your home </li>
                                        <li>Coverage up to 10 years for only structure, 5 years for only contents and 5 years for structure &amp; contents, Only Structure cover can be offered upto 20 yrs. </li>
                                        <li>Cover against fire and allied perils &amp; burglary and optional cover for Terrorism. </li>
                                    </ul>
                                </div>

                            </div>

                        </div>


                        <div className="col-xs-12 fmdetails">
                            <p>For more details contact your nearest Fullerton India branch. </p>
                            <p>*Insurance is the subject matter of solicitation.</p>
                            <p>The advertisement contains only an indication of cover offered. For more details on risk factors, terms, conditions and exclusions, please read the sales brochure carefully before concluding a sale. ICICI Lombard General Insurance Company Limited, ICICI Lombard House, 414, Veer Savarkar Marg, Near Siddhi Vinayak Temple, Prabhadevi, Mumbai - 400025. Reg. No.115. Fax no - 022 61961323. CIN: L67200MH2000PLC129408</p>	
			<br /><p><strong>BEWARE OF SPURIOUS / FRAUD PHONE CALLS!</strong><br />IRDAI is not involved in activities like selling insurance policies, announcing bonus or investment of premiums. Public receiving such phone calls are requested to lodge a police complaint.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row padd40">
                <div className="container">
                    <h2 className="headdingLeft">Other Products</h2>
                    <div className="AboutInsuranceSlider hAn slider slick-initialized slick-slider">
                        <div className="slick-list draggable"><div className="slick-track" style={{"opacity": "1", "width": "1140px", "transform": "translate3d(0px, 0px, 0px)"}}><div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" style={{"width": "285px"}}>
                            <div className="ImageBox">
                                <img src="/images/life-insurance.png" className="img-responsive" alt="" />
                                <div className="textName">
                                    <div>
                                        Life
                                        <p>Insurance</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contantBox text-left">
                                <p className="he"><a href="https://www.fullertonindia.com/insurance/icici-life-insurance.aspx" className="BTNMore" tabindex="0">ICICI Prudential Life Insurance Company Limited</a></p>
                                <p className="he"><a href="https://www.fullertonindia.com/insurance/kotak-life-insurance.aspx" className="BTNMore" tabindex="0">Kotak Mahindra Life Insurance Company Ltd.</a></p>
                            </div>
                        </div><div className="item slick-slide slick-active" data-slick-index="1" aria-hidden="false" tabindex="0" style={{"width": "285px"}}>
                            <div className="ImageBox text-left">
                                <img src="/images/genral-insurance.png" className="img-responsive" alt="" />
                                <div className="textName">
                                    <div>
                                        General
                                    <p>Insurance</p>
                                    </div>
                                </div>

                            </div>
                            <div className="contantBox text-left">
                                <p className="he"><a href="https://www.fullertonindia.com/insurance/general-insurance.aspx" className="BTNMore" tabindex="0">ICICI Lombard General Insurance Company Limited</a></p>
                            </div>
                        </div><div className="item slick-slide slick-active" data-slick-index="2" aria-hidden="false" tabindex="0" style={{"width": "285px"}}>
                            <div className="ImageBox">
                                <img src="/images/group-insurance.png" className="img-responsive" alt="" />
                                <div className="textName">
                                    <div>
                                        Group
                                    <p>Insurance</p>
                                    </div>
                                </div>

                            </div>
                            <div className="contantBox text-left">
                                <p className="he"><a href="https://www.fullertonindia.com/insurance/group-insurance.aspx" className="BTNMore" tabindex="0">ICICI Lombard General Insurance Company Limited</a></p>
                                <p className="he"><a href="https://www.fullertonindia.com/insurance/hdfc-life-group-insurance.aspx" className="BTNMore" tabindex="0">HDFC Life Insurance Company Limited (Formerly HDFC Standard Life Insurance Company Limited)</a></p>
                                <p className="he"><a href="https://www.fullertonindia.com/insurance/kotak-life-group-insurance.aspx" className="BTNMore" tabindex="0">Kotak Life Insurance Company Ltd.</a></p>
                            </div>
                            <div className="clearfix"></div>
                        </div><div className="item slick-slide slick-active" data-slick-index="3" aria-hidden="false" tabindex="0" style={{"width": "285px"}}>
                            <div className="ImageBox">
                                <img alt="" src="/images/healt-insurance.png" className="img-responsive" />
                                <div className="textName">
                                    <div>
                                        Health
                                    <p>Insurance</p>
                                    </div>
                                </div>

                            </div>
                            <div className="contantBox text-left">
                                <p className="he"><a href="https://www.fullertonindia.com/insurance/health-insurance.aspx" className="BTNMore" tabindex="0">CignaTTK Health Insurance Company Limited</a></p>
                            </div>
                        </div></div></div>      
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default GeneralInsurance;