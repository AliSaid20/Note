import { useEffect } from "react"
import './Star.css';


const Star = () => {

    useEffect(() => {

          const generateStar = () => { 
            const starsContainer = document.querySelector('.stars');
            

            for (let i = 0; i < 10; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
            
         


            star.style.top = `${Math.random() * 10}vh`; 
            star.style.left = `${Math.random() * 100}vw`; 
    
            starsContainer.appendChild(star);

            setTimeout(() => {
                star.remove();
              }, 5000); 
            }
          }
    
        const intervalId = setInterval(generateStar, 200);
        return () => clearInterval(intervalId);

      }, []); 
    
  return (
    <div className="stars"></div>
  )
}

export default Star
