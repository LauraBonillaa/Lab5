import Product, { Attribute } from "./components/product/product"
import "./screens/dashboard"
import { appState } from "./store/index"
import { getProducts } from "./services/getproducts"
class AppContainer extends HTMLElement {

    

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render()
        
        
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