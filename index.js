import React from 'react';

export default positionStickyIsSupported() ? NativeSticky : null;

const NATIVE_STICKY_DEFINITION = 'position: -webkit-sticky; position: -moz-sticky; position: sticky;';

class NativeSticky extends React.Component {
	getDefaultProps() {
		return {
			type: 'div',
		};
	}

	render() {
		// HACK: capitalized name is used because Babel will pass it's value to React.createElement.
		var Root = this.props.type;

		return (
			<Root style={NATIVE_STICKY_DEFINITION}>{this.props.children}</Root>
		);
	}
}

function positionStickyIsSupported() {
	return true;
}
