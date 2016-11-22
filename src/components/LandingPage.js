import React from 'react';
import { Link, Element, Events, animateScroll, scroller, scrollSpy } from 'react-scroll';

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
import FaqPanel from './FaqPanel';
import Footer from './Footer';
import RegisterOverlay from './RegisterOverlay';

export default class LandingPage extends Base{
    constructor(props) {
        super(props);
        this.autoBind('showOverlay', 'dismissOverlay');
        this.state = {
            showObserverRegistration: false
        }
    }
    componentDidMount() {
        Events.scrollEvent.register('begin', function(to, element) {
              console.log("begin", arguments);
            });

            Events.scrollEvent.register('end', function(to, element) {
              console.log("end", arguments);
            });

            scrollSpy.update();
    }
    handleLearnMoreScroll() {
        console.log('handleLearnMoreScroll')
        animateScroll.scrollToBottom();
    }
    showOverlay() {
        console.log('showOverlay')
        this.setState({ showObserverRegistration: true });
    }
    dismissOverlay() {
        console.log('dismissOverlay')
        this.setState({ showObserverRegistration: false });
    }
	render() {
		return ( 
			<div className='LandingPage column'>
                <RegisterOverlay
                    hidden={!this.state.showObserverRegistration}
                    dismissOverlay={this.dismissOverlay}
                />
                <NavHeader handleLearnMoreScroll={this.handleLearnMoreScroll}/>
                <div className='landing_splash'/>
                <CodeWindowOverlay/>

                <InfoPanel handleObserverRegister={this.showOverlay}/>
                <CountDown/>
                <div className='details-container'>
                    <div className='prizes_location column'>
                        <Prizes/>
                        <Location/>
                    </div>
                    <SchedulePanel/>
                </div>
                <div className='create_code row'>
                    <h5>Create Code, Empower Everyone</h5>
                </div>
                <Element name='learn_more_anchor'>
                    <div className='why_resources_container'>
                        <Bitcoin/>
                        <div className='bitcoin_box'/>
                        <h1 className='bitcon_container'>Codezz</h1>
                        <Resources/>
                    </div>
                </Element>
                
                
                <Sponsors />
                <CriteriaPanel/>
                <JudgesPanel/>
                <FaqPanel/>

                <Footer/>
               
            </div>
		);
	}
	
}