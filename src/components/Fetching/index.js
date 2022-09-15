import React from "react";

const arr = [1, 2, 3, 4, 5, 6,7, 8, 9 ,0];

const Fetching = (props) => {
    // console.log(props.data)

    return (
        <>
        {
            arr.map(item => {
                return (
                    <div key={item}>
                        <div>{props.data.wind_speed}</div>
                        <div>{props.data.feelslike}</div>
                    </div>
                )
            })
        }
        </>
    )
}
export default Fetching
