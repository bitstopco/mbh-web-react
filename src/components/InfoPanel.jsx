import React from 'react';

import Base from './Base';


export default class InfoPanel extends Base{
    render(){
        return ( 
            <div className='InfoPanel row'>
                 <div className='info_text column'>
                 	<div className='title'>	
                 		<p>Loren</p>
                 		<span className='bar'/>
                 	</div>
                 	<p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vengiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Deus ute irure dolor in reprehenderit in </p>
                 	<button>Register</button>
                    <div className='global'>
                        <div className='global_box'/>
                        <h1>GLOBAL</h1>
                    </div>
                </div>
                 <div className='column video_container'>
                    <iframe id='video'   src="https://www.youtube.com/embed/-l9TvM7cuJg" frameBorder="0" allowFullScreen/>
                    <div>
                    	<p className='recap'>2016 Recap</p>
                    	<span className='bar'/>
                    </div>
                </div>
            </div>
        );
    }
    
}