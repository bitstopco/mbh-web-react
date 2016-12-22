// 3rd party React components
import React from 'react';

// 3rd party npm modules
import _ from 'lodash'

// app components
import Base from './Base';

export default class App extends Base {
    constructor(props) {
        super(props);
        // Bind custom component functions here that need to access the state
        this.autoBind('customComponentFunction1', 'customComponentFunction1');
        this.state = {
            stylesApplied: false
        }
    }

    componentDidMount() {
        setTimeout(function() { this.setState({ stylesApplied: true }); }.bind(this), 2000);
    }

    customComponentFunction1() {
        // Custom functionality specific to this component
    }
    customComponentFunction2() {
        // Custom functionality specific to this component
    }
   
    render() {
        console.log('app render')
        
        return (
            <div className={'app' + (this.state.stylesApplied ? ' ready' : '')}>
                {this.props.children}
            </div>
        )
    }
}

