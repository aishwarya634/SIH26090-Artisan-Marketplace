const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message">
      {message || "Something went wrong."}
      {/* Styling coming soon - Member 2 */}
    </div>
  );
};

export default ErrorMessage;