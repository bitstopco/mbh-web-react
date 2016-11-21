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
import Location from './Location';
import CountDown from './CountDown';

export default class LandingPage extends Base{
	render() {
		return ( 
			<div className='LandingPage column'>
                <NavHeader/>
                <div className='landing_splash'/>
                <CodeWindowOverlay/>

                <InfoPanel/>
                <CountDown/>
                <div className='row'>
                    <div className='prizes_location column'>
                         <Prizes/>
                         <Location/>
                    </div>
                    <SchedulePanel/>
                </div>
                <div className='create_code row  '>
                    <span>Create Code, Empower Everyone</span>
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