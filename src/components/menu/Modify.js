import { menuState } from '../state/Atoms';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';

function Modify({ categories, db }) {
     const [menu, setMenuState] = useRecoilState(menuState);
     const optionsArray = [];

     useEffect(() => {
          validate(currentItems, requiredItems);
          checkRequired();
     });

     const {
          currentCategory,
          currentItems,
          selection,
          pending,
          active,
          requiredItems,
          prevRequired,
     } = menu;

     for (const item of db) {
          if (item.menu === 'modify') {
               for (const addon of item.addons) {
                    if (addon.category === currentCategory) {
                         optionsArray.push(addon);
                    }
               }
          }
     }

     const next = () => {
          const numItems = requiredItems.length;
          console.log(numItems);
     };

     const checkRequired = (item) => {
          console.log(currentItems);
          for (const option of selection.options) {
               const num = currentItems.filter(
                    (x) => x === option.category
               ).length;
               if (currentCategory === option.category && option.num === num) {
                    next();
                    return true;
               }
          }
     };

     const validate = (a, b) => {
          if (a.length !== b.length) return false;
          const uniqueValues = new Set([...a, ...b]);
          for (const v of uniqueValues) {
               const aCount = a.filter((e) => e === v).length;
               const bCount = b.filter((e) => e === v).length;
               if (aCount !== bCount) return false;
          }
          setMenuState({
               ...menu,
               isSelected: false,
               selection: {},
               currentCategory: 'Burgers',
               currentItems: [],
               requiredItems: [],
          });
     };

     const displayModify = () => {
          return optionsArray.map((item, i) => (
               <div onClick={() => addItem(item)} key={i} className='menu_item'>
                    <div className='menuItemText'>{item.food}</div>
               </div>
          ));
     };

     const addItem = (item) => {
          if (!checkRequired()) {
               setMenuState({
                    ...menu,
                    pending: {
                         ...menu.pending,
                         modify: [...menu.pending.modify, item],
                    },
                    currentItems: [...currentItems, item.category],
               });
          }
     };

     return displayModify();
}

export default Modify;
