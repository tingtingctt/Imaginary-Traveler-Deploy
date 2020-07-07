import React, {useState, useContext} from "react";
import Card from "../components/Card";
import CardTwo from "../components/CardTwo";
import Form from "../components/Form";
import Book from "../components/Book";
import {getBooks,saveBook} from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

import {userContext} from "../utils/appContext"
import "../components/Container/style.css"
import BrushyBackground from "../components/BrushyBackground/brushyIndex.js";
import SearchBackground from "../components/SearchBackground/searchBackgroundIndex.js"



import Nav from "../components/Nav";


export default ()=> { 
  const {user} = useContext(userContext)
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState("");
  console.log(user)
  const handleSearch = (e) => {
    e.preventDefault()
    getBooks(search).then(({data}) => {
      console.log(data)
      setBooks(data)})
  };

  const handleBookSave = book => saveBook(book, user._id)

      return (
        <div className="body">
        <BrushyBackground>
        <Container>

          <SearchBackground>

          <Nav/>
          

          <Row>
            {/* <Col size="md-12">
            </Col> */}
            <Col size="md-12">
              <Card title="My Bookshelf Builder" icon="far fa-book">
                <Form
                  onChange={setSearch}
                  handleFormSubmit={handleSearch}
                  q={search}
                />
              </Card>

            </Col>
          </Row>
          </SearchBackground>

          <Row>
            <Col size="md-12">
              <CardTwo>
              <h3 style={{"color" : "#ffffff"}}>Results</h3>
                  <List>
                    {books.map(book => (
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
                            onClick={() => handleBookSave(book)}
                            className="btn btn-primary ml-2"
                          >
                            Save
                          </button>
                        )}
                      />
                    ))}
                  </List>
              </CardTwo>
            </Col>
          </Row>
        </Container>
        </BrushyBackground>
        <BrushyBackground>
          <p style={{"fontSize" : "400px", "color" : "transparent"}}>
            results
          </p>
        </BrushyBackground>
        </div>
      );
  }