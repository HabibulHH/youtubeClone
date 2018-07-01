import React from 'react'
var Loader = require('react-loader');
const VideoDetail=({video})=>{

    if(!video)
    {
       return( <div className="video-detail col-md-8">
       
       <Loader loaded={false} lines={20} length={20} width={10} radius={30}
       corners={1} rotate={0} direction={1} color="#0056AF" speed={1}
       trail={60} shadow={false} hwaccel={false} className="spinner"
       zIndex={2e9} top="50%" left="50%" scale={1.00}
       loadedClassName="loadedContent" />
       </div>
       )
       
    }
    const videoID=video.id.videoId;
    const url=`https://www.youtube.com/embed/${videoID}`;
    return (
        <div className="video-detail col-md-8">
         <div className="embed-responsive embed-responsive-16by9">
           <iframe src={url} frameBorder="0" className="embed-responsive-item">
             
           </iframe>
         </div>

         <div className="card">
            <div className="card-header">
            {video.snippet.title}
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{video.snippet.description}</p>
                    
                </blockquote>
            </div>
       </div>
          <div className="details ">
            <div className="success"></div>
            <div className="alert alert-dark"></div>
          </div>
        </div>
    );

}

export default VideoDetail;