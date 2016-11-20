
import React from 'react';

import Base from './Base';


export default class LandingPage extends Base{
	render() {
		return ( 
			<div className='Bitcoin row'>
                <div className='why column'>
                	<div className='column'>	
                 		<p className='title'>Why Bitcoin</p>
                 		<span className='bar'/>
                 	</div>
                 	<div className='description'>
                 		<p>Bitcoin Bitcoin Bitcoin Bitcoin Bitcoin Bitcoin Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin  Bitcoin Bitcoin Bitcoin </p>
                 	</div>
                 	<div className='bitcon_container'>
                 		<div className='bitcoin_box'/>
                 		<h1>Bitcoin</h1>
                 	</div>
                </div>
                <div className='resources'>
                	<div className='column'>	
                 		<p className='title'>Resources</p>
                 		<span className='bar'/>
                 	</div>
                 	<div className=' resources_container row'>
                 		<div className='api tile column'>
                 			<div>
                 				<div className=''/>
                 				<p>API</p>
                 			</div>
                 		</div>
                 		<div className='blockchain tile column'>
                 			<div>
                 				<div className=''/>
                 				<p>Blockchain</p>
                 			</div>
                 		</div>
                 		<div className='news tile column'>
                 			<div>
                 				<div className=''/>
                 				<p>News</p>
                 			</div>
                 		</div>
                 		<div className='examples tile column'>
                 			<div>
                 				<div className=''/>
                 				<p>Examples</p>
                 			</div>
                 		</div>
                 	</div>
                </div>
            </div>
		);
	}
	
}