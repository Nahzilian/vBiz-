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
        return (
            <div>
                <Fragment>
                    <h1>Vbiz list</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Postal Code</th>
                                <th>Province</th>
                                <th>Description</th>
                                <th>Opening time</th>
                                <th/>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.companies.map(company => (
                                    <tr key= {company.id}>
                                        <td>{company.id}</td>
                                        <td>{company.name}</td>
                                        <td>{company.c_email}</td>
                                        <td>{company.c_phone}</td>
                                        <td>{company.b_address}</td>
                                        <td>{company.b_postal}</td>
                                        <td>{company.b_province}</td>
                                        <td>{company.d_desc}</td>
                                        <td>{company.open_time}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
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
