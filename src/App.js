import  React from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import ListItems from './ListItem';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash );

const particlesOptions ={
  
  particles: {
    number: {
      value: 180,
      density:{
        enable: true,
        value_area:800
      }
    }
  }
}
 

class App extends React.Component{
  constructor(props){
   super(props);
   this.state={
     items:[],
     currentItem:{
       text:'',
       key:''
     }
    }
  
    this.addItem=this.addItem.bind(this);
    this.handleInput=this.handleInput.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.setUpdate=this.setUpdate.bind(this);
   

    }
    
    addItem(e){
      e.preventDefault();
      const newItem = this.state.currentItem;
   
      if(newItem.text!==""){
        const items=[...this.state.items,newItem];
        this.setState({
          items:items,
          currentItem:{
            text:'',
            key:''
          }
        })
      }
    }

    handleInput(e){
      this.setState({
        currentItem:{
          text: e.target.value,
          key:Date.now()
        }
      })
    }
deleteItem(key){
  const filteredItems= this.state.items.filter(item =>
    item.key!==key);
    this.setState({
    items:filteredItems
    })
}
setUpdate(text,key){
  console.log("items:"+this.state.items);
  const items = this.state.items;
  items.map(item =>{
    if(item.key===key){
      console.log(item.key +"    "+key)
      item.text=text;
    }
  })
  this.setState({
  item:items
})
}


  render(){
    return(
  
  
          <Particles className='particles'
          params={particlesOptions}
          />
    );
  } 
 
  render(){
    return(
   
     <div className="App">
        <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <p  >{'What is the plan for today?'}</p>
          <input type="text" placeholder="Enter Text" 
         value={this.state.currentItem.text}
         onChange={this.handleInput} />
          <button type="submit" >Add</button>
        </form>
        <p>{this.state.items.text}</p>
        <ListItems items= {this.state.items}
      deleteItem={this.deleteItem}
      setUpdate={this.setUpdate}/>
      
      </header>
    
      
      <Particles className='particles'
          params={particlesOptions}
          />
     </div>
    );
  }
}


export default App;
