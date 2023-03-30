import React from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import AboutMeImg1 from "/public/images/AboutMeImg.png"
import AboutMeImg2 from "/public/images/AboutMe2.png"

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Image src={AboutMeImg1} alt="This is about me"/>
        </div>
        <div className="embla__slide">
          <Image src={AboutMeImg2} alt="This is about me image"/>
        </div>

      </div>
    </div>
  )
}

export default EmblaCarousel;