import React from 'react'

function RestaurantCard(props) {
  console.log(props);
  return (
    <div style={{
      boxShadow:"0 0 5px gray",
      padding:'2px',
      width:'400px'
    }}>
    <h1>{props.rating}</h1>
       <h1>{props.name}</h1>
       <h3>{props.address}</h3>
       <h5>{props.type_of_food}</h5>
    </div>
  )
}

export default RestaurantCard
