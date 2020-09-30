import React, { Component } from 'react'

import MainScreen from './MainScreen';
import './CSS/Input.css'
 
class InputData extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            age:0,
            displayMainScreen:false,
        }
        this.setName=this.setName.bind(this);
        this.changeAge=this.changeAge.bind(this);
        this.displayMain=this.displayMain.bind(this);
    }
    setName(n){
            this.setState({
                name:n.target.value
            },console.log(this.state.name))
    }
    changeAge(a){
        this.setState({
            age:a.target.value
        })
    }
    displayMain(){
        this.setState({
            displayMainScreen:true,
        })
    }
   
    render() {
        if(!this.state.displayMainScreen)
        {
        return (
            <div className="body">
                <div className="rainbow"></div>
                <input className="name-input" type="text" onChange={(n)=>this.setName(n)} placeholder="enter your name"/>
                <input className="age-input" type="number" onChange={(a)=>this.changeAge(a)} placeholder="enter your age"/>
                <h3 className="h31">Select quiz type</h3>
                <select className="options1" >
                    <option>Calculation test</option>
                    <option>Aptitude test</option>
                </select>
                <h3 className="h32">Select quiz duration</h3>
                <select className="options2" >
                    <option value="20">20s</option>
                    <option value="30">30s</option>
                    <option value="40">40s</option>
                    <option value="60">1 minutes</option>
                    <option value="180">3 minutes</option>
                    <option value="300">5 minutes</option>
                </select>

                <button onClick={this.displayMain}>enter to the game</button>
                
            </div>
        )
        }
        else if(this.state.displayMainScreen && this.state.age>=4)
        {
            return (
                <div>
                    <MainScreen name={this.state.name}/>
                </div>
            )
        }
        else if(this.state.age<18)
        {
            return (
                <div>
                    <h1>You age is not sufficient to use this app</h1>
                </div>
            )
        }
    }
}

export default InputData
