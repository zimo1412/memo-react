import Item from "./Item";

const List = ({ memoData }) => {
  return (
    <div className="list">
      {memoData.map((memo) => {
        const { content, date, time, id } = memo;
        return (
          <Item key={id} id={id} content={content} date={date} time={time} />
        );
      })}
    </div>
  );
};

export default List;
