import React from 'react';
import Link from 'next/link';

/*Simple header function with web title & navigation*/
const Header = () => {
    return (
        <header style={{ backgroundColor: "#ABC798" }}>
            <h1 style={{ fontSize: "55px", color: "#3C493F", textAlign: "center", padding: "3px" }}>GetCooked</h1>
            <h2 style={{ fontSize: "30px", color: "#3C493F", textAlign: "center" }}>The Interactive Recipe Book</h2>

            <div>
                <ul style={{ display: "grid", justifyContent: "center", color: "#111111", padding: "4px", textDecoration: "underline" }}>
                    <li style={{ fontSize: "14px", listStyle: "none", textAlign: "center"}}><Link href="/">Home</Link></li>
                    <li style={{ fontSize: "14px", listStyle: "none", textAlign: "center" }}><Link href="/recipebook">The Recipe Book</Link></li>
                    <li style={{ fontSize: "14px", listStyle: "none", textAlign: "center" }}><Link href="/contact">Contact Us</Link></li>
                    <li style={{ fontSize: "14px", listStyle: "none", textAlign: "center" }}><Link href="/favorites">Your Favorites</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
