import ReactDOM from 'react-dom/client';
import './index.scss';
import Calculator from './components/Calculator/Calculator';
import ReactModal  from 'react-modal';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
ReactModal.setAppElement('#root');
root.render(<Calculator />);
