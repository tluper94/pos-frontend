import { atom } from 'recoil';

export const menuState = atom({
     key: 'menuState',
     default: {
          isSelected: false,
          selection: {},
          currentCategory: 'Burgers',
          currentItems: [],
          requiredItems: [],
          isValid: false,
          pending: {
               main: [],
               modify: [],
          },
          active: [],
     },
});

export const cartState = atom({
     key: 'cartState',
     default: {},
});
