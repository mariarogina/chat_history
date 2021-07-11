import React from "react";
import Message from "../Message";
import Response from "../Response";
import Typing from "../Typing";
import PropTypes from "prop-types";

export default function MessageHistory({ list }) {
  return (
    <div>
      <ul>
        {list.map((message) => (
          <li className="clearfix" key={message.id}>
            {message.type === "message" ? (
              <Message from={message.from} message={message} />
            ) : message.type === "response" ? (
              <Response from={message.from} message={message} />
            ) : (
              <Typing from={message.from} message={message} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

MessageHistory.propTypes = {
  list: PropTypes.array,
};
MessageHistory.defaultProps = {
  list: [],
};
