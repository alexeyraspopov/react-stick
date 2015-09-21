# react-stick

Sticky component for React that will use CSS property if it's available.

## Install

	npm install react-stick --save

## Usage

	<Sticky>
		<h1>Hello</h1>
	</Sticky>

Class names and styles applied to `<Sticky />` element will be used for root element. Also you can specify type of root element.

	<Sticky type="header">
		<h1>This H1 is inside header element</h1>
	</Sticky>
