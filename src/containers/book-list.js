/**
 * Created by ivanlazarev on 11.10.16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li

                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                    </li>
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

function mapDispatchToProps(dispatch) {

    return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList); // produces container