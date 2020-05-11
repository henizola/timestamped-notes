import React from 'react';
import './App.scss';
import Form from './compinents/form/form.component.jsx';
import List from './compinents/list/list.component';

class App extends React.Component {

constructor(){
  super();
  this.state={
        list:[]
      }

}


handleSubmit=(data)=>{
  data.title===''?alert('provide a title'):
  this.setState({list:[...this.state.list,data]})
  console.log(this.state.list);
}

render(){
  const {list}=this.state;
   return (
    <div className="App">
          <h1 className='header'>Timestamped Notes App</h1>
                <Form handleSubmit={this.handleSubmit}/>
                <hr></hr>
             <div>
               {
                list.map((item)=><List key={item.time} item={item}/>)
               }
             </div>
         
    </div>
  );
}
 
}

export default App;
