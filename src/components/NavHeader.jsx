import React from 'react';

import Base from './Base';
import Button from './Button';
import RubyLink from './RubyLink';

export default class NavHeader extends Base{
    render(){
        console.log(this.props);
        return (
            <div className='NavHeader'>
                <div className='title_container column'>
                    <h1 className='title pink'>Miami</h1>
                    <h1 className='title blue'>Bitcoin</h1>
                    <h1 className='title pink'>Hackathon</h1>
                </div>
                <div className='nav-buttons row'>
                    <div className='learn column hidden' onClick={this.props.handleLearnMoreScroll}>
                        <span>Learn More</span>
                        <span className='learn_bar'/>
                    </div>
                    <RubyLink route='registration'>
                        <Button>REGISTER</Button>
                    </RubyLink>
                </div>
                <RubyLink route='signin'>
                    <Button>SIGN IN</Button>
                </RubyLink>
                
            </div>
        );
    }
    
}