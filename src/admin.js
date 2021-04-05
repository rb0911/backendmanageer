import React from 'react';
import { Row, Col } from 'antd';
import NavLeft from './components/NavLeft';
import HeaderContent from './components/Header';
import FooterContent from './components/Footer';
import './style/common.less';

export default class Admin extends React.Component{
    render(){
        return (
            <Row className="container">
                <Col span="3">
                    <NavLeft />
                </Col>
                <Col span="21">
                    <HeaderContent />
                    <FooterContent />
                </Col>
            </Row>
        )
    }
}