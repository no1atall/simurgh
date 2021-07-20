import { useState } from "react";

import Starters from "./Starters";
import Soups from "./Soups";
import Salads from "./Salads";
import Sides from "./Sides";
import Kebabs from "./Kebabs";

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
          className="flex justify-between sm:mb-8 text-md sm:text-2xl md:text-3xl text-shadow-md"
        >
          <span className=" cursor-pointer" onClick={() => setActiveTab(1)}>
            {activeTab === 1 ? (
              <h5 className="underline">Starters</h5>
            ) : (
              <h5>Starters</h5>
            )}
          </span>
          <span className=" cursor-pointer" onClick={() => setActiveTab(2)}>
            {activeTab === 2 ? (
              <h5 className="underline">Soups</h5>
            ) : (
              <h5>Soups</h5>
            )}
          </span>
          <span className=" cursor-pointer" onClick={() => setActiveTab(3)}>
            {activeTab === 3 ? (
              <h5 className="underline">Salads</h5>
            ) : (
              <h5>Salads</h5>
            )}
          </span>
          <span className=" cursor-pointer" onClick={() => setActiveTab(4)}>
            {activeTab === 4 ? (
              <h5 className="underline">Sides</h5>
            ) : (
              <h5>Sides</h5>
            )}
          </span>
          <span className=" cursor-pointer" onClick={() => setActiveTab(5)}>
            {activeTab === 5 ? (
              <h5 className="underline">Wings</h5>
            ) : (
              <h5>Wings</h5>
            )}
          </span>
          <span className=" cursor-pointer" onClick={() => setActiveTab(6)}>
            {activeTab === 6 ? (
              <h5 className="underline">Kebabs</h5>
            ) : (
              <h5>Kebabs</h5>
            )}
          </span>
          <span className=" cursor-pointer" onClick={() => setActiveTab(7)}>
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

          {activeTab === 5 ? (
            <div id="content">
              <h3>
                8 Wings<span className="text-xl">$10.99</span>
              </h3>
              <h3>
                8 Wing combo with beer<span className="text-xl">$14.99</span>
              </h3>
              <h3>
                10 Wings<span className="text-xl">$12.99</span>
              </h3>
              <h3>
                12 Wings<span className="text-xl">$14.88</span>
              </h3>
            </div>
          ) : null}
          {activeTab === 6 ? <Kebabs /> : null}
          {activeTab === 7 ? <div id="content"> Drinks list</div> : null}
        </div>
      </div>
    </section>
  );
};

export default Menu;
