// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const appstates={
  title:{
    text:"title",
    color:"blue"
  },
  Content:{
    text:"content",
    color:'red'
  }
}


// function renderApp(appstates){
//   renderTitle(appstates.title);
//   renderContent(appstates.Content);
// }
// function renderTitle(states){
//   var titleDom = document.getElementById("title");
//   titleDom.innerHTML = states.text;
//   titleDom.style.color=states.color;
// }
// function renderContent(states){
//   var contentDom = document.getElementById("content");
//   contentDom.innerHTML = states.text;
//   contentDom.style.color = states.color;
// }

// var dispatch = action =>{
//   switch(action.type){
//     case "CHANGE_TITLE_TEXT":
//       appstates.title.text=action.text
//       break
//     case "CHANGE_TITLE_COLOR":
//       appstates.title.color = action.color
//       break
//     default : break
//
//   }
// }
// dispatch({type:"CHANGE_TITLE_COLOR",text:"change_boo",color:"yellow"})

//_store
var createStore = (state, stateChanger)=>{
  var listeners = [];
  var subscribe = (listener) =>{
    listeners.push(listener)
  }
  var getstate = ()=> state
  var dispatch = (action) => {
    state = stateChanger(state,action)
    listeners.forEach(
      (listener)=>listener()
  )
  }
  return {getstate, dispatch,subscribe}
}

var stateChanger = (state, action)=>{
  switch(action.type){
    case "CHANGE_TITLE_TEXT":
      return {
        ...state,
        title:{
          ...state.title,
          text:action.text
        }
      }

    case "CHANGE_TITLE_COLOR":
      return {
        ...state,
        content:{
          ...state.content,
          color:action.color
        }
      }
    default : return state

  }
}

//reducer  整合appstates和stateChanger

var reducer = (state , action) =>{
  if(!state){
     state = {
          title:{
          text:"title",
          color:"blue"
        },
        Content:{
          text:"content",
          color:'red'
        }
      }
}

  switch(action.type){
    case "CHANGE_TITLE_TEXT":
      return {
        ...state,
        title:{
          ...state.title,
          text:action.text
        }
      }

    case "CHANGE_TITLE_COLOR":
      return {
        ...state,
        content:{
          ...state.content,
          color:action.color
        }
      }
    default : return state

  }
}

//修改createStore
var createStore = (reducer)=>{
  let state=null
  var listeners = []
  var subscribe = (listener)=> {listeners.push(listener)}
  var getstate = ()=> state
  var dispatch = (action)=>{
    state = reducer(state,action)
    listeners.forEach( //遍历给每个监听者注册事件
      (listener)=>listener()
    )
  }

  dispatch({})
  return {getstate,subscribe,dispatch}
}
var log = (value)=>{
  console.log(value)
}
//const store = createStore(appstates,stateChanger)
const store = createStore(reducer)
 var renderApp = (oldstates = {},newstates) =>{

   if(oldstates === newstates){
     return
   }
  log("render app")

  renderTitle(oldstates.title,newstates.title);
  renderContent(oldstates.Content,newstates.Content);
}
var renderTitle = (oldtitle = {},newtitle) =>{

  if(oldtitle === newtitle){
    return
  }
  log("render title")
  var titleDom = document.getElementById("title");
  titleDom.innerHTML = newtitle.text;
  titleDom.style.color=newtitle.color;
}
var renderContent = (oldcontent = {},newcontent) =>{

  if(oldcontent === newcontent)
  {  return }
  log("render content");
  var contentDom = document.getElementById("content");
  contentDom.innerHTML = newcontent.text;
  contentDom.style.color = newcontent.color;
}

let oldStates=store.getstate()

store.subscribe( ()=> {
  const newStates = store.getstate() //检测是否有新值变化
  renderApp(oldStates,newStates)
  oldStates = newStates
})



renderApp({},appstates)

store.dispatch({type:"CHANGE_TITLE_TEXT",text:"change_boo",color:"yellow"})
// store.dispatch({type:"CHANGE_TITLE_COLOR",color:"pink"})
setTimeout(()=>{
  store.dispatch({type:"CHANGE_TITLE_TEXT",text :"改变title"})
},8000)
// renderApp(appstates)
