
import React from 'react';

import Base from './Base';
import PrizeTile from './PrizeTile';

import api from '../scripts/api';

import { currencies } from '../constants';

export default class Prizes extends Base {
    constructor(props) {
        super(props);
        this.state = {
            currencies: [{
                key: 'USD',
                symbol: '$',
                placement: 'before'
            }],
            selectedCurrency: 0
        }
    }
    componentWillMount() {
        api.getExt('https://pub.bitstop.co/mobile/currencies')
        .then(currencies => {
            return currencies.map((c, i) => {
                if (c.key == 'VEF') c.placement = 'after';
                else c.placement = 'before';
                return c;
            })
        })
        .then(currencies => {
            this.setState({ currencies: currencies });
        })
    }
    prizeDetails() {
        const details = [
        {
        place: '1st',
        pic: 'https://s3.amazonaws.com/miamibitcoinhackathon/assets/lottery-2df7f5d39ec2c208febc2c728e98039c6c82b68651662137c69406531940ed6c.svg',
        prize: 15,
        },
        {
        place: '2nd',
        pic: 'https://s3.amazonaws.com/miamibitcoinhackathon/assets/cups17-ca54c031e578dc62b98a1966f4e2c25bac4b0518611ba95ad1ee89ff3ffaf677.svg',
        prize: 5,
        },
        {
        place: '3rd',
        pic: 'https://s3.amazonaws.com/miamibitcoinhackathon/assets/award73-f270adca6cd30abcbc06dd74f0465ec71ce5d24db2c36c5f32677a2298f94e73.svg',
        prize: 2,
        },
        {
        place: '4th',
        pic: 'https://s3.amazonaws.com/miamibitcoinhackathon/assets/medals7-d5947363a8c0c792eafe831f2b22cba7fa00867367e1a86c4fa89c7f065c8240.svg',
        prize: 1.5,
        },
        {
        place: '5th',
        pic: 'https://s3.amazonaws.com/miamibitcoinhackathon/assets/reward2-fbba4a66a919db1703d3af59be6733ca81b38dbf477c7088926629d9a38dac5d.svg',
        prize: 1,
        },
        {
        place: '6th',
        pic: 'https://s3.amazonaws.com/miamibitcoinhackathon/assets/star235-dabdafaf37d00b7aa10bcc615f801cf25d3e929da634cbc66ff6ee61f6a781c6.svg',
        prize: 0.5,
        }
        ]
        return details.map((prize, index) => {
            return(
                <PrizeTile
                    key={'prize' + index}
                    currencies={this.state.currencies}
                    {...prize}
                />
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