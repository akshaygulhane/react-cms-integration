import React from 'react';

const axios = require('axios');
const cmsUrl = 'http://192.168.0.37:8080/fullerton/personal-loan/personal-loan-for-wedding?_format=json';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/json';

class PersonalLoan extends React.Component {

    constructor() {
        super();
        this.state = {
            template: ''
        }
    }

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
            <div>
               <div className="row ">
                <div className="InnerBanner salariedPL-weddingBanner whiteBanner">
                    <div className="container">
                        <div className="BannerTaxt">
                            <span className="h1 visible-lg visible-md" style={{"text-align":"center"}}>Personal Loan for Wedding</span>
                            <p className="visible-lg visible-md" style={{"text-align":"center"}}>Make every moment of<br />
                              your D Day perfect <br /><span>Loans at attractive interest rates</span></p>
                        </div>
                        <div className="FormBox">
                            <ul>
                                <li className="TABHead active"><a href="#">Instant Approval</a> </li>
                                <li className="TABHead dis">|</li>
                                <li className="TABHead"><a href="#">Existing Customers</a></li>
                            </ul>
                            <div className="clearfix"></div>
                            <div className="clearfix"></div>
                            <div className="contant">
                                <div className="row TABCont active">
                                    <div className="BtnWapper">
                                        <div className="BTNBox"><a href="https://instantloan.fullertonindia.com/personal-loan?utm_source=FICCL_Website&amp;utm_medium=Website_Organic&amp;utm_campaign=website_salaried_PLWedding_topban&amp;se=FICCL_Website&amp;cp=Website_Organic&amp;ag=website_salaried_PLWedding_topban" target="_blank" className="btn btn-default playBtn">Apply Online Now</a> </div>
                                    </div>
                                </div>
                                <div className="TABCont dis"></div>
                                <div className="row text-center TABCont">
                                    <div className="BtnWapper">
                                        <div className="BTNBox"><a href="https://online.fullertonindia.com/?_ga=2.192446825.252541657.1517811752-401131723.1511959091" className="btn btn-default playBtn whiteBg">Login to Your Account</a> 
                                        <a href="https://www.fullertonindia.com/pay-online.aspx" className="btn btn-default playBtn whiteBg">Pay Your EMI/Dues</a> 
                                        <a href="https://cir.fullertonindia.com/?_ga=2.191594729.252541657.1517811752-401131723.1511959091" target="_blank" className="btn btn-default playBtn whiteBg">Get Your Credit Report</a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tandcapply">T&amp;C Apply*</div>
                    </div>
                </div>
            </div>
            <div className="row breadcrumbWrp">
                <div className="container">
                    <ol className="breadcrumb bgn" itemscope="" itemtype="http://schema.org/BreadcrumbList">
                         <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                            <a itemprop="item" href="https://www.fullertonindia.com/"><span itemprop="name">Home</span></a><meta itemprop="position" content="1" />
                        </li>
                        <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                            <a itemprop="item" href="/personal-loan.aspx"><span itemprop="name">Personal Loan</span></a><meta itemprop="position" content="2" />
                        </li>
                        <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                            <span itemprop="name">Personal Loan For Wedding</span><meta itemprop="position" content="3" />
                        </li>
                    </ol>
                </div>
            </div>
            <div className="row padd40">
                <div className="container">
                    <h1 className="headdingLeft">Personal Loan for Wedding</h1>
                    <p>
                        Wedding is an auspicious and significant occasion in our life and we love to make it extra special by making it a grand affair. Be it an elaborate an exotic venue, lavish variety of food, designer wedding attire, candid photography, the list can go on. All these beautiful moments
require an adequate amount of funds. Get the finance you need to make your special day even better with our Personal Loan for Wedding.
                    </p>
                </div>
            </div>
            <div className="row padd40">
                <div className="container">
                    <h2 className="headding">Features &amp; Benefits </h2>
                    <div className="row">
                        <div className="col-sm-12 FeaturesBenefitsSlider slider slick-initialized slick-slider"><button className="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true" >Previous</button>
                            <div className="slick-list draggable"><div className="slick-track" style={{"opacity": "1", "width": "1368px", "transform": "translate3d(0px, 0px, 0px);"}}><div className="Textwapper slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{'width':'228px;'}} tabindex="0">
                                <div className="IconBox">
                                    <img alt="" src="/images/Icon-Instantonlineapproval.png" className="img-responsive" />
                                </div>
                                <p className="t1">Instant online approval</p>
                                <p className="t2">Our online loan process is very simple, just check your loan eligibility, fill an online form, upload your documents and get approval online</p>
                            </div><div className="Textwapper slick-slide slick-active" data-slick-index="1" aria-hidden="false" style={{'width':'228px;'}} tabindex="0">
                                <div className="IconBox">
                                    <img alt="" src="/images/Icon-Onlineaccountaccess.png" className="img-responsive" />
                                </div>
                                <p className="t1">Online account access</p>
                                <p className="t2">From loan application to loan approval, our processes are online. Get all the information like payment schedule , repayment track and more on your finger tips.  </p>
                            </div><div className="Textwapper slick-slide slick-active" data-slick-index="2" aria-hidden="false" style={{'width':'228px;'}} tabindex="0">
                                <div className="IconBox">
                                    <img alt="" src="/images/IconMoneydisbursed-png.png" className="img-responsive" />
                                </div>
                                <p className="t1">Money disbursed in 72 hours </p>
                                <p className="t2">Wedding expenses need instant cash hence, we make sure that once your loan is approved you get the money in your bank account within 72 hours. </p>
                            </div><div className="Textwapper slick-slide slick-active" data-slick-index="3" aria-hidden="false" style={{'width':'228px;'}} tabindex="0">
                                <div className="IconBox">
                                    <img alt="" src="/images/IconAffordableinterestrates.png" className="img-responsive" />
                                </div>
                                <p className="t1">Affordable interest rates</p>
                                <p className="t2">Attractive interest rates starts at as low as 11.99% onwards.*  </p>
                            </div><div className="Textwapper slick-slide slick-active" data-slick-index="4" aria-hidden="false" style={{'width':'228px;'}} tabindex="0">
                                <div className="IconBox">
                                    <img alt="" src="/images/IconLoanupto.png" className="img-responsive" />
                                </div>
                                <p className="t1">Loan up to <span className="rx-rs">`</span>25 lac</p>
                                <p className="t2">Say ‘I Do’ in a lavish style. With Fullerton India’s Personal Loan for Wedding get loan up to <span className="rs"></span>25 lakhs and repay it conveniently by opting for tenures ranging from 24 to 60 months.</p>
                            </div><div className="Textwapper slick-slide" data-slick-index="5" aria-hidden="true" style={{'width':'228px;'}} tabindex="-1">
                                <div className="IconBox">
                                    <img alt="" src="/images/IconNoCollaterals.png" className="img-responsive" />
                                </div>
                                <p className="t1">No collateral required</p>
                                <p className="t2">Say I do in a lavish style. Get loan up to <span className="rs"></span>25 lakhs with a flexible repaying tenure. </p>
                            </div></div></div>
                            
                            
                            
                            
                            
                        <button className="slick-next slick-arrow" aria-label="Next" type="button" aria-disabled="false">Next</button></div>
                    </div>
                </div>
            </div>
            <div className="row padd40 bg2">
                <div className="container">
                    <div className="EligibilityBox text-center ">
                        <p>Personal Loan for Wedding</p>
                        <p className="t2">Submit your application in minutes!</p>
                        <a href="https://instantloan.fullertonindia.com/personal-loan?utm_source=FICCL_Website&amp;utm_medium=Website_Organic&amp;utm_campaign=website_salaried_PLWedding_middleban&amp;se=FICCL_Website&amp;cp=Website_Organic&amp;ag=website_salaried_PLWedding_middleban" className="btn btn-default playBtn" tabindex="0" target="_blank">Apply Online Now</a>
                    </div>
                </div>
            </div> 
            </div>
        )
    }
}

export default PersonalLoan;