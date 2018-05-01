import React from 'react'

const VideoDetail=({video})=>{

    if(!video)
    {
        return <div>Loading....</div>
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