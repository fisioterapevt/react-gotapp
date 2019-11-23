import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';
import gotService from '../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage'

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
    constructor() {
        super();
        this.updateChar();
    }

    gotService = new gotService();
    state = {
        char:{},
        loading: true,
        error: false

    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar() {
        const id = Math.floor(Math.random() *  140 + 25);
        // const id = 1101010101;
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        const {char, loading, error } = this.state;

            const errorMessage = error ? <ErrorMessage/> : null;
            const spinner = loading ? <Spinner/> : null;
            const content = !(loading || error) ? <ViewCharBlock char={char}/> : null;

        return (
            <RandomCharBlock className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </RandomCharBlock>
        );
    }
}

const ViewCharBlock = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="d-flex justify-content-between">
                    <span style={CharAttributes}>Gender </span>
                    <span>{gender}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <span style={CharAttributes}>Born </span>
                    <span>{born}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                        <span style={CharAttributes}>Died </span>
                        <span>{died}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <span style={CharAttributes}>Culture </span>
                    <span>{culture}</span>
                </ListGroupItem>
            </ListGroup>
        </>
    )
}