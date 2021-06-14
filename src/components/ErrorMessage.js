import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'

export class ErrorMessage extends Component {
    render() {
        return (
            <div>
                <Alert  variant='danger'>
                    {this.props.errorMessage}
                </Alert>
            </div>
        )
    }
}

export default ErrorMessage
