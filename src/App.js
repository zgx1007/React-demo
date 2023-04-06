import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import Hello from './hello';
import Form from './form';
import Map from './map';
// import State from './state/parent';
import Nav from './pageRouter/nav';
import Nav1 from './pageRouter/nav1';
import TodoList from './pageRouter/todoList';

// import Query from './pageRouter/query';
// let a=1;
// const element = <h1>app {a+1} </h1>;

export default class App extends React.Component {
  render() {
    return (
      <div>
        <p>父组件：app.js</p>

        {/* name传值给父组件 */}
        {/* <Hello name='资广湘' age='18'>
          <a href=''>组合关系</a>
        </Hello>
        <hr />
        <h3>受控组件和非受控组件</h3>
        <Form></Form>
        <h3>map循环和if条件</h3>
        <Map></Map>
        <hr />
        <h3>状态提升</h3>
        <State></State>
        <hr /> */}
        {/* <Query></Query> */}
        {/* <Map></Map> */}

        {/* 路由 */}
        <Router>
          <div>
            <h3>路由跳转</h3>
            {/* <Nav></Nav> */}
            <hr />
            {/* <Link to="/Map"> Map</Link> */}
            {/* Switch  只加载一个页面  */}
            <Switch>
              <Route exact path='/' component={Form} />
              <Route  exact path='/todoList' component={TodoList}></Route>
              {/* <Route exact path='/hello' component={Hello} /> */}
              {/* <Route path='/Map' component={Map} /> */}
              {/* react-router render 函数，简单页面 */}
              {/* <Route path="/demo" render={ ()=> <div><h3> helle, demo</h3></div> }></Route> */}
              {/* react-router render 函数中可以加载组件，并且可以传props参数 */}
              <Route
                exact
                path='/demo'
                render={props => <Map {...props} name='zgx' />}
              ></Route>
               {/* 嵌套路由 */}
               <Nav>
                 <Switch>
                   <Route spath='/nav/nav1' component={Nav1} /> 
                 </Switch>
               </Nav>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
