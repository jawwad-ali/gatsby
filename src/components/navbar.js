import React from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.css"

export default function Navbar() {

    return (
        <div className={styles.container}>
            <div className={styles.linklist}>
                <Link className={styles.links} to="/">Home</Link>
                <Link className={styles.links} to="/about">About</Link>
                <Link className={styles.links} to="/product">Product</Link>
                <Link className={styles.links} to="/contact">Contact</Link>
            </div>
        </div>
    )
}
{/* <Link className={styles.links} to="/car">Car</Link> */ } 