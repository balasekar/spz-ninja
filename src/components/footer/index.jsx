import React, {Component} from 'react';
import ISO from './images/i1.png';
import IAF from './images/i2.png';
import ANZ from './images/i3.png';
import CE from './images/i5.png';


class Footer extends Component {

    render() {

        return (
            <footer className="navbar-fixed-bottom">
                <div className="container">
                    <div className="row pull-right">
                        <p>
                            <img src={ISO} alt="Mountain View" style={{width:43,height:79}}/>
                            <img src={IAF} alt="Mountain View" style={{width:73,height:76}}/>
                            <img src={ANZ} alt="Mountain View" style={{width:39,height:76}}/>
                            <img src={CE} alt="Mountain View" style={{width:68,height:76}}/>
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;