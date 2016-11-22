const ReactLink = function(context) {
    return function(fieldName) {
        return {
            value: context.state[fieldName],
            requestChange: newValue => {
                context.setState({
                    [fieldName]: newValue
                })
            }
        }
    }
}

export default ReactLink;