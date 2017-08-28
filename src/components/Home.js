import React from 'react';
import styles from './Home.scss';

var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url('../images/home1.jpg')"
};

const Home = ({img, title, text}) => (
/*    <Card className='small'
          header={<CardTitle image={img}>{title}</CardTitle>}>
        {text}
    </Card>*/
    <section style={ sectionStyle } className="homePage">
        <div>
            <h3 className={styles.h3}>{title}</h3>
            {text}
        </div>
    </section>
);


export default Home
