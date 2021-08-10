import { useState } from "react";

import Starters from "./Starters";
import Soups from "./Soups";
import Salads from "./Salads";
import Sides from "./Sides";
import Kebabs from "./Kebabs";
import Wings from "./Wings";
import Drinks from "./Drinks";

const Menu = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section
      id="Menu"
      className="min-h-screen flex justify-center pt-16 pb-4 md:pt-40 lg:pt-56 "
    >
      <div className=" w-full mx-4">
        <div
          id="tab-header"
          className="flex flex-wrap sm:flex-nowrap justify-between sm:mb-8 text-md sm:text-2xl md:text-3xl text-shadow-md"
        >
          <span
            className=" cursor-pointer mx-3 my-2 sm:mx-0 sm:my-0"
            onClick={() => setActiveTab(1)}
          >
            {activeTab === 1 ? (
              <h5 className="underline">Starters</h5>
            ) : (
              <h5>Starters</h5>
            )}
          </span>
          <span
            className=" cursor-pointer mx-3 my-2 sm:mx-0 sm:my-0"
            onClick={() => setActiveTab(2)}
          >
            {activeTab === 2 ? (
              <h5 className="underline">Soups</h5>
            ) : (
              <h5>Soups</h5>
            )}
          </span>
          <span
            className=" cursor-pointer mx-3 my-2 sm:mx-0 sm:my-0"
            onClick={() => setActiveTab(3)}
          >
            {activeTab === 3 ? (
              <h5 className="underline">Salads</h5>
            ) : (
              <h5>Salads</h5>
            )}
          </span>
          <span
            className=" cursor-pointer mx-3 my-2 sm:mx-0 sm:my-0"
            onClick={() => setActiveTab(4)}
          >
            {activeTab === 4 ? (
              <h5 className="underline">Sides</h5>
            ) : (
              <h5>Sides</h5>
            )}
          </span>
          <span
            className=" cursor-pointer mx-3 my-2 sm:mx-0 sm:my-0"
            onClick={() => setActiveTab(5)}
          >
            {activeTab === 5 ? (
              <h5 className="underline">Wings</h5>
            ) : (
              <h5>Wings</h5>
            )}
          </span>
          <span
            className=" cursor-pointer mx-3 my-2 sm:mx-0 sm:my-0"
            onClick={() => setActiveTab(6)}
          >
            {activeTab === 6 ? (
              <h5 className="underline">Kebabs</h5>
            ) : (
              <h5>Kebabs</h5>
            )}
          </span>
          <span
            className=" cursor-pointer mx-3 my-2 sm:mx-0 sm:my-0"
            onClick={() => setActiveTab(7)}
          >
            {activeTab === 27 ? (
              <h5 className="underline">Drinks</h5>
            ) : (
              <h5>Drinks</h5>
            )}
          </span>
        </div>
        <div id="tab-content" className="text-xl sm:text-2xl md:text-3xl">
          {activeTab === 1 ? <Starters /> : null}
          {activeTab === 2 ? <Soups /> : null}
          {activeTab === 3 ? <Salads /> : null}
          {activeTab === 4 ? <Sides /> : null}
          {activeTab === 5 ? <Wings /> : null}
          {activeTab === 6 ? <Kebabs /> : null}
          {activeTab === 7 ? <Drinks /> : null}
        </div>
      </div>
    </section>
  );
};

export default Menu;
