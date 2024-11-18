import { connectToServer } from './socket-client'
import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>WebSocket-Client</h2>
    <input id="jw-token" placeholder="Json web token"/>
    <button id="btn-connect">Connect</button>
    <br/>
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
//connectToServer();

const inputJwt = document.querySelector<HTMLInputElement>('#jw-token')!;
const btnConnect = document.querySelector<HTMLButtonElement>('#btn-connect')!;

btnConnect.addEventListener('click', () => {
  if(inputJwt.value.trim().length <= 0) return alert('Enter a valid JWT');

  connectToServer(inputJwt.value);
})