const ListElement = (props: {
  curTodos: {
    data: string;
    checked: boolean;
  }[];
  handleTodos: React.Dispatch<
    React.SetStateAction<
      {
        data: string;
        checked: boolean;
      }[]
    >
  >;
}) => {
  const removeOnClick = (idx: number) => {
    const temp = props.curTodos.filter((v, index) => index !== idx);
    props.handleTodos(temp);
  };

  const upOnClick = (idx: number) => {
    const temp = props.curTodos.map((value, index) =>
      index === idx - 1
        ? props.curTodos[idx]
        : index === idx
        ? props.curTodos[idx - 1]
        : value
    );
    props.handleTodos(temp);
  };

  const downOnClick = (idx: number) => {
    const temp = props.curTodos.map((value, index) =>
      index === idx
        ? props.curTodos[idx + 1]
        : index === idx + 1
        ? props.curTodos[idx]
        : value
    );
    props.handleTodos(temp);
  };

  const liOnClick = (idx: number) => {
    const temp = props.curTodos.map((value, index) =>
      index === idx ? { ...value, checked: !value.checked } : value
    );
    props.handleTodos(temp);
  };

  const liItems = props.curTodos.map((item, idx) => (
    <>
      <li key={idx} onClick={() => liOnClick(idx)}>
        <input type="checkbox" checked={props.curTodos[idx].checked} readOnly />
        {item.data}
      </li>
      <button onClick={() => removeOnClick(idx)}>-</button>
      <div>
        <button onClick={() => upOnClick(idx)}>∧</button>
        <button onClick={() => downOnClick(idx)}>∨</button>
      </div>
    </>
  ));

  return <ul>{liItems}</ul>;
};
export default ListElement;
