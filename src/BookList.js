import { Book } from './Book';
import { Books } from './Books';

export const BookList = () => {
  return (
    <section className="list">
      {Books.map((book, index) => {
        return <Book {...book} key={book.id} number={index} />;
      })}
    </section>
  );
};
