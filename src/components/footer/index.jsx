import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import SvgIcon from 'material-ui/SvgIcon';

const HomeIcon = (props) => (<SvgIcon {...props}>
        <path d="M12,3L2,12H5V20H19V12H22L12,3M12,8.5C14.34,8.5 16.46,9.43 18,10.94L16.8,12.12C15.58,10.91 13.88,10.17 12,10.17C10.12,10.17 8.42,10.91 7.2,12.12L6,10.94C7.54,9.43 9.66,8.5 12,8.5M12,11.83C13.4,11.83 14.67,12.39 15.6,13.3L14.4,14.47C13.79,13.87 12.94,13.5 12,13.5C11.06,13.5 10.21,13.87 9.6,14.47L8.4,13.3C9.33,12.39 10.6,11.83 12,11.83M12,15.17C12.94,15.17 13.7,15.91 13.7,16.83C13.7,17.75 12.94,18.5 12,18.5C11.06,18.5 10.3,17.75 10.3,16.83C10.3,15.91 11.06,15.17 12,15.17Z" />
    </SvgIcon>
);

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
        const sample = <HomeIcon/>

        return (
            <Paper zDepth={1}>
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem
                        label="ISO"
                        icon={sample}
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