import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import messages from '../../reducers/messages';

export class Alerts extends Component {
    static propTypes = {
        error:PropTypes.object.isRequired,
        message:PropTypes.object.isRequired,
    }
    componentDidUpdate(prevPros){
        const { error,alert,message } = this.props;
        if(error !== prevPros.error){
            if(error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
            if(error.msg.b_address) alert.error(`Address: ${error.msg.b_address.join()}`);
            if(error.msg.b_city) alert.error(`City: ${error.msg.b_city.join()}`);
            if(error.msg.b_postal) alert.error(`Postal code: ${error.msg.b_postal.join()}`);
            if(error.msg.b_province) alert.error(`Province: ${error.msg.b_province.join()}`);
            if(error.msg.c_phone) alert.error(`Phone: ${error.msg.c_phone.join()}`);
            if(error.msg.c_email) alert.error(`Email: ${error.msg.c_email.join()}`);
            if(error.msg.service_type) alert.error(`Service type: ${error.msg.service_type.join()}`);
            if(error.msg.open_time) alert.error(`Opening time: ${error.msg.open_time.join()}`);
            if(error.msg.d_desc) alert.error(`Description: ${error.msg.d_desc.join()}`);
        }
        if(message !== prevPros.message){
            if(message.addCompany) alert.success(message.addCompany);
        
            if(message.deleteCompany) alert.success(message.deleteCompany);
        }
    }

    render() {
        return (
        
            <Fragment />
        )
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts))  
