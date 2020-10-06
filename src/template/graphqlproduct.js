import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/layout"
import Footer from "../components/footer"

const Product = ({ pageContext }) => {

    // itemDetails is coming from createPage function
    const { itemDetails } = pageContext

    return (
        <div>
            <Layout>
                <h1 >{itemDetails.title}</h1>
                <p>{documentToReactComponents(itemDetails.desc.json)}</p>
                <p>{itemDetails.date}</p>
            </Layout>
            <Footer />
        </div>
    )
}
export default Product