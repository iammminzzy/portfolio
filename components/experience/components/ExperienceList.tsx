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
          ? "border-l-pointYellow bg-pointYellow bg-opacity-10 font-semibold"
          : "border-l-dark border-opacity-10"
      } px-8 py-3 border-l-2  hover:border-l-pointYellow  hover:bg-pointYellow hover:bg-opacity-10 text-sm cursor-pointer duration-300`}
    >
      {name}
    </li>
  );
};
export default ExperienceList;
