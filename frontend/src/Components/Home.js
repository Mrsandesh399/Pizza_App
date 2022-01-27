import React from 'react'
import { Container, Button,Card} from 'react-bootstrap'
import HomeNavbar from './HomeNavbar'
/* import Login from './Loginpage'
import Navs from './Navs' */ 


export default function Home() {
    return (
        <div>
            <HomeNavbar/>
            {/* <Login /> */}
            <Container className=" w-75 pt-3 pb-3  mt-5 mb-3 bg-light text-dark">
                <h2 className="display-4 text-bold text-uppercase">Pizza Delivery</h2><br/>
                <p style={{fontSize:"x-large"}}>Welcome to pizza delivery service. This is the place where you may choose the most delicious pizza you like from wide variety of options!</p>
                <hr/>
                <p style={{fontWeight:"bold",fontSize:"large"}}>We're performing delivery free of charge in case if your order is higher than 500rs</p>
                <Button variant="dark" href="/Login">Sign In and Order</Button>
            </Container>
        </div>
    )
}