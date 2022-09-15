import React, { useEffect, useState } from "react";

const Apis =() => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/db.json')
        .then(res => res.json())
        .then(res => setData(res.data))
        .catch(e => console.log("error", e))
    }, []);

    return (
        <div>
            {data.map(({request, location}) => (
                <>
                {
                    <div>
                    {request.type}; <br />
                    {request.query}; <br />
                    {request.language}; <br />
                    {request.unit};
                    </div>
                }
                {
                    <div>
                        {location.name}
                    </div>
                }
                </> 
            ))}
        </div>
    )
}

export default Apis
