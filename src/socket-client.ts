import { Manager, Socket } from "socket.io-client";

export const connectToServer = () =>{
    const manager = new Manager('http://localhost:3000/socket.io/socket.io.js');
    
    const socket = manager.socket('/');
    
    addListeners( socket );
}


const addListeners =( socket: Socket) =>{
    const serverStatusLabel = document.querySelector('#server-status')!;
    const clientsConnected = document.querySelector('#client-ul')!;
    const mesageForm =  document.querySelector<HTMLFormElement>('#mesage-form')!;
    const mesageInput = document.querySelector<HTMLInputElement>('#mesage-input')!; 
    const messagesUl = document.querySelector('#messages-ul')!; 

    socket.on('connect', () => {
        serverStatusLabel.innerHTML = 'Connected';
    })
    socket.on('disconnect', () => {
        serverStatusLabel.innerHTML = 'Disconnected';
    });

    socket.on('clients-updated', (clients: string[])=>{
        let clientHTML = '';
        clients.forEach(clientID =>{
            clientHTML += `
                <li>${ clientID }</li>
            `
        })
        clientsConnected.innerHTML = clientHTML;
    });

    mesageForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (mesageInput.value.trim().length <= 0) return;

        socket.emit('message-from-client', {
            id: 'YO!!',
            message: mesageInput.value
        });

        mesageInput.value = '';
        
    });

    socket.on('message-from-server', (payload: { fullName: string, message: string }) => {
        const newMessage = `
            <li>
                <strong>${payload.fullName}</strong>
                <span>${payload.message}</span>
            </li>
        `;
        const li = document.createElement('li');
        li.innerHTML = newMessage;
        messagesUl.append(li);

    })


}