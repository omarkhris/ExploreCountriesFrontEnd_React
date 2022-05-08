import { useEffect, useState } from "react";
import { Card, CardGroup, Button, Col, Accordion } from "react-bootstrap"
function Currency(props) {
    const [Flags, setFlags] = useState([]);
    const [Flag, setFlag] = useState('');
    

    useEffect(() => {
        setFlags(props.flags);
        Flags.map(flag => {
            if (flag.name === props.name)
                setFlag(flag.flag)
        })
    })
    return (
        <>
            <CardGroup key={props.name}>
                <Card style={{ width: '18rem' }}>
                    <Col xs={12} sm={15} md={40}>
                        <Card.Img style={{ height: '100px', width: '150px', textAlign: 'center' }} src={Flag} />
                    </Col>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                            Curency: {props.currency}
                        </Card.Text>
                    </Card.Body>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Click to reveal ISO codes</Accordion.Header>
                            <Accordion.Body>
                                ISO2: {props.iso2}
                                <br/>
                                ISO3: {props.iso3} 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card>
            </CardGroup>
            <br />
        </>
    );
}

export default Currency;