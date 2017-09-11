import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationHome from 'material-ui/svg-icons/action/home';
import RaisedButton from 'material-ui/RaisedButton';

function handleTouchTap() {
}

const styles = {
    title: {
        cursor: 'pointer',
    },
};

const menuButtonStyle = {
    marginRight: 15,
    marginTop: 10,
    marginBottom: 15
};


const menuList = (
    <div>
        <RaisedButton label="Solutions" href="/about-us" style={menuButtonStyle} />
        <RaisedButton label="Products" href="/about-us" style={menuButtonStyle} />
        <RaisedButton label="Clients" href="/about-us" style={menuButtonStyle} />
    </div>
);

class Header extends Component {
    render() {
        return (
            <AppBar
                title={<span style={styles.title}>SPowerz</span>}
                onTitleTouchTap={handleTouchTap}
                iconElementLeft={<IconButton href="/" ><NavigationHome /></IconButton>}
                iconElementRight={menuList}
                style={{ margin: 0 }}
            />
        );
    }
}

export default Header;