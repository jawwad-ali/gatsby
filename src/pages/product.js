import React from 'react'
import { Router } from "@reach/router"
import ProductOne from '../components/productone'
import ProductTwo from '../components/producttwo'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import Footer from "../components/footer"

export default function Product() {

    return (
        <div>
            <Layout>
                <h2>Product Page</h2>
                <div>
                    <Link to="/product/productone">Product 1</Link>
                    <br />
                    <Link to="/product/producttwo">Product 2</Link>
                </div>


                <Router basepath="/product">
                    <ProductOne path="/productone" />
                    <ProductTwo path="/producttwo" />
                </Router>
            </Layout>
            <Footer />
        </div>
    )
}
