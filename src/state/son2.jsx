import react from "react";
export default class son2 extends react.Component {
  constructor(props){
    super(props);
    this.state ={
    }
  }

  
  render(){
     return  (
     <div>  son2 组件输入值：
       {/* input标签，没有定义onChange 但是提供了value属性。React会抛出警告，并将元素设置为只读。 */}
      <input type="text" value={this.props.ParentTime} readOnly/>
     </div>)
  }
}