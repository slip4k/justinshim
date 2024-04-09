'use client';
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from './ProjectsCarouselDotButtons';
import useEmblaCarousel from 'embla-carousel-react';
import ProjectsCarouselSlide from './ProjectsCarouselSlide';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla md:w-[30dvw] ">
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container ">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number shadow-sm bg-neutral-200">
                <ProjectsCarouselSlide index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls mt-6">
        <div className="embla__dots gap-x-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
