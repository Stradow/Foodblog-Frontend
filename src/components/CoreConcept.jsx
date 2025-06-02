function CoreConcept(props) {
  return (
    <li className="text-center max-w-xs">
      <img
        src={props.image}
        alt={props.title}
        className="h-24 w-40 object-cover mx-auto"
      />
      <h3 className="my-2 text-white text-lg font-semibold">{props.title}</h3>
      <p className="text-sm text-white">{props.content}</p>
    </li>
  );
}

export default CoreConcept;
