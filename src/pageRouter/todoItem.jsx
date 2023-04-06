import react from "react";
 class TodoItem extends react.Component{
    handelDelete(){
      this.props.delete(this.props.index)
    }
  
    render(){
        return (
           <li onClick={this.handelDelete.bind(this)}>{this.props.content}</li>
        )
    }
}
export default TodoItem