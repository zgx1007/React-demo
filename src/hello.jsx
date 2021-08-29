import React from "react";
// const element = <h1>子组件：Hello, wolrd </h1>;

export default class Hello extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super();
    this.state = {
      count:1
    }
    this.add = this.add.bind(this);
    this.reduce = this.reduce.bind(this);
    // console.log(props,'--props')
  }

  //  加一方法
  add = () => {
    this.setState({
      count: this.state.count+=1,
    })
  }
  // 减一方法
  reduce = () => {
    this.props.history.push('/map')
    this.setState({
      count: this.state.count-=1,
    })
  }

  push(){
    // push 叠加上次页面依然存在内中,replace是体会，上次的页面不存在了
    this.props.history.push('/map')
    // this.props.history.replace('/map')
  }
  replace(){
    // push 叠加上次页面依然存在内中,replace是体会，上次的页面不存在了
    this.props.history.replace('/map')
  }

  render() {
    console.log(this.props,'--hello') // 打印父组件传来的值
    return (
      <div>
        <p>{this.props.children}</p>
        <p>子组件：Hello, wolrd </p>
        <h4>组件,props,事件,state</h4>
        <p>获取父组件的值：{this.props.name}---{this.props.age}</p>
        <p>
          state的使用：{this.state.count}
          <button onClick={this.add}>加一</button>
          <button onClick={this.reduce}>减一</button>
          {/* 路由跳转push和repalce */}
          <button onClick={this.push.bind(this)}>跳转push</button>
          <button onClick={this.replace.bind(this)}>跳转replace</button>
        </p> 
      </div>
    );
  }
}
