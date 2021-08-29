import React from 'react';
// import queryString from 'queryString'
const Query = (props) => {
 console.log(props,'---kk');
    const clickRoute = () => {
      props.history.push('/hello')
  };
  // http://localhost:3000/#/query?name=zgx&age=12
  // 第一种方式获取query方式参数
  // const params= new URLSearchParams(props.location.search);
  // console.log(params.get('name'),'---query');

  // 第二种方式获取query方式参数
  // const value = queryString.parse(props.location.search)
  // console.log(value.name,'---query value');

  // 第三种link to -object
  // console.log(props.location,'---query');

  return (
    <div>
      React-Router query string 读取参数
      <button onClick={clickRoute}>button 路由跳转</button>
    </div>
  );
};
export default Query;
