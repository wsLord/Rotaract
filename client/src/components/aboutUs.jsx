import React from "react";
import Header from "./../components/header";
import Footer from "./../components/footer";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const About = () => {
    return (
        <>
        <Header />
        <br />
        <br />
        <div className="content container">
            <div className="row"><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<br />
<br />
Saurabh<br />
Title- President<br />
Mail at:- saurabh99184@gamil.com<br />

LinkedIn:- www.linkedin.com/in/saurabh-1729<br />

</div>
<hr />
</div>
        
        <div className="container">
        <div class="row">
            <h1>Rotaract web team member:-</h1>
            <div class="col-lg-3">
        <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
<div class="col-lg-3">
        <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
<div class="col-lg-3">
        <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
<div class="col-lg-4">
        <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
</div>
<br /><br />

</div>
            <Footer />
        </>
    )
}
export default About;