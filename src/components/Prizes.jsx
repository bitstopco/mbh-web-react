
import React from 'react';

import Base from './Base';
import PrizeTile from './PrizeTile'

export default class Prizes extends Base {

    prizeDetails() {
      const details = [
          {
            place: '1st',
            pic: 'http://s3.amazonaws.com/miamibitcoinhackathon/assets/lottery-2df7f5d39ec2c208febc2c728e98039c6c82b68651662137c69406531940ed6c.svg',
            prize: '$10K in BTC',
          },
          {
            place: '2nd',
            pic: 'http://s3.amazonaws.com/miamibitcoinhackathon/assets/cups17-ca54c031e578dc62b98a1966f4e2c25bac4b0518611ba95ad1ee89ff3ffaf677.svg',
            prize: '10k in BTC',
          },
          {
            place: '3rd',
            pic: 'http://s3.amazonaws.com/miamibitcoinhackathon/assets/award73-f270adca6cd30abcbc06dd74f0465ec71ce5d24db2c36c5f32677a2298f94e73.svg',
            prize: '10K in BTC',
          },
          {
            place: '4th',
            pic: 'http://s3.amazonaws.com/miamibitcoinhackathon/assets/medals7-d5947363a8c0c792eafe831f2b22cba7fa00867367e1a86c4fa89c7f065c8240.svg',
            prize: '10k in BTC',
          },
          {
            place: '5th',
            pic: 'http://s3.amazonaws.com/miamibitcoinhackathon/assets/reward2-fbba4a66a919db1703d3af59be6733ca81b38dbf477c7088926629d9a38dac5d.svg',
            prize: '10K in BTC',
          },
          {
            place: '6th',
            pic: 'http://s3.amazonaws.com/miamibitcoinhackathon/assets/star235-dabdafaf37d00b7aa10bcc615f801cf25d3e929da634cbc66ff6ee61f6a781c6.svg',
            prize: '10K in BTC',
          }
      ]
      return details.map((prize, index) => {
          return(
              <PrizeTile {...prize}/>
          );
      })
    }
    render(){
        return ( 
              <div className='Prizes column'>
                  <div className='column title_text'>
                      <p className='title'>Prizes</p>
                      <div className='bar'/>
                  </div>
                  <div className='prize_details row'>
                     {this.prizeDetails()}
                  </div>
              </div>   
          
        );
    }
    
}