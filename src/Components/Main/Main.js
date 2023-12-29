import React from 'react'
import { useState } from 'react'
import RestaurantCard from '../RestaurantCrad/RestaurantCard'
import RestaurantList from '../RestaurantList.json'
function Main() {
    let [restaurantData, setRestaurantDaata] = useState(RestaurantList)
    let [enteredKey, setEnteredKey] = useState("");
    let [inputRating, setInputRating] = useState(0);

    const onsearchChange = (e) => {
        let updateSearch;
        let updateRating = 0;

        if (e.target.id === "searchBox") {
            updateSearch = e.target.value;
            setEnteredKey(() => {
                return updateSearch;
            });
        }
        else if (e.target.id === "ratingBox") {
            updateRating = Number(e.target.value);
            setInputRating(() => {
                return Number(updateRating);
            })
        }
        const filterList = RestaurantList.filter((data) => data.name.toLowerCase().includes(enteredKey.toLowerCase()) && data.rating >= updateRating)

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
                background:"yellow"
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: '20px',
                }}>
                    <input type="text" placeholder='searchRestaurants..' onChange={onsearchChange} id="searchBox" />
                    <input type="number" step="1" min={1} max={5} onChange={onsearchChange} id="ratingBox" placeholder='Rating' />
                </div>

                <div style={{
                    display: "flex",
                    flexWrap: 'wrap',
                    padding: "0 0 10px 10px ",
                    gap: '50px',
                }}>
                        {
                            restaurantData.map((restaurantDetails) => {
                                {/* console.log(restaurantDetails) */ }
                                return <RestaurantCard style key={restaurantDetails._id._id} {...restaurantDetails} />
                            })
                        }
                    </div>


            </section>
        </>
    )
}

export default Main
