import React from "react"
import { Router } from "@reach/router"
import Toyota from "../components/toyota"
import Honda from "../components/honda"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import Footer from "../components/footer"

const Car = () => {
    return (
        <div>
            <Layout>
                <h2>Car Component!</h2>

                <div>
                    <Link to="/car/toyota"> Toyota</Link>
                    <br />
                    <Link to="/car/honda">Honda</Link>
                </div>

                <Router basepath="/car">
                    <Toyota path="/toyota" />
                    <Honda path="/honda" />
                </Router>
            </Layout>
            <Footer />
        </div>
    )
}
export default Car