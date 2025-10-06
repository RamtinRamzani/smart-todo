// "use client";

import { BluetoothIcon, WifiIcon } from "lucide-react";
import { Anten, Charge } from "../../_assets/icons";

const MobileHeader = () => {
  return (
    <>
      <div className="px-8 flex justify-between h-10 items-center bg-background">
        <div className="flex gap-0.5">
          <span className="text-xs">09:00</span>
          <span className="text-xs">PM</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs">
            <BluetoothIcon size={18} />
          </span>

          <span className="text-xs">
            <WifiIcon size={18} />
          </span>

          <span className="text-xs">
            <Anten />
          </span>

          <span className="text-xs">
            <Charge />
          </span>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
