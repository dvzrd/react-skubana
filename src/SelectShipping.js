import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const options = [
  { value : '1', hexColor: '#c488f3', label: '2 Day Shipping' },
  { value : '2', hexColor: '#25a696', label: '3-5 Day Shipping' },
  { value : '3', hexColor: '#da3b11', label: 'Address Check' }
];

var SelectShipping = React.createClass({
	propTypes: {
		label: React.PropTypes.string
	},

	getInitialState () {
		return {
			options: options,
			value: []
		};
	},

  renderOption(option) {
		return (
			<span className="option">
        <span className="hex"
              style={{
                display: 'inline-block',
                width: '0.5em',
                height: '1em',
                marginRight: '0.5em',
                borderRadius: '0.25em',
                verticalAlign: 'sub',
                backgroundColor: option.hexColor
              }}>
        </span>
        {option.label}
      </span>
		);
	},

	renderValue(option) {
    return (
			<span className="option">
        <span className="hex"
              style={{
                display: 'inline-block',
                width: '0.5em',
                height: '1em',
                marginRight: '0.5em',
                borderRadius: '0.25em',
                verticalAlign: 'sub',
                backgroundColor: option.hexColor
              }}>
        </span>
        {option.label}
      </span>
		);
	},

	handleSelectChange (value) {
		console.log('You\'ve selected:', value);
		this.setState({ value });
	},

	render () {
		return (
			<section className="shipping component">
        <Select multi
                simpleValue
                value={this.state.value}
                placeholder="Select shipping method"
                options={this.state.options}
                optionRenderer={this.renderOption}
                valueRenderer={this.renderValue}
                onChange={this.handleSelectChange} />
        <figure className="values"
                style={{
                  position: 'fixed',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  margin: 0,
                  padding: '0.25em',
                  backgroundColor: '#000',
                  color: '#fff'
                }}>
          {this.state.value}
        </figure>
			</section>
		);
	}
});

module.exports = SelectShipping;
