import React from 'react';

import Base from './Base';


export default class SponsorsTile extends Base{
	constructor(props) {
		super(props)
	}
    render(){
    	console.log(this.props)
    	const imageStyle = {
            backgroundImage: `url('${this.props.pic}')`
        };
        return ( 
            <a href={this.props.url} className='SponsorsTile column'>
                <div className='tile_photo' style={imageStyle}/>
            </a>
        );
    }
    
}