import React from 'react'
import './App.css'
import Header from './Header'
import Content from './Content'
import { Grid } from '@material-ui/core'


function App() {
  return (
    <div>
 
      <Grid 
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >

        <Grid item container >
          <Header />
        </Grid>

        <Grid item container>
          <Grid item xs={0} sm={2} />
            <Grid item xs={12} sm={8} >
              <Content />
            </Grid>
          <Grid item xs={0} sm={2} />
        </Grid>

      </Grid>


    </div>
  )
}

export default App
