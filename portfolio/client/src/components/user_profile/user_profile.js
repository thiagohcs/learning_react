import React from "react";
import { Row, Col, Card } from 'react-materialize';
import avatar from '../../images/picture.jpg';

const UserProfile = () => (
    <Card>
        <Row>
            <Col s={8} m={8} offset="s2 m2">
                <img className="circle responsive-img" src={avatar} alt="true" />
            </Col>
        </Row>
        <Row>
            <h5>Thiago H. Cândido</h5>
            <p className="grey darken-2 white-text">Full Stack Web Developer</p>
        </Row>
    </Card>
);

export default UserProfile;