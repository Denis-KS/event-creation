import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

export const renderWithRouter = (component: any, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(component, { wrapper: BrowserRouter })
}