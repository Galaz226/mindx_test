function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    document.body.style.backgroundColor = color;
    document.getElementById('colorDisplay').textContent = color;
    document.getElementById('colorPicker').value = color;
}

function copyToClipboard() {
    const colorDisplay = document.getElementById('colorDisplay');
    const colorToCopy = colorDisplay.textContent;

    const tempInput = document.createElement('input');
    tempInput.value = colorToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    
    document.execCommand('copy');
    
    
    document.body.removeChild(tempInput);

    alert('Color copied to clipboard: ' + colorToCopy);
}

document.getElementById('gradientToggle').addEventListener('change', function() {
    document.body.style.backgroundImage = this.checked ? 'linear-gradient(to right, #ff0000, #ffff00)' : 'none';
});

document.getElementById('colorPicker').addEventListener('input', function() {
    const color = this.value;
    document.body.style.backgroundColor = color;
    document.getElementById('colorDisplay').textContent = color;
});