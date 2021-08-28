import React from 'react'

 const FlatSlider = ({data}) => {
     const [active , setActive ] = React.useState(0);
     const [datt , setDatt ] = React.useState(data);
     React.useEffect(() => { 
        setInterval(() => { 
            setDatt((prev)=> [...prev.slice(1), prev[0]] );
        }, 3500);

     }, [data])

    return (
        <div>
            {datt.map((item, index) => { 
                return (
                    <div key={index} className="slider-item">
                        <div className="slider-item-image" style={{width: 300}} >
                            <img src={item.image} alt={item.title} style={{width: 300}} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FlatSlider;