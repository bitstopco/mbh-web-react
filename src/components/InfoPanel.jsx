import React from 'react';

import Base from './Base';
import RubyLink from './RubyLink';

export default class InfoPanel extends Base{
    render(){
        return ( 
            <div className='InfoPanel'>
                 <div className='info_text'>
                 	<div className='title'>	
                 		<h5>Info</h5>
                 		<span className='bar'/>
                 	</div>
                 	<p className='text'>For three straight years it has been our singular focus to throw the best hackathon in the Bitcoin space. We are excited as ever to kick-off The Miami Bitcoin Hackathon 2017. The Bitcoin ecosystem is starting to mature and it's easier than ever to build apps using Bitcoin. As the world struggles with currency wars and political turmoil, Bitcoin just keeps propelling forward with all time highs and a robust development community. We invite you to participate in an experience that will leave you with a new profound appreciation of the power of crypto currency. Join us as we continue the tradition of hacking software that can change the world.</p>
                    <div className='register-buttons row'>
                        <RubyLink route='registration'>
                            <p>Participants</p>
                            <button>REGISTER</button>
                        </RubyLink>
                        <div className='column observers'>
                            <p>Observers</p>
                            <button onClick={this.props.handleObserverRegister}>REGISTER</button>
                        </div>
                    </div>
                    
                    
                </div>
                <div className='global_box'/>
                <h1 className='global'>GLOBAL</h1>
                <div className='video_container'>
                    <iframe id='video' src="https://www.youtube.com/embed/ZaQaC_hnWWg" frameBorder="0" allowFullScreen/>
                    <div className='video_title'>
                    	<h5 className='recap'>2016 Recap</h5>
                    	<span className='bar'/>
                    </div>
                </div>
            </div>
        );
    }
    
}