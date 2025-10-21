"use client";

import { useState } from "react";
import { lusitana } from "../_components/ui/fonts";
// import { lusitana } from "./_components/ui/fonts";

export default function Home() {
  const [test, setTest] = useState(false);

  return (
    <div>
      <div className={`bg-amber-100 h-screen text-black ${test ? "flex" : ""}`}>
        {test && (
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit
            commoi magnam numquam quas ducimus qui libero illo repellendus!
            Perspiciatis error atque dolor molestiae
          </div>
        )}
        <div
          className={`bg-blue-300 flex ${
            test ? "flex self-center overflow-hidden" : "h-screen"
          }`}
        >
          <div>
            <button
              className="bg-red-300 rounded-3xl mt-10 ml-10 p-4 cursor-pointer"
              onClick={() => setTest(!test)}
            >
              say hello
            </button>

            <p className={`text-3xl p-6 ${lusitana.className} font-medium`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit
              commodi magnam numquam quas itaque esse modi ducimus, qui libero
              illo repellendus! Perspiciatis error atque dolor molestiae, rerum
              cumque nostrum magnam sed voluptates omnis debitis corrupti eius
              pariatur reprehenderit soluta. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Reiciendis voluptate necessitatibus
              nobis natus! Ullam quod consectetur eveniet, id error hic
              blanditiis dolore iste iure libero voluptas sequi vel omnis!
              Illum, ipsa accusantium, eaque non accusamus fugit magni
              doloremque rerum laudantium, earum laboriosam nam dolorem nostrum
              vero voluptas aspernatur quo fuga! Inventore amet aspernatur,
              officia voluptatibus maiores necessitatibus laborum sint neque
              molestias fuga rem dignissimos voluptatum mollitia libero ad
              repellat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
