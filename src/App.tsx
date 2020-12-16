import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { CreateUpdateEvent } from './pages/create-update-event';
import { EventOverview } from './pages/event-overview';
import { Events } from './pages/events';

export enum Routes {
  HOME = '/',
  OVERVIEW = '/:id',
  CREATE_EVENT = '/new-event',
  UPDATE_EVENT = '/update-event/:id',
}

function App() {
  return (    
    <div className="App">
          <div data-testid="header"></div>
          <BrowserRouter>
            <Route path="/" exact component={Events}/>
            <Route path="/:eventId" component={EventOverview}/>
            <Route path="/new-event" component={CreateUpdateEvent}/>
            <Route path="/update-event/:eventId" component={CreateUpdateEvent}/>
          </BrowserRouter>
    </div>
  );
}

export default App;
