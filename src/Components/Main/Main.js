import React from 'react'
import { useState } from 'react'
import RestaurantCard from '../RestaurantCrad/RestaurantCard'
import RestaurantList from '../RestaurantList.json'
function Main() {
    let [restaurantData, setRestaurantDaata] = useState(RestaurantList)
    let [enteredKey,setEnteredKey]=useState("");
    let [inputRating,setInputRating]=useState(0);

    const onsearchChange = (e) => {

        if(e.target.id==="searchBox"){
            setEnteredKey(e.target.value);
        }
        else if(e.target.id==="ratingBox"){
                 setInputRating(e.target.value)
        }
        const filterList = RestaurantList.filter((data) => data.name.toLowerCase().includes(enteredKey.toLowerCase()) && data.rating >= inputRating)

        // console.log(e.target.value)
        console.log(filterList);
        setRestaurantDaata(filterList);

    }

    // const onRatingChange=(e)=>{
    //     const filterList=RestaurantList.filter((data)=>data.rating>=inputRating)
    //     console.log(e.target.value)
    //     setRestaurantDaata(filterList);


    // }

    // const resturantDetail = {
    //     name: "CN Chines",
    //     address: "223 city Road",
    //     type: "Chinese"
    // }
    return (
        <>
            <h1>Restaurant app</h1>
            <section style={{
                 display:"flex",
                flexWrap:'wrap'
            }}>
                <input type="text" placeholder='searchRestaurants..' onChange={onsearchChange} id="searchBox" />
                <input type="number" step="1" min={1} max={5} onChange={onsearchChange} id="ratingBox" />
                {
                    restaurantData.map((restaurantDetails) => {
                        {/* console.log(restaurantDetails) */ }
                        return <RestaurantCard key={restaurantDetails._id._id} {...restaurantDetails} />
                    })
                }
            </section>
        </>
    )
}

export default Main
