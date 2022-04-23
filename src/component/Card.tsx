const Card = (props: { key: string; title: string; image: string, onClick: any }) => {
  const { key, title, image, onClick } = props;
  return (
    <div className="card" key={key}>
      <div style={{ animationName: "fadeInUp", animationDuration: "1s" }}>
        <div className="single-featured-box" onClick={onClick} >
          <img src={image} />
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
