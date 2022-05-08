import React, { useState, useEffect, Fragment } from 'react';
import Country from './Country';
function Countries() {
    const [Countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [Flags, setFlags] = useState([]);
    const [city,setCity]= useState([]);
    const [ShowCities, setShowCities] = useState(false);
    const [Cities, setCities] = useState([]);


    const axios = require ('axios')


    useEffect(() => {
        if(Countries.length == 0 || !loading)
        fetchData();
        fetchFlags();
        fetchCountryCities();
      }, []);
    
    const fetchData = () => {
    setLoading(true);
    fetch("http://localhost:8080/countries/capitals")
        .then((response) => response.json())
        .then((data) => {
        setCountries(Object.values(data.data));
        setLoading(false);
        })
        .catch((error) => {
        console.log(error);
        setLoading(false);
        });
    };

    const fetchFlags = () => {
        setLoading(true);
        fetch("http://localhost:8080/countries/flags")
            .then((response) => response.json())
            .then((data) => {
            setFlags(Object.values(data.data));
            setLoading(false);
            })
            .catch((error) => {
            console.log(error);
            setLoading(false);
            });
        };

    const fetchCountryCities=()=>{
        setLoading(true);
        fetch("http://localhost:8080/countries/cities")
        .then((response)=>response.json())
        .then((data)=>{
            setCity(Object.values(data.data));
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
            });
    }


    return ( <>
    {
        Countries.map(country => {
                        
                    return (
                        <Fragment key={ Math.random().toString(36).substr(2, 9)}>
                        <Country  flags={Flags}  name={country.name} capital={country.capital} iso2={country.iso2} iso3={country.iso3} />
                        </Fragment>
                    )
        })
    }
    </> );
}

export default Countries;