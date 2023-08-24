import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';

function App() {
return (
    <div className="App">
    <header className="App-header">
    <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
        <br />

    </>

    <Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title>Card1</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title>Card2</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title>Card3</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
    </Card>
    </header>
    </div>
);
}

export default App;




