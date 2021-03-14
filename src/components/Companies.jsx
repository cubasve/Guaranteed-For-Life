import React, { useState } from 'react';
import companyData from '../Data/companyData';
import './Companies.css';
import { Card, Button, Form } from 'react-bootstrap';

export default function Companies() {
    const [category, setCategory] = useState('');

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
      }
      
      return (
          <>
          <div className="App-filter">
            <Form.Group>
              {/* <Form.Label>FILTER BY CATEGORY:</Form.Label> */}
              <Form.Control 
                as="select" 
                onChange={handleCategoryChange} 
                value={category}
                className="filter"
              >
                <option value="">Filter by Category...</option>
                <option value="Apparel">Apparel</option>
                <option value="Toys">Toys</option>
                <option value="Bags">Bags</option>
                <option value="Cookware">Cookware</option>
                <option value="Tools">Tools</option>
              </Form.Control>
            </Form.Group>
          </div>
    
          {!category ? 
             <div className="company-cards">
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
           </div>
           :
           <div className="company-cards">
            {companyData.filter(company => company.category === category).map((company, index) => {
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
        }
        </>
    )
}