
import React from 'react';

import Base from './Base';
import PrizeTile from './PrizeTile'

export default class Prizes extends Base {

    prizeDetails() {
      const details = [
          {
            place: '1st',
            pic: '',
            prize: 10000,
          },
          {
            place: '2nd',
            pic: '',
            prize: 10000,
          },
          {
            place: '3rd',
            pic: '',
            prize: 10000,
          },
          {
            place: '4th',
            pic: '',
            prize: 10000,
          },
          {
            place: '5th',
            pic: '',
            prize: 10000,
          },
          {
            place: '6th',
            pic: '',
            prize: 10000,
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