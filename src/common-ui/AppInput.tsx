import { useState } from "react";
import Input from "rsuite/Input";

function SearchInput(props: any): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const updateSearchTerm = (searchKey: string) => {
    props.triggerSearch(searchKey);
    setSearchTerm(searchKey);
  };
  return <Input size={props.size} placeholder="Search for products..." onChange={updateSearchTerm} value={searchTerm} />;
}

export default SearchInput;
