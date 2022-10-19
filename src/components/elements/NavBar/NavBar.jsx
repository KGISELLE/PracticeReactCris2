// imports
import classes from '../NavBar/NavBar.module.css';
import React from 'react';

// Declaracion componente
const NavBar = () => {
    return (
        <nav className={classes.navWrapper}>
            <div className={classes.ul}>
                <div className={classes.li}>Contact</div>
                {/* <Link to="#0" onClick={closeMenu}>Documentation</Link> */}
                <div className={classes.li}>About us</div>
                <div className={classes.li}>Experience</div>
                <div className={classes.li}>Workflow</div>
                <div className={classes.li}>Data-driven</div>
            </div>
        </nav>
    );
}

export default NavBar;