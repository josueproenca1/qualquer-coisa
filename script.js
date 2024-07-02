document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const itemsList = document.getElementById('itemsList').getElementsByTagName('li');
    const modal = document.getElementById('itemModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.querySelector('.close');

    // Adicionar evento de clique para os itens da lista
    Array.from(itemsList).forEach(function(item) {
        const img = item.querySelector('img');

        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImage.src = img.src;
            modalImage.alt = img.alt;
        });
    });

    // Fechar o modal ao clicar no botão de fechar
    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Fechar o modal ao clicar fora da imagem
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Evento de pesquisa ao pressionar Enter ou clicar no botão de pesquisa
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();

        Array.from(itemsList).forEach(function(item) {
            const text = item.textContent.toLowerCase();
            const imgAlt = item.querySelector('img').alt.toLowerCase();
            
            if ((searchTerm === 'verdura' && (text.includes('item 1') || text.includes('item 2') || text.includes('item 3') || imgAlt.includes('item 1') || imgAlt.includes('item 2') || imgAlt.includes('item 3')))
                || (searchTerm === 'vegetal' && (text.includes('item 4') || text.includes('item 5') || text.includes('item 6') || text.includes('item 7') || imgAlt.includes('item 4') || imgAlt.includes('item 5') || imgAlt.includes('item 6') || imgAlt.includes('item 7')))) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        // Mostrar ou ocultar a div .container baseado na presença de itens visíveis
        const container = document.querySelector('.container');
        const visibleItems = document.getElementById('itemsList').querySelectorAll('li[style="display: block;"]');
        
        if (visibleItems.length > 0) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    }

    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });

    document.getElementById('searchButton').addEventListener('click', performSearch);
});
