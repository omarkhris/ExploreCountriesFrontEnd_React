import { useEffect, useState ,Fragment} from "react";
import Currency from "./currency";
function Currencies() {
    const [Countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [Flags, setFlags] = useState([]);


    useEffect(() => {
        if (Countries.length == 0 || !loading)
            fetchData();
            fetchFlags();
    }, []);

    const fetchData = () => {
        setLoading(true);
        fetch("http://localhost:8080/countries/currencies")
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
    return (
        <>
            {
                Countries.map(country => {
                    return( 
                            <Fragment key={ Math.random().toString(36).substr(2, 9)}>
                            <Currency key={Math.random().toString(36).substr(2, 9)} flags={Flags} name={country.name} currency={country.currency} iso2={country.iso2} iso3={country.iso3} /> 
                            </Fragment>
                            
                    );
                })
            }
        </>
    );
}

export default Currencies;