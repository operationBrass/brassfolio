import React from 'react';
import Navigation from './Navigation';
//import Header from '../components/';
import Footer from './Footer';

export default function Layout(props) {
    return (
        <div>

            <Navigation></Navigation>


                {props.children}

            <Footer></Footer>
        </div>
    )
}