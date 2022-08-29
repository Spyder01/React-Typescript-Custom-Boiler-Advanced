import type { FC } from 'react';
import { LayoutProps } from '../@types';
import useDocumentTitle from '@rehooks/document-title';
import AppBar from '../../components/AppBar';
import './styles/Layout.scss';


const Layout: FC<LayoutProps> = ({ children, title }) => {
    useDocumentTitle (title ? title : 'React App');
    return (
        <>
            <AppBar />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout;