import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ListGroupStyle = {
    cursor: 'pointer'
}
export default class ItemList extends Component {

    render() {
        return (
            <ListGroup style={ListGroupStyle}>
                <ListGroupItem>
                    John Snow
                </ListGroupItem>
                <ListGroupItem>
                    Brandon Stark
                </ListGroupItem>
                <ListGroupItem>
                    Geremy
                </ListGroupItem>
            </ListGroup>
        );
    }
}