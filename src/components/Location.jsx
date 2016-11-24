
import React from 'react';

import Base from './Base';


export default class Location extends Base {

    render(){
        return ( 
          
              	<div className='Location column'>
              		<div className='column title_text'>
              			  <p className='title'>Location</p>
              			  <div className='bar'/>
              		</div>
              		<div className='loc'>
              			<div className='location_text'>
              				<p className='bold'>LAB MIAMI</p>
              				<p>400 NW 26th Street Miami, FL 33127 United States</p>
              			</div>
              			<iframe
      						      className='map'
      						      frameBorder="0" style={{border:0}}
      						      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCh2rmERyciscqDTzixsrq5vofpuWQ-lwg
      						      &q=400+NW+26TH+St,Miami+FL&zoom=10" 
      						      allowFullScreen
      					    >
						</iframe>
              		</div>
              		
              	</div>
           
        );
    }
    
}