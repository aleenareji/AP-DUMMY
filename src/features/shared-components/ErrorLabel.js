import React from 'react';

const ErrorLabel = (props) => {
  const _isValidate = props.validate || false;
  const _msg = props.message || '';
  return _isValidate ? <p className="error-msg">{_msg}</p> : <p></p>;
};
export default ErrorLabel;
