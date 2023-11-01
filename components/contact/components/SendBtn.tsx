import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

const SendBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-dark text-white rounded-md outline-none transition-all focus:scale-105 hover:scale-105 active:scale-105 disabled:scale-100 disabled:bg-opacity-60"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Send{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
};
export default SendBtn;
