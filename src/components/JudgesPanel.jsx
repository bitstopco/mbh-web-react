import React from 'react';

import Base from './Base';
import JudgeTile from './JudgeTile';

export default class JudgesPanel extends Base{
	Panel() {
		const judge = [
			{
				name: 'Doug Carillo',
				position: 'Co-Founder, Bitstop',
				imageUrl: 'https://s15.postimg.org/y9rglamon/photo_1.jpg',
				bio:'Product Architect at Bitstop.co Floridas largest Bitcoin ATM network.  He is responsible for making sure people have the smoothest experience when buying bitcoin with cash. He has been in the Bitcoin space since 2013 and has a passion for product development and software.  He is a seasoned entrepreunuer and leader who has led several businesses into 7 figure revenues. ',
				twitter: '',
				linkedIn: ''
			},
			{
				name: 'Joshua Unseth',
				position: '',
				imageUrl: 'https://s22.postimg.org/6ie1ofow1/IMG_20161121_170009.jpg',
				bio:'Also known as Junseth he is the co-host of Bitcoin Uncensored, the most listened to blockchain/Bitcoin podcast. He is one of Florida\'s oldest Bitcoiners. In addition, he is the director of marketing for one of South Florida\'s fastest growing businesses, Alarm Grid.',
				twitter: '',
				linkedIn: ''
			},
            {
                name: 'David Garcia',
                position: 'Co-Founder, BitPagos',
                imageUrl: 'https://s15.postimg.org/gxr3zut7b/Profile_pic_exe.jpg',
                bio:'SVP of BitPagos, the leading bitcoin company in South America. Previous this role David has worked +10 years in the LatAm Fintech industry as the Chief Revenue Officer at Paymentez and as the Mexico General Manager of PayU (Sold to Nasper for $36MM). David has a vast experience in online payment technologies across emerging markets.',
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