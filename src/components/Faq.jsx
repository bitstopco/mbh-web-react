import React from 'react';

import Base from './Base';

export default class Faq extends Base {

    render(){
        return ( 
          
            <div className='Faq column'>
                <h6>{this.props.title}</h6>
                <p>{this.props.body}</p>
            </div>
           
        );
    }
    
}