import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { EventOverview } from './pages/event-overview';
import { Events } from './components/Events/Events';
import { Provider } from 'react-redux';
import { store } from './store/reducer';
import { CreateUpdateEvent } from './pages/create-update-event';
import { AppContentBox } from './components/styled/Box/AppContentBox';

export enum Routes {
  HOME = '/',
  EVENT_OVERVIEW = '/:id',
  CREATE_EVENT = '/new-event',
  UPDATE_EVENT = '/update-event/:id',
}

function App() {
  return (  
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <AppContentBox>
            <Route path={Routes.HOME} exact component={Events}/>
            <Route path={Routes.CREATE_EVENT} component={CreateUpdateEvent}/>
            <Route path={Routes.EVENT_OVERVIEW} exact component={EventOverview}/>
          </AppContentBox>
        </BrowserRouter>
      </div>
    </Provider>  
  );
}

export default App;
