import type {FC} from 'react';
import { LayoutProps } from '../@types';
import './styles/Layout.scss';


const Layout: FC<LayoutProps> = ({children}) => {
    return (
     <>
        <h1>
            Layout
        </h1>
        <main>
            {children}
        </main>
     </>
    )
}

export default Layout;