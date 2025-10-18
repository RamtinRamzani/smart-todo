import { Menu, SearchIcon } from "lucide-react";
import Container from "./Container";

type HeaderProps = { title: string };

const TaskHeaderV1 = ({ title }: HeaderProps) => {
  return (
    <Container className="text-white font-semibold h-14 mt-2 py-1.5 flex items-center justify-between rounded-b-2xl border-b-2 border-border">
      <div className="flex gap-4 items-center">
        <button>
          <Menu size={28} className="cursor-pointer" />
        </button>

        <h2 className="text-lg font-normal">{title}</h2>
      </div>

      <button>
        <SearchIcon size={28} />
      </button>
    </Container>
  );
};

export default TaskHeaderV1;
