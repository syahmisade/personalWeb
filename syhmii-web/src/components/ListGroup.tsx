import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = [
    "Sheffield",
    "Manchester",
    "London",
    "Leeds",
    "Liverpool",
    "Stock on train",
  ];

  //let selectedIndex = 0;

  //this function is called State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //arr[0]; variable (which is the selectedIndex)
  //arr[1]; updater function

  //items = []; this is the example if the items list is empty

  //This is to send message if there is no item found
  const getMessage = () => {
    //return items.length === 0 ? <p>No items found!</p> : null;
    //This is the alternatif one. Still the same meaning
    return items.length === 0 && <p>No Items Found!</p>;
  };

  //This is an event handler
  //const handleClick = (e: /*e is for event*/ MouseEvent) => console.log(e);

  // <Message/> == <Message><Message/>
  // ctrl + D (select word that want to change in the same time)
  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item} /*when using API, use item.id*/
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
