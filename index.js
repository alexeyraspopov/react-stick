import React from "react";

export default positionStickyIsSupported() ? NativeSticky : null;

const NATIVE_STICKY_CLASSNAME = "react-native-sticky-element-styles";
const NATIVE_STICKY_DEFINITION = `
	.${NATIVE_STICKY_CLASSNAME} {
		position: -webkit-sticky;
		position: -moz-sticky;
		position: sticky;
	}
`;

// TODO: possibly use only one component with condition like `notSupported ? renderDuplicateElement : null`
class NativeSticky extends React.Component {
	getDefaultProps() {
		return {
			type: "div",
		};
	}

	render() {
		/**
		 * HACK: capitalized name is used because Babel will pass it's value to React.createElement.
		 * Example:
		 *   <boo /> => React.createElement("boo", ...)
		 *   var Boo = "boo2"
		 *   <Boo /> => React.createElement(Boo, ...)
		 */
		var Root = this.props.type;
		// TODO: warn about native support?

		return (
			<Root className={NATIVE_STICKY_CLASSNAME}>
				<style scoped>{NATIVE_STICKY_DEFINITION}</style>
				{this.props.children}
			</Root>
		);
	}
}

function positionStickyIsSupported() {
	return true;
}
