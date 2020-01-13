import React, { Component } from "react";

export default class RefInput extends Component {
	render() {
		const { inputRef, inputValue, inputOnChange } = this.props;
		return (
			<input
				type="text"
				name="RefInput"
				ref={inputRef}
				value={inputValue}
				onChange={e => inputOnChange(e)}
			/>
		);
	}
}
