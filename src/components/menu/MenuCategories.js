import { useRecoilState } from 'recoil';
import { menuState } from '../state/Atoms';

function MenuCategories(props) {
     const categories = props.categoryArry;
     const [menu, setMenuState] = useRecoilState(menuState);
     return (
          <div className='menu_categories'>
               {categories.map((item, i) => {
                    let highlight = 'transparent';
                    menu.currentCategory === item.category
                         ? (highlight = 'white')
                         : (highlight = 'transparent');
                    return (
                         <div
                              onClick={(e) => {
                                   setMenuState({
                                        ...menu,
                                        currentCategory: item.category,
                                   });
                              }}
                              className='menu_categoryBtn'
                              style={{
                                   backgroundColor: item.color,
                                   borderColor: highlight,
                              }}
                              key={i}
                         >
                              {item.category}
                         </div>
                    );
               })}
          </div>
     );
}

export default MenuCategories;
