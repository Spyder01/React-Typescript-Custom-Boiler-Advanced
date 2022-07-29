import type {FC} from 'react';
import useDocumentTitle from '@rehooks/document-title';
import Layout from '../../layouts/Layout';
import './styles/Home.scss';

const Home: FC = () => {
    useDocumentTitle('Home');
    return (
        <Layout>
            <h1>Home</h1>
        </Layout>
    )
};

export default Home;