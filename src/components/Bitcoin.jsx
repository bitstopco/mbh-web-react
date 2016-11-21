
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
                        <p>Bitcoin has changed the way we transfer value. Its created the Worlds first decentralized immutable ledger called the Blockchain. Bitcoin’s core code is open source and available to anyone to analyze and audit. The technology of Bitcoin is revolutionary because it allows anyone to parties to exchange value without needing to trust a third party.<br/><br/>

                        By removing trusted third parties, we can conduct transactions without the need to trust one another thereby making transactions of any digital property or value extremely efficient and secure. The Bitcoin network is agnostic and doesn’t care about user’s creed, place of birth, race or status - anyone can use Bitcoin. This provides exceptional potential and opportunities for many revolutionary applications which benefit from Bitcoins immutable ledger.<br/><br/>

                        The Bitcoin ecosystem continues to grow very fast due to its disruptive potential and it’s open protocol. Hundreds of start-ups are building out infrastructure and applications in this space and hundreds of millions of dollars are being invested into ideas and projects surrounding Bitcoin’s blockchain.</p>
                    </div>
                    
                </div>
                
            </div>
		);
	}
	
}