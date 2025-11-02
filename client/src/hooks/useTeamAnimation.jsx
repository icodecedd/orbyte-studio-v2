import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export const useTeamAnimation = () => {
  useEffect(() => {
    gsap.fromTo(
      '#core-team',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#core-team',
          start: 'top 80%',
          end: 'top 40%',
          scrub: 0.8,
          toggleActions: 'restart pause reverse pause',
        },
      }
    );

    gsap.fromTo(
      '#bsa-ojts',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#bsa-ojts',
          start: 'top 80%',
          end: 'top 40%',
          scrub: 0.8,
          toggleActions: 'restart pause reverse pause',
        },
      }
    );

    gsap.fromTo(
      '#bsentrep-ojts',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#bsentrep-ojts',
          start: 'top 80%',
          end: 'top 40%',
          scrub: 0.8,
          toggleActions: 'restart pause reverse pause',
        },
      }
    );
    const mm = gsap.matchMedia();

    // Default animation for larger screens (laptop, desktop)
    mm.add('(min-width: 768px)', () => {
      gsap.fromTo(
        '#join-us',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#join-us',
            start: 'top 85%',
            end: 'top 35%',
            scrub: 0.5,
            toggleActions: 'restart pause reverse pause',
          },
        }
      );
    });

    // Animation for mobile screens
    mm.add('(max-width: 767px)', () => {
      gsap.fromTo(
        '#join-us',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#join-us',
            start: 'top 100%',
            end: 'top 50%',
            scrub: 0.3,
            toggleActions: 'restart pause reverse pause',
          },
        }
      );
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <div>useTeamAnimation</div>;
};
