import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';

const RandomCharBlock = styled.div `
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`
export const CharAttributes = {
    fontWeight: 'bold'
}

export default class RandomChar extends Component {

    render() {

        return (
            <RandomCharBlock className="random-block rounded">
                <h4>Random Character: John</h4>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="d-flex justify-content-between">
                        <span style={CharAttributes}>Gender </span>
                        <span>male</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span style={CharAttributes}>Born </span>
                        <span>11.03.1039</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span style={CharAttributes}>Died </span>
                        <span>13.09.1089</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span style={CharAttributes}>Culture </span>
                        <span>Anarchy</span>
                    </ListGroupItem>
                </ListGroup>
            </RandomCharBlock>
        );
    }
}
