import React, { Component } from "react";
import Features from "../Features/Features";

class Customize extends Component {
    render() {
        return ( <
            form className = "main__form" >
            <
            h2 > Customize your laptop < /h2>{" "} <
            Features selected = { this.props.selected }
            features = { this.props.features }
            currencyformat = { this.props.currencyformat }
            updateFeature = { this.props.onChange }
            />{" "} <
            /form>
        );
    }
}

export default Customize;