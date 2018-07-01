import React,{Component} from 'react';
import ReactDOM from 'react-dom';


class Produtc extends Component
{
    constructor(porps){

        super(props);
        this.state={
            productList:[]
        }
    }

    componentDidMount(){

    }

    componentWillMount(){
         axios.get().then((data)=>{

            this.setState({
                productList:this.state.productList.concat(data)
            });
         })
    }
    componentWillUnmount(){


    }

    render(){
        return(
            <div className="container">
          
             </div>
        )
    }
}

ReactDOM.render(<Produtc/>,document.getElementById(''))