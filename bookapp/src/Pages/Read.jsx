import { useContext } from "react";
import { BookContext } from "../main";
import "../App.css";


export const Read = () => {
  const { bookdata,favHandler } = useContext(BookContext);
  const readFilter = bookdata.filter((book) => book.read);
  return (
    <>
      <h1>Read</h1>
      {readFilter.map((readBook) => {
        const { id, title, author, image, fav } = readBook;
        return (
          <div className="card" key={id}>
            <img src={image} alt="books" />
            <p>{id}</p>
            <p>{title}</p>
            <p>Author : {author}</p>
            <button onClick={() => favHandler(id)}>
              {fav ? "Go to fav" : "Add to fav"}
            </button>
          </div>
        );
      })}
    </>
  );
};
