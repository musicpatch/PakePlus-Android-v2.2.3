// scripts/ui/dialog.js
let toastTimeout = null;

export function showToast(msg, duration = 2000) {
    let toastEl = document.querySelector('.toast');
    if (!toastEl) {
        toastEl = document.createElement('div');
        toastEl.className = 'toast';
        document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.style.opacity = '0.9';
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toastEl.style.opacity = '0';
    }, duration);
}