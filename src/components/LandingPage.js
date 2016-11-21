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
import Bitcoin from './Bitcoin';
import Sponsors from './Sponsors';
import Resources from './Resources';

export default class LandingPage extends Base{
	render() {
		return ( 
			<div className='LandingPage column'>
                <NavHeader/>
                <div className='landing_splash'/>
                <CodeWindowOverlay/>

                <InfoPanel/>
                <CountDown/>
                <div className='details-container'>
                    <div className='prizes_location column'>
                        <Prizes/>
                        <Location/>
                    </div>
                    <SchedulePanel/>
                </div>
                <div className='create_code row  '>
                    <h5>Create Code, Empower Everyone</h5>
                </div>
                <div className='why_resources_container'>
                    <Bitcoin/>
                    <div className='bitcoin_box'/>
                    <h1 className='bitcon_container'>Codezz</h1>
                    <Resources/>
                </div>
                
                <Sponsors />
                <CriteriaPanel/>
                {
                    // <JudgesPanel/>
                    
                    // <RecapPanel/>   
                }
               
            </div>
		);
	}
	
}