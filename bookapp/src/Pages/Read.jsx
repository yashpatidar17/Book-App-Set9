import { useContext } from "react"
import { BookContext } from "../main"
import "../App.css"
export const Read = () =>{
    const {bookdata} = useContext(BookContext)
    const readFilter = bookdata.filter((book)=> book.read)
    return(
        <div>
            <h3>Read</h3>
            {readFilter.map((readBook)=>{
                const {id, title, author, image} = readBook;
                return(
                    <div className="card" key={id}>
                    <img src={image} alt="books"/>
                        <p>{id}</p>
                        <p>Title : {title}</p>
                        <p>Author : {author}</p>
                    </div>
                )
                
            })}
        </div>
    )
}