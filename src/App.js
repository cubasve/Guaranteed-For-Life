import React, { useState, useEffect } from 'react';
import './App.css';
import companyData from './Data/companyData';
import { Card, Button, Form } from 'react-bootstrap';

// handleFilterChange = (e, selectedCategory) => {
//   setSelectedCategory({ selectedCategory: e.target.value });
// }

const getSelectedCategory = (e) => {
  alert(e.target.value)
  console.log('e.target.value: ', e.target.value);
  companyData.filter(company => company.category === e.target.value);
}

export default function App() {
  let data = companyData;

  const [companies, setCompanies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() =>
    // let data = companyData;
    // setCompanies({ companies: companyData });
    < div className="company-cards" >
      {data.filter(company => company.category === 'Bags').map((company, index) => {
        return (
          <Card key={index} style={{ width: '15rem' }} bg="secondary" text="white">
            <Card.Img variant="top" src={company.image} />
            <Card.Body>
              <Card.Title>{company.name}</Card.Title>
              <Button variant="primary" href={company.website} target="_blank" rel="noopener noreferrer">Website</Button>
            </Card.Body>
          </Card>
        )
      })
      }
    </div >
    , []);

  return (
    <div className="App">
      <header className="App-header">GUARANTEED FOR LIFE</header>
      <div className="App-filter">
        <Form.Group>
          {/* <Form.Label>FILTERS</Form.Label> */}
          <Form.Control as="select" value={selectedCategory}>
            <option value="Apparel" onClick={getSelectedCategory}>Apparel</option>
            <option value="Toys" onClick={getSelectedCategory}>Toys</option>
            <option value="Bags" onClick={getSelectedCategory}>Bags</option>
            <option value="Cookware" onClick={getSelectedCategory}>Cookware</option>
            <option value="Tools" onClick={getSelectedCategory}>Tools</option>
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
    </div>
  );
}