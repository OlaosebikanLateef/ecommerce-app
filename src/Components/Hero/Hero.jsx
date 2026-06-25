import hero_img from '../../assets/hero.png'

const Hero = () => {
  return (
    <div className="min-h-[120vh] grid place-items-center">
      
      <div className="text-center">

        <h1 className="text-[8rem] md:text-[10rem] lg:text-[12rem] font-semibold font-antonio leading-none">
          CLASSY FASHION
        </h1>

        <img
          src={hero_img}
          alt="Hero"
          className="w-[320px] sm:w-[500px] md:w-[700px] lg:w-[1000px] h-auto lg:h-[840px] object-contain -mt-32 md:-mt-40 lg:-mt-48 mx-auto"
        />

      </div>

    </div>
  )
}

export default Hero