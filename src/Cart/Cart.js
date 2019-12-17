import React, { Component } from "react";
import SelectedItems from "../SelectedItems/SelectedItems";
import TotalAmount from "../TotalAmount/TotalAmount";

class Cart extends Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + "-" + idx;

            const selectedOption = this.props.selected[feature];

            return ( <
                SelectedItems featureHash = { featureHash }
                selectedOption = { selectedOption }
                feature = { feature }
                currencyformat = { this.props.currencyformat }
                />
            );
        });

        return ( <
            section className = "main__summary" >
            <
            h2 > Your cart < /h2> {summary}{" "} <
            TotalAmount selected = { this.props.selected }
            currencyformat = { this.props.currencyformat }
            />{" "} <
            /section>
        );
    }
}

export default Cart;