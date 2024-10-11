import { dispatch } from "../../store/index";

export enum Attribute {

    'uid' = 'uid',
    'utitle' = 'utitle',
    'price' = 'price',
    'image' = 'image'

}

class ShoppingCartItem extends HTMLElement {

    uid?: number;
    utitle?:string;
    price?:number;
    image?:string;

    static get observedAttributes() {
        return Object.keys(Attribute);
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
        if (propName === Attribute.uid) {
            this.uid = newValue ? Number(newValue) : undefined;
        } else if (propName === Attribute.price) {
            this.price = newValue ? Number(newValue) : undefined;
        } else {
            this[propName] = newValue;
        }
        this.render();
    }

    render (){
if (this.shadowRoot){
    this.shadowRoot.innerHTML = `<link rel="stylesheet" href="../src/components/shoppingcartitem/shoppingcartitem.css">
            <section>
            <div  class="card">
            <div id="character">
            <img id="img" src="${this.getAttribute('image')}">
            <div class="text">
            <h2 class="name">${this.getAttribute('utitle')}</h2>
            <p>Price: $${this.getAttribute('price')}</p>
            
            <button id="add-button">Agregar</button>
            </div>
            </div>
</div>
            
            </section>`
}

    }



}

customElements.define('shoppingcart-component',ShoppingCartItem)
export default ShoppingCartItem