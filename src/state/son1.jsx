import react from "react";
export default class Son1  extends react.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {
      inputValue:''
    }
  }


  handleChange(e){
    this.setState({
      inputValue: e.target.value
  });
  }

  handleClick(){
    this.props.getdata(this.state.inputValue); // 触发父组件的方法getdata
  }

  render(){
    return (
      <div>
        <p>
         son1 组件输入值： 
         <input onChange={this.handleChange.bind(this)}></input>
         <button onClick={this.handleClick.bind(this)}>点击获取数据</button>
        </p>
        
      </div>
    )
  }
}