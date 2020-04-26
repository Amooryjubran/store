import React from 'react';
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';


export default function HomePage() {
    return (
        <>
            <Hero title="awesome gadgets">
                <Link to ="/products" style={{margin: '2rem'}} className="main-link">
                    out products
                </Link>
            </Hero>
        </>
    )
}


