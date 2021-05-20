import React, {useRef, Fragment} from 'react';
import VideoModal from './modal.jsx';
import data from './utils/svg.js';
import axios from 'axios';

const ImageMap = () => {
  const ref = useRef(null);

  const handleClick = (name) => {
    axios.get(`/videos/how to throw a ${name} on the wheel`)
      .then(({data}) => {
        ref.current.openModal(data[0].videoId, data[0].query);
      })
      .catch((err) => {
        console.error(`error getting data from server: ${err}`);
      });
    // alert('worked!' + name)
  };

  return (
    <Fragment>
      <div className='image'>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="960"
      height="816"
      fill="#fff"
      fillRule="evenodd"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <image
        width="960"
        height="815.484"
        preserveAspectRatio="none"
        transform="translate(-.5 -.5)"
        xlinkHref={data}
      ></image>
      <a xlinkHref="#">
      <path
        fillOpacity="0"
        stroke="none"
        d="M4.5 49.5h55v45h-55z"
        onClick={() => handleClick('cup')}
      ></path>
      </a>
      <a xlinkHref="#">
      <path
        fillOpacity="0"
        stroke="none"
        d="M79.5 59.5h45v35h-45z"
        onClick={() => handleClick('cup')}
      ></path>
      </a>
      <a xlinkHref="#">
      <path
        fillOpacity="0"
        stroke="none"
        d="M149.5 39.5h65v55h-65z"
        onClick={() => handleClick('vase')}
      ></path>
      </a>
      <a xlinkHref="#">
      <path
        fillOpacity="0"
        stroke="none"
        d="M234.5 41.5h65v55h-65z"
        onClick={() => handleClick('cup')}
      ></path>
      </a>
      <a xlinkHref="#">
      <path
        fillOpacity="0"
        stroke="none"
        d="M304.5 44.5h65v55h-65z"
        onClick={() => handleClick('cup')}
      ></path>
      </a>
      <a xlinkHref="#">
      <path
        fillOpacity="0"
        stroke="none"
        d="M384.5 44.5h65v55h-65z"
        onClick={() => handleClick('cup')}
      ></path>
      </a>
      <a xlinkHref="#">
      <path
        fillOpacity="0"
        stroke="none"
        d="M464.5 44.5h65v55h-65z"
        onClick={() => handleClick('shallow bowl')}
      ></path>
      </a>
      <a xlinkHref="#">
      <path
        fillOpacity="0"
        stroke="none"
        d="M344.5 254.5h160v155h-160z"
        onClick={() => handleClick('bowl')}
      ></path>
      </a>
      <a xlinkHref="#">
      <path
        fillOpacity="0"
        stroke="none"
        d="M534.5 344.5h210v70h-210z"
        onClick={() => handleClick('plate')}
      ></path>
      </a>
      <a xlinkHref="#">
      <path
        fillOpacity="0"
        stroke="none"
        d="M549.5 309.5h155v30h-155z"
        onClick={() => handleClick('shallow bowl')}
      ></path>
      </a>
      <a xlinkHref="#">
      <path
        fillOpacity="0"
        stroke="none"
        d="M-.5 334.5h160v80H-.5z"
        onClick={() => handleClick('plate')}
      ></path>
      </a>
      <a xlinkHref="#">
      <path
        fillOpacity="0"
        stroke="none"
        d="M174.5 354.5h65v55h-65z"
        onClick={() => handleClick('bowl')}
      ></path>
      </a>
      <a xlinkHref="#">
      <path
        fillOpacity="0"
        stroke="none"
        d="M920.5 650.5h40v40h-40z"
        onClick={() => handleClick('mug')}
      ></path>
      </a>
      <a xlinkHref="#">
      <path
        fillOpacity="0"
        stroke="none"
        d="M855.5 655.5h55v65h-55z"
        onClick={() => handleClick('mug')}
      ></path>
      </a>
      <a xlinkHref="#">
      <path
        fillOpacity="0"
        stroke="none"
        d="M780.5 650.5h70v65h-70z"
        onClick={() => handleClick('mug')}
      ></path>
      </a>
      <a xlinkHref="#">
      <path
        fillOpacity="0"
        stroke="none"
        d="M690.5 650.5h70v65h-70z"
        onClick={() => handleClick('mug')}
      ></path>
      </a>
    </svg>
    </div>
    <VideoModal ref={ref} />
    </Fragment>
  );

}

export default ImageMap;