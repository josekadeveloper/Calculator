import ReactDOM from 'react-dom/client';
import './index.scss';
import Calculator from './components/Calculator/Calculator';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Calculator />);
