import {useState} from "react";
import star from "./images/icon-star.svg";
import thankYou from "./images/illustration-thank-you.svg";

function App() {
  const [score, setScore] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
    {!isSubmitted && <Rating setIsSubmitted={setIsSubmitted} setScore={setScore} />}
    {isSubmitted && <ThankYou score={score} />}
    </>
  );
}


const Rating = ({ setScore, setIsSubmitted }) => {
  
  const Button = ({ number }) => {
    return( <button className='card__ratingBtn'  onClick={() => setScore(number)}>{number}</button> )  
    }


  return(
    <div className='card'>
      <img className='card__img-rating' src={star} alt=""></img>
      <h1 className='card__h1'>How did we do?</h1>
      <p className='card__p'>Please let us know how we did with your support request. All feedback is appreciated to help us 
        improve our offering!
      </p>
        <ul className='card__rating'>
          <li>
            <Button number={1} />
          </li>
          <li>
            <Button number={2} />
          </li>
          <li>
            <Button number={3} />
          </li>
          <li>
            <Button number={4} />
          </li>
          <li>
            <Button number={5} />
          </li>
        </ul>
      <div className='card__submit'>  
      <button className='card__submitBtn' onClick={() => setIsSubmitted(true)}>Submit</button>
      </div>
    </div>
  );
}

const ThankYou = ({score}) => {
  return(
  <div className='card'>
  <div className='card__img-thankyou-div'>
    <img src={ thankYou } alt="" />
  </div>
  <div className='card__selectedRating'>
    <p className='card__p-selectedRating'>You selected {score} out of 5</p>
  </div>
  <h1 className='card__h1' style={{textAlign:"center" }}>Thank you!</h1>
  <p className='card__p' style={{textAlign:"center" }}>We appreciate you taking the time to give a rating. If you ever need more support,
    don't hesitate to get in touch!
  </p>
  </div>
  );
}

export default App;
