const products=[{id:"6565",name:'sam',price:'52',imageUrl:"1.jpg",description:'sda'}];


module.exports=class Product{
    constructor(name,price,imageUrl,description){
        this.id=(Math.floor(Math.random()*99999)+1).toString();
        this.name = name;
        this.price=price;
        this.imageUrl=imageUrl;
        this.description=description;

    }
    saveproduct()
    {
         products.push(this);
    }
    static getAll()
    {
        return products; 
    }
    static getbyId(id)
    {
        const product=products.find(i=>i.id === id);
        return product;
    }
    static update(product){
        const index=products.find(i=>i.id===product.id);
        products[index].name=product.name;
        products[index].price=product.price;
        products[index].imageUrl=product.imageUrl;
        products[index].description=product.description;

    }


}

