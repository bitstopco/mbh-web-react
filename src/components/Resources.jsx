import React from 'react';

import Base from './Base';


export default class Resources extends Base{
    constructor(props) {
        super(props);
        this.autoBind('activate');
        this.state = {
            api: false,
            blockchain: false,
            news: false,
            examples: false
        }
    }
    activate(type) {
        console.log('activate')
        let newState = {...this.state};
        newState[type] = true;
        this.setState(newState);
    }
	render() {
		return ( 
			<div className='Resources column'>
                <div className='container'>
                	<div className='title'> 
                        <h5 className='flex'>Resources</h5>
                        <div className='bar'/>
                    </div>
                 	<div className='resources_container row'>
                 		<div className='api tile column' onClick={this.activate.bind(this, 'api')}>
                 			<div className={'row title ' + (this.state.api && 'active')}>
                 				<div className='icon'/>
                 				<p>API</p>
                 			</div>
                            <ul className={this.state.api && 'active'}>
                                <li>
                                    <a href='https://bitpay.com/api' target= '_blank'>Bitpay</a>
                                </li>
                                <li>
                                    <a href='https://github.com/ledgerhq' target= '_blank'>Ledger</a>
                                </li>
                                <li>
                                    <a href='https://github.com/bitpay/insight-ui' target= '_blank'>insight.is</a>
                                </li>
                                <li>
                                    <a href='https://blockchain.info/api' target= '_blank'>Blockchain.info</a>
                                </li>
                                <li>
                                    <a href='https://developers.coinbase.com/' target= '_blank'> Coinbase</a>
                                </li>
                            </ul>
                 		</div>
                 		<div className='blockchain tile column' onClick={this.activate.bind(this, 'blockchain')}>
                 			<div className={'row title ' + (this.state.blockchain && 'active')}>
                 				<div className='icon'/>
                 				<p>Blockchain</p>
                 			</div>
                            <ul className={this.state.blockchain && 'active'}>
                                <li>
                                    <a href='https://github.com/bitcoin/bitcoin' target= '_blank'> Bitcoin Core</a>
                                </li>
                                <li>
                                  <a href='http://bitcoinjs.org/' target= '_blank'> BitcoinJS</a>
                                </li>
                                <li>
                                  <a href='http://bitcore.io/' target= '_blank'>Bitcore.io</a>
                                </li>
                                <li>
                                  <a href='https://github.com/btcsuite/btcd' target= '_blank'>btcd</a>
                                </li>
                            </ul>
                 		</div>
                 		<div className='examples tile column' onClick={this.activate.bind(this, 'examples')}>
                 			<div className={'row title ' + (this.state.examples && 'active')}>
                 				<div className='icon'/>
                 				<p>Examples</p>
                 			</div>
                            <ul className={this.state.examples && 'active'}>
                                <li><a href='http://setcoins.com' target= '_blank'>Setcoins</a></li>
                            </ul>
                 		</div>
                 		<div className='news tile column' onClick={this.activate.bind(this, 'news')}>
                 			<div className={'row title ' + (this.state.news && 'active')}>
                 				<div className='icon'/>
                 				<p>News</p>
                 			</div>
                            <ul className={this.state.news && 'active'}>
                                <li><a href='http://www.coindesk.com/category/news/' target= '_blank'>Coindesk News</a></li>
                            </ul>
                 		</div>
                 		
                 	</div>
               	</div>
            </div>
		);
	}
	
}