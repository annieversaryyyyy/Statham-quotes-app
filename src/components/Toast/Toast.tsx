import "./Toast.css";

interface ToastProps {
  message: string;
  visible: boolean;
}

function Toast({ message, visible }: ToastProps) {
  return (
    <div className={`toast ${visible ? "toast--visible" : ""}`}>{message}</div>
  );
}

export default Toast;
