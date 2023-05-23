function BookClicked(title) {
  alert('Just clicked ' + title);
}

export const Book = (props) => {
  const { title, author, image, number } = props;
  return (
    <article className="book" onClick={() => BookClicked(title)}>
      <p className="number">{`#${number + 1}`}</p>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
