import React from "react";
import {FormattedMessage} from "react-intl";

const Welcome = () => (
  <h1>
    <FormattedMessage
      description="Welcome Message"
      id="welcomeMessage"
      defaultMessage="Welcome Default"
    />
  </h1>
);

export default Welcome;
