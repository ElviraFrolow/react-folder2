const CardItems = (props) => {
  return (
    <article>
      <p>{props.title}</p>
      <p>{props.year}</p>
      <p>{props.director}</p>
      <p>{props.duration}</p>
      <p>{props.rate}</p>
      <div>
        <p>{props.genre}</p>
      </div>
    </article>
  );
};

export default CardItems;
