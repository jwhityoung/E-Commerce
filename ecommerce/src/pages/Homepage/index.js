import React from 'react';
import Directory from './../../components/Directory';
import './styles.scss';

//functional components so using const
const Homepage = props => {
    return (
<section className="homepage">
    <Directory />
</section>
    );
};

export default Homepage;
