import React, { useState, useEffect } from 'react';

export const RPDialog = (props) => {
  const [isModalOpen, setModalOpen] = useState(props.open);
  const _maxWidth = props._maxWidth ? 'modal-lg' : '';
  const _title = props.title || 'Title';
  const _modal = React.createRef();

  const _onClose = () => {
    setModalOpen(false);
    props.onClose(isModalOpen);
  };

  const onOutsideClick = (e) => {
    if (e.target.classList.contains('dialogModal')) {
      setModalOpen(false);
      props.onClose(isModalOpen);
    }
  };
  useEffect(() => {
    document.addEventListener('click', onOutsideClick);
    document.addEventListener('mousedown', onOutsideClick);
    return () => {
      document.removeEventListener('click', onOutsideClick);
      document.removeEventListener('mousedown', onOutsideClick);
    };
  }, [onOutsideClick]);

  return (
    <div className={`modal dialogModal ${isModalOpen ? `modal-show` : `modal-hide`}`} ref={_modal}>
      <div className={`modal-dialog ${_maxWidth}`} role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {_title}
            </h5>
            <button
              type="button"
              className="close"
              onClick={_onClose}
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body dialog-body">{props.children}</div>
        </div>
      </div>
    </div>
  );
};
export default RPDialog;
