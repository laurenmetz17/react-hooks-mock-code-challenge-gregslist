import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, setListings}) {
  const listingItems = listings.map(listing => (
    <ListingCard key={listing.id} removeListing={removeListing} listing={listing}/>
  ))

  function removeListing(event) {
    const newListings = listings.filter(listing => listing.id.toString() !== event.target.id);
    setListings(newListings);
    fetch(`http://localhost:6001/listings/${event.target.id}`, {
      method: "DELETE"
    });

  }
  
  return (
    <main>
      <ul className="cards">
        {listingItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
