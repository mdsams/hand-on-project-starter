import React, { Component } from "react";
// import { Modal } from "../Modal";

import TriggerButton from "../TriggerButton";
class Container extends Component {
  state = {
    isShown: false,
  };

  showModal = () => {
    this.setState({ isShown: true }, () => {
      this.closeButton.focus();
      this.toggleScrollLock();
    });
  };

  toggleScrollLock = () => {
    document.querySelector("html").classList.toggle("scroll-lock");
  };

  closeModal = () => {
    this.setState({ isShown: false });
    this.TriggerButton.focus();
    this.toggleScrollLock();
  };

  onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };
  onClickOutside = (event) => {
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  };
  render() {
    return (
      <>
        <TriggerButton triggerText={this.props.triggerText} />
        {this.state.isShown ? <Modal /> : null}
      </>
    );
  }
}
export default Container;
