import React, { useState, useEffect } from "react";
import { Row, Col, Image, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function HomeNavbar() {
    const navigate = useNavigate();
    const [len, setLen] = useState(0);
    useEffect(() => {
        let cartItems = JSON.parse(localStorage.getItem("mycart"));
        if (cartItems) {
            setLen(cartItems.length);
        }
    }, []);
    console.log(len);
    return (
        <div>
            <div>
                <Container
                    style={{
                        backgroundColor: "lightblue",
                        border: "1px solid black",
                    }}
                >
                    <Row>
                        <Col>
                            <Image style={{paddingTop:"20px"}}
                                src="./images/navbar.jpg"
                                
                            
                                height="100px"
                            />
                        </Col>
                        <Col style={{ justifyContent: "center" }}>
                            <h3 style={{ marginTop: "45px" }}>Pizza Hut</h3>
                        </Col>
                        <Col md={5} style={{ justifyContent: "right" }}>
                            <br />
                            <Button
                                variant="outline-dark"
                                style={{ margin: "1rem" }}
                                onClick={() => navigate("/menu")}
                            >
                                Menu
                            </Button>
                            <Button
                                variant="outline-dark"
                                style={{ margin: "1rem" }}
                                onClick={() => navigate("/cart")}
                            >
                                Cart {len}
                            </Button>
                            <Button
                                variant="outline-dark"
                                style={{ margin: "1rem" }}
                                onClick={() => navigate("/order")}
                            >
                                Orders
                            </Button>
                            <Button
                                variant="outline-dark"
                                style={{ margin: "1rem" }}
                                onClick={() => navigate("/profile")}
                            >
                                Profile
                            </Button>
                            <Button
                                variant="outline-dark"
                                style={{ margin: "1rem" }}
                                onClick={() => navigate("/")}
                            >
                                Logout
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}