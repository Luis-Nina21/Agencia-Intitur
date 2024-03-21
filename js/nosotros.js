function addLine(element) {
    const line = document.createElement('div');
    line.classList.add('line');
    element.appendChild(line);
  }

  function removeLine(element) {
    const lines = element.getElementsByClassName('line');
    if (lines.length > 0) {
      element.removeChild(lines[0]);
    }
  }



  function changeColor(element, isHover) {
    const svg = element.querySelector('svg');
    if (isHover) {
      svg.style.color = 'rgb(9, 193, 193)';
      svg.style.backgroundColor = 'white';
      
    } else {
        svg.style.color = 'white';
        svg.style.backgroundColor = 'rgb(9, 193, 193)';
    }
  }




  // Agregar un evento de clic al botón de WhatsApp
  document.getElementById('whatsapp-button').addEventListener('click', function() {
    // Reemplazar el enlace a tu número de WhatsApp
    window.open('https://wa.me/tunumerodetelefono', '_blank');
  });