import React from 'react';
import './list.styles.scss'

class List extends React.Component{
   
    constructor(props){
        super(props);
        this.state={
            visible:'none',
            text:'( Show Detail )'
        }
    }
    
    toggleDetail=()=>{
        this.state.visible==='none'?
        this.setState({visible:'flex',text:'( hide Detail )'}):
        this.setState({visible:'none',text:'( Show Detail )'})

    }
    render(){
        return(
        <div>
                <div className="title-container ">
                    <span className='title'>{this.props.item.title}</span>
                    <div className='info'>
                        <span className='timestamp'>Recorded: {this.props.item.time}</span>
                        <div className='methods'>
                            <span className='showdetail' onClick={this.toggleDetail}>{this.state.text}</span>
                            <span className='remove'>( Remove Note )</span>
                        </div>
                        
                    </div>
                    
                    </div>
                 <div className="detail-container" style={{display:this.state.visible}}>
                        <div className='line'></div>
                        <span className='detail'>Details: {this.props.item.detail}</span>
                   </div>

        </div>
    
    
    )
    }
    
}

export default List;