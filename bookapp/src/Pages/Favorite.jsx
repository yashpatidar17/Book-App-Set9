import { useContext } from "react"
import { BookContext } from "../main"

export const Favorite = () =>{
    const { bookdata,readHandler} = useContext(BookContext)
    console.log(bookdata,"book")
    const favBook = bookdata.filter((book)=>book.fav)
    return(
        <>
            <h3>Favorite</h3>
            {favBook.map((item) => {
        const { id, title, author, image, read } = item;
        return (
          <div className="card" key={id}>
            <img src={image} alt="book" />
            <p>{id}</p>
            <p>{title}</p>
            <p >Author : {author}</p>
            <button disabled={read} onClick={() => readHandler(id)}>
              {!read ? "Mark as read" : "Already Read"}
            </button>
          </div>
        );
      })}
        </>
    )
}