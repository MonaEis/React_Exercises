import { useParams } from "react-router-dom"
import { carsData } from "../type"

const CarDetail = () => {

    const { id } = useParams();
    console.log(id)

    const filteredCarDetail = carsData.filter((item)=> item.id.toString() === id)
    console.log(filteredCarDetail)
  return (
    <section className="details">
        {filteredCarDetail.map((car)=>(
            <div className="App">
                <h2>{car.CarMake}</h2>
                <h2>{car.carModel}</h2>
                <h2>{car.CarYear}</h2>
            </div>
        ))}
      
    </section>
  )
}

export default CarDetail
