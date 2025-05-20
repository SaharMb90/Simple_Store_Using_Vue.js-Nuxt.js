export const useCart = () => {
  const cart = useState('cart', () => [] as { id: number; name: string; price: number }[])

  const addToCart = (product: { id: number; name: string; price: number }) => {
    cart.value.push(product)
  }

  const removeFromCart = (id: number) => {
    cart.value = cart.value.filter(item => item.id !== id)
  }

  return {
    cart,
    addToCart,
    removeFromCart
  }
}
