import React, { Component } from 'react'
import Time from './Time';

export default class Click extends Component {
 constructor(props){
super(props);
this.state={
showTime:true
}
this.togleShowTime=this.togleShowTime.bind(this)
 }
togleShowTime(){
this.setState(state=>{
  return{
    showTime:!state.showTime
  }
})
}

    render() {
let showtime=this.state.showTime

    return (
      <div>
        {showtime && <Time />}
      <button onClick={this.togleShowTime}>{showtime ? 'hide time':'show time'}</button>
      </div>
    )
  }

}
