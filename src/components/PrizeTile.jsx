
import React from 'react';

import Base from './Base';


export default class PrizeTile extends Base {
	constructor(props) {
		super(props)
	}
    render(){
    	const imageStyle = {
            backgroundImage: `url('${this.props.pic}')`
        };
    	console.log(this.props)
        return ( 
            <div className='PrizeTile column'>
            	  <div className='pic' style={imageStyle}/>
            	  <p className='place'>{this.props.place}</p>
            	  <p >{this.props.prize}</p>
            </div>   
          
        );
    }
    
}