import { connectToServer } from './socket-client'
import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>WebSocket Client</h1>    
    <span id="server-status">Offline</span>
    <ul id="client-ul"></ul>
      
    <form id="mesage-form">
      <input placeholder="mesage" id="mesage-input" />
    </form>

    <h3>Messages</h3>
    <ul id="messages-ul">
    </ul>
  </div>
`

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
connectToServer();