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
                <div className='column'>
                    <h6>Miami</h6>
                    <h6 className='bitcoin'>Bitcoin</h6>
                    <h6>Hackathon</h6>
                </div>
                <div className='flex'/>
                <div
                    className='learn-more column'
                    onClick={this.handleLearnMore}
                >
                    <div className='flex'/>
                    <p className='flex-center'>Learn More</p>
                    <div className='line flex-center'/>
                    <div className='flex'/>
                </div>
                <RubyLink route='registration'>
                    <Button>REGISTER</Button>
                </RubyLink>
            </div>
        );
    }
    
}