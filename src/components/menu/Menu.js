import '../../CSS/Menu.css';
import MenuItem from './MenuItem';
import MenuCategories from './MenuCategories';
import Modify from './Modify';
import { menuState } from '../state/Atoms';
import { useRecoilState } from 'recoil';

function Menu(props) {
     const database = props.database;
     const [menu, setMenuState] = useRecoilState(menuState);
     const isSelected = menu.isSelected;
     const currentCategory = menu.currentCategory;
     const currentSelection = menu.selection;
     let categoryArray = [];
     let menuArray = [];
     let options = [];


     // Loops through menu array
     for (const item of database) {
          //pushes menu category to categoryArray
          if (item.menu === 'main' && !isSelected) {
               categoryArray.push({
                    category: item.category,
                    color: item.color,
               });
               if (item.category === currentCategory) {
                    menuArray.push(item);
               }
          }
     }

     if (currentSelection.options && currentSelection.options.length > 0) {
          for (const option of currentSelection.options) {
               categoryArray.push({
                    category: option.category,
                    color: 'blue',
               });
          }
     }

     categoryArray = [
          ...new Map(
               categoryArray.map((item) => [item.category, item])
          ).values(),
     ];

     function displayMenu() {
          if (!isSelected) {
               return menuArray.map((item) => (
                    <MenuItem item={item} key={item.id}></MenuItem>
               ));
          } else {
               return (
                    <Modify
                         options={options}
                         db={database}
                         categories={categoryArray}
                    ></Modify>
               );
          }
     }

     return (
          <div className='menu'>
               <div className='menu_list'>{displayMenu()}</div>
               {<MenuCategories categoryArry={categoryArray}></MenuCategories>}
          </div>
     );
}

export default Menu;
