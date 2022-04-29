import { Card, Container, Spinner, Table } from "react-bootstrap";
import Position from "./Position";

const IpDetails = (props) => {
    const { data, countryData } = props;

    console.log(data);
    console.log(countryData);

    return (
        data && countryData ? (
            <>
                <div id="details" >
                    <div className="container">
                        <Card className={'w-75 border shadow mx-auto mb-5'}>
                            <Card.Header className="bg-white">
                            </Card.Header>
                            {/* <Card.Img variant="top" src={`https://flagcdn.com/h240/${data.location.country.toLowerCase()}.webp`} /> */}
                            <Card.Body className="p-0">
                                <Position location={[data.location.lat, data.location.lng]} />
                                <Card.Title>Your Ip: {data.ip}</Card.Title>
                                <Card.Body className="justify-content-center p-0">
                                    <Container className="row mx-auto my-0 p-0">
                                        <Table className="w-50 my-0" bordered striped>
                                            <tbody>
                                                <tr>
                                                    <th>Continent</th>
                                                    <td>{countryData.region}</td>
                                                </tr>
                                                <tr>
                                                    <th>Country</th>
                                                    <td>{countryData.name.common}</td>
                                                </tr>
                                                <tr>
                                                    <th>Region</th>
                                                    <td>{data.location.region}</td>
                                                </tr>
                                                <tr>
                                                    <th>ZIP-Code</th>
                                                    <td>{data.location.postalCode}</td>
                                                </tr>
                                                <tr>
                                                    <th>City</th>
                                                    <td>{data.location.city}</td>
                                                </tr>
                                                <tr>
                                                    <th>Timezone</th>
                                                    <td>{data.location.timezone}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <Table className="w-50 my-0" bordered striped>
                                            <tbody>
                                                <tr>
                                                    <th>Flag</th>
                                                    <td><img src={countryData.flags.svg} alt={`Flag of ${countryData.name.common}`} /></td>
                                                </tr>
                                                <tr>
                                                    <th>Population</th>
                                                    <td>{countryData.population}</td>
                                                </tr>
                                                <tr>
                                                    <th>Capital City</th>
                                                    <td>{countryData.capital}</td>
                                                </tr>
                                                <tr>
                                                    <th>UN Member</th>
                                                    <td>{countryData.unMember ? 'yes' : 'no'}</td>
                                                </tr>
                                                <tr>
                                                    <th>Independent</th>
                                                    <td>{countryData.independent ? 'yes' : 'no'}</td>
                                                </tr>
                                                <tr>
                                                    <th>Traffic side</th>
                                                    <td>{countryData.car.side}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Container>
                                </Card.Body>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

            </>
        ) : (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    )
}

export default IpDetails;