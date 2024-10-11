import Product, { Attribute } from "./components/product/product"
import "./screens/dashboard"
import { appState } from "./store/index"
import { getProducts } from "./services/getproducts"
class AppContainer extends HTMLElement {

    dataApi: any[] = []
    cards: Product[] = []

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }

    async connectedCallback() {
        this.render()
        this.dataApi = await getProducts()
        this.createProduct()
    }

    createProduct() {
       

        this.dataApi.forEach((element) => {
            const card = this.ownerDocument.createElement("card-product") as Product

            card.setAttribute(Attribute.image, element.image)
            card.setAttribute(Attribute.title, element.title)
            card.setAttribute(Attribute.description, element.description)
            card.setAttribute(Attribute.category, element.category)
            card.setAttribute(Attribute.price, element.price)
            card.setAttribute(Attribute.rating, element.rating.rate)
            console.log(element)
            
        this.shadowRoot?.querySelector('.product-container')?.appendChild(card)

        })

    }
    render() {
        // this.cards.forEach((card)=>{
        //     this.shadowRoot?.appendChild(card)
        // })

        // const dashboard = this.ownerDocument.createElement('app-dashboard')
        // this.shadowRoot?.appendChild(dashboard)
        if (this.shadowRoot) this.shadowRoot.innerHTML = '';

        switch (appState.screen) {
            case 'DASHBOARD':
                const dashboard = document.createElement('app-dashboard');
                this.shadowRoot?.appendChild(dashboard);
                break;
            
            default:
                console.log('Not found');
                break;
        }

        
    }

   
}



customElements.define("app-container", AppContainer)
export default AppContainer