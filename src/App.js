import { useState } from "react";
import Navbar from "./components/navbar/Navbar"
import Filter from "./components/filter/Filter";
import Cards from "./components/listings/Listings";
import { list, list2 } from "./assets/cards-list";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className="App">
      <Navbar />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />}
    </div>
  );
}

export default App;
