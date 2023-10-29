interface ExperienceListProps {
  name: string;
  isActive: boolean;
  handleList: () => void;
}

const ExperienceList = ({
  name,
  isActive,
  handleList,
}: ExperienceListProps) => {
  return (
    <li
      onClick={handleList}
      className={`${
        isActive
          ? "border-b-pointYellow md:border-l-pointYellow bg-pointYellow/10 font-semibold"
          : "border-dark/10"
      } px-8 py-3 border-b-2 md:border-b-0 border-l-0 md:border-l-2 hover:border-l-pointYellow  hover:bg-pointYellow/10 text-sm cursor-pointer duration-300 whitespace-nowrap`}
    >
      {name}
    </li>
  );
};
export default ExperienceList;
