type HorizonatalPositon = "left" | "center" | "right";
type VerticalPositon = "top" | "center" | "bottom";
type ToastProps = {
  position:
    | Exclude<`${HorizonatalPositon}-${VerticalPositon}`, "center-center">
    | "center";
};

const Toast = ({ position }: ToastProps) => {
  return <div>toast notifincation position - {position}</div>;
};

export default Toast;
