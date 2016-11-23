import React from 'react';

import Base from './Base';


export default class CriteriaPanel extends Base{
    render(){
        return ( 
            <div className='CriteriaPanel '>
            	<div className='root_container column '>
            		<p className='header'>Criteria</p>

	                <div className='text_container '>

	                	<div  className='box column'>
	                		<div className='title column'>	
			             		<p>Creativity</p>
			             		<span className='bar'/>
			                </div>
			                <p className=''>Another bitcoin wallet may not add much wow factor for your team without unique & innovative features. How could bitcoin reduce friction in gaming or paywalls?</p>
	                	</div>
	                	
	                	<div className='box column'>
	                		<div className='title column'>	
			             		<p>Product</p>
			             		<span className='bar'/>
			                </div>
			                <p className=''>Does the application make bitcoin more user friendly and approachable? Can the application make bitcoin go viral or much easier to use?</p>
	                	</div>
	                	
	                	<div className='box column'>
	                		<div className='title column'>	
			             		<p>Execution</p>
			             		<span className='bar'/>
			                </div>
			                <p className=''>The devil is in the details. Does the application work well? Does it provide a good experience to the user? Does the UX feel as good as the UI looks?</p>
	                	</div>
	                </div>

	                <p className='header'>Judges</p>
            	</div>
            </div>
        );
    }
    
}