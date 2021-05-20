import React, {useRef, Fragment} from 'react';
import axios from 'axios';


const Fire = () => {
  const titleStyle = {
    color: 'white'

  };
  return (

      <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" id="player" type="text/html" width="640" height="390" src={`https://www.youtube.com/embed/FadDIiLdu3c`} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3 style={titleStyle}>Tips for new kiln owners</h3>
      </div>
    </div>


  )
}

export default Fire;