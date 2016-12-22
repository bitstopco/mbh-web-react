import React from 'react';
import Link from 'react-router/lib/Link';

import Base from './Base';

import { RUBY_ROOT } from '../constants';

export default class RubyLink extends Base {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'RubyLink row center ' + this.props.route}>
                <a href={RUBY_ROOT + this.props.route}>{this.props.children}</a>
            </div>
        );
    }
}