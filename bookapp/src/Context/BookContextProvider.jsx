import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../Data/DataProvider";
import { useNavigate } from "react-router";

export const BookContext = createContext();
export const BookContextProvider = ({ children }) => {
  const [bookdata, setBookdata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await fakeFetch("https://example.com/api/books");
        setBookdata(data.books);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const readHandler = (gotId) => {
    setBookdata((prev) =>
      prev.map((book) =>
        book.id === gotId ? { ...book, read: !book.read } : { ...book }
      )
    );
    // setBookdata((prev) => ({
    //   ...prev,
    //   books: prev.books.map((book) =>
    //     book.id === gotId ? { ...book, read: !book.read } : { ...book }
    //   ),
    // }));
  };

  const favHandler = (gotFavId) => {
    const favBook = bookdata.find((Book) => Book.id === gotFavId);
    if (favBook?.fav) {
      navigate("/fav");
    } else {
      // favBook.fav = true;
      // setBookdata([...bookdata])

      setBookdata((prev) =>
        prev.map((book) =>
          book.id === gotFavId ? { ...book, fav:true } : { ...book }
        )
      );
    }
  };
  return (
    <div>
      <BookContext.Provider value={{ bookdata, readHandler, favHandler }}>
        {children}
      </BookContext.Provider>
    </div>
  );
};
