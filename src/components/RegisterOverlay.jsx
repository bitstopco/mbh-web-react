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
            name: 'Oscar',
            email: 'oscar@setmusic.co',
            error: null
        };
    }
    handleRegistration() {
        console.log(this.state);
        api.post('http://miamibitcoinhackathon.com/observers', {
            'observer[email]': this.state.email,
            'observer[name]': this.state.name
        })
        .then(data => {
            console.log('postdaata')
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    render() {
        let link = new ReactLink(this);

        return ( 
            <div className={'RegisterOverlay column' + (this.props.hidden ? ' wtf' : '')}>
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
            </div>
        );
    }
    
}