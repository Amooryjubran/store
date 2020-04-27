import React from 'react';
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/HomePage/Features';
import Services from '../components/HomePage/Services';


export default function HomePage() {
    return (
        <>
        
            <Hero title="awesome gadgets">
                <Link to ="/products" style={{margin: '2rem'}} className="main-link">
                    out products
                    
                </Link>
            </Hero>
            <Services />
            <Features />
        </>
    )
}


