import React from 'react';
import './form.styles.scss';

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state={
       
            title:'',
            detail:'',
            time:new Date().toString().substr(0, 25)
           
    }
    }

    handleChange=(event)=>{
       
        const {name,value}=event.target;
        this.setState({[name]:value})
    }

    handleSub=(event)=>{
        event.preventDefault() 
            this.props.handleSubmit(this.state)
            this.setState({title:'',
            detail:'',
            time:new Date().toString().substr(0, 25),
            ditailState:false ,})
    }

render(){
    const {title,detail}=this.state;
    return <form >
                         <input type='text' className='title-input' placeholder='title'  required name='title' 
                                 onChange={this.handleChange} value={title}></input>
                         <div  className='detail-input'>
                                <input type='text' placeholder='Note Details' name='detail'
                                  onChange={this.handleChange} value={detail}></input>
                          </div>
                         <button  onClick={this.handleSub}>Add Note</button>
                </form>
        }

    
    
}

    
   

export default Form;
