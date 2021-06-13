import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'

export class Results extends Component {
    render() {
        return (
            <div>
                <Container style={{display: "flex", justifyContent: "center", marginTop: "20px"}} >
                    <Card style={{ width: '18rem', color:"white", backgroundColor:"blue" }}>
                        <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=15`} alt=""/>
                        <Card.Body>
                            <Card.Title>{this.props.cityData.display_name}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Longitude :{this.props.cityData.lon}</ListGroupItem>
                            <ListGroupItem>Latitude  :{this.props.cityData.lat}</ListGroupItem>
                        </ListGroup>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Results
