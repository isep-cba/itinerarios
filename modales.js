
// MODALES

// Get all modal elements
const modals = document.querySelectorAll('.modal');

// Get all open buttons
const openModalButtons = {
  modal1: document.getElementById('openModal1'),
  modal2: document.getElementById('openModal2'),
  modal3: document.getElementById('openModal3')

};

// Get all close buttons
const closeButtons = document.querySelectorAll('.close-button');

// Function to open a specific modal
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
}

// Function to close a specific modal or any open modal
function closeModal(modalElement) {
  modalElement.style.display = 'none';
}

// Event listeners for opening modals
openModalButtons.modal1.addEventListener('click', () => openModal('myModal1'));
openModalButtons.modal2.addEventListener('click', () => openModal('myModal2'));
openModalButtons.modal3.addEventListener('click', () => openModal('myModal3'));

// Event listeners for closing modals
closeButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const modal = event.target.closest('.modal'); // Find the parent modal
    if (modal) {
      closeModal(modal);
    }
  });
});

// Close modal when clicking outside the content area
modals.forEach(modal => {
  modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal-overlay')) {
      closeModal(modal);
    }
  });
});