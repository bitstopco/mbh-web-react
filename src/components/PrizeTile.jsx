
import React from 'react';
import { FaCaretDown, FaClose } from 'react-icons/lib/fa';
import Dropdown from 'react-dropdown';
let { DropdownTrigger, DropdownContent } = Dropdown;

import Base from './Base';
import CurrencyItem from './CurrencyItem';

import api from '../scripts/api';

export default class PrizeTile extends Base {
    constructor(props) {
        super(props);
        this.autoBind('openDropdown', 'closeDropdown', 'toggleDropdown', 'formatPrizeWithCurrency');
        this.state = {
            dropdownOpen: false,
            selectedCurrency: props.currencies[0],
            conversionRate: 0
        }
    }
    componentDidMount() {
        this.fetchCurrencyPrice(this.state.selectedCurrency.key);
    }
    fetchCurrencyPrice(key) {
        api.getExt('https://pub.bitstop.co/mobile/data/hourly/1/' + key)
        .then(rateData => {
            this.setState({
                conversionRate: rateData[0].price
            });
        })
    }
    formatPrizeWithCurrency() {
        if(this.state.conversionRate == 0) return '...';

        let { key, symbol, placement } = this.state.selectedCurrency;
        let conversionRate = this.state.conversionRate;
        let formattedCurrencyPrize;

        console.log(this.props.prize * conversionRate)
        if (placement == 'before')
            formattedCurrencyPrize = symbol + '' + (Math.round(this.props.prize * conversionRate));
        else
            formattedCurrencyPrize = (Math.round(this.props.prize * conversionRate)) + ' ' + symbol;
        return formattedCurrencyPrize;
    }
    handleCurrencySelect(key) {
        let newSelection = {...this.state.selectedCurrency};
        this.props.currencies.forEach((c, i) => {
            if(c.key == key) newSelection = c;
        })
        this.fetchCurrencyPrice(key);
        this.setState({
            selectedCurrency: newSelection,
            conversionRate: 0
        })
    }
    openDropdown() {
        this.setState({ dropdownOpen: true });
    }
    closeDropdown() {
        this.setState({ dropdownOpen: false });
    }
    toggleDropdown() {
        this.setState({ dropdownOpen: this.state.dropdownOpen == false });
    }
    render(){
        const imageStyle = {
            backgroundImage: `url('${this.props.pic}')`
        };
        let options = this.props.currencies.map((c, i) => {
            let selected = c.key == this.state.selectedCurrency.key;
            return (
                <CurrencyItem
                    selected={selected}
                    code={c.key}
                    onClick={this.handleCurrencySelect.bind(this, c.key)}
                />
            )
        });

        return ( 
            <div className='PrizeTile column'>
                <div className='pic' style={imageStyle}/>
                <p className='place'>{this.props.place}</p>
                <div className='column'>
                    <p className='amount'>{this.props.prize + ' BTC'}</p>
                </div>
                <div className='currency row-nowrap'>
                    <FaCaretDown size='20' className='buffer-icon'/>
                    <p className='amount-currency'>{this.formatPrizeWithCurrency()}</p>
                    <FaCaretDown
                        size='20'
                        className={'styled-icon' + (this.state.dropdownOpen ? ' flip' : '')}
                        onClick={this.toggleDropdown}
                    />
                </div>
                <div className={'dropdown' + (this.state.dropdownOpen ? ' open' : '')}>
                    {this.state.dropdownOpen && options}
                </div>
                {this.props.extraPrize != null
                    ?
                        <p
                            className='extra'
                            dangerouslySetInnerHTML={{__html: this.props.extraPrize}}
                        />
                    :
                        <p className='extra' />
                }
            </div>   
          
        );
    }
    
}