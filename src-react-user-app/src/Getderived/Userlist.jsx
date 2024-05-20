import React, { Component } from 'react'
import Userselector from './Userselector'
import Infos from './Infos'

export default class Userlist extends Component {
constructor(props){
    super(props)
    this.state={
        selectedIndex:0
    }
    this.changehandler=this.changehandler.bind(this)
}
changehandler(index){
    console.log(index);
this.setState({
    selectedIndex:index
})
}

  render() {
    console.log(this.state);
    let {selectedIndex}=this.state
    let {users}=this.props
    return (
        <div className="container">
  <Userselector
  changehandler={this.changehandler}
  selectedIndex={this.state.selectedIndex}
   users={this.props.users}
   />
<Infos 
userid={users[selectedIndex]}/>
</div>
    )
  }
}
