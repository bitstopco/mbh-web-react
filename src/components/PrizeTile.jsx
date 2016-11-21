
import React from 'react';
import { FaCaretDown } from 'react-icons/lib/fa';
import Dropdown from 'react-dropdown';
let { DropdownTrigger, DropdownContent } = Dropdown;

import Base from './Base';
import CurrencyItem from './CurrencyItem';

export default class PrizeTile extends Base {
    constructor(props) {
        super(props);
        this.autoBind('openDropdown', 'closeDropdown', 'toggleDropdown');
        this.state = {
            dropdownOpen: false
        }
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
            return <CurrencyItem code={c.code}/>
        });

        return ( 
            <div className='PrizeTile column'>
                <div className='pic' style={imageStyle}/>
                <p className='place'>{this.props.place}</p>
                <div>
                    <p className='amount'>{this.props.prize + ' BTC'}</p>
                </div>
                <div className='currency row-nowrap'>
                    <FaCaretDown size='20' className='buffer-icon'/>
                    <p className='amount-currency'>{this.props.formatted}</p>
                    <FaCaretDown size='20' className='styled-icon' onClick={this.toggleDropdown}/>
                </div>
                <div className='dropdown'>
                    {this.state.dropdownOpen && options}
                </div>
            </div>   
          
        );
    }
    
}