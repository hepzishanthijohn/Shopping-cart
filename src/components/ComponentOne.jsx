import { useState } from "react";
function ComponentOne() {
    const [description, setDescription] = useState(true);
    const [reviews, setReviews] = useState(false);
    const [btnName,setBtnName]=useState(true)
    const descriptionHandler = () => {
        setDescription(true);
        setReviews(false);
        setBtnName(false)
    };
    const reviewsHandler = () => {
        setDescription(false);
        setReviews(true);
        setBtnName(true)
    };
    return (
        <div>
            <div>
            {btnName===true?<button onClick={descriptionHandler}>
                Descriptions
            </button>:<button onClick={reviewsHandler}>
                Reviews
            </button>}
            </div>
            
            
            
            <div className="container">
                {description && (
                    <div>
                        <p>
                            This is a <b> descriptive </b>
                            component
                        </p>
                        <h3>Descriptions:</h3>
                    </div>
                )}
                {reviews && (
                    <div>
                        <p>
                            This is a <b> Review </b>
                            component
                            <br />
                        </p>
                        <h3>Reviews:</h3>
                    </div>
                )}
            </div>
        </div>
    );
}
 
export default ComponentOne;