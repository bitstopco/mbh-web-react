import React from 'react';

import Base from './Base';
import JudgeTile from './JudgeTile';

export default class JudgesPanel extends Base{
	Panel() {
		const judge = [
			{
				name: 'Doug Carillo',
				position: 'Co-Founder, Bitstop',
				imageUrl: 'https://bitcoin.org/img/icons/opengraph.png',
				bio:'Satoshi Nakamoto is the name used by the person or people who designed bitcoin and created its original reference implementation, Bitcoin Core (formerly known as Bitcoin-Qt).[1] As a part of the implementation, they also devised the first blockchain database. ',
				twitter: '',
				linkedIn: ''
			},
			{
				name: 'Joshua Unseth',
				position: '',
				imageUrl: 'https://s22.postimg.org/6ie1ofow1/IMG_20161121_170009.jpg',
				bio:'Satoshi Nakamoto is the name used by the person or people who designed bitcoin and created its original reference implementation, Bitcoin Core (formerly known as Bitcoin-Qt).[1] As a part of the implementation, they also devised the first blockchain database. ',
				twitter: '',
				linkedIn: ''
			}
		];
		return judge.map((judge, index) => {
			return(
				<JudgeTile {...judge} key={index} />
			);
		})
	}
    render(){
        return ( 
            <div className='JudgesPanel row-nowrap'>
                {this.Panel()}
            </div>
        );
    }
    
}