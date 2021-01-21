import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import VideoForm from './components/Videos/VideoForm';

import videoList from './components/Videos/VideoList';
import Navbar from './components/Navbar/Navbar';
import 'bootswatch/dist/pulse/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={videoList}/>
          <Route path="/new-video" component={VideoForm}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
