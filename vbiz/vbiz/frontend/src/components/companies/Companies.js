import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCompanies } from '../../actions/companies';


export class Companies extends Component {
    static PropTypes = {
        companies: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getCompanies();
    }

    render() {

        const myStyle = {
            color: "black",
            backgroundColor:"white",
            padding:"40px",
            margin:"10px",
        }
        const styletd={
            padding:"40px", 
        }
        return (
            <div>
                <Fragment>
                    <h1>Vbiz list</h1>
                    
                    
                    {  this.props.companies.map(company => (
                    <div className = "container" key= {company.id}>
                        <div className="card">
                            <h5 className="card-header">{company.id}.{company.name}</h5>
                            <div className="card-body">
                                <div className = "row">
                    
                                    <img alt = "test" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXG8ZZqfz0gklsusjRteRGT3IlrpSrjjMVW403TkUmcpPGCx59&s" width = "250px" height ="250px"/>
                                    <div className = "col">
                                        <h5 className="card-title">Description</h5>
                                        <p className="card-text">{company.d_desc}</p>
                                        <p className="card-text">Address: {company.b_address}, {company.b_province}, {company.b_postal}, Canada</p>
                                        Contact:
                                        <ul>
                                            <li>Phone: {company.c_phone}</li>
                                            <li>Email: {company.c_email}</li>    
                                        </ul>
                                        <p className = "card-text">{company.open_time}</p>
                                    </div>
                                        
                                    <div className = "col">
                                        <a href="#" className="btn btn-primary btn-lg btn-block">Visit store</a>
                                        <br/>
                                        <a href="#" className="btn btn-primary btn-lg btn-block">Contact</a>
                                    </div>
                                        
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                                                   
                    ))}
                </Fragment>
                
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        companies: state.companies.companies
    }
)

export default connect(mapStateToProps,{ getCompanies })(Companies)
