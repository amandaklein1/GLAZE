import React, {useState, useImperativeHandle, forwardRef, Fragment} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '70%',
    borderRadius: '20px',
    boxShadow: '0.5px 0.5px 5px gray',
    fontFamily: "'Cutive Mono', monospace",
    color: 'white',
    textAlign: 'center',
  }
};

Modal.setAppElement('#app');

const VideoModal = forwardRef(({name}, ref) => {
  const [modalIsOpen,setIsOpen] = useState(false);
  const [video, setVideo] = useState('');
  const [title, setTitle] = useState('');

  const openModal = (videoId, name) => {
    const first = name.charAt(0).toUpperCase();
    name = first + name.slice(1, name.length);
    setVideo(videoId);
    setTitle(name);
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  useImperativeHandle(ref, () => {
    return {
      openModal: openModal
    };
  });

    return (
      <Fragment>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Video" style={customStyles} portalClassName="modal" >
          <button onClick={closeModal} className="close-modal">X</button>
          <h2>{title}</h2>
          <iframe
          width='100%'
          height='80%'
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${video}`}
          allowFullScreen></iframe>
        </Modal>
      </Fragment>
    );
});

export default VideoModal;