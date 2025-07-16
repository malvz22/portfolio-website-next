interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl mb-4 text-start">{title}</h1>
      <hr className="border-solid w-[200px] border-[1.5px] border-primary"></hr>
    </div>
  );
};

export default Heading;
