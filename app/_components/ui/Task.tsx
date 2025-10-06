import { ArrowLeft, SearchIcon } from "lucide-react";
import Container from "./Container";

type HeaderProps = { title: string };

const Task = ({ title }: HeaderProps) => {
  return (
    <Container className="text-white font-semibold h-14 mt-2 py-1.5 flex items-center justify-between rounded-b-2xl border-b-2 border-border">
      <div className="flex gap-4 items-center">
        <button>
          <ArrowLeft size={30} />
        </button>

        <h2 className="text-lg">{title}</h2>
      </div>

      <button>
        <SearchIcon size={28} />
      </button>
    </Container>
  );
};

export default Task;
