import React from 'react';

import Base from './Base';
import JudgeTile from './JudgeTile';

export default class JudgesPanel extends Base{
	Panel() {
		const judge = [
			{
				name: 'Satoshi Nakamoto',
				position: 'Founder',
				bio:'Satoshi Nakamoto is the name used by the person or people who designed bitcoin and created its original reference implementation, Bitcoin Core (formerly known as Bitcoin-Qt).[1] As a part of the implementation, they also devised the first blockchain database. ',
				twitter: '',
				linkedIn: '',
				company: 'Bitcoin',
			},
			{
				name: 'Satoshi Nakamoto',
				position: 'Founder',
				bio:'Satoshi Nakamoto is the name used by the person or people who designed bitcoin and created its original reference implementation, Bitcoin Core (formerly known as Bitcoin-Qt).[1] As a part of the implementation, they also devised the first blockchain database. ',
				twitter: '',
				linkedIn: '',
				company: 'Bitcoin',
			},
			{
				name: 'Satoshi Nakamoto',
				position: 'Founder',
				bio:'Satoshi Nakamoto is the name used by the person or people who designed bitcoin and created its original reference implementation, Bitcoin Core (formerly known as Bitcoin-Qt).[1] As a part of the implementation, they also devised the first blockchain database. ',
				twitter: '',
				linkedIn: '',
				company: 'Bitcoin',
			},
			{
				name: 'Satoshi Nakamoto',
				position: 'Founder',
				bio:'Satoshi Nakamoto is the name used by the person or people who designed bitcoin and created its original reference implementation, Bitcoin Core (formerly known as Bitcoin-Qt).[1] As a part of the implementation, they also devised the first blockchain database. ',
				twitter: '',
				linkedIn: '',
				company: 'Bitcoin',
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