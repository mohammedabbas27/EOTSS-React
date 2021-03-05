import React, { Component } from "react";
import ScriptTag from "react-script-tag";

class VaccineChatBot extends Component {
  render() {
    return (
      <ScriptTag
        isHydrating={false}
        type="text/jsx"
        src="assets/vaccinechat-dev.js"
      />
    );
  }
}

export default VaccineChatBot;
