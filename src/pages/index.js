import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"

export default function Home() {

    return (
        <div>
            <Layout>
                Hello World from <strong>Gatsby!</strong>
            </Layout>

            <ul>
                {posts}
            </ul>

            <Footer />
        </div>
    )
}