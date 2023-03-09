class ProductManager {
    constructor() {
      this.products = [];
    }
  
    addProduct = (title, description, price, thumbnail, code, stock) => {
      const idemcode = this.products.some(el => el.code === code)
      if (!idemcode) {
        const producto = {
          'title': title,
          'description': description,
          'price': price,
          'thumbnail': thumbnail,
          'code': code,
          'stock': stock,
          'id': this.products.length + 1
        }
        this.products.push(producto)
      } else {
        console.log('Producto repetido!')
      }
    }
  
    getProducts = () => {
      console.log("Productos: ", this.products)
    }
  
    getElementById = (id) => {
      const producto = this.products.find(el => el.id === id)
      console.log('Producto por ID:', producto || 'Not Found')
    }
  }
  
  let manager = new ProductManager; 
  manager.getProducts()
  manager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abc123', 25);
  manager.getProducts()
  manager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abc123', 25)
  manager.getElementById(1)
  manager.getElementById(10)