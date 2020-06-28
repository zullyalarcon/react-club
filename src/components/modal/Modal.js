import React from "react";

import './Modal.css';
export class Modal extends React.Component {

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };
    render() {
        if (!this.props.open) {
            return null;
        }

        return (
            <div className="modal" id={this.props.modalId}>
                <div className="content">{this.props.children}</div>
                <div className="actions">
                    <button className="toggle-button" onClick={this.onClose}>
                        cerrar
                    </button>
                </div>
            </div>
        );
    }
}

export default Modal;