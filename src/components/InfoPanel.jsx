import React from 'react';

import Base from './Base';
import RubyLink from './RubyLink';

export default class InfoPanel extends Base{
    render(){
        return ( 
            <div className='InfoPanel'>
                 <div className='info_text'>
                 	<div className='title'>	
                 		<h5>Info</h5>
                 		<span className='bar'/>
                 	</div>
                 	<p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vengiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Deus ute irure dolor in reprehenderit in </p>
                    <RubyLink route='registration'>
                        <button>REGISTER</button>
                    </RubyLink>
                    
                </div>
                <div className='global_box'/>
                <h1 className='global'>GLOBAL</h1>
                <div className='video_container'>
                    <iframe id='video' src="https://www.youtube.com/embed/ZaQaC_hnWWg" frameBorder="0" allowFullScreen/>
                    <div className='video_title'>
                    	<h5 className='recap'>2016 Recap</h5>
                    	<span className='bar'/>
                    </div>
                </div>
            </div>
        );
    }
    
}