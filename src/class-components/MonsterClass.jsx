import { useState, useEffect } from "react";
import CardList from "../components/CardList/card-list.component";
import SearchBox from "../components/SearchBox/search-box.component";

const MonsterClass = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  let [filteredMonsters, setFilteredMonsters] = useState(monsters);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <>
      <SearchBox
        placeholder="Search Monster"
        monsterSearch={onSearchChange}
        className="monster-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </>
  );
};
export default MonsterClass;
