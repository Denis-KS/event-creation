import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { EventOverview } from './pages/event-overview';
import { Events } from './components/Events/Events';
import { Provider } from 'react-redux';
import { store } from './store/reducer';
import { CreateUpdateEvent } from './components/CreateUpdateEvent/CreateUpdateEvent';
import { AppContentGrid } from './components/styled/Box/AppContentBox';
import { ThemeProvider } from 'styled-components';

export enum Routes {
  HOME = '/',
  EVENT_OVERVIEW = '/:id',
  CREATE_EVENT = '/new-event',
  UPDATE_EVENT = '/update-event/:id',
}

export interface ITheme {
  breakpoints: {
    iphone5: string;
    ipad: string;
  }
}

const defaultTheme: ITheme = {
  breakpoints: {
    iphone5: '420px',
    ipad: '768px',
  },
};

function App() {
  return (  
    <Provider store={store}>
      <div className="App">
        <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
            <AppContentGrid>
              <Header />
              <Route path={Routes.HOME} exact component={Events}/>
              <Route path={Routes.CREATE_EVENT} component={CreateUpdateEvent}/>
              <Route path={Routes.EVENT_OVERVIEW} exact component={EventOverview}/>
            </AppContentGrid>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </Provider>  
  );
}

export default App;
