import React from 'react'
import { makeStyles } from "@material-ui/styles"
import Cards from './Cards'
import { Grid } from '@material-ui/core'


const styles = makeStyles(() => ({
    containerStyle: {
        border: 'none'
    }
}))

function Content() {

    const classes = styles()

    return (
        <Grid container spacing={2} className={classes.containerStyle} >
            <Grid item xs={12} sm={4} >
                <Cards />
            </Grid>
            <Grid item xs={12} sm={4} >
                <Cards />
            </Grid>
            <Grid item xs={12} sm={4} >
                <Cards />
            </Grid>
            <Grid item xs={12} sm={4} >
                <Cards />
            </Grid>
            <Grid item xs={12} sm={4} >
                <Cards />
            </Grid>
            <Grid item xs={12} sm={4} >
                <Cards />
            </Grid>
        </Grid>
    )
}

export default Content
