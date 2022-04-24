import { urlFor } from "../sanity"

const Review = ({ review }) => {
    console.log(review)
    return(
        <div className="review-box">
                <h1>{review.rating}</h1> 
                <h2>{review.traveller.name}</h2>
                <h2>{review.reviewDescription}</h2>
                <img src={urlFor(review.traveller.image).width(150).height(150).crop('focalpoint')}/> 
        </div>
        )
}

export default Review