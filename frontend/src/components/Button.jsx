const Button = ({ label, onClick, type = "button", className }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`px-4 py-2 rounded ${className}`}
      >
        {label}
      </button>
    );
  };
  
  export default Button;
  