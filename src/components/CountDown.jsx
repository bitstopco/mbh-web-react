import React from 'react';
import moment from 'moment';

import Base from './Base';

const pad = function(n) {
    return (n < 10) ? '0' + n.toString() : n.toString()
}
export default class CountDown extends Base{
    constructor(props) {
        super(props);
        this.autoBind('tick');
        this.state = {
            secondsRemaining: 0
        }
    }
    componentDidMount() {
        console.log(moment('2017-01-22').diff(moment(), 'seconds'))
        this.setState({ secondsRemaining: moment('2017-01-22').diff(moment(), 'seconds') });
        this.interval = setInterval(this.tick, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    tick() {

        this.setState({ secondsRemaining: this.state.secondsRemaining - 1 });
        if (this.state.secondsRemaining <= 0) {
            clearInterval(this.interval);
        }
    }
	render() {

        let timeUntil = moment.duration(this.state.secondsRemaining * 1000);
        let days = Math.floor(timeUntil.asDays());
        let hours = timeUntil.hours();
        let minutes = timeUntil.minutes();
        let secs = timeUntil.seconds();

		return ( 
			<div className='CountDown row'>
                <p>
                    {pad(days) + ':' + pad(hours) + ':' + pad(minutes) + ':' + pad(secs)} to Kickoff..
                </p>
            </div>
		);
	}
}