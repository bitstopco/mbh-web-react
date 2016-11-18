import React from 'react';

import Base from './Base';
import CodeWindowOverlay from './CodeWindowOverlay';
import CriteriaPanel from './CriteriaPanel';
import InfoPanel from './InfoPanel';
import JudgesPanel from './JudgesPanel';
import NavHeader from './NavHeader';
import RecapPanel from './RecapPanel';
import SchedulePanel from './SchedulePanel';


export default class LandingPage extends Base{
	render(){
		return ( 
			<div className='LandingPage'>
                <NavHeader/>
                <CodeWindowOverlay/>
                <InfoPanel/>
                <SchedulePanel/>
                <JudgesPanel/>
                <CriteriaPanel/>
                <RecapPanel/>
            </div>
		);
	}
	
}