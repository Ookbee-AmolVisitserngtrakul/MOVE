import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Button, Container, Card, Row } from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props)

    localStorage.setItem("AccessToken", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbW9sIiwiaWF0IjoxNjU4ODMwMTIzOTI1fQ.31kSwDTNMeEt5rM_BR_gcdkT1JaES7QviePTa88u2Sw")

    this.state = {
      setBookName: '',
      setReview: '',
      fetchData: [],
      reviewUpdate: ''
    }

    this.headers = {
      headers: { "Authorization": localStorage.getItem("AccessToken") }
    }
  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value
    this.setState({
      [nam]: val
    })
  }
  
  handleChange2 = (event) => {
    this.setState({
      reviewUpdate: event.target.value
    })
  }
  
  componentDidMount = () => {
    axios.get("/api/books/get", this.headers)
    .then((response) => {
      if (response.data) {
        this.setState({
            fetchData: response.data
        })
      }
    })
  }
  
  submit = () => {
    axios.post('/api/books/insert', this.state, this.headers)
        .then(() => { alert('success post') })
    console.log(this.state)
    document.location.reload();
  }
  
  delete = (id) => {
    if (window.confirm("Do you want to delete? ")) {
        axios.delete(`/api/books/delete/${id}`, this.headers)
        document.location.reload()
    }
  }
  
  edit = (id) => {
    axios.put(`/api/books/update/${id}`, this.state, this.headers)
    document.location.reload();
  }
  
  render () {
    let card = this.state.fetchData.map((val, key) => {
        return (
            <React.Fragment>
                <Card style={{ width: '18rem' }} className='m-2'>
                    <Card.Body>
                        <Card.Title>{val.book_name}</Card.Title>
                        <Card.Text>
                            {val.book_review}
                        </Card.Text>
                        <input name='reviewUpdate' onChange={this.handleChange2} placeholder='Update Review' ></input>
                        <Button className='m-2' onClick={() => { this.edit(val.id) }}>Update</Button>
                        <Button onClick={() => { this.delete(val.id) }}>Delete</Button>
                    </Card.Body>
                </Card>
            </React.Fragment>
        )
    })
  
    return (
        <div className='App'>
            <div className='form'>
                <input name='setBookName' placeholder='Enter Book Name' onChange={this.handleChange} />
                <input name='setReview' placeholder='Enter Review' onChange={this.handleChange} />
            </div>
            <Button className='my-2' variant="secondary" onClick={this.submit}>Submit</Button> <br /><br />
            <Container>
                <Row>
                    {card}
                </Row>
            </Container>
        </div>
    )
  }
}
export default Home
