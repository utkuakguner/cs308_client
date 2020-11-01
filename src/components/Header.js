import React, { Component } from "react";

const containerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    padding: "0 60px",
    zIndex: 10,
    boxShadow: "0px 0px 5px 1px #666"
}

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        const { headerHeight } = this.props;
        return (
            <>
                <div style={{height: headerHeight, width: "100%"}} />
                <div style={{...containerStyle, height: headerHeight}}>
                    Header
                </div>
            </>
        );
    }
}

export default Header;