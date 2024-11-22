import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

document.title = import.meta.env.VITE_APP_TITLE;
createRoot(document.getElementById('root')).render(
  // main.js
  <App />
)
