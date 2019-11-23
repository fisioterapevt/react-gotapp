import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


const ButtonAttributes = {
    width: '100px',
    height: '40px',
    backgroundColor: '#212529',
    fontWeight: 'bold',
    marginBottom: '10px',
    border: '1px solid red'
}           

export default class App extends Component  {
    state = {
        visible: true
    }

    toggleVisibility = () => {
        this.setState(({visible}) => ({
            visible: !visible
        }));
    }

    
    render() {
        const { visible} = this.state
        return (
            <>
                <Container>
                    <Header/>
                    <Button 
                    style={ButtonAttributes}
                    onClick={() => this.toggleVisibility()}
                    
                    
                    >ClickMe</Button>
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            { visible ? <RandomChar/> : null}
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
                </>
            )
         }
     };