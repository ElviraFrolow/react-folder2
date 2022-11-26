import "./CardContent.css";

const CardContent = (props) => {
  return (
    <article>
      <img src="{props.img)}"></img>
      <p>{props.article}</p>
      <p>{props.price}</p>
      <button className="button">BUY NOW</button>
    </article>
  );
};

export default CardContent;
