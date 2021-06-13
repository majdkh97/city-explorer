import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'


export class CityForm extends Component {
      
    render() {
        return (
            <div>
                <Container >
                    <Form onSubmit={this.props.getCityData} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Choose a city</Form.Label>
                            <Form.Control type="text" placeholder="write the city name here" onChange={this.props.setCityName} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            EXPLORE
                        </Button>
                    </Form>
                </Container>

            </div>
        )
    }


}

export default CityForm;