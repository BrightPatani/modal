const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const closeModalBtn2 = document.getElementById('close-modal-btn-2');

// Function to open the modal
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; 
});

// Function to close the modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none'; 
});

// Optional: Close modal using the second button inside the modal
closeModalBtn2.addEventListener('click', () => {
    modal.style.display = 'none'; 
});

// Close the modal if clicked outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
