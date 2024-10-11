import { Actions } from "../types/store";


export const reducer = (currentAction: any, currentState: any) => {

const {action, payload} = currentAction

switch (action) {
    case Actions.ADD_TO_CART:
        return {
            ...currentState,
            cart: [...currentState.cart, payload],
        };

        case Actions.GET_PRODUCTS:
        return {
            ...currentState,
            products: payload,
        };

    default:
        return currentState;
}
}