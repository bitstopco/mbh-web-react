import React from 'react';
import FontAwesome from 'react-fontawesome';

import Base from './Base';

export default class CurrencyItem extends Base{
    render(){
        console.log(this.props)
        return ( 
            <div className='CurrencyItem row'>
                <p>{this.props.code}</p>
            </div>
        );
    }
    
}