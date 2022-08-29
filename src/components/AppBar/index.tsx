import type {FC} from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import {AiOutlineSearch} from 'react-icons/ai';
import {BsBag} from 'react-icons/bs';
import Image from '../Image';
import logo from '../../assets/images/logo.png'
import './styles/AppBar.scss';


const AppBar:FC = () => {

    return (
        <nav className='primary'>
            <div className="title-icon">
                <Image className='logo mb-1' src={logo} Loader={()=><></>} alt="logo" />
            </div>

            <div className="items mt-1">
                <h5 className="item">
                    Home
                </h5>

                <h5 className="item">
                    About Us
                </h5>

                <h5 className="item">
                    Shop
                </h5>

                <h5 className="item">
                    Contact Us
                </h5>

            </div>

            <div className="cart-search">
                <SearchBar />
            </div>

            <div className="cart">
                <div className="cart-btn">
                    <BsBag className="cart-bag" />
                </div>
            </div>

        </nav>
    )
}


export default AppBar;


const SearchBar:FC = ()=>{
    return (
        <InputGroup className="searchbox">
            <Form.Control type="text" placeholder="Search" className='search-text' />
            <InputGroup.Text className="search-icon">
                <AiOutlineSearch />
            </InputGroup.Text>
        </InputGroup>
    )
}