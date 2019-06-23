import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div>
            <div className="topNav visible-lg visible-md">
        <div className="container">
            <div className="row">
                <div className="top-right-links">
                    <ul>
                        <li><i className="fa-phone-alt" style={{color: "#e4701e"}}></i>  Toll Free: 1800 103 6001</li>
                        <li className="quicklinkDD"><a href="JavaScript:void(0)">Quick Links <i className="fa fa-sort-down"></i></a>
                            <div className="dropDown">
                                <ul>
                                    
                                    <li><a href="https://instantloan.fullertonindia.com/application-status?_ga=2.245227397.1098746021.1559878575-200646263.1522392607">Track Application</a></li>
                                    
                                    <li><a href="https://www.fullertonindia.com/contact-us/branch-locator.aspx">Branch Locator</a></li>
                                    <li><a href="https://www.fullertonindia.com/knowledge-center/index.aspx">Knowledge Centre</a></li>
                                    <li></li>
                                    <li><a href="https://www.fullertonindia.com/pdf/e-Auction-Publication-of-Sale-Notice-Mohd-Mustafa.pdf" target="_blank">E-Auction</a></li>
                                    <li><a href="https://www.fullertonindia.com/contact-us/faqs.aspx">FAQs</a></li>
                                    <li><a href="https://www.fullertonindia.com/downloads/index.aspx">Downloads</a></li>
                                </ul>
                                <div className="formBox">
                                    <a href="https://www.fullertonindia.com/pay-online.aspx" className="btn btnGreen">Pay EMI</a>
                                    <a href="https://www.fullertonindia.com/apply-now.aspx" className="btn btnOrange">Apply Now</a>
                                </div>
                            </div>
                        </li>
                        <li><a href="https://www.fullertonindia.com/pay-online.aspx">Pay EMI</a></li>
                        <li><a href="https://online.fullertonindia.com/?_ga=2.7256242.1098746021.1559878575-200646263.1522392607#/signin">Customer Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
            <div className="mainNav">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <div className="humburgurMenu"><i className="fa fa-bars fa-3x"></i></div>
                    <div className="PL-logo"><Link to="/">
                        <img src="../../images/PL-logo.png" alt="logo"/>
                        </Link>
                    </div>
                    <div className="search-apply">
                        <div className="searchBpx">
                            <a href="https://www.fullertonindia.com/search.aspx">
                                <img src="../../images/search-icon.png" /></a>
                            <input name="uclheader$TXTSEARCH" type="text" id="uclheader_TXTSEARCH" className="searchInput" placeholder="Search" />
                            <input type="submit" name="uclheader$btnSearch" value="GO" id="uclheader_btnSearch" className="goBtn" formNoValidate="" />
                        </div>
                        <a href="https://instantloan.fullertonindia.com/personal-loan?utm_source=FICCL_Website&amp;utm_medium=Website_Direct&amp;utm_campaign=website_Generic_topmenu&amp;se=FICCL_Website&amp;cp=Website_Direct&amp;ag=website_Generic_topmenu" className="btn applyNow" target="_blank">Apply Now</a>
                    </div>
                    <div className="mainLinks">
                        <div className="row">
                            <div className="top-left-links"><a href="#" className="active" data-targetdiv="Loans">Loans</a> 
                                <a href="#" data-targetdiv="MoreSolutions" className="moresolution"> More Solutions +</a> </div>
                            <ul className="mainMenu Loans active">
                                <li><a href="JavaScript:void(0)">Personal Loan </a>
                                    <div className="dropDownMenu megaMenu">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-xs-12">
                                                    <div className="backMenu"><i className="fa fa-arrow-left"></i>Personal Loan</div>
                                                </div>
                                                <div className="col-xs-12 col-md-3">
                                                    <div className="applyNowCard">
                                                        <p><a href="https://www.fullertonindia.com/personal-loan.aspx">Overview</a></p>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-md-9">
                                                    <p>
                                                        
                                                        <a href="https://www.fullertonindia.com/personal-loan/personal-loan-for-salaried.aspx" className="linkSpace">For Salaried</a>
                                                        <a href="https://www.fullertonindia.com/personal-loan/personal-loan-for-self-employed.aspx" className="linkSpace">For Self-Employed</a>
                                                        
                                                    </p>
                                                    <div className="row">
                                                        <div className="col-xs-6 col-sm-4 leadTextWrap">
                                                            <a href="https://www.fullertonindia.com/personal-loan/personal-loan-for-doctors.aspx" className="linkTab Doctors">
                                                                <p className="leadText">Personal Loan for <span>Doctors </span></p>
                                                            </a>
                                                        </div>

                                                        <div className="col-xs-6 col-sm-4 leadTextWrap">
                                                            <Link to="/personal-loan/personal-loan-for-wedding" className="linkTab Wedding">
                                                                <p className="leadText">Personal Loan for <span>Wedding </span></p>
                                                            </Link>
                                                        </div>
                                                        <div className="col-xs-6 col-sm-4 leadTextWrap">
                                                            <a href="https://www.fullertonindia.com/personal-loan/personal-loan-for-home-improvement.aspx" className="linkTab HomeImprovement">
                                                                <p className="leadText">Personal Loan for <span>Home Improvement </span></p>
                                                            </a>
                                                        </div>
                                                        <div className="col-xs-6 col-sm-4 leadTextWrap">
                                                            <a href="https://www.fullertonindia.com/personal-loan/personal-loan-for-holiday.aspx" className="linkTab Holiday">
                                                                <p className="leadText">Personal Loan for <span>Holiday </span></p>
                                                            </a>
                                                        </div>
                                                        <div className="col-xs-6 col-sm-4 leadTextWrap">
                                                            <a href="https://www.fullertonindia.com/personal-loan/personal-loan-for-elite.aspx" className="linkTab Elite">
                                                                <p className="leadText">Personal Loan for <span>Elite </span></p>
                                                            </a>
                                                        </div>
                                                        <div className="col-xs-6 col-sm-4 leadTextWrap">
                                                            <a href="https://www.fullertonindia.com/personal-loan/personal-loan-for-women.aspx" className="linkTab Women">
                                                                <p className="leadText">Personal Loan for <span>Women </span></p>
                                                            </a>
                                                        </div>
                                                        <div className="col-xs-6 col-sm-4 leadTextWrap">
                                                            <a href="https://www.fullertonindia.com/personal-loan/personal-loan-for-medical-emergency.aspx" className="linkTab Emergency">
                                                                <p className="leadText">Personal Loan for <span>Emergency </span></p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="posRel"><a href="JavaScript:void(0)">Business Loans</a>
                                    <div className="dropDownMenu normalMenu size1">
                                        <div className="col-xs-12">
                                            <div className="backMenu"><i className="fa fa-arrow-left"></i>Business Loans</div>
                                        </div>
                                        <div className="col-xs-12">
                                            <div className="applyNowCard">
                                                <p><Link to="/business-loan/self-employed-business-loan/index">Overview</Link></p>
                                                <p><a href="https://www.fullertonindia.com/business-loan/self-employed-business-loan/interest-rate.aspx">Interest rates</a></p>
                                                <p><a href="https://www.fullertonindia.com/business-loan/self-employed-business-loan/documentation.aspx">Documentation</a></p>
                                                <br />
                                                <a href="https://www.fullertonindia.com/apply-now.aspx?utm_source=FICCL_Website&amp;utm_medium=Website_Direct&amp;utm_campaign=website_selfemployed_BL_topmenu&amp;se=FICCL_Website&amp;cp=Website_Direct&amp;ag=topmenu" className="btn btn-block applyNow" target="_blank">Apply Now <i className="fa fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="posRel"><a href="JavaScript:void(0)">Loan Against Property</a>
                                    <div className="dropDownMenu normalMenu size1">
                                        <div className="col-xs-12">
                                            <div className="backMenu"><i className="fa fa-arrow-left"></i>Loan Against Property</div>
                                        </div>
                                        <div className="col-xs-12">
                                            <div className="applyNowCard">
                                                
                                                <p><a href="https://www.fullertonindia.com/loan-against-property/salaried-loan-against-property/index.aspx">Overview</a></p>
                                                <p><a href="https://www.fullertonindia.com/loan-against-property/salaried-loan-against-property/interest-rate.aspx">Interest rates</a></p>
                                                <p><a href="https://www.fullertonindia.com/loan-against-property/salaried-loan-against-property/documentation.aspx">Documentation</a></p>
                                                
                                                <br />
                                                <a href="https://www.fullertonindia.com/apply-now.aspx?utm_source=FICCL_Website&amp;utm_medium=Website_Direct&amp;utm_campaign=website_salaried_LAPMT25_topmenu&amp;se=FICCL_Website&amp;cp=Website_Direct&amp;ag=website_salaried_LAPMT25_topmenu
" className="btn btn-block applyNow" target="_blank">Apply Now <i className="fa fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="posRel"><a href="JavaScript:void(0)">Vehicle Loans</a>
                                    <div className="dropDownMenu normalMenu size2">
                                        <div className="col-xs-12">
                                            <div className="backMenu"><i className="fa fa-arrow-left"></i>Vehicle Loans</div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6">
                                            <div className="applyNowCard">
                                               <p className="h3">Apply for a Commercial Vehicle Loan </p>
                                                <p><a href="https://www.fullertonindia.com/commercial-vehicle-loan/self-employed-commercial-vehicle-loan.aspx">Overview</a></p>
                                                
                                                <br />
                                                <a href="https://www.fullertonindia.com/apply-now.aspx?utm_source=FICCL_Website&amp;utm_medium=Website_Direct&amp;utm_campaign=website_selfemployed_CV_topmenu&amp;se=FICCL_Website&amp;cp=Website_Direct&amp;ag=website_selfemployed_CV_topmenu" className="btn btn-block applyNow" target="_blank">Apply Now <i className="fa fa-angle-right fa-1x"></i></a>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6">
                                            <div className="applyNowCard">
                                                <p className="h3">Apply for a Two-Wheeler Loan </p>
                                                <p><a href="https://www.fullertonindia.com/two-wheeler-loan.aspx">Overview</a></p>
                                                
                                                <br />
                                                <a href="https://www.fullertonindia.com/apply-now.aspx?utm_source=FICCL_Website&amp;utm_medium=Website_Direct&amp;utm_campaign=website_salaried_TW_topmenu&amp;se=FICCL_Website&amp;cp=Website_Direct&amp;ag=website_salaried_TW_topmenu" className="btn btn-block applyNow" target="_blank">Apply Now <i className="fa fa-angle-right fa-1x"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="posRel"><a href="JavaScript:void(0)">Home Loans</a>
                                    <div className="dropDownMenu normalMenu size1">
                                        <div className="col-xs-12">
                                            <div className="backMenu"><i className="fa fa-arrow-left"></i>Home Loans</div>
                                        </div>
                                        <div className="col-xs-12">
                                            <div className="applyNowCard">
                                                
                                                <p><Link to="/home-loan/index.aspx">Overview</Link></p>
                                                
                                                <p><a href="https://www.grihashakti.com/emi-calculator/home-loan-calculator.aspx">EMI Calculator</a></p>
                                                <br />
                                                <a href="https://grihashaktiapply.online/home-loan?utm_source=FL_Website_Top&amp;se=FL_Website_Top&amp;cp=FL_Website_Top&amp;ag=FL_Website_Top&amp;Campaign_Term=FL_Website" className="btn btn-block applyNow" target="_blank">Apply Now <i className="fa fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="posRel"><a href="JavaScript:void(0)">More Loans</a>
                                    <div className="dropDownMenu normalMenu size1">
                                        <div className="col-xs-12">
                                            <div className="backMenu"><i className="fa fa-arrow-left"></i>More Loans</div>
                                        </div>
                                        <div className="col-xs-12">
                                            <div className="applyNowCard">
                                                <p><a href="https://www.fullertonindia.com/solidarity-group-loan.aspx">Group Loan</a></p>
                                                <p><a href="https://www.fullertonindia.com/loan-against-securities.aspx">Loan Against Securities</a></p>
                                                <p><a href="https://www.fullertonindia.com/growing-enterprise-loan.aspx">Growing Enterprise Loan</a></p>
                                                <p><a href="https://www.fullertonindia.com/garima-loan.aspx">Garima Loan</a></p>
                                                
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="mainMenu MoreSolutions">
                                <li className="posRel"><a href="JavaScript:void(0)">Insurance Solutions </a>
                                    <div className="dropDownMenu normalMenu size1">
                                        <div className="col-xs-12">
                                            <div className="backMenu"><i className="fa fa-arrow-left"></i>Insurance Solutions</div>
                                        </div>
                                        <div className="col-xs-12">
                                            <div className="applyNowCard">
                                                <p><Link to="/insurance/life-insurance">Life Insurance</Link></p>
                                                <p><Link to="/insurance/general-insurance">General  Insurance </Link></p>
                                                <p><a href="https://www.fullertonindia.com/insurance/group-insurance.aspx">Group  Insurance </a></p>
                                                <p><a href="https://www.fullertonindia.com/insurance/health-insurance.aspx">Health  Insurance</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="https://www.fullertonindia.com/value-added-services/iho-services.aspx">IHO Value Added Services</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
        )
    }
}

export default Nav;