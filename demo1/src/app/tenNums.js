import React,{Component} from "react"
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}
// function Repeat(props){
//   let items= [];
//   console.log(props.nums)
//   for(let i=0;i<props.nums;i++){
//     console.log(props.children(i))
//     items.push(props.children(i))
//   }
//   console.log(items)
//   return <div>items</div>
// }
//
// function ListTen(){
//   return (
//     <Repeat nums={10}>
//       {(index)=> <div key={index}>This is {index} item</div>}
//       </Repeat>
//   )
// }
export default ListOfTenThings
