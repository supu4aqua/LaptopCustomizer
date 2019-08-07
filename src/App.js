import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    };
  }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
    const summary = Object.keys(this.state.selected).map(key => (
      <div className="summary__option" key={key}>
        <div className="summary__option__label">{key} </div>
        <div className="summary__option__value">
          {this.state.selected[key].name}
        </div>
        <div className="summary__option__cost">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(this.state.selected[key].cost)}
        </div>
      </div>
    ));

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map((item, index) => {
        const itemHash = JSON.stringify(item);
        const selectedClass =
          item.name === this.state.selected[feature].name
            ? 'feature__selected'
            : '';
        const featureClass = 'feature__option ' + selectedClass;
        return (
          <div key={itemHash} className="feature__item">
            <input type="radio"
              value={index}
              id={featureHash}
              name={feature.trim().toLowerCase()}
            />
            <div
              className={featureClass}
              onClick={e => this.updateFeature(feature, item)}
            >
              {item.name}(
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
              }).format(item.cost)}
              )
            </div>
          </div>
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">{feature}</legend>
          {options}
        </fieldset>
      );
    });

    return (
      <div className="App">
        <header>
          <h1>ELF Computing</h1>
          <h3>Laptops</h3>
          <h5>Customize your laptop</h5>
        </header>
        <main>
          <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            {features}
          </section>
          <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            {summary}
            <div className="summary__total">
              <div className="summary__total__label">Your Price: </div>
              <div className="summary__total__value">
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
                }).format(total)}
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
