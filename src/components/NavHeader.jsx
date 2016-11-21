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
                <div className='title_container column'>
                    <h1 className='title pink'>Miami</h1>
                    <h1 className='title blue'>Bitcoin</h1>
                    <h1 className='title pink'>Hackathon</h1>
                </div>
                <div className='row'>
                    <div className='learn column'>
                        <span>Learn More</span>
                        <span className='learn_bar'/>
                    </div>
                    <RubyLink route='registration'>
                        <Button>REGISTER</Button>
                    </RubyLink>  
                </div>
                
            </div>
        );
    }
    
}