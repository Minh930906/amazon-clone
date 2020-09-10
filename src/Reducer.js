export const initialState = {
  basket: [],
};

//Selector (tallies up the basket,and it goes ahead and tallies up all of the item prices and it adds it into final amount,and returns it)
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        //what if I say index != -1
        newBasket.splice(index, 1); //remove 1(2nd argument) element at index(index)
      } else {
        console.warn(
          `Cant remove product (id:${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
