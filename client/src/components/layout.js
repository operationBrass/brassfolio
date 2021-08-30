import React from 'react';
import Navigation from '../components/Navigation';
//import Header from '../components/';
import Footer from '../components/Footer';

export default function Layout(props) {
    return (
        <div>

            <Navigation></Navigation>


                {props.children}

            <Footer></Footer>
        </div>
    )
}