import React, {Component} from "react";
import {connect} from "react-redux";

class BookDetail extends Component {
	render() {
		if(!this.props.book) {
			return <div> Select a book to get Started📚.</div>
		}
		return (
			<div>
				<h3>Details for:</h3>
				<div>Title: {this.props.book.title}</div>
				<div>Pages: {this.props.book.pages}</div>
			</div>
			);
	}
}

function mapStateToProps(state) {
	return { //the object we return is going to show up as propos inside BookDetail
		book: state.activeBook //the activeBook piece of state is created in reducers/index.js
	};
}

export default connect(mapStateToProps) (BookDetail);