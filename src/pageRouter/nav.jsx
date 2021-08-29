import react from "react";
import { HashRouter as Router, Route, Switch, NavLink,Redirect } from 'react-router-dom';
import Map  from "../map";
import Form from "../form";
import "./style.css";
import NotFound from '../pageRouter/404';
import Query from "./query";
import { withRouter } from "react-router";



 class Nav extends react.Component{
  constructor(props){
    super();
  }

  //  高阶组件
  clickHOC = () => {
    // 当前组件没有被直接被路由管理，所以没有路由对象
    console.log(this.props,'---nav');  // 打印后为{}
  }

  render(){
    return (
      <div>
        <ul>
          <li>Nav组件</li>
          <p>{this.props.children}</p>

          <button onClick={this.clickHOC}>高阶函数</button>
          {/* /不高亮路由,Link  */}
          {/* <Link to="/map">跳转Map</Link> 
          <Link to="/map/form">跳转form</Link> */}

          {/* 高亮路由,NavLink  */}
          <NavLink to="/map" exact>跳转Map</NavLink> 
          {/* <NavLink to="/map/form" exact>跳转form</NavLink> */}

          {/* 路由传参数，/:id */}
          <NavLink to="/map/form/1000" exact>带参数跳转form</NavLink>

          {/* 可以自定义高亮时类名activeClassName，默认是active */}
          <NavLink to="/map/form" exact activeClassName="select">跳转form</NavLink>
          {/* <NavLink to="/query" exact >跳转Query</NavLink> */}

          {/* 路由to 传object  */}
          <NavLink to={{
            pathname:"/query",
            search:"?sort=name",
            hash:"#the-hash",
            state:{flag:true }, // 隐形传递参数
             }} exact >跳转Query
          </NavLink>
        </ul>
        {/* exact={true} 精确匹配，/map/form 包含了 /map*/
        //  strict = {true}
         }

       <Router>
       <Switch>
          <Route path="/map" exact={true} strict component={Map} />
          {/* 路由传多个参数，/:id?/:name? */}
          <Route path="/map/form/:id?/:name?" exact={true} strict component={Form} />  
          <Route path="/query" exact={true} strict component={Query} />
          {/* 路由重定向 */}
          <Redirect from='/query/test' to="/query"></Redirect> 
          <Route exact component = {NotFound} />
         </Switch>
       </Router>
  
      </div>
    )
  }
}

export default withRouter(Nav)