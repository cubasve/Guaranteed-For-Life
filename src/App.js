import React, { Component } from 'react';
import './App.css';
import companyData from './Data/companyData';
import { Card, Button, Form } from 'react-bootstrap';


export default class App extends Component {

  state = {
    companies: [],
    category: '',
  }

  componentDidMount() {
    this.setState({ companies: companyData });
  }

  handleSelectCategory = (e) => {
    this.setState({ category: e.target.value });
  }

  // getUniqueCategory(array, ) {

  // }

  render() {
    const companies = this.state.companies;
    const category = this.state.category;

    // const filterCategory = companies.filter()

    return (
      <div className="App">
        <header className="App-header">GUARANTEED FOR LIFE</header>
        <div className="App-filter">
          <Form.Group>
            <Form.Label>FILTER BY CATEGORY:</Form.Label>
            <Form.Control as="select" value={this.state.category} onChange={this.handleSelectCategory}>
              <option value="Apparel">Apparel</option>
              <option value="Toys">Toys</option>
              <option value="Bags">Bags</option>
              <option value="Cookware">Cookware</option>
              <option value="Tools">Tools</option>
            </Form.Control>
          </Form.Group>
        </div>

        <div className="company-cards">

        </div>

        {/* <div className="company-cards">
          {companyData.map((company, index) => {
            return (
              <Card key={index} style={{ width: '15rem' }} bg="secondary" text="white">
                <Card.Img variant="top" src={company.image} />
                <Card.Body>
                  <Card.Title>{company.name}</Card.Title>
                  <Button variant="primary" href={company.website} target="_blank" rel="noopener noreferrer">Website</Button>
                </Card.Body>
              </Card>
            )
          })}
        </div> */}
      </div>
    );
  }
}


