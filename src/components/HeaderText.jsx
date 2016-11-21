import React from 'react';

import Base from './Base';

export default class HeaderText extends Base{
    constructor(props) {
        super(props);
    }
    render(){
        return ( 
            <div className='HeaderText column'>
                <h6>{this.props.title}</h6>
            </div>
        );
    }
    
}