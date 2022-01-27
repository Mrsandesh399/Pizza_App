import React, { useEffect, useState } from "react";

import { Container, Table } from "react-bootstrap";
import HomeNavbar from "./HomeNavbar";
import axios from "axios"

export default function Orders() {
    const [order1, setOrder1] = useState([]);
    const [pizza, setPizza] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8899/api/posts/orderdetails").then((res) => {
            console.log(res.data.total);
            setOrder1(res.data);
            setPizza(res.data.order);
        });
    }, []);
    console.log(order1.cardnumber);
    return (
        <div>
            <HomeNavbar />
            <br />
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Order History</th>
                            <th>Card Number</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order1.map((value, index) => {
                            return (
                                <tr>
                                    <td>{value.name}</td>
                                    <td>{value.cardnumber}</td>
                                    <td>{value.total}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}