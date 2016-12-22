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
				bio:'Product Architect at <a href="https://bitstop.co">Bitstop.co</a>, Floridas first and largest Bitcoin ATM network. He is responsible for making sure people have the smoothest experience when buying bitcoin with cash. Doug has been involved in the Bitcoin space since 2013 and has a passion for product development and software. He\'s a seasoned entrepreunuer and leader who has co-founded several other multi-million dollar businesses. He enjoys working with developers and keeping up with the latest in Bitcoin protocol development.',
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
            },
            {
                name: 'Alena Vranova',
                position: 'CEO, SatoshiLabs',
                imageUrl: 'https://s28.postimg.org/dqu4sh7gt/alena.jpg',
                bio:'As the Co-Founder and CEO of SatoshiLabs, Alena leads the business development for TREZOR, the hardware wallet. She has over 15 years experience in developing new business, including as Head of External Sales for Komercni Pojistovna, a Société Générale company and as Business Developer for two of the Czech Republic\'s largest financial advisory networks – INSIA and Renomia. </br></br> A polyglot who speaks seven languages, Alena graduated with a Master’s Degree in Marketing Communication and German from Comenius University Bratislava. She also completed Economic Diplomacy at the University College of International and Public Relations Prague focusing on international economy, global trade, monetary system and alternative currencies such as Bitcoin.',
                twitter: '',
                linkedIn: ''
            },
            {
                name: 'Aaron Lasher',
                position: 'CMO, Breadwallet',
                imageUrl: 'https://s23.postimg.org/6eanw4tmz/photo249244906922551722.jpg',
                bio:'Aaron is the Chief Marketing Officer and co-founder of the excellent and popular bitcoin wallet "bread" and Editor of  realvirtualcurrency.com. Aaron has visited over 70 countries and circumnavigated the globe by sailboat, but believes that no adventure compares to the bitcoin revolution. He is easy to find and impossible to shut up once the topic of bitcoin has been breached.',
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
            <div className='JudgesPanel'>
                {this.Panel()}
            </div>
        );
    }
    
}