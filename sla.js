document.addEventListener('DOMContentLoaded', function() {
    const alphabetContainer = document.getElementById('alphabet');
    
    // Array com as letras do alfabeto
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    
    // Iterar sobre o array de letras
    alphabet.forEach(letter => {
        const div = document.createElement('div');
        div.textContent = letter;
        div.classList.add('letter');
        
        // Adicionar evento de clique para cada letra
        div.addEventListener('click', function() {
            alert('Letra clicada: ' + letter);
            // Aqui você pode adicionar mais interatividade, como pronúncia da letra, etc.
        });
        
        alphabetContainer.appendChild(div);
    });
});
