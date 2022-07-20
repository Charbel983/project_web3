class CartItem {
    constructor(productId, userId, productName, productImage, productPrice, productQuantity, productInStock){
        this.productId = productId;
        this.userId = userId;
        this.productName = productName;
        this.productImage = productImage;
        this.productPrice = productPrice;
        this.productQuantity = productQuantity;
        this.productInStock = productInStock;
    }
}

module.exports = CartItem;