import type { FC } from 'react';
import { useState } from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import { BsBag } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Image from '../Image';
import Drawer from '../Drawer';
import logo from '../../assets/images/logo.png'
import './styles/AppBar.scss';



const AppBar: FC = () => {

    const [open, setOpen] = useState (false); 

    const navigate = useNavigate (); 

    const items = [
        {
            name: "Home",
            path: "/"
        }, 
        {
            name: "About Us",
            path: "about"
        }, 
        {
            name: "Shop",
            path: "shop"
        }, 
        {
            name: "Contact Us",
            path: "contact"
        }
    ]

    return (
        <>
        <nav className='primary'>
            <div className="left-end">
                <div className="ham-icon mt-2">
                    <AiOutlineMenu className='nav-menu-btn' onClick={()=>setOpen(!open)}/>
                </div>
                <div className="title-icon">
                    <Image className='logo mb-1' src={logo} Loader={() => <></>} alt="logo" />
                </div>
            </div>

            <div className="items mt-1">

            {
                    items.map(item=>{
                        return <h5 className='item' key={item.path} onClick={()=>navigate(item.path)} >{item.name}</h5>
                    })
            }

            </div>

            <div className="cart-search">
                <SearchBar />
            </div>

            <div className="cart">
                <div className="search-icon">
                    <AiOutlineSearch className='sm-search-icon' />
                </div>

                <div className="cart-btn">
                    <BsBag className="cart-bag" />
                </div>

            </div>
            
        </nav>
        <Drawer open={open} setOpen={setOpen} items={items}/>
        </>
    )
}


export default AppBar;


const SearchBar: FC = () => {
    return (
        <InputGroup className="searchbox">
            <Form.Control type="text" placeholder="Search" className='search-text' />
            <InputGroup.Text className="search-icon">
                <AiOutlineSearch />
            </InputGroup.Text>
        </InputGroup>
    )
}