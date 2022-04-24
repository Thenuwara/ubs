const Data = (props: { lable: string; value: any }) => {
  const { lable, value } = props;
  return (
    <>
      <h2>{lable}</h2>
      <p>{value}</p>
    </>
  );
};

export default Data;
