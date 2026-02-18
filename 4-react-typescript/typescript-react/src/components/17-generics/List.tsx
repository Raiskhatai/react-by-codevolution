type ListProp<T> = {
  items: T[];
  onClick: (value: T) => void;
};

// export const List = <T extends {}>({ items, onClick }: ListProp<T>) => {
export const List = <T extends { first: string }>({
  items,
  onClick,
}: ListProp<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item.first}
          </div>
        );
      })}
    </div>
  );
};

export default List;
