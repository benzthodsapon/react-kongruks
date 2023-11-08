export default function Item(props) {
  const { data, deletes } = props;
  return (
    <div>
      <li key={data.id} className={data.gender}>
        <h1>
          {data.id} - {data.name}
        </h1>
        <button className="delete" onClick={() => {deletes(data.id);}} >
          ลบ
        </button>
      </li>
    </div>
  );
}
