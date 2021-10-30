import React, { Component } from 'react'

export default class States extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Harshith"
        }
    }
    
    render() {
        setTimeout(() => {
            this.setState({name:"chitikela harshith"})     
        },2000)
        return (
            <div>
           {this.state.name}
            </div>
        )
    }
}
