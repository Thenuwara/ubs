const Spinner = (props: { loading: boolean }) => {
  const { loading } = props;
  if (!loading) {
    return null
  }
  return (
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  );
};

export default Spinner;
