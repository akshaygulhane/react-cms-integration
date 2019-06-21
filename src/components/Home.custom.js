import React from 'react';

const axios = require('axios');
const cmsUrl = 'http://192.168.0.37:8080/fullerton/personal-loan?_format=json';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Content-Type'] = 'application/hal+json';

class Home extends React.Component {

    constructor() {
        super();
        document.title = 'Fullerton India – Personal Loans, Business Loans & Loan Against Property'
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get(cmsUrl)
            // .then(res => JSON.parse(res))
            .then(response => {
                console.log(response);
                
                let posts = response.data.posts;
                this.setState({
                    posts
                })
            })
            .catch(err => {
              console.log('ERROR::', err);
            })
    }

    render() {
        // let posts_data = this.state.posts.map(post => {
        //     return <div dangerouslySetInnerHTML={{__html: post.html}} />
        //   })
      
          return (  
            <div>
             <div className="row indexBanner">
                <div className="BannerSlider slider">
                    <div className="Banner1">
                        <div className="container">
                            <div className="BannerText">
                                <h2>One-stop-destination for
                                    <br />
                                    all your
                                   
                                    <span>loan</span>  related queries</h2>
                                
                                <a href="https://online.fullertonindia.com/?_ga=2.232708447.1158072618.1551269123-316474247.1526981491&utm_source=website&utm_medium=banner&utm_campaign=csp#/signin" class="btn btn-default playBtn" target="blank">Click Here</a>
                                 </div>
                            
                        </div>
                    </div>
                    <div className="Banner2">
                        <div className="container">
                            <div className="BannerText">
                                <h2>Fuel your dreams with Fullerton India’s<br />
                                    <span>Business Loan</span></h2>
                                
                                <a href="https://www.fullertonindia.com/business-loan/self-employed-business-loan/index.aspx?utm_source=website&utm_medium=banner2&utm_campaign=businessloan" class="btn btn-default playBtn" target="blank">Know More</a>
                                </div>
                        </div>
                    </div>

                    
                    
                </div>
                <div className="ExistingLinkBox text-center">
                    <h2>Existing Customers</h2>
                    <div className="BTNBox"><a href="https://online.fullertonindia.com/?_ga=2.192446825.252541657.1517811752-401131723.1511959091" class="btn btn-default playBtn whiteBg">Login to Your Account</a> <a href="https://www.fullertonindia.com/pay-online.aspx" class="btn btn-default playBtn whiteBg">Pay Your EMI/Dues</a> <a href="https://cir.fullertonindia.com/?_ga=2.191594729.252541657.1517811752-401131723.1511959091" target="_blank" class="btn btn-default playBtn whiteBg">Get Your Credit Report</a> </div>
                </div>
            </div>

                    <div className="row LoanTypeWapper">
                <div className="container">
                    <div className="LoanTypeSlider slider slick-initialized slick-slider"><button className="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true">Previous</button>
                        <div className="slick-list draggable"><div className="slick-track" style= {{"opacity": "1", "width": "1516px", "transform": "translate3d(0px, 0px, 0px)" }}><div className="Border-right slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabIndex="0" style={{'width': '379px'}}>
                            <div className="BoxCount">
                                <h2>Personal loan for travel</h2>
                                <p className="t1">Take off to your favorite holiday destination</p>
                                <p className="t2">with our personal loans at</p>
                                <p className="amount">Attractive Interest rates</p>
                                <div className="BtnMore"><a href="https://www.fullertonindia.com/personal-loan/salaried-personal-loan-for-holiday/index.aspx?utm_source=website&amp;utm_medium=SB1&amp;utm_campaign=PLforHoliday" className="btn btn-default playBtn whiteBg" tabIndex="0">More...</a> </div>
                                <div className="Image">
                                    <img src="/images/IconTravel.png" className="img-responsive" />
                                </div>
                            </div>
                        </div><div className="Border-right slick-slide slick-active" data-slick-index="1" aria-hidden="false" tabIndex="0" style={{'width': '379px'}}>
                            <div className="BoxCount">
                                <h2>Home Loan</h2>
                                <p className="t1">Own a home is no longer a dream </p>
                                <p className="t2">Get home loan with </p>
                                <p className="amount">Easy Repayment</p>
                                <div className="BtnMore"><a href="https://www.grihashakti.com/loans/home-loan/index.aspx?utm_source=web&amp;utm_medium=SB2&amp;utm_campaign=homeloan" className="btn btn-default playBtn whiteBg" tabIndex="0">More...</a> </div>
                                <div className="Image">
                                    <img src="/images/Img-personalLoan.png" className="img-responsive" />
                                </div>
                            </div>
                        </div><div className="Border-right slick-slide slick-active" data-slick-index="2" aria-hidden="false" tabIndex="0" style={{'width': '379px'}}>
                            <div className="BoxCount">
                                <h2>Personal loan for wedding</h2>
                                <p className="t1">Make every moment of your special day</p>
                                <p className="t2">perfect with our personal loans With </p>
                                <p className="amount">Quick Disbursals</p>
                                <div className="BtnMore"><a href="https://www.fullertonindia.com/personal-loan/salaried-personal-loan-for-wedding/index.aspx?utm_source=web&amp;utm_medium=SB3&amp;utm_campaign=PLforWedding" className="btn btn-default playBtn whiteBg" tabIndex="0">More...</a> </div>
                                <div className="Image">
                                    <img src="/images/ICON-wedding.png" className="img-responsive" />
                                </div>
                            </div>
                        </div><div className="Border-right slick-slide" data-slick-index="3" aria-hidden="true" tabIndex="-1" style={{'width': '379px'}}>
                            <div className="BoxCount">
                                <h2>e-Auction Sale</h2>
                                <p className="t1">Public Notice for Sale</p>
                                <p className="t2">To participate in auction</p>
                                <p className="amount1"><a href="https://fullertonindia.auctiontiger.net/" target="blank" className="pull-left" tabIndex="-1">click here</a></p>
                                <div className="BtnMore"><a href="/pdf/e-Auction-Publication-of-Sale-Notice-Mohd-Mustafa.pdf" target="blank" className="btn btn-default playBtn whiteBg" tabIndex="-1">View Notice</a> </div>
                                <div className="clearfix"></div>
                                <div className="Image">
                                    <img src="/images/e_auction.png" className="img-responsive" />
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    <button className="slick-next slick-arrow" aria-label="Next" type="button" aria-disabled="false">Next</button></div>
                </div>
            </div>
            <div className="row bg2 padd40 OurproductWapper">
                <div className="container text-center">
                    <h2 className="headding">Our Products</h2>
                    <a className="btn btn-default playBtn whiteBg ViewAll">View All</a>
                    <div className="ProductWapper">
                        <a href="https://www.grihashakti.com" target="blank" className="BTNhomeLoan">
                            <div className="img"></div>
                            Home Loan </a><a href="https://www.fullertonindia.com/personal-loan.aspx" className="BTNpersonalLoan">
                                <div className="img"></div>
                                Personal Loan </a><a href="https://www.fullertonindia.com/insurance/index.aspx" className="BTNInsurance">
                                    <div className="img"></div>
                                    Insurance </a><a href="https://www.fullertonindia.com/services/index.aspx" className="BTNServices">
                                        <div className="img"></div>
                                        Services </a>
                    </div>
                </div>

                <div className="AllProductWapper ">
                    <div className="Dropdown select-Box ">
                        <span className="select-span"></span>
                        <div className="selectWrap"><div className="selectSpan">Salaried</div><select className="select">
                            <option value="Salaried1">Salaried</option>
                            <option value="Selfemployed1">Self-employed </option>
                            <option value="Businesses1">Businesses</option>
                        </select></div>
                    </div>
                    <div className="container">
                        <div className="closeBtn">
                            <img src="/images/closeBTN.png" className="img-responsive" />
                        </div>
                        <ul className="Salaried1 active">
                            <li><a href="https://www.fullertonindia.com/personal-loan.aspx">
                                <div className="icon PersonalLoan"></div>
                                <p>Personal Loan</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/personal-loan/personal-loan-for-women.aspx">
                                <div className="icon HLWoman"></div>
                                <p>
                                    Personal Loan
                                   
                                     <br />
                                    for Women
                               
                                </p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/personal-loan/personal-loan-for-elite.aspx">
                                <div className="icon PLE"></div>
                                <p>
                                    Personal Loan
                                   
                                     <br />
                                    Elite
                               
                                </p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/personal-loan/personal-loan-for-wedding.aspx">
                                <div className="icon PLWEDD"></div>
                                <p>
                                    Personal Loan
                                   
                                     <br />
                                    for Wedding
                               
                                </p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/personal-loan/personal-loan-for-holiday.aspx">
                                <div className="icon PLHo"></div>
                                <p>
                                    Personal Loan <br />
                                    for Holiday
                               
                                </p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/personal-loan/personal-loan-for-doctors.aspx">
                                <div className="icon PLDr"></div>
                                <p>
                                    Personal Loan
                                   
                                     <br />
                                    for Doctors
                               
                                </p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                           
                            <li><a href="https://www.fullertonindia.com/personal-loan/personal-loan-for-home-improvement.aspx">
                                <div className="icon PLHI"></div>
                                <p>
                                    Personal Loan
                                   
                                     <br />
                                    for Home Improvement
                               
                                </p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/personal-loan/personal-loan-for-medical-emergency.aspx">
                                <div className="icon PLEmar"></div>
                                <p>
                                    Personal Loan
                                   
                                     <br />
                                    for Emergency
                               
                                </p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>

                            <li><a href="https://www.grihashakti.com/loans/home-loan/index.aspx" target="_blank">
                                <div className="icon homeloan"></div>
                                <p>Home Loan</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>

                            <li><a href="https://www.fullertonindia.com/loan-against-property/salaried-loan-against-property/index.aspx">
                                <div className="icon LAProperty"></div>
                                <p>Loan Against Property</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/loan-against-property/salaried-loan-against-property/index.aspx">
                                <div className="icon LAPropertyDr"></div>
                                <p>
                                    Loan Against Property 
                                   
                                     <br />
                                    for Doctors
                               
                                </p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/loan-against-property/salaried-loan-against-property/index.aspx">
                                <div className="icon HLWoman"></div>
                                <p>
                                    Loan Against Property 
                                   
                                     <br />
                                    for Engineers
                               
                                </p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/loan-against-property/salaried-loan-against-property/index.aspx">
                                <div className="icon LAPropertyAcco"></div>
                                <p>
                                    Loan Against Property 
                                   
                                     <br />
                                    for Chartered Accountants
                               
                                </p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/insurance/index.aspx">
                                <div className="icon Insurance"></div>
                                <p>
                                    Insurance
                               
                                </p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/insurance/salaried-life-insurance/index.aspx">
                                <div className="icon LTec"></div>
                                <p>
                                    Life Insurance
                               
                                </p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/insurance/general-insurance.aspx">
                                <div className="icon GENI"></div>
                                <p>General Insurance</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/insurance/group-insurance.aspx">
                                <div className="icon GroupI"></div>
                                <p>Group Insurance</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/insurance/health-insurance.aspx">
                                <div className="icon HI"></div>
                                <p>Health Insurance</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                          
                            <li><a href="https://www.fullertonindia.com/value-added-services/iho-services.aspx">
                                <div className="icon IHOS"></div>
                                <p>IHO Services</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/hypothecation-loan.aspx">
                                <div className="icon Hypothecation"></div>
                                <p>Hypothecation Loan</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/merchandise-loan.aspx">
                                <div className="icon ML"></div>
                                <p>Merchandise Loan (ML)</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/consumer-durable-loans.aspx">
                                <div className="icon CDL"></div>
                                <p>Consumer Durable Loans (CDL)</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/samriddhi-loan.aspx">
                                <div className="icon SamrudhiLoan"></div>
                                <p>Samriddhi Loan</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            
                            <li><a href="https://www.fullertonindia.com/garima-loan.aspx">
                                <div className="icon Shochalay"></div>
                                <p>Garima Loan</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/two-wheeler-loan.aspx">
                                <div className="icon TWLoan"></div>
                                <p>Two Wheeler Loan</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li className="BtnOn"><a href="javascript:void();" className="btn btn-default playBtn BrowBg showless">SHOW LESS </a></li>
                        </ul>
                        <ul className="Selfemployed1">

                            <li><a href="https://www.fullertonindia.com/personal-loan.aspx">
                                <div className="icon PersonalLoan"></div>
                                <p>Personal Loan</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/personal-loan/personal-loan-for-women.aspx">
                                <div className="icon HLWoman"></div>
                                <p>Personal Loan for Women</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/personal-loan/personal-loan-for-doctors.aspx">
                                <div className="icon PLDr"></div>
                                <p>Personal Loan for Doctors</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>

                            <li><a href="https://www.grihashakti.com/loans/home-loan/index.aspx" target="_blank">
                                <div className="icon homeloan"></div>
                                <p>Home Loan</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.grihashakti.com/loans/grihalaxmi-loan.aspx" target="_blank">
                                <div className="icon HLWoman"></div>
                                <p>Home Loan for Women</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/business-loan/self-employed-business-loan/index.aspx">
                                <div className="icon BL"></div>
                                <p>Business Loan</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/business-loan/self-employed-business-loan-for-women/index.aspx">
                                <div className="icon BLW"></div>
                                <p>Business Loan for Women</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/business-loan/self-employed-business-loan-for-doctors/index.aspx">
                                <div className="icon BLDr"></div>
                                <p>Business Loan for Doctors</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/business-loan/self-employed-business-loan-for-chartered-accountants/index.aspx">
                                <div className="icon BLAcon"></div>
                                <p>Business Loan for Chartered Accountants</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/loan-against-property/salaried-loan-against-property/index.aspx">
                                <div className="icon LAPropertyAcco"></div>
                                <p>Loan Against Property</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/loan-against-property/salaried-loan-against-property/index.aspx">
                                <div className="icon LAPropertyDr"></div>
                                <p>Loan Against Property for Doctors</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/loan-against-property/salaried-loan-against-property/index.aspx">
                                <div className="icon LAPropertyEngg"></div>
                                <p>Loan Against Property for Engineers</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/loan-against-property/salaried-loan-against-property/index.aspx">
                                <div className="icon LAPropertyAcco"></div>
                                <p>Loan Against Property for Chartered Accountants</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/loan-against-property/salaried-loan-against-property/index.aspx">
                                <div className="icon LAPropertyAcco"></div>
                                <p>Loan Against Property for Traders</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/loan-against-property/salaried-loan-against-property/index.aspx">
                                <div className="icon LAPropertyAcco"></div>
                                <p>Loan Against Property for Manufacturers</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/insurance/index.aspx">
                                <div className="icon  LTec"></div>
                                <p>Insurance</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/insurance/life-insurance.aspx">
                                <div className="icon  LTec"></div>
                                <p>Life Insurance  </p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/insurance/genral-insurance.aspx">
                                <div className="icon GENI"></div>
                                <p>General Insurance </p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/insurance/group-insurance.aspx">
                                <div className="icon GroupI"></div>
                                <p>Group Insurance </p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/insurance/health-insurance.aspx">
                                <div className="icon HI"></div>
                                <p>Health Insurance </p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>

                            <li><a href="https://www.fullertonindia.com/commercial-vehicle-loan/self-employed-commercial-vehicle-loan.aspx">
                                <div className="icon CommVehicle"></div>
                                <p>Commercial Vehicle</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                           
                            <li><a href="https://www.fullertonindia.com/value-added-services/iho-services.aspx">
                                <div className="icon IHOS"></div>
                                <p>IHO Services</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/solidarity-group-loan.aspx">
                                <div className="icon SGL"></div>
                                <p>Solidarity Group Loan (SGL)</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            
                            <li className="BtnOn"><a href="javascript:void();" className="btn btn-default playBtn BrowBg showless">SHOW LESS </a></li>

                        </ul>
                        <ul className="Businesses1">
                            <li className="bold"><a href="https://www.fullertonindia.com/personal-loan.aspx">
                                <div className="icon PersonalLoan"></div>
                                <p>Personal Loan</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/personal-loan/personal-loan-for-doctors.aspx">
                                <div className="icon PLDr"></div>
                                <p>Personal Loan for Doctors</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li className="bold"><a href="https://www.fullertonindia.com/business-loan/index.aspx">
                                <div className="icon BL"></div>
                                <p>Business / SME Loan</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/business-loan/business-loan-for-women/index.aspx">
                                <div className="icon BLW"></div>
                                <p>Business Loan for Women</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/business-loan/business-loan-for-Traders/index.aspx">
                                <div className="icon BLTRa"></div>
                                <p>Business Loan for Traders</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/business-loan/business-loan-for-manufacturers/index.aspx">
                                <div className="icon BLMan"></div>
                                <p>Business Loan for Manufacturers</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/business-loan/business-loan-for-doctors/index.aspx">
                                <div className="icon BLDr"></div>
                                <p>Business Loan for Doctors</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.grihashakti.com/loans/home-loan/index.aspx" target="_blank">
                                <div className="icon homeloan"></div>
                                <p>Home Loan</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.grihashakti.com/loans/grihalaxmi-loan.aspx" target="_blank">
                                <div className="icon HLWoman"></div>
                                <p>Home Loan for Women</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.grihashakti.com/loans/home-loan/index.aspx" target="_blank">
                                <div className="icon PLDr"></div>
                                <p>Home Loan for Doctors</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>

                            <li><a href="https://www.fullertonindia.com/loan-against-property/salaried-loan-against-property/index.aspx">
                                <div className="icon LAProperty"></div>
                                <p>Loan Against Property</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/loan-against-property/salaried-loan-against-property/index.aspx">
                                <div className="icon LAPropertyDr"></div>
                                <p>Loan Against Property for Doctors</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/insurance/index.aspx">
                                <div className="icon LTec"></div>
                                <p>Insurance</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/insurance/life-insurance.aspx">
                                <div className="icon LTec"></div>
                                <p>Life Insurance</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/insurance/genral-insurance.aspx">
                                <div className="icon GENI"></div>
                                <p>General Insurance</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/insurance/group-insurance.aspx">
                                <div className="icon GroupI"></div>
                                <p>Group Insurance</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/insurance/health-insurance.aspx">
                                <div className="icon HI"></div>
                                <p>Health Insurance</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li><a href="https://www.fullertonindia.com/commercial-vehicle-loan/sem-commercial-vehicle-loan.aspx">
                                <div className="icon CommVehicle"></div>
                                <p>Commercial Vehicle</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            
                            <li><a href="https://www.fullertonindia.com/value-added-services/iho-services.aspx">
                                <div className="icon IHOS"></div>
                                <p>IHO Services</p>
                            </a>
                                <div className="ShedoBox"></div>
                            </li>
                            <li className="BtnOn"><a href="javascript:void();" className="btn btn-default playBtn BrowBg showless">SHOW LESS </a></li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="row  padd40 ">
                <div className="container text-center NewsWapper">
                    <h2 className="headding">News</h2>
                    <a href="https://www.fullertonindia.com/media/media-coverages.aspx" className="btn btn-default playBtn whiteBg">View All</a>
                    <div className="row text-left">
                        <div className="col-xs-12 col-sm-6 col-lg-6">
                            <div className="DateBox">
                                22
                           
                                <p>Jun2018</p>
                            </div>
                            <div className="ContentNews">
                                <p className="t1">Fullerton India’s digital business has grown 10x in the last one year.</p>
                                <a href="http://computer.expressbpd.com/news/fullerton-indias-digital-business-has-grown-10x-in-the-last-one-year/25133/" target="blank" className="BTNMore">Read More...</a>
                            </div>
                        </div>
                        <div className="clearfix visible-xs "></div>
                        <hr className=" visible-xs " />
                        <div className="clearfix visible-xs "></div>
                        <div className="col-xs-12 col-sm-6 col-lg-6">
                            <div className="DateBox">
                                18
                             
                                <p>May2018</p>
                            </div>
                            <div className="ContentNews">
                                <p className="t1">CRISIL assigns highest rating to Fullerton India.</p>
                                <a href="https://in.reuters.com/article/crisil-ratings/crisil-ratings-for-indian-debt-instruments-may-16-idINL3N1SN2PF" target="blank" className="BTNMore">Read More...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
          );
    }
}

export default Home;