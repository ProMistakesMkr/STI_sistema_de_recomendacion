import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserResponseProvider } from './context/UserResponse.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserResponseProvider>
      <App />
    </UserResponseProvider>
  </BrowserRouter>
)
