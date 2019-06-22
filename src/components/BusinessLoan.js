import React from 'react';

const axios = require('axios');
const cmsUrl = 'http://192.168.0.37:8080/fullerton/?_format=json';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/json';


class BusinessLoan extends React.Component {

    constructor() {
        super();
        this.state = {
            template: ''
        }
    }

    componentWillMount() {
        axios.get(cmsUrl, {
            headers: {
                'Access-Control-Allow-Origin': '*'
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
        // return <div dangerouslySetInnerHTML={{__html: this.state.template}} />
        return (
            <div className="container-fluid">
                <div className="row ">
                    <div className="InnerBanner Self-Business-LP">
                        <div className="container">
                            <div className="BannerTaxt">
                                <h1 className="visible-lg visible-md">Creating business success<br /> stories
                                with the right <br />financial assistance!</h1>
                            </div>
                            <div className="FormBox">
                                <ul>
                                    <li className="TABHead active"><a href="javascript:void();">Instant Approval</a> </li>
                                    <li className="TABHead dis">|</li>
                                    <li className="TABHead"><a href="javascript:void();">Existing Customers</a></li>
                                </ul>
                                <div className="clearfix"></div>
                                <div className="contant">
                                    <div className="row TABCont active">
                                        <div className="BtnWapper">
                                            <div className="BTNBox"><a href="https://www.fullertonindia.com/apply-now.aspx?utm_source=FICCL_Website&amp;utm_medium=Website_Direct&amp;utm_campaign=website_selfemployed_BL_topban&amp;se=FICCL_Website&amp;cp=Website_Direct&amp;ag=website_selfemployed_BL_topban" target="_blank" className="btn btn-default playBtn">Apply Online Now</a> </div>
                                        </div>
                                    </div>
                                    <div className="TABCont dis"></div>
                                    <div className="row text-center TABCont">
                                        <div className="BtnWapper">
                                            <div className="BTNBox"><a href="https://online.fullertonindia.com/?_ga=2.192446825.252541657.1517811752-401131723.1511959091" className="btn btn-default playBtn whiteBg">Login to Your Account</a>
                                                <a href="/pay-online.aspx" className="btn btn-default playBtn whiteBg">Pay Your EMI/Dues</a>
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
                            <li itemprop="itemListElement" itemscope="" temtype="http://schema.org/ListItem">
                                <a itemprop="item" href="https://www.fullertonindia.com/"><span itemprop="name">Home</span></a><meta itemprop="position" content="1" />
                            </li>
                            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                                <a itemprop="item" href="https://www.fullertonindia.com/business-loan/index.aspx"><span itemprop="name">Business Loan</span></a><meta itemprop="position" content="2" />
                            </li>
                            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                                <span itemprop="name">Self Employed Business Loan</span><meta itemprop="position" content="3" />
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="row padd40">
                    <div className="container">
                        <h2 className="headdingLeft">Business Loan </h2>
                        <p>As a business owner, you will face various business cycle phases which necessitate financial assistance to fuel the growth, or expansion of the business. Acquiring a flexible business funding for corporate purses against unencumbered security will be the ideal solution. Business loans make for the perfect financial instrument to service any short term finance and working capital requirements.  </p>
                        <p>Fullerton India’s financial solutions are designed to meet these needs of firms covering various industries. With our loan for business, you can focus on growing your business, while we take care of financing your business’s needs. </p>
                        <p>Whether it is the provision of capital requirements, or any other industrial expenses essential to keep your business running, we have the right proficiency and keen eye to satisfying your business requirements. </p>
                        <p>In a competitive financial market where your business thrives in an every growing economy, our customised business loans will help you grasp any business opportunity that comes your way. </p>
                    </div>
                </div>


                <div className="row padd40">
                    <div className="container">
                        <h2 className="headding">EMI Calculator</h2>
                        <div className="row ">
                            <div className="col-xs-12">
                                <div className="PlLoanContaineBox slider">
                                    <div className="">
                                        <div className="row  EMI">
                                            <div className="container">
                                                <div className="col-xs-12 col-md-6 calculator">
                                                    <div className="col-xs-12 sliderBox">
                                                        <div className="form-group">
                                                            <div className="labelField">
                                                                <label className="form-label" for="amount">Loan Amount</label>
                                                            </div>
                                                            <div className="controlField">
                                                                <input type="text" id="amount" readonly="" className="form-controls loanAmountInput" />
                                                                <i className="icon rs"></i>
                                                            </div>
                                                            <div className="clearfix"></div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="loanAmountSlider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{"left": "10%"}}></span><div className="ui-slider-range ui-corner-all ui-widget-header ui-slider-range-max" style={{"width": "90%"}}></div></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12 sliderBox">
                                                        <div className="form-group">
                                                            <div className="labelField">
                                                                <label className="form-label" for="interestAmount">Interest Rate</label>
                                                            </div>
                                                            <div className="controlField">
                                                                <i className="icon">%</i>
                                                                <input type="text" id="interestAmount" readonly="" className="form-controls interestAmountInput" />
                                                            </div>
                                                            <div className="clearfix"></div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="interestAmountSlider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{"left": "60%"}}></span><div className="ui-slider-range ui-corner-all ui-widget-header ui-slider-range-max" style={{"width": "40%"}}></div></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12 sliderBox">
                                                        <div className="form-group">
                                                            <div className="labelField">
                                                                <label className="form-label" for="Tenure">Loan Tenure</label>
                                                            </div>
                                                            <div className="controlField">
                                                                <i className="icon">&nbsp;Years</i><input type="text" readonly="" id="Tenure" className="form-controls TenureInput" />
                                                            </div>
                                                            <div className="clearfix"></div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="TenureSlider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{"left": "66.6667%%"}}></span><div className="ui-slider-range ui-corner-all ui-widget-header ui-slider-range-max" style={{"width": "33.3333%;"}}></div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-md-6 resultBox">
                                                    <h3 className="text-uppercase"><strong>EMI</strong></h3>
                                                    <div className="emiResult">
                                                        <h2 className="resultAmount rs">44,986</h2>
                                                    </div>
                                                    <div className="form-group"><a href="https://www.fullertonindia.com/apply-now.aspx?utm_source=FICCL_Website&amp;utm_medium=Website_Direct&amp;utm_campaign=website_selfemployed_BL_lastban&amp;se=FICCL_Website&amp;cp=Website_Direct&amp;ag=website_selfemployed_BL_lastban" target="_blank" className="btn btn-default playBtn ">Apply Online Now <i></i></a></div>
                                                    <div className="form-group TotalEMI">Total (Principal+Interest) <span className="resultAmount rs">44,986</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row padd40">
                    <div className="container">
                        <div className="row ">
                            <div className="col-xs-12">
                                <div className="PLLoansliderNew slider col-xs-12 text-center">
                                    <div className="Tab col-xs-12 col-lg-4">
                                        <a href="interest-rate.aspx">
                                            <div className="icon1-new ">&nbsp;</div>
                                            <span className="Text"> Interest Rate</span>
                                        </a>
                                    </div>
                                    <div className="Tab col-xs-12 col-lg-4">
                                        <a href="fees-and-charges.aspx">
                                            <div className="icon2-new ">&nbsp;</div>
                                            <span className="Text"> Fees &amp; Charges</span>
                                        </a>
                                    </div>
                                    <div className="Tab col-xs-12 col-lg-4">
                                        <a href="documentation.aspx">
                                            <div className="icon3-new ">&nbsp;</div>
                                            <span className="Text">Documentation</span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row padd40 StapWapper bg3">

                    <div className="container">
                        <h2 className="headding">How To Apply</h2>
                        <div className="text-center StapBox StapeSlider slick-initialized slick-slider">
                            <div className="slick-list draggable"><div className="slick-track" style={{"opacity": "1", "width": "0px", "transform": "translate3d(0px, 0px, 0px)"}}><div className="BoxWapper slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false"  tabindex="0">
                                <div className="stapNo">1</div>
                                <p className="t1">Fill up your
                                <br />
                                    form online </p>
                            </div><div className="BoxWapper slick-slide slick-active" data-slick-index="1" aria-hidden="false"  tabindex="0">
                                    <div className="stapNo">2</div>
                                    <p className="t1">Check your eligibility
                                <br />
                                        in a minute </p>
                                </div><div className="BoxWapper slick-slide slick-active" data-slick-index="2" aria-hidden="false"  tabindex="0">
                                    <div className="stapNo">3</div>
                                    <p className="t1">Upload documents
                                <br />
                                        for Verification</p>
                                </div><div className="BoxWapper slick-slide slick-active" data-slick-index="3" aria-hidden="false"  tabindex="0">
                                    <div className="stapNo lastNo">4</div>
                                    <p className="t1">Post verification, loan will be approved and disbursed in your account</p>
                                </div></div></div>



                        </div>
                        <div className="clearfix"></div>
                        <div className=" col-xs-12 text-center" style={{"padding-top": "20px !important"}}><a href="https://www.fullertonindia.com/careers/apply-now.aspx" className="btn btn-default playBtn ">Apply Online</a></div>
                    </div>
                </div>
                <div className="row padd40 ">
                    <div className="container">
                        <h2 className="headdingLeft">Other Products</h2>
                        <div className="ProductWapper">
                            <ul>
                                <li>
                                    <a href="../self-employed-business-loan-for-women/index.aspx">
                                        <figure>
                                            <img alt="" src="/images/self-bl-Woman.png" className="img-responsive" />
                                            <figcaption>
                                                <div>
                                                    <p>Business Loan for </p>
                                                    Women
                                            </div></figcaption>
                                        </figure>
                                    </a>
                                </li>
                                <li><a href="../self-employed-business-loan-for-doctors/index.aspx">
                                    <figure>
                                        <img alt="" src="/images/self-bl-doctor.png" className="img-responsive" />
                                        <figcaption>
                                            <div>
                                                <p>Business Loan for </p>
                                                Doctors
                                        </div></figcaption>
                                    </figure>
                                </a>
                                </li>
                                <li>
                                    <a href="../self-employed-business-loan-for-chartered-accountants/index.aspx">
                                        <figure>
                                            <img alt="" src="/images/self-bl-CA.png" className="img-responsive" />
                                            <figcaption>
                                                <div>
                                                    <p>Business Loan for </p>
                                                    Chartered<br />
                                                    Accountants
                                            </div></figcaption>
                                        </figure>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row  padd40  paddbottom50 bg3 FAQWapper  ">
                    <div className="container">
                        <h2 className="headdingLeft">FAQs</h2>
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="quesBox active">
                                    <div className="ques">Is there any age eligibility criterion for me to apply for a Business Loan</div>
                                    <div className="answ">
                                        <p>You need to be at least 27 years of age to apply for a Business Loan under the 'Self Employed Business Category'. A relaxation of 2 years will be made if you are a non-professional. You cannot exceed 65 years of age at the time of Loan Maturity.</p>
                                    </div>
                                </div>
                                <div className="quesBox">
                                    <div className="ques">Are there any eligibility criteria that my business entity should meet for me to apply for a loan?</div>
                                    <div className="answ">
                                        <p>Yes, the annual turnover of your business should be between <span className="rs"></span>10 Lakhs and <span className="rs"></span>100 Crores*. Further, your business needs to be in continuity for the last 3 years showing positive trends in turnover and profit for the last 2 years. Your Income Tax Returns of the last 2 years should reflect taxable income of above <span className="rs"></span>2 Lakhs per annum.</p>
                                        <p>*Should your turnover be above <span className="rs"></span>30 Crores, please refer to the SME Loans section to understand the solutions that are designed for the SME segment.</p>

                                    </div>
                                </div>
                                <div className="quesBox">
                                    <div className="ques">What is a Business Installment Loan?</div>
                                    <div className="answ">
                                        <p>Business Installment Loans are the loans, which are used to meet medium term working capital needs.</p>
                                    </div>
                                </div>
                                <div className="quesBox">
                                    <div className="ques">How can I repay my Business Loan?</div>
                                    <div className="answ">
                                        <p>You can repay the loan in equal monthly installments (EMIs). The loan can be repaid through post-dated cheques. You can also repay through an ECS mandate to your bank.</p>
                                    </div>
                                </div>
                                <div className="quesBox">
                                    <div className="ques">What is an EMI?</div>
                                    <div className="answ">
                                        <p>EMI or 'Equated Monthly Installment' is the convenient monthly amount that you have to service to pay back the loan availed. The EMI consists of both the principal and interest components.</p>
                                    </div>
                                </div>
                                <div className="quesBox">
                                    <div className="ques">Do I need to hypothecate my assets or provide any other collateral to avail a Business Loan from Fullerton India?</div>
                                    <div className="answ">
                                        <p>You do not need to hypothecate any assets to avail a Business Loan from Fullerton India.</p>
                                    </div>
                                </div>
                                <div className="quesBox">
                                    <div className="ques">What is the maximum loan amount I can avail?</div>
                                    <div className="answ">
                                        <p>You can avail up to a maximum of <span className="rs"></span>50 Lakhs. The amount would be calculated based on your income and other parameters that the Fullerton India Relationship Manager will explain.</p>
                                    </div>
                                </div>
                                <div className="quesBox">
                                    <div className="ques">Can I foreclose or prepay my loan?</div>
                                    <div className="answ">
                                        <p>Yes, you can repay your loan at any time during the loan tenure.</p>
                                    </div>
                                </div>
                                <div className="quesBox">
                                    <div className="ques">Is there any advantage that I can get if I have already availed a loan from Fullerton India earlier?</div>
                                    <div className="answ">
                                        <p>Yes, if you are an existing customer of Fullerton India, you will get additional benefits in processing time as well as in the interest rate.</p>
                                    </div>
                                </div>
                                <br />

                                <p>* Loans are at the sole discretion of Fullerton India and are subject to guidelines of the Reserve Bank of India. Fullerton India may engage the services of marketing agents for the purpose of sourcing loan assets in certain locations.</p>
                            </div>
                        </div>
                    </div>
                </div>
                            </div>
                        
                        )
                    }
                }
                
export default BusinessLoan;