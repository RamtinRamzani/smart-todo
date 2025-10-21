import { Menu, SearchIcon } from "lucide-react";
import Container from "./Container";
import Image from "next/image";

const profPicture = "/DSC07502_733815.jpg";

type HeaderProps = { title: string; day?: number };

const TaskHeader = ({ title, day }: HeaderProps) => {
  return (
    <Container className="text-white font-semibold h-14 mt-2 py-1.5 flex items-center justify-between rounded-b-2xl border-b-2 border-border">
      <div className="flex gap-4 items-center">
        <button>
          <Menu size={28} className="cursor-pointer" />
        </button>

        <div className="flex items-center gap-3">
          <div className="relative w-12 h-11">
            <Image
              // width={40}
              // height={20}
              src={profPicture}
              fill
              className="object-cover rounded-md"
              alt="Your Profile Picture"
              quality={30}
            />
          </div>
          <div className="flex justify-center flex-col">
            <h2 className="text-sm font-normal text-purple200">
              Hello {title}
            </h2>
            <h3 className="text-sm text-purple100">Keep For {day} Day</h3>
          </div>
        </div>
      </div>

      <button>
        <SearchIcon size={28} />
      </button>
    </Container>
  );
};

export default TaskHeader;
