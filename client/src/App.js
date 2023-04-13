import { Container, Button, Row, Col } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import UsersList from "./UsersList";
import UsersListData from "./UsersListData";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md="12">
			<UsersListData />
        </Col>
      </Row>
    </Container>      
  );
}

export default App;
