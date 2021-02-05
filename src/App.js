import React, {useContext, useEffect, useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import {Context} from './context/Context'
import Home from './components/pages/Home'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  const context = useContext(Context)
  const [open, setOpen] = useState(false);
  useEffect(()=>{console.log("placeholder")},[])

  return(

    <main>
      <Navbar/>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/user/wall" render={() => <Home />} />
        <Route path="/user/swipe" render={() => <Home />} />
        <Route path="/user/myideas" render={() => <Home />} />
        <Route path="/user/newidea" render={() => <Home />} />
        <Route path="/manager/wall" render={() => <Home />} />
        <Route path="/manager/userprofile" render={() => <Home />} />
        <Route path="/manager/favourites" render={() => <Home />} />
      </Switch>
    </main>
  )
}

export default App;