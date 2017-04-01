import React,{ Component } from 'react'

export default class App extends Component{
    state = {
        com:false
    }
    handle = (e) =>{
        require.ensure([],() => {
            let com = require('./Hello');
            this.setState({
                com:com
            })
        },'Hello')
    }
    render(){
        return (
            <div>
                <button onClick={this.handle}>click</button>
                { this.state.com &&  <this.state.com />}
            </div>
        )
    }
}
