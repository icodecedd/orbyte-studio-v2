import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useAboutAnimation = () => {
  const whatWeBuildRef = useRef(null);
  const whoWeAreRef = useRef(null);
  const whatWeBuildTitleRef = useRef(null);
  const whoWeAreTitleRef = useRef(null);
  const joinUsRef = useRef(null);
  const ourStoryRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const missionTitleRef = useRef(null);
  const visionTitleRef = useRef(null);

  useEffect(() => {
    // Origin section animation
    gsap.fromTo(
      '#origin-story-section',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#origin-story-section',
          start: 'top 80%',
          end: 'top 40%',
          scrub: 0.8,
          toggleActions: 'restart pause reverse pause',
        },
      }
    );

    // Stat section animation
    gsap.fromTo(
      '#stats-section',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#stats-section',
          start: 'top 60%',
          end: 'top 20%',
          scrub: 0.8,
          toggleActions: 'restart pause reverse pause',
        },
      }
    );

    // Leadership section animation
    gsap.fromTo(
      '#leadership-intro-section',
      { opacity: 0 }, // from
      {
        opacity: 4,
        scrollTrigger: {
          trigger: '#leadership-intro-section',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          start: 'top 70%',
          end: 'bottom 20%',
        },
        ease: 'none',
        duration: 3,
      }
    );

    // Leadership photo animation
    gsap.fromTo(
      '#leadership-photos-section',
      { opacity: 0 }, // from
      {
        opacity: 4,
        scrollTrigger: {
          trigger: '#leadership-photos-section',
          start: 'top 80%',
          end: 'bottom 40%',
          scrub: 0.8,
          toggleActions: 'restart pause reverse pause',
        },
        ease: 'none',
        duration: 3,
      }
    );

    // What we build section
    gsap.fromTo(
      '#what-we-build-image',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#what-we-build-image',
          start: 'top 80%',
          end: 'top 40%',
          scrub: 0.8,
          toggleActions: 'restart pause reverse pause',
        },
      }
    );

    // Who we are section
    gsap.fromTo(
      '#who-we-are-image',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#who-we-are-image',
          start: 'top 80%',
          end: 'top 40%',
          scrub: 0.8,
          toggleActions: 'restart pause reverse pause',
        },
      }
    );

    // What we build title
    gsap.fromTo(
      '#what-we-build-header',
      { opacity: 0.1 }, // from
      {
        // to
        opacity: 4,
        scrollTrigger: {
          trigger: '#what-we-build-header',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          start: 'top 80%',
          end: 'bottom 50%',
        },
        ease: 'none',
        duration: 3,
      }
    );

    // Who we are title
    gsap.fromTo(
      '#who-we-are-header',
      { opacity: 0.1 }, // from
      {
        // to
        opacity: 4,
        scrollTrigger: {
          trigger: '#who-we-are-header',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          start: 'top 80%',
          end: 'bottom 50%',
        },
        ease: 'none',
        duration: 3,
      }
    );

    // Join us section animation
    gsap.fromTo(
      '#join-us-cta-section',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#join-us-cta-section',
          start: 'top 80%',
          end: 'top 40%',
          scrub: 0.8,
          toggleActions: 'restart pause reverse pause',
        },
      }
    );

    // Our story section animation
    gsap.fromTo(
      '#our-story-section',
      { opacity: 0 }, // from
      {
        opacity: 4,
        scrollTrigger: {
          trigger: '#our-story-section',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          start: 'top 70%',
          end: 'bottom 20%',
        },
        ease: 'none',
        duration: 3,
      }
    );

    // mission section
    gsap.fromTo(
      '#mission-image',
      { opacity: 0 }, // from
      {
        opacity: 4,
        scrollTrigger: {
          trigger: '#mission-image',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          start: 'top 70%',
          end: 'bottom 20%',
        },
        ease: 'none',
        duration: 3,
      }
    );

    // vision section
    gsap.fromTo(
      '#vision-image',
      { opacity: 0 }, // from
      {
        opacity: 4,
        scrollTrigger: {
          trigger: '#vision-image',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          start: 'top 70%',
          end: 'bottom 20%',
        },
        ease: 'none',
        duration: 3,
      }
    );

    // mission title section
    gsap.fromTo(
      '#mission-header',
      { opacity: 0 }, // from
      {
        opacity: 4,
        scrollTrigger: {
          trigger: '#mission-header',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          start: 'top 70%',
          end: 'bottom 20%',
        },
        ease: 'none',
        duration: 3,
      }
    );

    // vision title section
    gsap.fromTo(
      '#vision-header',
      { opacity: 0 }, // from
      {
        opacity: 4,
        scrollTrigger: {
          trigger: '#vision-header',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          start: 'top 70%',
          end: 'bottom 20%',
        },
        ease: 'none',
        duration: 3,
      }
    );

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};
