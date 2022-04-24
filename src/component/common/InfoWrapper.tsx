const InfoWrapper = (type: any, title: any,image: any, component: any) => {
  return (
    <div>
      <div className="info">
        <div className="info-preview">
          <h6>{type}</h6>
          <h2>{title}</h2>
          <img style={{ height: "400px" }} src={image} />
        </div>
        <div className="info-info">
          {component}
        </div>
      </div>
    </div>
  );
};

export default InfoWrapper;
