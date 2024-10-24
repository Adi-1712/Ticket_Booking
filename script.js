let regularQueue = [];
let vipQueue = [];
let totalTickets = 1000;  // Initial number of tickets

// Function to add customer to the queue
function addToQueue() {
    const name = document.getElementById('name').value;
    const priority = document.getElementById('priority').value;

    // Check if there are tickets left
    if (totalTickets <= 0) {
        alert('No more tickets available');
        return;
    }

    if (name === '') {
        alert('Please enter a name');
        return;
    }

    if (priority === 'vip') {
        vipQueue.push(name);
    } else if (priority === 'regular') {
        regularQueue.push(name);
    } else {
        alert('Invalid priority. Please choose either VIP or Regular.');
        return;
    }

    // Decrease ticket count when a customer is added
    totalTickets--;
    
    document.getElementById('name').value = '';  // Clear the input
    updateQueueDisplay();
}

// Function to update the queue display and ticket counter
function updateQueueDisplay() {
    const queueList = document.getElementById('queue-list');
    const ticketDisplay = document.getElementById('ticket-counter');
    queueList.innerHTML = '';  // Clear the current list

    // First show VIP queue
    vipQueue.forEach((name) => {
        const listItem = document.createElement('li');
        listItem.className = 'vip';
        listItem.textContent = `VIP - ${name}`;
        queueList.appendChild(listItem);  // Append VIP customer to the list
    });

    // Then show Regular queue
    regularQueue.forEach((name) => {
        const listItem = document.createElement('li');
        listItem.className = 'regular';
        listItem.textContent = `Regular - ${name}`;
        queueList.appendChild(listItem);  // Append Regular customer to the list
    });

    // Update the remaining ticket counter display
    ticketDisplay.textContent = `Tickets left: ${totalTickets}`;
}

// Function to serve the next customer
function serveCustomer() {
    if (vipQueue.length > 0) {
        const servedCustomer = vipQueue.shift();  // Serve the first VIP customer
        alert(`Served VIP customer: ${servedCustomer}`);
    } else if (regularQueue.length > 0) {
        const servedCustomer = regularQueue.shift();  // Serve the first regular customer
        alert(`Served Regular customer: ${servedCustomer}`);
    } else {
        alert('No customers in the queue');
    }

    updateQueueDisplay();
}
