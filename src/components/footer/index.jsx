import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

class Footer extends Component {
    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({selectedIndex: index});

    render() {
        const ISOimg = <img src="./images/i1.png" alt="ISO"/>;
        const IAFimg = <img src="./images/i2.png" alt="IAF"/>;
        const JASANZimg = <img src="./images/i3.png" alt="JAS-ANZ"/>;
        const CEimg = <img src="./images/i5.png" alt="CE"/>;


        return (
            <Paper zDepth={1}>
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem
                        label="ISO"
                        icon={ISOimg}
                        onClick={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="IAF"
                        icon={IAFimg}
                        onClick={() => this.select(1)}
                    />
                    <BottomNavigationItem
                        label="JAS-ANZ"
                        icon={JASANZimg}
                        onClick={() => this.select(2)}
                    />
                    <BottomNavigationItem
                        label="CE"
                        icon={CEimg}
                        onClick={() => this.select(3)}
                    />
                </BottomNavigation>
            </Paper>
        );
    }
}

export default Footer;