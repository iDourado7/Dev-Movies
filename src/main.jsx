import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import Router from './routes/Router'
import GlobalStyles from './styles/GlobalStyles'
import LoadingProvider from './components/ContextLoading'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
      <LoadingProvider>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </LoadingProvider>
  </StrictMode>
)
