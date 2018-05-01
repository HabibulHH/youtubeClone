import React from 'react';

const VideoListItem=({video,onVideoSelected})=>{
    console.log(video);
    const imgurl=video.snippet.thumbnails.default.url;

    return(
    <li className="list-group-item" onClick={()=>onVideoSelected(video)}>
        <div className="video-list media">
            <div className="media-left">
             <img src={imgurl} className="media-object" />
             </div>

               <div className="media-body">
                <div className="meadia-heading">
                {video.snippet.title}
                </div>
            </div>
        </div>
    </li>
    )

}

export default VideoListItem;