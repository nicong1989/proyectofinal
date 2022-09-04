import { TYPES } from "../actions/favActions";
export const favInitialState = {
  products: [],
  favorite: [],
};

export function favReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_FAV_NAV: {
      return state;
    }
    case TYPES.READ_STATES: {
      return {
        ...state,
        products: action.payload[0],
        favorite: action.payload[1],
      };
    }
    case TYPES.ADD_TO_FAV: {
      let newItem = state.products.find(
        (product) => product.codeProduct === action.payload.codeProduct
      );

      let itemInFavorite = state.favorite.find(
        (item) => item.codeProduct === newItem.codeProduct
      );

      return itemInFavorite
        ? {
            ...state,
            favorite: state.favorite.map((item) =>
              item.codeProduct === newItem.codeProduct
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            favorite: [...state.favorite, { ...action.payload, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FAV: {
      let itemToDelete = state.favorite.find(
        (item) => item.codeProduct === action.payload
      );
      return itemToDelete.quantity > 1
        ? {
            ...state,
            favorite: state.favorite.map((item) =>
              item.codeProduct === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            favorite: state.favorite.filter(
              (item) => item.codeProduct !== action.payload
            ),
          };
    }
    case TYPES.REMOVE_ALL_FAVS: {
      return {
        ...state,
        favorite: state.favorite.filter((item) => item.codeProduct !== action.payload),
      };
    }
    case TYPES.CLEAR_FAVS: {
      return favInitialState;
    }
       default:
      return state;
  }
}
