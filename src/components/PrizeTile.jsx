
import React from 'react';
import { FaCaretDown } from 'react-icons/lib/fa';

import Base from './Base';


export default class PrizeTile extends Base {
    constructor(props) {
        super(props)
    }
    render(){
        const imageStyle = {
            backgroundImage: `url('${this.props.pic}')`
        };
        return ( 
            <div className='PrizeTile column'>
                <div className='pic' style={imageStyle}/>
                <p className='place'>{this.props.place}</p>
                <div className='row-nowrap'>
                    <FaCaretDown size='20' className='buffer-icon'/>
                    <p className='amount'>{this.props.formatted}</p>
                    <FaCaretDown size='20' className='styled-icon'/>
                </div>
            </div>   
          
        );
    }
    
}