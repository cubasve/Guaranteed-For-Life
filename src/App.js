import React, { useEffect, useState } from 'react';
import './App.css';
import companyData from './Data/companyData';
import { Card, Button, Form } from 'react-bootstrap';

export default function App() {
  const [category, setCategory] = useState('');
  /* const [data, setData] = useState(companyData); */

  // useEffect(() => {
  //   <div className="company-cards">
  //     {companyData.map((company, index) => {
  //       return (
  //         <Card key={index} style={{ width: '15rem' }} bg="secondary" text="white">
  //           <Card.Img variant="top" src={company.image} />
  //           <Card.Body>
  //             <Card.Title>{company.name}</Card.Title>
  //             <Button variant="primary" href={company.website} target="_blank" rel="noopener noreferrer">Website</Button>
  //           </Card.Body>
  //         </Card>
  //       )
  //     })}
  //   </div>
  // }, []);

  const handleCategoryChange = (e) => {
    console.log('e.target.value; ', e.target.value);
    setCategory(e.target.value)
  }

  // const filterCategory = data.filter(result => result.category === category);
  // console.log('filterCategory: ', filterCategory);
  
  return (
    <div className="App">
      <header className="App-header">GUARANTEED FOR LIFE</header>
      <div className="App-filter">
        <Form.Group>
          <Form.Label>FILTER BY CATEGORY:</Form.Label>
          <Form.Control as="select" onChange={handleCategoryChange} value={category}>
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
      
      {/* <div className="company-cards">
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
      </div> */}
    </div>
  );
}


