import Item from "./Item";

const List = ({ memoData, deleteData, shouldSubmit }) => {
  return (
    <div className="list">
      {memoData.map((memo) => {
        const { content, date, time, id } = memo;
        return (
          <Item
            key={id}
            id={id}
            content={content}
            date={date}
            time={time}
            deleteData={deleteData}
            shouldSubmit={shouldSubmit}
          />
        );
      })}
    </div>
  );
};

export default List;
