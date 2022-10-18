import React, {useState} from "react";

function Search(listings) {
  const [search, setSearch] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const searchedListing = listings.listings.filter(listing => listing.description.includes(search));
    listings.setListings(searchedListing);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => {
          setSearch(search => search = e.target.value); 
        }}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
