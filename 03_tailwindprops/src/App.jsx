import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] ">
      <h1 className="text-white text-center pt-10 font-bold text-[30px]">Learn props</h1>
      <br />
      <div className="p-8 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">

          <Card
            image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
            title="Boost your conversion rate"
            date="Mar 16, 2020"
            author="Michael Foster"
            avatar="https://randomuser.me/api/portraits/men/32.jpg"
          />

          <Card
            image="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
            title="How to use search engine optimization to drive sales"
            date="Mar 10, 2020"
            author="Lindsay Walton"
            avatar="https://randomuser.me/api/portraits/women/44.jpg"
          />

          <Card
            image="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            title="Improve your customer experience"
            date="Feb 12, 2020"
            author="Tom Cook"
            avatar="https://randomuser.me/api/portraits/men/46.jpg"
          />
        </div>
      </div>

    </div>
  );
};

export default App;