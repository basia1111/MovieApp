const ErrorState = ({ message }: { message: string }) => {
  return <div className="w-full h-full flex items-center justify-center text-error">{message}</div>;
};
export default ErrorState;
