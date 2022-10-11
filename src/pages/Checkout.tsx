import { CartItem } from "../components/CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json"

export function CheckOut() {
    const { closeCart, cartItems } = useShoppingCart();
    return (
    <>
        <div>{cartItems.map(item => (
            <CartItem key={item.id} {...item} />
        ))}
        </div>
        <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
        </div>
    </>
    )
}