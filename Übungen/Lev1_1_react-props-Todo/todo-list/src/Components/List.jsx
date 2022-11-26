import "./List.css";
import ListItems from "./ListItems";

let data = [
  {
    item: "Bug Grocery",
  },
  {
    item: "Send Email",
  },
  {
    item: "Finish Assignment",
  },
  { item: "Write Blog" },
  { item: "Bake Cake" },
];

const List = () => {
  return (
    <article>
      <h1>My ToDos</h1>{" "}
      <ul>
        {data.map((item) => (
          <ListItems item={item.item} />
        ))}
      </ul>
    </article>
  );
};

// {data.map((item) => (
//   <ListItems
//     items={item.items}
//   />
// ))}
// </li>

export default List;
