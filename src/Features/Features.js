import React, { Component } from "react";
import slugify from "slugify";
import FeatureItems from "../FeatureItems/FeatureItems";

class Features extends Component {
    render() {
        console.log(this.props);
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + "-" + idx;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return ( <
                    FeatureItems itemHash = { itemHash }
                    selected = { this.props.selected }
                    features = { this.props.features }
                    currencyformat = { this.props.currencyformat }
                    onChange = { this.props.updateFeature }
                    feature = { feature }
                    item = { item }
                    />
                );
            });

            return ( <
                fieldset class = "feature"
                key = { featureHash } >
                <
                legend class = "feature__name" >
                <
                h3 > { feature } < /h3>{" "} <
                /legend>{" "} { options } { " " } <
                /fieldset>
            );
        });
        return <div > { features } < /div>;
    }
}

export default Features;