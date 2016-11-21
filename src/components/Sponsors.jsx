import React from 'react';

import Base from './Base';
import SponsorsTile from './SponsorsTile';

export default class Sponsors extends Base{

    sponsorTiles() {
        const sponsors = [
            {
                url: 'http://bitstop.co/',
                pic: 'http://s3.amazonaws.com/miamibitcoinhackathon/assets/sponsors/blockchain_beach-2b80d078a6b5647fa07f942aa3d8c3598dfb691de95f4e6148df121140b27271.png',
            },
            {
                url: 'http://bitstop.co/',
                pic: 'http://s3.amazonaws.com/miamibitcoinhackathon/assets/bitstop-972a58e049a548f687aa8501317c3329e4247a6789ced5ce7ed4be6494a3e112.png'
            },
            {
                url: 'http://www.thelabmiami.com/',
                pic: 'http://s3.amazonaws.com/miamibitcoinhackathon/assets/sponsors/lab_miami-eafb7e788b6682bb12e70aec5eb6693152ea142b18ed34e2270507bd49fa27ff.png',
            },
             {
                url: 'https://www.bitcointrezor.com/',
                pic: ' http://s3.amazonaws.com/miamibitcoinhackathon/assets/trezor-logo-2cedffbd9d34647f88d8832b8b887a7972ed036662db06d68a321de91708817d.png',
            },
            {
                url: 'https://www.ledgerwallet.com/',
                pic: ' http://s3.amazonaws.com/miamibitcoinhackathon/assets/ledger-vert-logo-1048387edba10f81a2bb7a1b0cff15c8976a997aa0cf2a8438ff9bb30966bbb1.png',
            },
            {
                url: 'https://www.breadwallet.com/',
                pic: ' http://s3.amazonaws.com/miamibitcoinhackathon/assets/breadwallet-5d4b960c67334dbe53fa65a1b55bc1ae9a646359db31f47e9b9406e7669ba5af.png',
            },
            {
                url: 'https://www.pollotropical.com/',
                pic: ' http://s3.amazonaws.com/miamibitcoinhackathon/assets/pollo-78f14761c43c9edbf0fbd4aeb7b5a31f3fd250f4bf3a3db2768b279aafe024dd.png',
            },
            {
                url: 'https://www.knightfoundation.com/',
                pic: ' http://s3.amazonaws.com/miamibitcoinhackathon/assets/sponsors/knight-076dc6e9d58216c3b5b38341978ad3cd950f42b545a705b37803762591a1c9b5.png',
            },
            {
                url: 'https://www.kindsnacks.com/',
                pic: 'http://s3.amazonaws.com/miamibitcoinhackathon/assets/kindbar-aa4a6cb9fa61c75d50b26ff6e5889c2ecd8b9555b0c9c5658c76f9653edd6532.png',
            }

        ];

        return sponsors.map((tile, index) => {
            return(
                <SponsorsTile key={index} {...tile}/>
            );
        })
    }
    render(){
        return ( 
            <div className='Sponsors column'>
                 <div className='title column'>	
             		<p>Sponsors & Partners</p>
             		<span className='bar'/>
                </div>
                <div className='sponsors_container row'>
                    {this.sponsorTiles()}
                </div>
            </div>
        );
    }
    
}