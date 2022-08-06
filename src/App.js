import React , { Component } from 'react';
import Todoitems from './component/TodoItems/TodoItems';
import AddItems from './component/AddItems/AddItems';





class App extends Component {
  state = {
    items : [
      {id : 1 , name:"ahmad" , age: 25},
      {id : 2 , name:"osama" , age: 28},
      {id : 3 , name:"abd" , age: 30},
    ]
  }

 deleteItem = (id) => {

  // plan a
  let tot = this.state.items;
  let i = tot.findIndex(item => item.id === id)
  tot.splice(i,1)
  // plan B
  // let tot = this.state.items.filter(item => {
  //   return item.id !== id
  // })
  this.setState({
    items:tot
  })
}

AddItem = (item) => {
  item.id = Math.random() ;
  let tot = this.state.items
  tot.push(item)
  this.setState({
    items : tot 
  })
}
     render(){
    
     return (

      <div className='App container'>
        <h1 className='text-center'>TodoItems</h1>
<Todoitems items={this.state.items} deleteItem={this.deleteItem} />
<AddItems AddItem = {this.AddItem}/>
</div>
);
 }
 }


 export default App;










