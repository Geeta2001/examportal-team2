import React from 'react';
import './App.css';
import { Container, Row, Col} from 'reactstrap';
import Header from './components/Header';
import AllExams from './components/AllExams';
import AddExams from './components/AddExams';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuestionsPage from './components/QuestionsPage';

function App() {

  return ( <div>
    <Router>
    <Container>
      <Header></Header>
      <Row>
        <Col md={4}>
          <Menu/>
        </Col>
        <Col md={8}>
        <Routes>
          <Route path='/' element={<AllExams/>} exact />
          <Route path='/addexam' element={<AddExams/>} exact />
          <Route path='/addquestions' element={<QuestionsPage/>} exact />
          </Routes>
        </Col>
      </Row>
    </Container>
    </Router>
  </div>
  );

};

export default App;