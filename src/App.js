import React from 'react';
import './App.css';
import companyData from './Data/companyData';
import { Card, Button, Form } from 'react-bootstrap';

function showApparelCompanies(data) {
  // data.filter(company.category === 'Apparel');
}

export default function App() {
  let data = companyData;

  return (
    <div className="App">
      <header className="App-header">GUARANTEED FOR LIFE</header>
      <div className="App-filter">
        <Form.Group>
          <Form.Label>State</Form.Label>
          <Form.Control as="select" defaultValue="Filter by category">
            <option onClick={showApparelCompanies(data)}>Apparel</option>
            <option>Toys</option>
            <option>Bags</option>
            <option>Cookware</option>
            <option>Tools</option>
          </Form.Control>
        </Form.Group>

      </div>
      <div className="company-cards">
        {data.map((company, index) => {
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
      </div>


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}