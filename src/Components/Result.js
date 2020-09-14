import React, { Component } from 'react'
import './CSS/Result.css'
class Result extends Component {
    constructor(props){
        super(props)
        this.state={
            right:props.right,
            wrong:props.wrong,
            name:props.name,
            accuracy:props.accuracy
        }
        
        
    }
   
    render() {
        if(parseInt(this.state.accuracy)<50)
        {
            return (
                <div className="result-less-fifty">
                    <h1>Result</h1>
                    <h1>you need to improve your calculation</h1>
                    <h3>correct: {this.state.right}</h3>
                    <h3>incorrect: {this.state.wrong}</h3>
                    <h3>name: {this.state.name}</h3>
                    <h3 className="accuracyless">accuracy: {this.state.accuracy}%</h3>
                </div>
            )
        }
       else if(parseInt(this.state.accuracy)>50 && parseInt(this.state.accuracy)<76)
       {
        return (
            <div className="result-more-fifty">
                <h1>Result</h1>
                <h1>good accuracy</h1>
                <h3>correct: {this.state.right}</h3>
                <h3>incorrect: {this.state.wrong}</h3>
                <h3>name: {this.state.name}</h3>
                <h3 className="accuracymid">accuracy: {this.state.accuracy}%</h3>
            </div>
        )
       }
       else if(parseInt(this.state.accuracy)>75 && parseInt(this.state.accuracy)<=100)
       {
        return (
            <div className="result-more-seventy">
                <h1 className="title">Result</h1>
                <div className="image-great"></div>
                <h1 className="overall">Excellent accuracy</h1>
                <h3>correct: {this.state.right}</h3>
                <h3>incorrect: {this.state.wrong}</h3>
                <h3>name: {this.state.name}</h3>
                <h3 className="accuracygood">accuracy: {this.state.accuracy}%</h3>
            </div>
        )
       }
       else{
           return (
               <div className="no-attempt">
                  <h1>you didn't attempt any question</h1>
                  <div className="unhappy"></div>
           </div>
           )
       }

        
    }
}

export default Result
