import React from 'react';

import "../styles/CounterBox.scss";

import Number from "./Number";

class Counter extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            counter_actual: 0,
            change: false
        }
    }

    counter(){
        let tmp1 = this.state.counter_actual + 1;
    
        if(tmp1 < (this.props.max+1)){
          this.setState({
            counter_actual: tmp1
          })
        }
    }
    
    componentDidMount(){

      window.addEventListener('scroll', () => {

        if((window.pageYOffset > 1600)){
          this.setState({
            change: true
          })
        }
      }) 
    }

    componentDidUpdate(){
      if(this.state.change){
        let interval = setInterval(() => {
          this.counter()
        }, this.props.time)

        if(this.state.counter_actual === this.state.counter_max_kopalni){
          clearInterval(interval);
        }
      }
    }

    render(){
        return(
            <div className="counterOne">
                <Number number={this.state.counter_actual} />
                <span>{this.props.name}</span>
            </div>
        )
    }
}

export default Counter;