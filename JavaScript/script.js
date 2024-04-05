// Seleciona todos os botões de accordion
const accordionBtns = document.querySelectorAll('.accordion-btn');

// Loop por cada botão
accordionBtns.forEach(btn => {

  // Seleciona os ícones dentro de cada botão
  const plusIcon = btn.querySelector('.plus-icon');
  const minusIcon = btn.querySelector('.minus-icon');

  // Seleciona a descrição de cada accordion 
  const accordionDescription = btn.nextElementSibling;
  
  // Adiciona evento de clique no ícone plus
  plusIcon.addEventListener('click', () => {
    
    // Mostra a descrição
    accordionDescription.style.display = 'block';
    
    // Troca ícone para minus
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
    
  });
  
   // Adiciona evento de mouseover no ícone minus
   minusIcon.addEventListener('click', () => {
  
    // Oculta a descrição
    accordionDescription.style.display = 'none';
    
    // Troca ícone para plus
    minusIcon.style.display = 'none';
    plusIcon.style.display = 'block';
    
    
  });
 
 
    
});















