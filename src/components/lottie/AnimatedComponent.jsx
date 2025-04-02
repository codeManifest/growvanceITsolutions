import Lottie from "lottie-react";
import animationData from "../../assets/anim2.json"; // Update the path as needed

export default function AnimatedComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Lottie animationData={animationData} height={600} loop={true} autoplay={true} className="h-250"  />
    </div>
  );
}