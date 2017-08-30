import React from 'react';
import styles from './Home.scss';

var sectionStyle = {
    width: "100%",
    height: "500px",
};

const Home = ({img, title, text}) => (
    <section style={ sectionStyle } className="homePage">
        <div>
            <h3 className={styles.h3}>{title}</h3>
            {text}
        </div>
    </section>
);


export default Home
