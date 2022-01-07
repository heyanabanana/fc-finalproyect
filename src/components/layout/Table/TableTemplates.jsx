import TagAccent from "../Tags/TagAccent"

export function TagPill({ value }) {

  const skillLenght = "+ " +( value.length - 2);
  
  return (
    <span className="flex w-auto flex-wrap">
      {value.slice(0, 2).map((skill) => (
        <TagAccent skill={skill} key={skill}/>
      ))}
      {value.length > 2 ? (
      <TagAccent skill={skillLenght} key={value}/>

      ) : (
        ""
      )}
    </span>
  );
}

export function FullName({ value }) {
  return <p className="font-semibold">{value}</p>;
}
export function dontShow({ value }) {
  return <div className="hidden">{value}</div>;
}
