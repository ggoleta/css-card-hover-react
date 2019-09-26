import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';

import { Container, Card, Content } from './styles'

function Main(){
    return (
        <Container>
            <Card>
                <div className="face face1">
                    <Content className="content">
                        <FaLaptopCode color="#fff" size={100}/>
                        <h3>Code</h3>
                    </Content>
                </div>
                <div className="face face2">
                    <Content className="content">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <a href="#">Read More</a>
                    </Content>
                </div>
            </Card>
        </Container>
    );
}

export default Main;
