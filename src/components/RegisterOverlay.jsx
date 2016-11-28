import React from 'react';

import Base from './Base';
import Button from './Button';

import ReactLink from '../scripts/ReactLink';
import api from '../scripts/api';

export default class RegisterOverlay extends Base{
    constructor(props) {
        super(props);
        this.autoBind('handleRegistration');
        this.state = {
            name: '',
            email: '',
            error: '',
            success: false
        };
    }
    handleRegistration() {
        console.log(this.state);
        var postData = new FormData();
        postData.append('observer[email]', this.state.email);
        postData.append('observer[name]', this.state.name);

        // api.postExt('http://register.miamibitcoinhackathon.com/observers', postData)
        api.postExt('http://miamibitcoinhackathon.com:3000/observers', postData)
        .then(data => {
            console.log('postdaata')
            console.log(data);
            this.setState({ success: true });
        })
        .catch(err => {
            console.log('err')

            console.log(err);
            this.setState({
                error: 'An error occurred. Please try again later.'
            });
        })
    }
    render() {
        let link = new ReactLink(this);

        return ( 
            <div className={'RegisterOverlay column' + (this.props.hidden ? ' hide' : '')}>
                {this.state.success ?
                    <div className='window column success'>
                        <p>Email registered successfully</p>
                        <Button
                            rounded
                            style={{ backgroundColor: '#ff0098' }}
                            onClick={this.props.dismissOverlay}
                        >
                            <span style={{color: '#ffffff'}}>Okay</span>
                        </Button>
                    </div>
                    :
                    <div className='window column'>
                        <h6>Observer Registration</h6>
                        <div className='field-container'>
                            <div className='field row'>
                                <p>Name</p>
                                <input type='text' valueLink={link('name')}/>
                            </div>
                            <div className='field row'>
                                <p>Email</p>
                                <input type='text' valueLink={link('email')}/>
                            </div>
                        </div>
                        <div className='error'>{this.state.error}</div>
                        <div className='button-container row'>
                            <Button
                                style={{ backgroundColor: '#eeeeee' }}
                                onClick={this.props.dismissOverlay}
                            >
                                <span style={{color: '#313542'}}>Cancel</span>
                            </Button>
                            <span/>
                            <Button onClick={this.handleRegistration}>Register</Button>
                        </div>
                    </div>
                }
                
            </div>
        );
    }
    
}