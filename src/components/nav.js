import React,{Component} from 'react';


class  NavBar extends Component{

    
    render(){
        const pStyle = {
           
            'textAlign': 'left'
          };
          
        return (
        
            <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">Custom</a>
            </nav>
          </div>
        );  
    }
    
    

    
}

export default NavBar;