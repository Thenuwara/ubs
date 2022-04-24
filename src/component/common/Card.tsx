const Card = (props: { id?: string; title?: string; image?: string; onClick: any }) => {
  const { id, title, image, onClick } = props;
  return (
    <div className="card" key={id}>
      <div style={{ animationName: "fadeInUp", animationDuration: "1s" }}>
        <button data-testid={"card-test-id" + id} className="single-featured-box" onClick={onClick}>
          <img src={image} />
          <h3>{title}</h3>
        </button>
      </div>
    </div>
  );
};

export default Card;
