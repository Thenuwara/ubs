const Card = (props: { key: string; title: string; image: string }) => {
  const { key, title, image } = props;
  return (
    <div className="card col-lg-4 col-md-6 col-sm-6" key={key}>
      <div style={{ animationName: "fadeInUp", animationDuration: "1s" }}>
        <div className="single-featured-box">
          <img src={image} />
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
