import { Calendar, ClipboardCheck, LayoutGrid, User } from "lucide-react";
import Container from "./Container";

const Footer = () => {
  const menu = [
    { title: "Menu", icon: <LayoutGrid /> },
    { title: "Task", icon: <ClipboardCheck /> },
    { title: "Calender", icon: <Calendar /> },
    { title: "Mine", icon: <User /> },
  ];

  return (
    <Container className="h-20 bg-background">
      <div className="h-full flex justify-between items-center">
        {[
          menu.map((item) => (
            <div
              className="flex flex-col items-center gap-1 text-secondaryText cursor-pointer hover:text-primaryText hover:transition-all duration-150"
              key={item.title}
            >
              {item.icon}
              <p>{item.title}</p>
            </div>
          )),
        ]}
      </div>
    </Container>
  );
};

export default Footer;
