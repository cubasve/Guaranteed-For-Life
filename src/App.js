// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import companyData from './Data/companyData';
import { Card } from 'react-bootstrap';

function App() {
  let data = companyData;

  return (
    <div className="App">
      {data.map((company, index) => {
        return (
          <Card>
            <Card.Img variant="top" src={company.image} />
            <Card.Body>
              <Card.Title>{company.name}</Card.Title>
              <Card.Text>{company.category}</Card.Text>
              {/* <Button variant="primary">{company.website}</Button> */}
              <a href={company.website} target="_blank" rel="noopener noreferrer"></a>
            </Card.Body>
          </Card>
        )
      })}

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

export default App;
