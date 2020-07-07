import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import {deleteBook,getSavedBooks} from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";



class Saved extends Component {

  constructor(){
    super()
    this.state= {books:[]}
  }
  componentDidMount(){
    this.getSavedBooks()
  }
  getSavedBooks() {
    getSavedBooks().then(res => this.setState({books:res.data}))
  }

  handleBookDelete = id => {
    deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
    console.log(this.state.books)
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
            
                <List>

                  {this.state.books.map((book) => (

                    <Book
                    key={book.id}
                    title={book.volumeInfo.title}
                    subtitle={book.volumeInfo.subtitle}
                    link={book.volumeInfo.infoLink}
                    authors={book.volumeInfo.authors.join(", ")}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
