import { appState, dispatch  } from "../../store/index";
import { addToCart } from "../../store/actions"
export enum Attribute {
    "uid" = "uid",
    "image" = "image",
    "title" = "title",
    "description" = "description",
    "category" = "category",
    "price" = "price",
    "rating" = "rating"
}


class Product extends HTMLElement {

    uid? : number;
    image?: string;
    name?: string;
    description?: string;
    category?: string;
    price?: number;
    rating?: number;



    static get observedAttributes() {
        return Object.values(Attribute)
    }
    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string) {
       if (oldValue === newValue)
        if (propName === Attribute.price || propName === Attribute.rating ||  propName === Attribute.uid) {
            this[propName] = newValue ? Number(newValue) : undefined;
        } else {
            this[propName] = newValue;
        }
        this.render();
        
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }

    render() {
        if (!this.shadowRoot) return
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/product/product.css">
            <section>
            <div  class="card">
            <div id="character">
            <img id="img" src="${this.image ? this.image : 'Not found'}">
            <div class="text">
            <h2 class="name">${this.title}</h2>
            <p>Description: ${this.description}</p>
            <p>Category: ${this.category}</p>
            <p>Price: $${this.price}</p>
            <p>Rating: ${this.rating}</p>
            <button id="add-button">Agregar</button>
            </div>
            </div>
</div>
            
            </section>
            `;

            const addButton = this.shadowRoot?.querySelector('#add-button');
        addButton?.addEventListener('click', () => {
            const product = {
                uid: this.uid,
                image: this.image,
                description: this.description,
                category: this.category,
                price: this.price,
                rating: this.rating,
            };
            dispatch(addToCart(product)); 
        }); 
        
    }
}

customElements.define('card-product', Product);
export default Product;