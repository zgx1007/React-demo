import react from "react";
import Son1  from "./son1";
import Son2  from "./son2";
export default class Parent  extends react.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {
      time:''
    }
  }

  // 获取子组件的值
  getDatas(e){
    this.setState({
      time:e
    })

  }

  render(){
    return (
      <div>
        <Son1 getdata={this.getDatas.bind(this)}></Son1>
         <p>获取子组件的值：{this.state.time}</p>
        <Son2 ParentTime={this.state.time}></Son2>
      </div>
    )
  }
}