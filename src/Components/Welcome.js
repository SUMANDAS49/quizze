import React, { Component } from 'react'
import InputData from './InputData';
import './CSS/Welcome.css'

class Welcome extends Component {
    constructor(props){
        super(props)
         this.state={
             welcome:true,
             input:false,
             mainScreen:false,
             result:false
         }
         this.changeWelcome=this.changeWelcome.bind(this);
    }
    changeWelcome(){
        this.setState({
            welcome:false,
            input:true
        })
    }
    
    render() {
        if(this.state.welcome)
       {
        return (
            <div className="full-welcome">
                <div className="intro">
                    <h1>QUIZZE</h1>
                    <h4>A plateform that can help your child to grow in every diraction</h4>
                     
                     
 
                </div>
                
                <button onClick={this.changeWelcome}>next</button>
                <div className="image"></div>
            </div>
        )
       }
       else if(this.state.input)
       {
           return (
               <div>
                   <InputData />
               </div>
           )
       }
        
    }
}

export default Welcome
