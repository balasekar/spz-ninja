import React, {Component} from 'react';
import {Footer} from 'react-materialize';


class SPZ_Footer extends Component {
    render() {
        return (
            <Footer copyrights="&copy 2017 Copyright Text"
                    moreLinks={
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    }
                    links={
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">ISI</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">IAF</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">TNSCT</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">IND</a></li>
                        </ul>
                    }
                    className='example'>
                <h5 className="white-text">Certificates</h5>
                <p className="grey-text text-lighten-4">Certificates obtained by SPowerZ</p>
            </Footer>
        );
    }
}
export default SPZ_Footer;