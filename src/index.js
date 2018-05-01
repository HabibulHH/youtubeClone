import React,{Component} from 'react';

import YTSearch from 'youtube-api-search';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const YTD_APIKEY='AIzaSyDG0iAAeUZmQ2_qDu_yVzbV9--FdoyBlmw';

class  App extends Component{
    constructor(props){
        super(props);

        this.state={videos:[]};
        YTSearch({key:YTD_APIKEY,term:'gopro',},(videos)=>{
            console.log(videos)
            this.setState({videos})
        });
    }
    render(){
    return (
         
                <SearchBar  />
                <div className="col-md-6">
                    <VideoList videos={this.state.videos}/> 
                </div>
            
        )
    }
}
// intercat with real DOM
// <App/> is instanceof APP  object 
ReactDOM.render(<App/>,document.querySelector('.container'));
