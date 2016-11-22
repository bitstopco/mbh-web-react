import React from 'react';

import Base from './Base';

export default class Button extends Base {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='Button column' style={this.props.style} onClick={this.props.onClick}>
                <p className='flex-center'>{this.props.children}</p>
            </div>
        );
    }
}