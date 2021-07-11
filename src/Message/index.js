import React from "react";
import PropTypes from "prop-types";

export default function Message({ from, message }) {
  return (
    <div>
      <div className="message-data align-right" style={{ color: "black" }}>
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span>
      </div>
      <div className="message" style={{ color: "black" }}>
        {message?.text}
      </div>
    </div>
  );
}

Message.propTypes = {
  from: PropTypes.object,
  message: PropTypes.object,
};
Message.defaultProps = {
  from: {},
  message: {},
};
