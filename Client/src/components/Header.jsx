import React, { useState } from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material'
import {NavLink} from 'react-router-dom'

const Header = () => {
    const [tab,setTab] = useState(0)
  return (
    <div>
      <AppBar sx={{ backgroundColor: "ActiveBorder" }}>
        <Toolbar>
          <NavLink to={"/"} style={{ color: "white", textDecoration: "none" }}>
            <Typography>Books store</Typography>
          </NavLink>
          <Tabs
            indicatorColor="primary"
            sx={{ ml: "auto" }}
            textColor="inherit"
            value={tab}
            onChange={(e, val) => setTab(val)}
          >
            <Tab LinkComponent={NavLink} to="/books" label="Books"></Tab>
            <Tab LinkComponent={NavLink} to="/add" label="Add Book"></Tab>
            <Tab LinkComponent={NavLink} to="/about" label="About us"></Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header