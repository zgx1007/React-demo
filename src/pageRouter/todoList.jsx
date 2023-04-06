import react from "react";
import TodoItem  from "./todoItem";
import './style.css'
export default class TodoList extends react.Component{
    constructor(props){
        super(props);
        this.state={
            todoList :[],
            inputValue:''
        }
        this.changeInputValue = this.changeInputValue.bind(this)
      }

      handelAdd(){
        this.setState({
            todoList:[...this.state.todoList,this.state.inputValue],
            inputValue:''
        })
      }
      changeInputValue(e){
         this.setState({
            inputValue:e.target.value,
         })
      }

      handeleDelete(index){
        const list =[...this.state.todoList]
        list.splice(index,1)
        this.setState(
            {
                todoList:list  
            }
        )
      }
    render(){
        return (
                <div>
                    <input  type="text" onChange={this.changeInputValue} value={this.state.inputValue} />
                    <button onClick={this.handelAdd.bind(this)} className="button"  style={{color:'#fff'}}>add</button>
                    <ul>
                        {
                            this.state.todoList.map((item,index)=>{
                            return <TodoItem  delete={this.handeleDelete.bind(this)} key={index} content={item} index={index}/> 
                            })
                        }
                    </ul>
                </div>
            )
    }
}