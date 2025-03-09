import Spinner from "../spinner";

const LoadingState = ({ height }: { height: string }) => {
  return (
    <div className={` ${height} w-full flex items-center justify-center`}>
      <Spinner />
    </div>
  );
};
export default LoadingState;
