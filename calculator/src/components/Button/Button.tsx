import './Button.scss';

interface ButtonProps {
  customKey: number,
  value: string,
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({customKey, value, onClick, disabled}) => {
    return (
      <button key={customKey} className="button" onClick={onClick} disabled={disabled}>
          {value}
      </button>
    );
}

export default Button;