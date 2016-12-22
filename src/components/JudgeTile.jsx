
import React from 'react';
import FontAwesome from 'react-fontawesome';


import Base from './Base';

export default class JudgeTile extends Base{
	constructor(props) {
		super(props);
	}
    render(){
        const imageStyle = {
            backgroundImage: `url('${this.props.imageUrl}')`
        };

        return ( 
            <div className='JudgesTiles column'>
                <div className='photo_container'>
                    <div className='image' style={imageStyle}/>
                </div>
                <div className='info_container column'>

                	<p className='position'>{this.props.position}</p>
                	<div className='name'>
                		<p><a target='_blank' href={this.props.twitter}>{this.props.name}</a></p>
                		<span className='bar'/>
                	</div>
                	<p
                        className='bio'
                        dangerouslySetInnerHTML={{__html: this.props.bio}}
                    />
                
                </div>
            </div>
        );
    }
    
}