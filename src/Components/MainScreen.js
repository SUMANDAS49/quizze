import React, { Component } from 'react'
import Result from './Result'
import './CSS/Main.css'

class MainScreen extends Component {
    constructor(props){
        super(props)
        this.state={ 
            right:0,
            wrong:0,
            a:0,
            b:0,
            
            responce:'',
            stop:false,
            start:false,
            name:props.name,
            time:20,
            accuracy:0,
        }
        this.questionGenerator=this.questionGenerator.bind(this)
        this.setResponce=this.setResponce.bind(this)
        this.check=this.check.bind(this)
        this.setStop=this.setStop.bind(this)
        this.timer=this.timer.bind(this)
        
    }
    questionGenerator=()=>{
        this.setState({
        a:Math.floor(Math.random()*50),
        b:Math.floor(Math.random()*60),
        c:this.state.a+this.state.b,
        })
        

        
    }
    setStop(){
        this.setState({
            start:true,
        })
        this.timer()
        setTimeout(()=>{
             this.setState({
                 stop:true
             })
        },20000)
        this.questionGenerator()
    }
    timer(){
        setInterval(() => {
            this.setState({
                time:this.state.time-1,
                accuracy:(parseInt(this.state.right)*100)/(parseInt(this.state.right)+parseInt(this.state.wrong))
            })
        }, 1000);
    }
    
    setResponce(r){
        this.setState({
            responce:r.target.value
        })

    }
    check(){
        if(parseInt(this.state.responce)===(parseInt(this.state.a)+parseInt(this.state.b)) && this.state.stop===false)
        {
            this.setState({
                right:this.state.right+1,
            })
        }
        else if((this.state.responce!==(this.state.a+this.state.b)) && this.state.stop===false)
        {
            this.setState({
                wrong:this.state.wrong+1,
            })
        }
        this.setState({
            responce:''
        })
        if(this.state.stop===false)
        {
        this.questionGenerator()
        }
    }
    
    render() {
        if(this.state.stop===true)
        {
            
            return (
                <div>
                    <Result name={this.state.name} right={this.state.right} wrong={this.state.wrong} accuracy={this.state.accuracy} />
                </div>
            )
        }
        else if(this.state.start===false)
        {
            return (
                <div className="before-start">
                    <div className="rules">
                    <h2>Rules:</h2>
                    <h2>1.All questions are addition.</h2>
                    <h2>2.You are given 20 seconds,
                    within 20 seconds you have to write as many answer possible</h2>
                    </div>
                    <div className="ball">

                    </div>
                    <button onClick={this.setStop}>start</button>
                </div>
            )
        }
        else if(this.state.start===true)
        {
            console.log(this.state.right)
            console.log(this.state.wrong)
        return (
            <div className="main-game">
                <div className="timer">
                    <h2>{this.state.time}</h2>
                </div>
                <div className="question-answer">
                     <h2>the result of {this.state.a} + {this.state.b} is</h2>
                     <input onChange={(r)=>this.setResponce(r)} value={this.state.responce}  type="number" />
                     <button onClick={this.check}>submit</button>
                </div>
            </div>
        )
        }
    }
}

export default MainScreen
