import Lottie from 'react-lottie'
import animationData from '../../assets/restaurants-loading.json'

export default function loader() {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      return <Lottie options={defaultOptions}/>
}