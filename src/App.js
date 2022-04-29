import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import IpDetails from './components/IpDetails';

const App = () => {
    const [data, setData] = useState();
    const [countryData, setCountryData] = useState();

    useEffect(() => {
        // axios.get('test.json')
        axios.get(process.env.REACT_APP_API_URL)
            .then(res => {
                setData(res.data);
                axios.get(`https://restcountries.com/v3.1/alpha/${res.data.location.country}`)
                    .then(res2 => {
                        res2.data.map(entry => { return setCountryData(entry) });
                    });
            });

    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>What your IP says</h1>
            </header>
            <main className='App-main'>
                <IpDetails data={data} countryData={countryData} />

            </main>
            <footer className='App-footer'>

            </footer>
        </div>
    );
}

export default App;
