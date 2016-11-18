import React from 'react';

import Base from './Base';
import CodeWindowOverlay from './CodeWindowOverlay';
import CriteriaPanel from './CriteriaPanel';
import InfoPanel from './InfoPanel';
import JudgesPanel from './JudgesPanel';
import NavHeader from './NavHeader';
import RecapPanel from './RecapPanel';
import SchedulePanel from './SchedulePanel';
import Prizes from './Prizes';

export default class LandingPage extends Base{
	render(){
		return ( 
			<div className='LandingPage column'>
                <NavHeader/>
                <div className='landing_splash'/>
                <CodeWindowOverlay/>
                <InfoPanel/>
                <div className='row'>
                    <Prizes/>
                    <SchedulePanel/>
                </div>
                
                {
                    // <JudgesPanel/>
                    // <CriteriaPanel/>
                    // <RecapPanel/>   
                }
               
            </div>
		);
	}
	
}