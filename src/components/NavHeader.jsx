import React from 'react';

import Base from './Base';
import Button from './Button';
import RubyLink from './RubyLink';

export default class NavHeader extends Base{
    handleLearnMore() {

    }
    render(){
        return ( 
            <div className='NavHeader row'>
                <div className='learn column center'>
                    <span>Learn More</span>
                    <span className='learn_bar'/>
                </div>
                <RubyLink route='registration'>
                    <Button>REGISTER</Button>
                </RubyLink>
            </div>
        );
    }
    
}