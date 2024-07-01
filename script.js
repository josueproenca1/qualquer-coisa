document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const itemsList = document.getElementById('itemsList').getElementsByTagName('li');

    searchInput.addEventListener('keyup', function(event) {
        const searchTerm = event.target.value.toLowerCase();

        Array.from(itemsList).forEach(function(item) {
            const text = item.textContent.toLowerCase();
            const imgAlt = item.querySelector('img').alt.toLowerCase();
            
            if (text.includes(searchTerm) || imgAlt.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
