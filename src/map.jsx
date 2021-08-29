import react from "react";
export default class Map extends react.Component {
  constructor() {
    super();
    this.state={
      arr :['语文','数学','英语','历史']
    }
  };


  render(){
    console.log(this.props,'---map')
    // eslint-disable-next-line array-callback-return

    // 错误的写法,在render函数中map循环，不能使用{}包裹html标签
    // const listItems = this.state.arr.map((item) =>{
    //   <li>{item}</li>
    // })
     
  //  map循环 ,样式需要{{}}包起来
   const listItems = this.state.arr.map((item,index) =>
    <li style={{color: "pink"}} key ={index} >{index}--{item}</li>
    )

  // if 条件
  let loginState = false
  let button ;
  // if(loginState){
  //   button = <button>登录</button>
  // }else{
  //   button = <button>退出</button>
  // }  

  // 三元运算
  button = loginState ? <button>登录</button> :<button>退出</button>
    return (
      <div>
       <ul style={{color: "red"}} >{listItems}</ul>
       <div >{button}</div>
      </div>
    )
  }
}