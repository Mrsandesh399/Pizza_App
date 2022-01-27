import { Card, Container } from "react-bootstrap";
import HomeNavbar from "./HomeNavbar"

let user = JSON.parse(localStorage.getItem("user"));

function Profile() {
    return (
        <>
            <HomeNavbar/>
            <Container className="text-center ">
                <br />
                <h1>User Details</h1>
                <br />
                <Card style={{ width: "50%", margin: "auto" }}>
                    <Card.Body>
                        <Card.Title>
                            {user.name}
                        </Card.Title>
                        <Card.Text>{user.email}</Card.Text>
                        <Card.Text>{user.contact}</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Profile;