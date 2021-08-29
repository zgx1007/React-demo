import react from "react";

export default class Form extends react.Component {
  constructor() {
    super();
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);

    // 非受控组件
    this.name=react.createRef()  //createRef()是方法,容易忘记写成createRef
    this.sex=react.createRef()
  }
// 输入框change方法
handleChange(event) {
  this.setState({
    value: event.target.value
  });
// console.log(this.state.value,'输入框的值')
}
// form 表单的提交,使用箭头函数可以不绑定(this.handleSubmit.bind(this))
handleSubmit =(event) => {
  alert('受控组件: ' + this.state.value);
  event.preventDefault();
}


handleSubmit2(event){
  console.log(this.name.current.value + this.sex.current.value)
  alert('非受控组件 : ' + this.name.current.value + this.sex.current.value);
  event.preventDefault();
}

render(){
  console.log(this.props,"---form")
    return (
      <div>
        {/* 受控组件 */}
        <form  onSubmit={this.handleSubmit}>
          <p>我是form表单</p>
          <label>
            名字:
          <input type="text"  value = {this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit"/>
          </label>
        </form>

        {/* 非受控组件 */}
        <form onSubmit={this.handleSubmit2}>
          <label>
            name:
            <input type="text" ref={this.name}/>
            sex:
            <input type="text" ref={this.sex}/>
            <input type="submit" value="Submit"/>
          </label>
        </form>
        <hr />
      </div>
    )
  }

}