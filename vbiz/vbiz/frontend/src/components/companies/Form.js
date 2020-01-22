import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCompanies } from '../../actions/companies'



export class Form extends Component {
    state = {
        name:'',
        b_address: '',
        b_postal:'',
        b_city:'',
        b_province:'',
        c_phone: '',
        c_email: '',
        service_type:'',
        open_time:'',
        d_desc:'',
    }

    
    static propTypes = {
        addCompanies: PropTypes.func.isRequired
    }

    onChange = e => this.setState({[e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { name,b_address,b_postal,b_city,b_province,c_phone,c_email,service_type,open_time,d_desc } = this.state;
        const company = { name,b_address,b_postal,b_city,b_province,c_phone,c_email,service_type,open_time,d_desc };
        this.props.addCompanies(company);
        this.setState({
        name:'',
        b_address: '',
        b_postal:'',
        b_city:'',
        b_province:'',
        c_phone: '',
        c_email: '',
        service_type:'',
        open_time:'',
        d_desc:'',
        })
    }
    render() {
        
        const { name,b_address,b_postal,b_city,b_province,c_phone,c_email,service_type,open_time,d_desc } = this.state;
        return (
            <div className = "container">
            <h2>Register your company name for free!</h2>

            <br/>
            <form onSubmit = {this.onSubmit}>
                {/*Name input*/}
                <div className ="form-group">
                    <label htmlFor="formGroupExampleInput">Company's name</label>
                    <input type="text" className ="form-control"   placeholder="Name" name = "name" onChange ={this.onChange} value = {name} />
                </div>

                {/*Address input*/}
                
               
                <div className ="form-group">
                    <label htmlFor="formGroupExampleInput">Address:</label>
                    <input type="text" className ="form-control"   placeholder="Address" name = "b_address" onChange ={this.onChange} value = {b_address}/>
                </div>
                <div className = "form-row">
                {/*City input*/}
                <div className ="form-group col-md-6">
                    <label htmlFor="formGroupExampleInput">City:</label>
                    <input type="text" className ="form-control"   placeholder="City" name = "b_city" onChange ={this.onChange} value = {b_city}/>
                </div>

                {/*Postal input*/}
                <div className ="form-group col-md-4">
                    <label htmlFor="formGroupExampleInput">Postal code:</label>
                    <input type="text" className ="form-control"   placeholder="Postal code" name = "b_postal" onChange ={this.onChange} value = {b_postal}/>
                </div>

                {/*Province input*/}
                <div className ="form-group col-md-2">
                    <label htmlFor="formGroupExampleInput">Province:</label>
                    <input type="text" className ="form-control"   placeholder="Province" name = "b_province" onChange ={this.onChange} value = {b_province}/>
                </div>

                </div>

                {/*Phone input*/}
                <div className ="form-group">
                    <label htmlFor="formGroupExampleInput">Phone:</label>
                    <input type="tel" className ="form-control"  placeholder="Phone number" name = "c_phone" onChange ={this.onChange} value = {c_phone}/>
                </div>

                {/*Email input*/}
                <div className ="form-group">
                    <label htmlFor="exampleInputEmail1">Email:</label>
                    <input type="email" className ="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name = "c_email" onChange ={this.onChange} value = {c_email}/>
                    <small id="emailHelp" className ="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                {/*Service type input*/}
                <div className ="form-group">
                    <label htmlFor="formGroupExampleInput">Service type:</label>
                    <input type="text" className ="form-control"   placeholder="Type here ..." name = "service_type" onChange ={this.onChange} value = {service_type}/>
                </div>
                {/*Time input*/}
                <div className ="form-group">
                    <label htmlFor="formGroupExampleInput">Opening time:</label>
                    <input type="text" className ="form-control"   placeholder="Type here ..." name = "open_time" onChange ={this.onChange} value = {open_time}/>
                </div>
                {/*Description input*/}
                <div className ="form-group">
                    <label htmlFor="formGroupExampleInput">Description:</label>
                    <input type="text" className ="form-control"   placeholder="Type here ..." name = "d_desc" onChange ={this.onChange} value = {d_desc}/>
                </div>

                <button type = "submit" className = "btn btn-primary btn-lg btn-block">Submit</button>
            </form>
        </div>
        )
    }
}

export default connect(null, { addCompanies })(Form);
