import React,{Component} from 'react';


class  SearchBar extends Component{

    constructor (props){

        super(props);
        this.state={term:''}
        this.onInputChange.bind(this);
    }

    onInputChange(term){

        this.setState({term});
        this.props.onSearchTermChnage(term);
        
   
    }
    
    render(){
        const pStyle = {
            'marginTop': '30px',
            'marginBottom': '20px',
            'textAlign': 'left'
          };
          
        return (
        
            <div>
        <input style={pStyle} className="col-md-6 form-control form-control-lg"
         onChange={event=>{this.onInputChange(event.target.value)}}type="text" 
         value={this.state.term}/>

           </div>        
        );  
    }
    
    

    
}

export default SearchBar;