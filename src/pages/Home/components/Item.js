const Item = ({ id, content, date, time }) => {
  return (
    <div className="item">
      <div>
        <p>{content}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button className="remove">Remove</button>
    </div>
  );
};

export default Item;
