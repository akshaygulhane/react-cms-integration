import React, {Fragment} from 'react';

const axios = require('axios');

const cmsUrl = process.env.REACT_APP_CMS_URL || 'http://192.168.0.37:8080';
const path =  `${cmsUrl}/fullerton/insurance/general-insurance?_format=json`;

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

    render(){
        return (
            <Fragment>
                <div className="row ">
                    <div className="InnerBanner LifeInBanner">
                        <div className="container">
                            <div className="BannerTaxt">
                                <h1 className="visible-lg visible-md"><br />Get complete peace of mind </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row breadcrumbWrp">
                    <div className="container">
                        <ol className="breadcrumb bgn" itemscope="" itemtype="http://schema.org/BreadcrumbList">
                            <li itemprop="itemListElement" itemscope="" temtype="http://schema.org/ListItem">
                                <a itemprop="item" href="https://www.fullertonindia.com/"><span itemprop="name">Home</span></a>
                                <meta itemprop="position" content="1" />
                            </li>
                            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                                <a itemprop="item" href="https://www.fullertonindia.com/insurance/index.aspx"><span itemprop="name">Insurance</span></a>
                                <meta itemprop="position" content="2" />
                            </li>
                            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                                <span itemprop="name">ICICI Prudential LIFE INSURANCE</span>
                                <meta itemprop="position" content="3" />
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="row padd40">
                    <div className="container">
                        <h2 className="headdingLeft">Life Insurance</h2>
                        <p>Life Insurance means peace, security and support for your loved ones when you are not around to take care of them. If you have bought a personal loan, you do not want it to be a burden on your family in case you are not around. A life insurance gives a financial security to people who mean the world to you. Keeping your benefits in mind, Fullerton India associates with ICICI Prudential Life Insurance Company Limited, to offer you a range of life insurance policies.</p>
                    </div>
                </div>

                <div className="row padd40">
                    <div className="container">
                        <h2 className="headding">Features &amp; Benefits of Life Insurance</h2>
                        <div className="row">
                            <div className="col-sm-12 FeaturesBenefitsSlider slider slick-initialized slick-slider">
                                <div className="slick-list draggable">
                                    <div className="slick-track" style={{opacity: 1, width: '1140px', transform: 'translate3d(0px, 0px, 0px)'}}>
                                        <div className="Textwapper slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" style={{width: '228px'}}>
                                    <div className="IconBox">
                                        <img alt="" src="/images/icon-protexctfamily.png" className="img-responsive" />
                                    </div>
                                    <p className="t1">A protective cover</p>
                                    <p className="t2">Life Insurance policy acts as a protective financial cover for your loved ones when you are not around. Whether it’s for compensating lost income, paying for your child’s education or helping your family maintain their standard of living.</p>
                                </div><div className="Textwapper slick-slide slick-active" data-slick-index="1" aria-hidden="false" tabindex="0" style={{width: '228px'}}>
                                    <div className="IconBox">
                                        <img alt="" src="/images/Icon-Financial-.png" className="img-responsive" />
                                    </div>
                                    <p className="t1">Financial needs &amp; requirements</p>
                                    <p className="t2">It also doubles up as a cash resource and helps your family pay loans and debts at the time of crisis. It helps you in managing your loans and EMIs and reducing the financial burdens in a planned way.</p>
                                </div><div className="Textwapper slick-slide slick-active" data-slick-index="2" aria-hidden="false" tabindex="0" style={{width: '228px'}}>
                                    <div className="IconBox">
                                        <img alt="" src="/images/icon-Illnesses.png" className="img-responsive" />
                                    </div>
                                    <p classNameName="t1">Extensive coverage for illnesses and misfortunes  </p>
                                    <p classNameName="t2">An excellent protection tool that gives you an extensive coverage whenever you face financial liabilities during a life threatening illness, accident or any such mishap.</p>
                                </div><div className="Textwapper slick-slide slick-active" data-slick-index="3" aria-hidden="false" tabindex="0" style={{width: '228px'}}>
                                    <div className="IconBox">
                                        <img alt="" src="/images/IcontextBenifit.png" className="img-responsive" />
                                    </div>
                                    <p className="t1">Tax Benefits</p>
                                    <p className="t2">Life Insurance policy is a wonderful way to save taxes too. It helps you avail tax deductions on the payment of premium. </p>
                                </div><div className="Textwapper slick-slide slick-active" data-slick-index="4" aria-hidden="false" tabindex="0" style={{width: '228px'}}>
                                    <div className="IconBox">
                                        <img alt="" src="/images/icon-goodinvestment.png" className="img-responsive" />
                                    </div>
                                    <p className="t1">A good investment instrument </p>
                                    <p className="t2">Life Insurance policy ensures that the benefits offered to you reflect your needs at that particular stage of life while also fulfils your financial goals</p>
                                </div></div></div>
                            </div>
                        </div>
                            <br />
                            <p>
                                <strong>BEWARE OF SPURIOUS / FRAUD PHONE CALLS!</strong><br />IRDAI is not involved in activities like selling insurance policies, announcing bonus or investment of premiums. Public receiving such phone calls are requested to lodge a police complaint.
                            </p>	
                    </div>
                </div>

                <div className="row bg3 padd40 knowledgeBlogWapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 ">
                                <h2 className="headdingLeft pull-left">Knowledge Center</h2>
                                <a href="https://www.fullertonindia.com/knowledge-center/index.aspx" className="btn btn-default playBtn whiteBg pull-right">View All</a>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-lg-6">
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <picture>
                                        <source media="(max-width: 799px)" srcset="/images/knowledge-center/Artical_5.jpg" />
                                        <source media="(min-width: 800px)" srcset="/images/knowledge-center/Artical_5-md.jpg" />
                                        <img src="/images/knowledge-center/Artical_5-md.jpg" alt="Responsive image" className="img-responsive img articalImg" />
                                    </picture>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <p className="t1">Loan against Property: Here’s how you can use it to fund your child's higher education! </p>
                                    <p className="t2">The news of your child’s acceptance to a prestigious university for higher studies is a moment...</p>
                                    <a href="https://www.fullertonindia.com/knowledge-center/loan-against-property-here-is-how-you-can-use-it-to-fund-your-child-is-higher-education.aspx" className="BTNMore2">More...</a>
                                </div>
                                <div className="clearfix"></div>
                                <hr />
                                <div className="clearfix"></div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <picture>
                                        <source media="(max-width: 799px)" srcset="/images/knowledge-center/Artical_4.jpg" />
                                        <source media="(min-width: 800px)" srcset="/images/knowledge-center/Artical_4-md.jpg" />
                                        <img src="/images/knowledge-center/Artical_4-md.jpg" alt="Responsive image" className="img-responsive img articalImg" />
                                    </picture>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <p className="t1">Is Your Business Providing Consultation Services? You Can Still avail a Business Loan! </p>
                                    <p className="t2">Owners involved in any industry can avail business loans, be it manufacturing, trading or services...</p>
                                    <a href="https://www.fullertonindia.com/knowledge-center/is-your-business-providing-consultation-services-you-can-still-avail-a-business-loan.aspx" className="BTNMore2">More...</a>
                                </div>
                                <div className="clearfix"></div>
                                <hr />
                                <div className="clearfix"></div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-lg-6">
                                <div className="col-xs-12 col-sm-12 col-md-6 ">
                                    <picture>
                                    <source media="(max-width: 799px)" srcset="/images/knowledge-center/Artical_3.jpg" />
                                    <source media="(min-width: 800px)" srcset="/images/knowledge-center/Artical_3-md.jpg" />
                                    <img src="/images/knowledge-center/Artical_3-md.jpg" alt="Responsive image" className="img-responsive img articalImg" />
                                    </picture>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <p className="t1">Why a Loan Against Property is your best bet for funding personal expenses! </p>
                                    <p className="t2">Owners involved in any industry can avail business loans, be it manufacturing, trading or services...</p>
                                    <a href="https://www.fullertonindia.com/knowledge-center/why-a-loan-against-property-is-your-best-bet-for-funding-personal-expenses.aspx" className="BTNMore2">More...</a>
                                </div>
                                <div className="clearfix"></div>
                                <hr />
                                <div className="clearfix"></div>
                                <div className="col-xs-12 col-sm-12 col-md-6 ">
                            <picture>
                                <source media="(max-width: 799px)" srcset="/images/knowledge-center/Artical_2.jpg" />
                                <source media="(min-width: 800px)" srcset="/images/knowledge-center/Artical_2-md.jpg" />
                                <img src="/images/knowledge-center/Artical_2-md.jpg" alt="Responsive image" className="img-responsive img articalImg" />
                                </picture>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <p className="t1">Applying for a Personal loan for Your Child's Further Studies? Here’s How You Can Do It! </p>
                                    <p className="t2">You’ve given your child the right head start in life by sending them to the finest of educational...</p>
                                    <a href="https://www.fullertonindia.com/knowledge-center/applying-for-a-personal-loan-for-your-child-is-further-studies-here-is-how-you-can-do-it.aspx" className="BTNMore2">More...</a>
                                </div>
                                <div className="clearfix"></div>
                                <hr />
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row padd40">
                    <div class="container TestimonialWapper">
                        <h2 class="headding">Customer Experiences </h2>
                        
                        <div class="row text-center">
                            <div class="slider CustomerSlider slick-initialized slick-slider"><button class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true">Previous</button>
                                <div class="slick-list draggable"><div class="slick-track" style={{opacity: 1, width: '4095px', transform: 'translate3d(0px, 0px, 0px)'}}><div class="col-xs-12 slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" style={{width: '585px'}}>
                                    <img src="../images/carrer/abc.png" class="img-circle Image" />
                                    <div class="CommentText">
                                        <h2>Mr. Mahendra Kothari</h2>
                                        <p class="t1">M/S Divya Textiles</p>
                                        <p class="t2">I have had a very fulfilling experience with Fullerton India. Right from the time when I had taken the loan; to any information I required, the executives have always responded promptly and have resolved my queries. </p>
                                    </div>
                                </div><div class="col-xs-12 slick-slide slick-active" data-slick-index="1" aria-hidden="false" tabindex="0" style={{width: '585px'}}>
                                    <img src="../images/carrer/abc.png" class="img-circle Image" />
                                    <div class="CommentText">
                                        <h2>Ms. Deepamala Gorwani</h2>
                                        <p class="t1">M/S Manan Agency</p>
                                        <p class="t2">While taking a loan from Fullerton India, sales executive collected all the required documents in one go and I received the loan amount on time. This was quite contrary to my previous experiences of taking up loans from other companies.</p>
                                    </div>
                                </div><div class="col-xs-12 slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1" style={{width: '585px'}}>
                                    <img src="../images/carrer/abc.png" class="img-circle Image" />
                                    <div class="CommentText">
                                        <h2>Mr. Natavarlal. B. Kakkad </h2>
                                        <p class="t1">M/S Manan Agency</p>
                                        <p class="t2">We have been associated with Fullerton India for past three years and our experience has been great since then. The company is very prompt at its services, for eg: we applied for personal loan in November 2015 and we got the loan amount in just one week. </p>
                                    </div>
                                </div><div class="col-xs-12 slick-slide" data-slick-index="3" aria-hidden="true" tabindex="-1" style={{width: '585px'}}>
                                    <img src="../images/carrer/abc.png" class="img-circle Image" />
                                    <div class="CommentText">
                                        <h2>Mr. Pankaj Dineshbhai Rafaliyad</h2>
                                        <p class="t2">I have recently availed a personal loan from Fullerton India and am fully satisfied with the services offered by the company. Based on my own good experience, I will refer my colleagues to take up personal loans from Fullerton India. </p>
                                    </div>
                                </div><div class="col-xs-12 slick-slide" data-slick-index="4" aria-hidden="true" tabindex="-1" style={{width: '585px'}}>
                                    <img src="../images/carrer/abc.png" class="img-circle Image" />
                                    <div class="CommentText">
                                        <h2>Mr. Deepak Ahlawat</h2>
                                        <p class="t1">Super India global Pvt limited</p>
                                        <p class="t2">FICCL Commercial Vehicle Loans team has tailor made solutions for every requirement; this coupled with their experienced and friendly sales force make them stand out amongst the herd.  </p>
                                    </div>
                                </div><div class="col-xs-12 slick-slide" data-slick-index="5" aria-hidden="true" tabindex="-1" style={{width: '585px'}}>
                                    <img src="../images/carrer/abc.png" class="img-circle Image" />
                                    <div class="CommentText">
                                        <h2>Mr. Dalel singh </h2>
                                        <p class="t1">Babra Transport</p>
                                        <p class="t2">Speedy decisioning, simplistic documentation, great service and multi product offering makes FICCL our preferred finance partner.</p>
                                    </div>
                                </div><div class="col-xs-12 slick-slide" data-slick-index="6" aria-hidden="true" tabindex="-1" style={{width: '585px'}}>
                                    <img src="../images/carrer/abc.png" class="img-circle Image" />
                                    <div class="CommentText">
                                        <h2>Prof. (Dr.) S. Z. AMANI </h2>
                                        
                                        <p class="t2">I would like to express my pleasure and gratitude for the cooperation received from Fullerton India. I was looking for financial assistance and the company helped me by offering a loan. I also appreciate the sincere efforts made by the executives of Fullerton India, which resulted in speedy processing of my loan. </p>
                                    </div>
                                </div></div></div>
                            <button class="slick-next slick-arrow" aria-label="Next" type="button" aria-disabled="false">Next</button></div>
                        </div>
                    </div>
                </div>

                <div class="row padd40 bg2">
                    <div class="container">
                        <h2 class="headdingLeft">Other Products</h2>
                        <div class="AboutInsuranceSlider hAn slider slick-initialized slick-slider">
                            <div class="slick-list draggable">
                                <div class="slick-track" style={{opacity: 1, width: '1140px', transform: 'translate3d(0px, 0px, 0px)'}}><div class="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" style={{width: '285px'}}>
                                <div class="ImageBox">
                                    <img src="/images/life-insurance.png" class="img-responsive" alt="" />
                                    <div class="textName">
                                        <div>Life
                                            <p>Insurance</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="contantBox text-left">
                                    <p class="he"><a href="https://www.fullertonindia.com/insurance/icici-life-insurance.aspx" class="BTNMore" tabindex="0">ICICI Prudential Life Insurance Company Limited</a></p>
                                    <p class="he"><a href="https://www.fullertonindia.com/insurance/kotak-life-insurance.aspx" class="BTNMore" tabindex="0">Kotak Mahindra Life Insurance Company Ltd.</a></p>
                                </div>
                            </div><div class="item slick-slide slick-active" data-slick-index="1" aria-hidden="false" tabindex="0" style={{width: '285px'}}>
                                <div class="ImageBox text-left">
                                    <img src="/images/genral-insurance.png" class="img-responsive" alt="" />
                                    <div class="textName">
                                        <div>
                                            General
                                        <p>Insurance</p>
                                        </div>
                                    </div>

                                </div>
                                <div class="contantBox text-left">
                                    <p class="he"><a href="https://www.fullertonindia.com/insurance/general-insurance.aspx" class="BTNMore" tabindex="0">ICICI Lombard General Insurance Company Limited</a></p>
                                </div>
                            </div><div class="item slick-slide slick-active" data-slick-index="2" aria-hidden="false" tabindex="0" style={{width: '285px'}}>
                                <div class="ImageBox">
                                    <img src="/images/group-insurance.png" class="img-responsive" alt="" />
                                    <div class="textName">
                                        <div>
                                            Group
                                        <p>Insurance</p>
                                        </div>
                                    </div>

                                </div>
                                <div class="contantBox text-left">
                                    <p class="he"><a href="https://www.fullertonindia.com/insurance/group-insurance.aspx" class="BTNMore" tabindex="0">ICICI Lombard General Insurance Company Limited</a></p>
                                    <p class="he"><a href="https://www.fullertonindia.com/insurance/hdfc-life-group-insurance.aspx" class="BTNMore" tabindex="0">HDFC Life Insurance Company Limited (Formerly HDFC Standard Life Insurance Company Limited)</a></p>
                                    <p class="he"><a href="https://www.fullertonindia.com/insurance/kotak-life-group-insurance.aspx" class="BTNMore" tabindex="0">Kotak Life Insurance Company Ltd.</a></p>
                                </div>
                                <div class="clearfix"></div>
                            </div><div class="item slick-slide slick-active" data-slick-index="3" aria-hidden="false" tabindex="0" style={{width: '285px'}}>
                                <div class="ImageBox">
                                    <img alt="" src="/images/healt-insurance.png" class="img-responsive" />
                                    <div class="textName">
                                        <div>
                                            Health
                                        <p>Insurance</p>
                                        </div>
                                    </div>

                                </div>
                                <div class="contantBox text-left">
                                    <p class="he"><a href="https://www.fullertonindia.com/insurance/health-insurance.aspx" class="BTNMore" tabindex="0">CignaTTK Health Insurance Company Limited</a></p>
                                </div>
                            </div></div></div>
                        </div>
                    </div>
                </div>
             </Fragment>
        )
    }
}
            
export default LifeInsurance;