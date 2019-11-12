import React, { Component } from 'react'

export default class WritePopup extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="Modal-overlay" />
                <div className="Modal">
                    <p className="title">Write</p>
                    <div className="content">
                        This is competition
                    </div>
                    <div className="button-wrap">
                    <button onClick={this.props.handlesignupPopup}> Confirm </button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
