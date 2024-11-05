import { connectToServer } from './socket-client'
import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>WebSocket Client</h1>    
    <span id="server-status">Offline</span>
    <ul id="client-ul">
      <li>asdfsf</li>
    </ul>
  </div>
`

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
connectToServer();