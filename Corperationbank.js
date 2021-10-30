import React, { Component } from 'react'

export default class Corperationbank extends Component {
    render() {
        return (
            <div>
                <h1>
                    Corperationbank account for {this.props.info.lastname}
                    </h1>
            </div>
        )
    }
}
