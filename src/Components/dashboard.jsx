import React from 'react';
import {Card, Row , Col, Container} from 'react-bootstrap';


class DashboardComponents extends React.Component {
    render() {
      return (
          <>
            <Container>
                <div className={"about-warp"}>
                    <h1 className={"text-center pt-4 pb-4"}>Dashboard</h1>
                    <Row>
                        <Col md={12} sm={12} >
                            <Card className={"mb-4"}>
                                <Card.Body>
                                    <Card.Title className={"text-capitalize"}>dfdsfdsf</Card.Title>
                                    <Card.Text>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
             </Container>
          </>
      );
    }
}

export default DashboardComponents;