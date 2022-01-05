import { useRecoilState } from 'recoil';
import { menuState } from '../state/Atoms';

function ModifyItem({ item }) {
     const [menu, setMenuState] = useRecoilState(menuState);
     console.log(item);
     return (
          <div className='menu_item'>
               <div className='menuItemText'>{item.food}</div>
          </div>
     );
}

export default ModifyItem;
