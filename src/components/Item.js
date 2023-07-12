export default function Item({ newItem, onDeleteItem, onToggleItem, onClearAll}) {
  return (
    <li>
      <input
        type="checkbox"
        value={newItem.packed}
        onChange={() => onToggleItem(newItem.id)}

      />
      <span style={newItem.packed ? { textDecoration: "line-through" } : {}}>
        {newItem.userInput} {newItem.chooseNumber}
      </span>
      <button onClick={() => onDeleteItem(newItem.id)}>❌</button>
    </li>
  );
}
