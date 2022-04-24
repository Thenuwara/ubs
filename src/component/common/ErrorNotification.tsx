import { useAppSelector } from "../../store/hook";

const ErrorNotification = () => {
  const { hasError, errorMessage } = useAppSelector((state) => state.errorSlice);
  if (!hasError) {
    return null;
  }
  return (
    <div className="error">
      <div className="error-circle">
        <div>X</div>
      </div>
      <div className="error-msg">{errorMessage}</div>
    </div>
  );
};
export default ErrorNotification;
