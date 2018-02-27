import React, {Component} from "react";
import BookList from './book_list';
import BookDetail from './book_detail';

class Home extends Component {
	render(){
		return (
			<div>
				<BookList />
				<BookDetail />
			</div>
			);
		}
		
}
export default Home;