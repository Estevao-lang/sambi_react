import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './App.css';

function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/dados')
      .then(response => {
        setDados(response.data);
  console.log(response.data)



        
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (dados.length === 0) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
      <Row>
        {dados.map(item => (
          <Col key={item.id} xs={12} md={6} lg={4}>
            <Card className="mb-3">
              <Card.Img variant="top" src={item.imagem} />
              <Card.Body>
                <Card.Title>{item.titulo}</Card.Title>
                <Card.Text>{item.descricao}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
