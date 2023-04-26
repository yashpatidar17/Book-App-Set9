import { useContext } from "react";
import { BookContext } from "../main";
import "../App.css";

export const Home = () => {
  const { bookdata, readHandler, favHandler } = useContext(BookContext);
  return (
    <div>
    <h1 style = {{textAlign: "center"}}>All Books</h1>
      {bookdata.map((item) => {
        const { id, title, author, image, read, fav } = item;
        return (
          <div className="card" key={id}>
            <img src={image} alt="book" />
            <p>{id}</p>
            <p style={{display:"inline"}}>{title}</p>
            <p >Author : {author}</p>
            <button disabled={read} onClick={() => readHandler(id)}>
              {!read ? "Mark as read" : "Already Read"}
            </button>
            <button onClick={() => favHandler(id)}>
              {fav ? "Go to fav" : "Add to fav"}
            </button>
          </div>
        );
      })}
    </div>
  );
};
