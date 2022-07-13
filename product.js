class Product {
    constructor(name, description, price, image, tags, inStock){
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.tags = tags;
        this.inStock = inStock;
    }
}

module.exports = Product;