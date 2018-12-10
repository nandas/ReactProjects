import React, { Component } from 'react';
import Clock from './Clock';
class App extends Component {
    constructor(props){
          super(props);
          this.state = {
              defaultdate:'April 30, 2019',
              newdate:''
          }
   }
   changeDate(){
        this.setState({defaultdate:this.state.newdate});
   }
  render() {
    return (
      <div className="App">
          <div className="App-title">Welcome to countdown to your pregnancy day {this.state.defaultdate}</div>
          <Clock deadline={this.state.defaultdate}/>
          <div>
              <input
                  placeholder="Enter new expected pregnancy date"
                  onChange={event => this.setState({newdate:event.target.value})}
              />
              <button onClick={()=>this.changeDate()}>Submit</button>
          </div>
      </div>
    );
  }
}

export default App;
