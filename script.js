function pesquisar() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var imageSlider = document.querySelector('.image-slider');

    // Lógica para mostrar imagens com base na pesquisa
    if (input.includes('verdura')) {
        showImages([
            { src: 'alface.png', alt: 'Alface', price: 'R$ 2,50/unidade' },
            { src: 'couve.png', alt: 'Couve', price: 'R$ 3,00/unidade' },
            { src: 'espinafre.png', alt: 'Espinafre', price: 'R$ 2,00/unidade' }
        ]);
    } else if (input.includes('vegetal')) {
        showImages([
            { src: 'cenoura.png', alt: 'Cenoura', price: 'R$ 1,50/kg' },
            { src: 'beterraba.png', alt: 'Beterraba', price: 'R$ 2,00/unidade' },
            { src: 'abobrinha.png', alt: 'Abobrinha', price: 'R$ 3,50/kg' }
        ]);
    } else {
        // Se não for uma pesquisa específica, mostra apenas as imagens de sementes
        showSementes();
    }

    function showSementes() {
        // Limpa as imagens existentes
        imageSlider.innerHTML = '';

        // Adiciona as imagens de sementes ao slider com os preços
        var sementes = [
            { src: 'semente1.jpg', alt: 'Semente 1', price: 'R$ 5,00' },
            { src: 'semente2.jpg', alt: 'Semente 2', price: 'R$ 4,50' },
            { src: 'semente3.jpg', alt: 'Semente 3', price: 'R$ 6,00' }
        ];

        sementes.forEach(function(semente) {
            var item = document.createElement('div');
            item.classList.add('item');

            var img = document.createElement('img');
            img.src = semente.src;
            img.alt = semente.alt;

            var price = document.createElement('p');
            price.classList.add('price');
            price.textContent = semente.price;

            item.appendChild(img);
            item.appendChild(price);
            imageSlider.appendChild(item);
        });
    }

    function showImages(images) {
        // Limpa as imagens existentes
        imageSlider.innerHTML = '';

        // Adiciona as novas imagens ao slider com os preços
        images.forEach(function(image) {
            var item = document.createElement('div');
            item.classList.add('item');

            var img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;

            var price = document.createElement('p');
            price.classList.add('price');
            price.textContent = image.price;

            item.appendChild(img);
            item.appendChild(price);
            imageSlider.appendChild(item);
        });
    }
}
