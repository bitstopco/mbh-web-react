import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/lib/fa';

import Base from './Base';
import Button from './Button';
import RubyLink from './RubyLink';

export default class Footer extends Base{
    render(){
        return ( 
            <div className='Footer row-nowrap'>
                <RubyLink route='registration'>
                    <Button>REGISTER</Button>
                </RubyLink>
                <div className='row flex-center'>
                    
                    <a href='https://www.youtube.com/channel/UCqM9ETKAa0Eaf6HjwU-3Dxg'>
                        <div className='icon-container flex'>
                            <FaYoutube size='24'/>
                        </div>
                    </a>
                    <a href='https://www.facebook.com/miamibitcoinhackathon/'>
                        <div className='icon-container flex'>
                            <FaFacebook size='24'/>
                        </div>
                    </a>

                    <a href='https://twitter.com/miabitcoinhack'>
                        <div className='icon-container flex'>
                            <FaTwitter size='24'/>
                        </div>
                    </a>

                    
                </div>
                
            </div>
        );
    }
    
}