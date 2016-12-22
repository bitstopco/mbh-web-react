import React from 'react';

import Base from './Base';


export default class SchedulePanel extends Base{
    render(){
        return ( 
            <div className='SchedulePanel column'>
                <div className='column title_text'>
                    <p className='title'>Schedule</p>
                    <div className='bar'/>
                    <span>26 hours of hacking</span>
                </div>
                <div className='day_one row'>
                	<div className='text_container column'>
                	    <p className='date'>Jan 13th</p>
                	    <p className='day_title'>Day 1</p>
                	    <p>@ LAB Miami</p>
                	    <p className='blue_text'>7:30PM - 9:00PM</p>
                	    <p>Keynote Speaker - <a target='_blank' href='https://twitter.com/ToneVays'>Tony Vays</a></p>
                	</div>
                </div>
                <div className='row'>
                	<div className='day_two column'>
                		<div className='text_container column'>
                			<p className='date'>Jan 14th</p>
                	    	<p className='day_title'>Day 2</p>
                	    	<p>@ LAB Miami</p>
                	    	<p className='blue_text'>6:30AM</p>
                	    	<p>Arrive (Participant Registration)</p>
                	    	<p className='blue_text'>7:00AM</p>
                	    	<p>Breakfast</p>
                	    	<p className='blue_text'>9:00AM</p>
                	    	<p>Begin Hacking</p>
                	    	<p className='blue_text'>1:00PM</p>
                	    	<p>Lunch</p>
                	    	<p className='blue_text'>7:00PM</p>
                	    	<p>Dinner</p>
                		</div>
                	</div>
                	<div className='day_three column'>
                		<div className='text_container column'>
                			<p className='date'>Jan 15th</p>
                	    	<p className='day_title'>Day 3</p>
                	    	<p>@ LAB Miami</p>
                	    	<p className='blue_text'>7:00AM</p>
                	    	<p>Breakfast</p>
                	    	<p className='blue_text'>11:00AM</p>
                	    	<p>Hacking Ends</p>
                	    	<p className='blue_text'>11:30AM</p>
                	    	<p>Presentations</p>
                	    	<p className='blue_text'>1:00PM</p>
                	    	<p>Judging & Awards</p>

                		</div>
                	</div>
                </div>
                <div className='buffer'/>
            </div>
        );
    }
    
}