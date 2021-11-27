const Item = ({ id, content, date, time, deleteData, shouldSubmit }) => {
    function removeItem() {
        shouldSubmit.current = true
        deleteData(function(prev) {
            return prev.filter(item => item.id !== id)
        })
    }
  return (
    <div className="item">
      <div>
        <p>{content}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button className="remove" onClick={removeItem}>Remove</button>
    </div>
  );
};

export default Item;
