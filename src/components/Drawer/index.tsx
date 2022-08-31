import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import Drawer from 'react-modern-drawer';
import { useSwipeable } from 'react-swipeable';
import Image from '../Image';
import logo from '../../assets/images/logo.png';
import 'react-modern-drawer/dist/index.css'
import './styles/Drawer.scss';

interface Props {
  open: boolean;
  setOpen: Function;
  items: Array<{ name: string, path: string }>;
};

const Component: FC<Props> = ({ open, setOpen, items }) => {

  const handlers = useSwipeable ({
    onSwipedLeft: (e)=>setOpen(false)
  })

  const navigate = useNavigate();

  return (
    <Drawer open={open} onClose={() => setOpen(false)} direction="left" className='app-bar-drawer primary' {...handlers} >

      <header>
        <Image className="drawer-logo" src={logo} Loader={() => <></>} alt="" />
      </header>

      <div className="drawer-items">
        {
          items.map((item, i) => {
            return <div className={'drawer-item'+((i + 1) % 2 === 0 ? " " : " white")}><h5 className={''} key={item.path} onClick={() => navigate(item.path)} >{item.name}</h5><IoIosArrowForward className='drawer-arrow-icon'/></div>
          })
        }

      </div>

    </Drawer>
  )
}

export default Component; 