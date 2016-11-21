
import React from 'react';
import FontAwesome from 'react-fontawesome';


import Base from './Base';

export default class JudgeTile extends Base{
	constructor(props) {
		super(props);
	}
    render(){
    	console.log(this.props)
        return ( 
            <div className='JudgesTiles row'>
                <div className='photo_container'/>
                <div className='info_container column'>

                	<p className='position'>{this.props.position}</p>
                	<div className='name'>
                		<p>{this.props.name}</p>
                		<span className='bar'/>
                	</div>
                	<p className='bio'>{this.props.bio}</p>
                	
                	<p className='company'>{this.props.company}</p>
                </div>
            </div>
        );
    }
    
}