import { useEffect } from 'react';

const observerCallback: IntersectionObserverCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
};

export default function useFadeInScroll() {
  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in');

    const fadeInOptions: IntersectionObserverInit = {
      threshold: 0.5,
    };

    const appearOnScroll = new IntersectionObserver(
      observerCallback,
      fadeInOptions,
    );

    faders.forEach((fader) => appearOnScroll.observe(fader));
  }, []);
}

export function useSlideInOnScroll() {
  useEffect(() => {
    const sliders = document.querySelectorAll('.slide-in');

    const slideInOptions: IntersectionObserverInit = {
      threshold: 0,
    };

    const appearOnScroll = new IntersectionObserver(
      observerCallback,
      slideInOptions,
    );

    sliders.forEach((slider) => appearOnScroll.observe(slider));
  }, []);
}
