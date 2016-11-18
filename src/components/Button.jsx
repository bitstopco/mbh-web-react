import React from 'react';

import Base from './Base';

export default class Button extends Base {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='Button column center' style={this.props.style}>
                <p className='flex-center'>{this.props.children}</p>
            </div>
        );
    }
}