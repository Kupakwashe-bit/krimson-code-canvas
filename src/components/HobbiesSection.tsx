import { VideoShowcase } from "./VideoShowcase";

const HobbiesSection = () => {
  return (
    <section className="krimson-section bg-muted/10">
      <div className="krimson-container">
        <h2 className="text-3xl font-bold mb-6">Hobbies</h2>
        <p className="mb-4">One of my favorite hobbies is gaming. Check out the video below to see more!</p>
        <VideoShowcase />
      </div>
    </section>
  );
};

export default HobbiesSection; 