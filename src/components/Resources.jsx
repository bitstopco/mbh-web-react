

import React from 'react';

import Base from './Base';


export default class Resources extends Base{
	render() {
		return ( 
			<div className='Resources column'>
                <div className='container'>
                	<div className='title'>	
                 		<p className=''>Resources</p>
                 		<span className='bar'/>
                 	</div>
                 	<div className=' resources_container row'>

                 		<div className='api tile column'>
                 			<div className='row title'>
                 				<div className='icon'/>
                 				<p>API</p>
                 			</div>
                 		</div>

                 		<div className='blockchain tile column'>
                 			<div className='row title'>
                 				<div className='icon'/>
                 				<p>Blockchain</p>
                 			</div>
                 		</div>

                 		<div className='examples tile column'>
                 			<div className='row title'>
                 				<div className='icon'/>
                 				<p>Examples</p>
                 			</div>
                 		</div>
                 		
                 		<div className='news tile column'>
                 			<div className='row title'>
                 				<div className='icon'/>
                 				<p>News</p>
                 			</div>
                 		</div>
                 		
                 	</div>
               	</div>
            </div>
		);
	}
	
}