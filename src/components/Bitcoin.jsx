
import React from 'react';

import Base from './Base';


export default class LandingPage extends Base{
	render() {
		return ( 
			<div className='Bitcoin column'>
                <div className='container column'>
                    <div className='title'> 
                        <h5 className='flex'>Why Bitcoin?</h5>
                        <div className='bar'/>
                    </div>
                    <div className='description'>
                        <p>Bitcoin is the worlds first decentralized digital currency.  It was created with the purpose of providing a monetary system that was transparent, predictable, and which could not be censored. This was achieved by creating open source software which is run by participants all over the world.  For 7 years Bitcoin has given the world something it never had before.  A financial system and infrastructure that was available to all but controlled by none. Once embryonic, the ecosystem is now robust and holds value in excess of 10 billion.  <br/><br/>

                        Bitcoin the currency has grown and matured into a new asset class.  It has proven to be a system with high security and has preserved one of the most important characteristics of all, its permissionless and accessible to anyone and everyone.  Without a centralized gatekeeper, bitcoin has made developing financial services within reach for developers as long as they have access to the internet.  Bitcoin allows people to experiment and make services and applications that can reach millions of users giving them financial services that they would not have otherwise.<br/><br/>

                        Because of the reasons stated above we strongly believe that Bitcoin is quickly becoming a vital part of the global financial infrastructure.  This has been the motivation behind us constantly trying to introduce bitcoin to as many developers as possible.  We truly believe that engineers that are familiar with bitcoin and the blockchain are and will continue to be in high demand for many decades to come. </p>
                    </div>
                    
                </div>
                
            </div>
		);
	}
	
}