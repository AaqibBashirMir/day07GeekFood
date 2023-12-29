import React from 'react'

function RestaurantCard(props) {
  console.log(props);
  return (
    <div style={{
      boxShadow: "0 0 5px gray",
      width: '400px',
      borderRadius: "5px"
    }}>
    <div style={{
      padding: '10px',
      borderRadius: "5px",
      background:"white"

    }}>
      <h1>{props.rating} Rating</h1>
      <h1>{props.name}</h1>
      <p style={{
        display: "flex",
        alignItems: "center"
      }}><span class="material-symbols-outlined">
          location_on
        </span><p>{props.address}</p></p>
        
    </div>
      <div style={{
        backgroundColor:"darkorange",
        height:"100px",
        width:"380px",
        padding:"10px",
      borderRadius: "5px",
      color:"white"

      }}>
        <p><i class="fa-solid fa-utensils"></i> {props.type_of_food}</p>
        <a>{props.URL}</a>
      </div>
</div>

  )
}

export default RestaurantCard
