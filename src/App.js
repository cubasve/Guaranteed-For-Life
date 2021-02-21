import React, { useState } from 'react';
import './App.css';
import companyData from './Data/companyData';
import { Card, Button, Form } from 'react-bootstrap';

const handleCategorySubmit = (e) => {
  e.preventDefault();
  try {
    console.log('submitted!')
  } catch (err) {
    console.error(err);
  }
}

export default function App() {
  const [category, setCategory] = useState('');
  const [data, setData] = useState(companyData);

    return (
      <div className="App">
        <header className="App-header">GUARANTEED FOR LIFE</header>
        <div className="App-filter">
          <Form.Group>
            <Form.Label>FILTER BY CATEGORY:</Form.Label>
            <Form.Control as="select">
              <option value="Apparel" onClick={() => setCategory('Apparel')}>Apparel</option>
              <option value="Toys" onClick={() => setCategory('Toys')}>Toys</option>
              <option value="Bags" onClick={() => setCategory('Bags')}>Bags</option>
              <option value="Cookware" onClick={() => setCategory('Cookware')}>Cookware</option>
              <option value="Tools" onClick={() => setCategory('Tools')}>Tools</option>
            </Form.Control>
          </Form.Group>
        </div>
        
        <div className="company-cards">
          {data.filter(company => company.category === category).map((company, index) => {
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
      </div>
    );
}


