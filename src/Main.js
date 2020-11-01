import React, { Component } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "react-spinners/ClockLoader";
import { getScreenSize } from "./functions";


const headerHeight = 60,
spinnerStyle = {
    position: "fixed", 
    top: "50%", 
    left: "50%", 
    transform: "translate(-50%, -50%)", 
    zIndex: 1000, 
    width: "100%", 
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            screenSize: null,
            pageIndex: 0
        };
    }

    componentWillMount () {
        this.setState({
            isLoading: true
        });

        window.addEventListener("resize", () => {
            this.setState({
                screenSize: getScreenSize()
            });
        });
    }

    componentDidMount () {
        this.setState({
            isLoading: false
        });
    }

    navigate (pageIndex) {
        this.setState({
            pageIndex
        }, () => {
            window.scrollTo(0, 0);
        });
    }

    render() {
        const { navigate } = this,
        { isLoading, pageIndex, screenSize} = this.state;

        return (
            <> 
                {isLoading ? 
                    <div style={spinnerStyle} className="sweet-loading">
                        <Loader
                            color={"#1e88e5"}
                            loading={true}/>
                        <h1 style={{padding: 16, color: "#1e88e5", margin: 0}}>Yükleniyor...</h1>
                    </div> 
                : 
                    <>
                        <Header {...{
                            headerHeight
                            }} />
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <div style={{flex: 1, position: "relative"}}>
                                {[
                                    <Home {...{
                                        headerHeight
                                        }}/>
                                ][pageIndex]}
                            </div>
                        </div>
                        <Footer />
                    </>
                }
            </>
        );
    }
}

export default Main;