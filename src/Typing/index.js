import React from "react";
import PropTypes from "prop-types";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Typing({ from, message }) {
  return (
    <div>
      <div className="message-data align-right">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span>
      </div>
      <div className="message" style={{ color: "black" }}>
        {message.text ? message.text : <FontAwesomeIcon icon={faSpinner} />}
      </div>
    </div>
  );
}

Typing.propTypes = {
  from: PropTypes.object,
  message: PropTypes.object,
};
Typing.defaultProps = {
  from: {},
  message: {},
};
