import { useRecoilState } from 'recoil';
import { menuState } from '../state/Atoms';

function MenuItem(props) {
     const [menu, setMenuState] = useRecoilState(menuState);
     const item = props.item;
     function checkSides() {
          if (item.options.length > 0 && !menu.isSelected) {
               let required = [];
               for (const option of item.options) {
                    if (option.num) {
                         const iterator = Array(option.num)
                              .fill(option.category)
                              .values();
                         for (const value of iterator) {
                              required.push(value);
                         }
                    }
               }
               setMenuState({
                    ...menu,
                    isSelected: true,
                    selection: item,
                    requiredItems: required,
                    currentCategory: item.options[0].category,
                    pending: { ...menu.pending, main: item },
               });
          } else {
               setMenuState({
                    ...menu,
                    selection: item,
                    pending: { ...menu.pending, main: item },
               });
          }
     }
     return (
          <div
               className='menu_item'
               onClick={() => {
                    checkSides();
               }}
          >
               <div className='menuItemText'>{item.food}</div>
          </div>
     );
}

export default MenuItem;
