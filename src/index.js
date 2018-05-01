import React,{Component} from 'react';
import _ from 'lodash'
import YTSearch from 'youtube-api-search';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import NavBar from './components/nav';

const YTD_APIKEY='AIzaSyDG0iAAeUZmQ2_qDu_yVzbV9--FdoyBlmw';

class  App extends Component
{

    constructor(props){
        super(props);

        this.state={videos:[],selectedVido:null};
        this.videoSearch('go pro');
        
    }
    videoSearch(term){
        YTSearch({key:YTD_APIKEY,term:term,},(videos)=>{
            console.log(videos)
            this.setState(
                {
                    videos:videos,
                    selectedVido:videos[0]
                
                })
        });
    }
    render(){

        const videoSearchBounce=_.debounce((term)=>{
            this.videoSearch(term)},300);
    return (
             <div>
         
                    <SearchBar onSearchTermChnage={videoSearchBounce} />
                    <VideoDetail  video={this.state.selectedVido}/>
                     <VideoList onVideoSelected={selectedVido=>this.setState({selectedVido})}
                    videos={this.state.videos}/> 
                    
            </div>
            );
    }

    
}
// intercat with real DOM
// <App/> is instanceof APP  object 
ReactDOM.render(<App/>,document.querySelector('.container'));
