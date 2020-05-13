import CartActionTypes from './cart.types'; // no need for {} because exported as default

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN
})
