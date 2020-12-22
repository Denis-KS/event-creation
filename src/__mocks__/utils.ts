import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export const renderWithRouter = (component: any, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(component, { wrapper: BrowserRouter })
}

export function createAxiosMock() {
  return new MockAdapter(axios);
}