import React from 'react'
import { makeStyles } from "@material-ui/styles"
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit';

const styles = makeStyles(() => ({
    typographyStyles: {
        margin: '10px'
    },
    AppBarStyles: {
        alignItems: 'center',
        marginBottom: '20px'
    }
}))

function Header() {

    const classes = styles()

    return (

        <AppBar 
            position="static"
            className={classes.AppBarStyles} 
        >
            <Toolbar>
                    <Typography variant="h4" className={classes.typographyStyles} >
                        Tracker
                    </Typography>
                    <AcUnitIcon />
            </Toolbar>
        </AppBar>
    )
}

export default Header
