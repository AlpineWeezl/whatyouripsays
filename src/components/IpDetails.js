import { Card, Spinner } from "react-bootstrap";
import Position from "./Position";

const IpDetails = (props) => {
    const { data, countryData } = props;

    // console.log(data);
    // console.log(countryData);

    return (
        data && countryData ? (
            <>
                <div id="details" >
                    <div>
                        <Card style={{
                            width: '80vw',
                            borderRadius: '5px',
                            boxShadow: '0 0 10px #888'
                        }}>
                            <Card.Img variant="top" src={`https://flagcdn.com/256x192/${data.location.country.toLowerCase()}.webp`} />
                            <Card.Body>
                                <Card.Title>Your Ip: {data.ip}</Card.Title>
                                <Card.Text>
                                    <table>
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
                                    </table>
                                        <Position location={[data.location.lat, data.location.lng]} />
                                </Card.Text>
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