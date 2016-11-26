import React from 'react';
import FontAwesome from 'react-fontawesome';

import Base from './Base';
import Faq from './Faq';
import HeaderText from './HeaderText';

const faqs = [
    'Yes, though we have a limit of 5 members per team. You can bring your friends or you can team up with other hackers on site. No matter what you choose, be ready to hack!',
    'No, all code is yours. This hackathon is for you to have some fun, meet great people, do some good -- and have a chance to win $10k.',
    'Expect to stay overnight, so bring whatever you need to get you through a 24 hour hack fest. We\'ll provide some sleep spaces for those who need to crash or when the energy drink starts to ebb. Remember you are in a public forum, so do cover up.',
    'All breeds of code welcome.'
];

export default class FaqPanel extends Base{
    constructor(props) {
        super(props);
    }
    render(){
        return ( 
            <div className='FaqPanel column'>
                <div className='faq-section'>
                    <HeaderText title='FAQs'/>
                    <div className='faq-container row'>
                        <Faq title='Can I bring a team?' body={faqs[0]}/>
                        <Faq title='Do you own my hack?' body={faqs[1]}/>
                        <Faq title='Should I bring my pajamas?' body={faqs[2]}/>
                        <Faq title='What kind of code can I write?' body={faqs[3]}/>
                    </div>
                </div>
                <div className='rules-section'>
                    <HeaderText title='Rules & Terms'/>
                    <div className='rules-container row'>
                        <ol>
                            <li>Participants must be 18 years of age or older unless accompanied by a legal guardian.</li>
                            <li>Eligible participants may participate individually or as a team up to a limit of 5 people per team. A team can be just one person or up to five people.</li>
                            <li>Participants must register on www.MiamiBitcoinHackathon.com before January 13, 2017 9:00 a.m. Eastern Standard Time.</li>
                            <li>Submitted project must incorporate Bitcoin.</li>
                            <li>Each Participant is eligible to receive only one prize from Blockchain Beach, whether individually or as a group.</li>
                            <li>Winners must accept prizes in the form of bitcoin. Conversion rates will be Coinbase spot sell price at the time of transfer.</li>
                            <li>All submitted code must be created between the Twenty-eight (28) hour time period start and stop time. Any participant or team who uses code, which has been created before the hackathon start time will automatically be disqualified.</li>
                            <li>The team’s project must be hosted on Github in a public repo. Your team page must be updated with the repo’s url.</li>
                            <li>Participants can only contribute code toward their respective team and cannot share code, ideas or contribute code towards other teams.</li>
                            <li>By submitting your code, you agree to the <a href='http://register.miamibitcoinhackathon.com/rules'>terms and conditions.</a></li>
                            <li>Blockchain Beach registered agents, directors and officers at the time of this event cannot participate in this hackathon.</li>
                        </ol>
                    </div>
                </div>
                <div className='decentralize_box'/>
                <h1 className='decentralize'>DECENTRALIZE</h1>
            </div>
        );
    }
    
}