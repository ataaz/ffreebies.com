import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Layout/Header';

export default function App({ Component, pageProps }) {
    return (
        <div>
            <Component {...pageProps} />
        </div>
    );
}