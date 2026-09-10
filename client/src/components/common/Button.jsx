const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
      {/* Styling/content coming soon - Member 2 */}
    </button>
  );
};

export default Button;