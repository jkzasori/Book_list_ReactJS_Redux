export function selectBook(book) {
	// selectBook is an ActionCreator, it needs to return an action,
	// an object with a type property.
	return {
		type: 'BOOK_SELECTED', //The action described is the user selecting a book
		payload: book //piece of data that described the action being undertaken
	}
}