import { useEffect, useState } from "react";
import { Card, CardGroup, Button, Col, Accordion } from "react-bootstrap"

const axios = require ('axios')

function Country(props) {
    const [Flags, setFlags] = useState([]);
    const [Flag, setFlag] = useState('');
    const [ShowCities, setShowCities] = useState(false);
    const [Cities, setCities] = useState([]);


    useEffect(() => {
        setFlags(props.flags);
        Flags.map(flag => {
            if (flag.name === props.name)
                setFlag(flag.flag)
        })
    })
    
    const exploreCountry= (CountryName)=>{
       
        axios.post('https://countriesnow.space/api/v0.1/countries/cities',{country:CountryName})
        // .then((response)=>response)
        .then((data)=>{setCities(Object.values(data.data.data))
        })
        .catch((error)=> {
            console.log(error);
          });
    }
    
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
                            Capital: {props.capital}
                        </Card.Text>
                        <Button variant="primary" href="#" onClick={(e)=>{e.preventDefault();exploreCountry(props.name)}}>Explore Country</Button>
                    </Card.Body>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Click to reveal ISO codes and Cities</Accordion.Header>
                            <Accordion.Body>
                                ISO2: {props.iso2}
                                <br/>
                                ISO3: {props.iso3} 
                                <br/>
                                Click on explore Country to retrieve Cities
                                <br/>
                                Cities: 
                                <br></br>
                                <ul><li>{Cities}</li></ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card>
            </CardGroup>
            <br /> 
            {/* {
                Cities.map(city => {
                        
                    return (
                        
                        <City   />
                        
                    )
        })
            } */}
       </>
    );
}

export default Country;