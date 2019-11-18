import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';
import {CharAttributes} from '../randomChar/randomChar';
// import './charDetails.css';

const CharDetailsBlock = styled.div `
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`


export default class CharDetails extends Component {

    render() {
        return (
            <CharDetailsBlock className="rounded">
                <h4>John Snow</h4>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="d-flex justify-content-between">
                        <span style={CharAttributes}>Gender</span>
                        <span>male</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span style={CharAttributes}>Born</span>
                        <span>1783</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span style={CharAttributes}>Died</span>
                        <span>1820</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span style={CharAttributes}>Culture</span>
                        <span>First</span>
                    </ListGroupItem>
                </ListGroup>
            </CharDetailsBlock>
        );
    }
}