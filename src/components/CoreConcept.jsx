function CoreConcept(props) {
  const dateFormate = new Date(props.date).toLocaleDateString('en-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const trimContent = props.content.split(' ').slice(0, 15).join(' ') + ' ...';

  return (
    <div className="bg-[#F5F1E9] pl-5 pr-3 py-5 flex rounded-3xl">
      <img src={props.image} alt={props.title} className="h-40 w-40 object-cover rounded-xl" />
      <div className="mb-auto mt-0 my-1 pl-3">
        <p className=" pt-1 text-base/4 text-black">{dateFormate}</p>
        <h3 className="text-[#DE3031] text-2xl/6 font-semibold">{props.title}</h3>
        <p className=" pt-1 text-base/4 text-black">Written by {props.author}</p>
        <p className=" pt-1 text-base/4 text-black">{trimContent}</p>
      </div>
    </div>
  );
}

export default CoreConcept;
