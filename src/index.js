import React,{Component} from 'react';

import YTSearch from 'youtube-api-search';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YTD_APIKEY='AIzaSyDG0iAAeUZmQ2_qDu_yVzbV9--FdoyBlmw';

class  App extends Component
{

    constructor(props){
        super(props);

        this.state={videos:[],selectedVido:null};
        YTSearch({key:YTD_APIKEY,term:'slowmo',},(videos)=>{
            console.log(videos)
            this.setState(
                {
                    videos:videos,
                    selectedVido:videos[0]
                
                })
        });
    }
    render(){
    return (
             <div>
         
                    <SearchBar  />
                    <VideoDetail  video={this.state.selectedVido}/>
                    <div className="col-md-6">
                        <VideoList onVideoSelected={selectedVido=>this.setState({selectedVido})}
                          videos={this.state.videos}/> 
                    </div>
            </div>
            );
    }
}
// intercat with real DOM
// <App/> is instanceof APP  object 
ReactDOM.render(<App/>,document.querySelector('.container'));
