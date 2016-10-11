/**
 * Created by ivanlazarev on 11.10.16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    };

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    };
}

function mapStateToProps(state) { //if 'state' changes all will automatically re renders
    return {
        books: state.books // grabs to this.props to component
    };
}

export default connect(mapStateToProps)(BookList); // produces container