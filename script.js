// Variáveis globais para img/produtos e carrinho
let products = [
    { id: 1, name: 'Tress, a garota do Mar Esmeralda', price: 112.40, stock: 50, image: 'img/produto1.jpg', description: 'Em Tress, a garota do Mar Esmeralda, Brandon Sanderson, autor best-seller nº 1 do New York Times, expande o universo Cosmere de O caminho dos reis com uma nova história singular, que é, também, uma excelente introdução à sua magnífica obra.' },
    { id: 2, name: 'O caminho dos reis', price: 130.27, stock: 19, image: 'img/produto2.jpg', description: 'Do autor best-seller n.º 1 do New York Times Brandon Sanderson, O caminho dos reis, o livro mais aguardado de todos os tempos, chega ao Brasil iniciando uma incrível saga épica. Roshar é um mundo de pedras e tempestades.' },
    { id: 3, name: 'Palavras de Radiância', price: 153.09, stock: 25, image: 'img/produto3.jpg', description: 'Do autor Brandon Senderson best-seller nº 1 do New York Times, chega agora a tão aguardada continuação de O caminho dos reis, dando sequência à saga épica Os Relatos da Guerra das Tempestades.' },
    { id: 4, name: 'Jurassic Park', price: 89.90, stock: 35, image: 'img/produto4.jpg', description: 'Jurassic Park é um romance de ficção científica e suspense de 1990, escrito por Michael Crichton, sobre a tentativa de criar um parque temático de dinossauros clonado.' },
    { id: 5, name: 'Harry Potter e a Pedra Filosofal', price: 45.00, stock: 100, image: 'img/produto5.jpg', description: 'O primeiro livro da série mundialmente famosa de J.K. Rowling, introduzindo o jovem bruxo Harry Potter e suas aventuras em Hogwarts.' },
    { id: 6, name: '1984', price: 39.90, stock: 42, image: 'img/produto6.jpg', description: 'Escrito por George Orwell, 1984 é um romance distópico que apresenta uma sociedade totalitária e vigilância extrema, refletindo sobre liberdade e opressão.' },
    { id: 7, name: 'O Senhor dos Anéis: A Sociedade do Anel', price: 79.90, stock: 27, image: 'img/produto7.jpg', description: 'O início da épica trilogia de J.R.R. Tolkien, onde Frodo Bolseiro embarca em uma jornada para destruir o Um Anel.' },
    { id: 8, name: 'O Nome do Vento', price: 67.80, stock: 50, image: 'img/produto8.jpg', description: 'Escrito por Patrick Rothfuss, este é o primeiro livro da série A Crônica do Matador do Rei, narrando a história de Kvothe.' },
    { id: 9, name: 'A Guerra dos Tronos', price: 58.50, stock: 45, image: 'img/produto9.jpg', description: 'O primeiro livro da série As Crônicas de Gelo e Fogo de George R.R. Martin, uma épica narrativa de política, guerra e magia.' },
    { id: 10, name: 'Duna', price: 92.00, stock: 30, image: 'img/produto10.jpg', description: 'Escrito por Frank Herbert, Duna é um clássico da ficção científica, explorando política, religião e ecologia no desértico planeta Arrakis.' },
    { id: 11, name: 'Neuromancer', price: 50.00, stock: 40, image: 'img/produto11.jpg', description: 'Escrito por William Gibson, Neuromancer é um romance seminal de cyberpunk, que introduziu o termo "ciberespaço" e definiu o gênero.' },
    { id: 12, name: 'Fahrenheit 451', price: 35.00, stock: 60, image: 'img/produto12.jpg', description: 'Escrito por Ray Bradbury, este clássico da ficção científica descreve uma sociedade futurista onde os livros são proibidos e queimados.' },
    { id: 13, name: 'O Hobbit', price: 55.00, stock: 20, image: 'img/produto13.jpg', description: 'Escrito por J.R.R. Tolkien, O Hobbit é uma aventura épica que precede a trilogia O Senhor dos Anéis, acompanhando Bilbo Bolseiro em sua jornada.' },
    { id: 14, name: 'Os Pilares da Terra', price: 70.00, stock: 15, image: 'img/produto14.jpg', description: 'Ken Follett narra a construção de uma catedral na Inglaterra medieval em meio a conflitos e intrigas, em um romance histórico fascinante.' },
    { id: 15, name: 'A Culpa é das Estrelas', price: 32.90, stock: 55, image: 'img/produto15.jpg', description: 'John Green conta a tocante história de Hazel e Gus, dois adolescentes que se apaixonam em um grupo de apoio para jovens com câncer.' },
    { id: 16, name: 'Percy Jackson e o Ladrão de Raios', price: 45.00, stock: 70, image: 'img/produto16.jpg', description: 'Rick Riordan introduz Percy Jackson, um jovem semideus, em uma série de aventuras modernas inspiradas na mitologia grega.' },
    { id: 17, name: 'O Código Da Vinci', price: 49.90, stock: 50, image: 'img/produto17.jpg', description: 'Dan Brown apresenta Robert Langdon em um thriller intrigante que combina história, religião e mistério.' },
    { id: 18, name: 'A Menina que Roubava Livros', price: 38.90, stock: 30, image: 'img/produto18.jpg', description: 'Markus Zusak conta a história de Liesel, uma jovem que encontra consolo na leitura durante a Segunda Guerra Mundial.' },
    { id: 19, name: 'A Revolução dos Bichos', price: 28.90, stock: 65, image: 'img/produto19.jpg', description: 'George Orwell escreve uma fábula satírica sobre a corrupção do poder, usando animais de uma fazenda como protagonistas.' },
    { id: 20, name: 'O Pequeno Príncipe', price: 25.00, stock: 80, image: 'img/produto20.jpg', description: 'Escrito por Antoine de Saint-Exupéry, este clássico conta a história de um pequeno príncipe que viaja entre planetas, explorando temas profundos e filosóficos.' }
];

  let cart = [];
  
  document.addEventListener('DOMContentLoaded', () => {
    // Função para atualizar a lista de produtos
    function updateProductList() {
      const productList = document.getElementById('product-list');
      productList.innerHTML = '';
      products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'col-md-4 mb-4';
        productDiv.innerHTML = `
          <div class="card h-100 ${product.stock === 0 ? 'sold-out' : ''}">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">R$${product.price.toFixed(2)}</p>
              <p class="card-text">Estoque: ${product.stock}</p>
              <p class="card-text">${product.description}</p>
              <button class="btn btn-success ${product.stock === 0 ? 'disabled' : ''}" onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
            </div>
          </div>
        `;
        if (product.stock === 0) {
          const overlay = document.createElement('div');
          overlay.className = 'overlay';
          overlay.textContent = 'Esgotado';
          productDiv.querySelector('.card').appendChild(overlay);
        }
        productList.appendChild(productDiv);
      });
    }
  
    // Função para adicionar produto ao carrinho
    window.addToCart = function(productId) {
      const product = products.find(p => p.id === productId);
      if (product && product.stock > 0) {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
          cartItem.quantity++;
        } else {
          cart.push({ ...product, quantity: 1 });
        }
        product.stock--;
        updateProductList();
        updateCartList();
      }
    };
  
    // Função para remover produto do carrinho
    window.removeFromCart = function(productId) {
      const cartIndex = cart.findIndex(item => item.id === productId);
      if (cartIndex !== -1) {
        const cartItem = cart[cartIndex];
        const product = products.find(p => p.id === productId);
        if (product) {
          product.stock += cartItem.quantity;
        }
        cart.splice(cartIndex, 1);
        updateProductList();
        updateCartList();
      }
    };
  
    // Função para atualizar a lista do carrinho
    function updateCartList() {
      const cartList = document.getElementById('cart-list');
      const cartTotalElement = document.getElementById('cart-total');
      cartList.innerHTML = '';
      let total = 0;
      cart.forEach(cartItem => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item mb-3';
        cartItemElement.innerHTML = `
          <p>${cartItem.name} - R$${cartItem.price.toFixed(2)} - ${cartItem.quantity}x</p>
          <button class="btn btn-danger btn-sm" onclick="removeFromCart(${cartItem.id})">Remover</button>
        `;
        cartList.appendChild(cartItemElement);
        total += cartItem.price * cartItem.quantity;
      });
  
      cartTotalElement.textContent = `Total: R$${total.toFixed(2)}`;
    }
  
    // Evento de carregamento inicial
    document.getElementById('checkout').addEventListener('click', () => {
      if (cart.length > 0) {
        alert('Compra finalizada com sucesso!');
        cart.length = 0; // Limpa o carrinho
        products = resetProducts(); // Reseta os produtos para o estado inicial
        updateProductList();
        updateCartList();
      } else {
        alert('Seu carrinho está vazio!');
      }
    });
  
    // Função para resetar os produtos para o estado inicial
    function resetProducts() {
      return products.map(product => {
        product.stock = product.initialStock || product.stock;
        return product;
      });
    }
  
    // Funções de administração
    function updateInventoryList() {
      const inventoryList = document.getElementById('inventory-list');
      inventoryList.innerHTML = '';
      products.forEach(product => {
        const inventoryItem = document.createElement('div');
        inventoryItem.innerHTML = `
          <p>${product.name} - R$${product.price.toFixed(2)}</p>
          <p>Estoque: ${product.stock}</p>
          <button class="btn btn-primary btn-sm" data-id="${product.id}" data-action="add">Adicionar Estoque</button>
          <button class="btn btn-warning btn-sm" data-id="${product.id}" data-action="remove">Remover Estoque</button>
        `;
        inventoryItem.querySelectorAll('button').forEach(button => {
          button.addEventListener('click', () => {
            const productId = parseInt(button.dataset.id);
            const action = button.dataset.action;
            if (action === 'add') {
              changeStock(productId, 1);
            } else if (action === 'remove') {
              changeStock(productId, -1);
            }
          });
        });
        inventoryList.appendChild(inventoryItem);
      });
    }
  
    function changeStock(productId, amount) {
      const product = products.find(p => p.id === productId);
      if (product) {
        const previousStock = product.stock;
        product.stock += amount;
        if (product.stock < 0) product.stock = 0;
  
        // Log the stock change
        const changeLog = {
          productId: productId,
          productName: product.name,
          amountChanged: amount,
          previousStock: previousStock,
          newStock: product.stock,
          timestamp: new Date()
        };
        console.log('Alteração no estoque:', changeLog);
  
        updateInventoryList();
      }
    }
  
    updateProductList();
    updateCartList();
    updateInventoryList();
  });
  