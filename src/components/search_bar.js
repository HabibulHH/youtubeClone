import React,{Component} from 'react';


class  SearchBar extends Component{

    constructor (props){

        super(props);
        this.state={term:''}
    }

    onInputChange(event){

        
        console.log(event.target.value);
   
    }
    render(){
        return (
        
            <div>
        <input  className="col-md-6 form-control" onChange={
            (event)=>{
                this.setState=({term:event.target.value});
              
            }}type="text"/>

           </div>        
        );  
    }
    
    

    
}

export default SearchBar;