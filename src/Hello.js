import React, {Component} from 'react'
import './Hello.css'

class Hello extends Component {
    render(){
        return (
            <div className='f1 tc'>
                <h1>Hello {this.props.greeting}</h1>
                <p>Welcome to the world of Forex</p>
            </div>
        )
    }
}

export default Hello;