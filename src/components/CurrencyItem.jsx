import React from 'react';
import FontAwesome from 'react-fontawesome';

import Base from './Base';

export default class CurrencyItem extends Base{
    render(){
        return ( 
            <div
                className={'CurrencyItem row' + (this.props.selected ? ' selected' : '')}
                onClick={this.props.onClick}
            >
                <p>{this.props.code}</p>
            </div>
        );
    }
    
}