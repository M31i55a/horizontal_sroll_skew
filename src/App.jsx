
// import React, { useEffect } from 'react';
// import hoverEffect from 'hover-effect';
// import gsap from 'gsap';
// import './App.css';
// import image1 from './image1.jpg'; // Adjust path to your first image
// import image2 from './image2.jpg'; // Adjust path to your second image
// import image3 from './image3.jpg'; // Adjust path to your third image
// import image4 from './image4.jpg'; // Adjust path to your fourth image
// import image5 from './image5.jpg'; // Adjust path to your fifth image
// import image6 from './image6.jpg'; // Adjust path to your sixth image
// import image7 from './image7.jpg'; // Adjust path to your seventh image
// import image8 from './image8.webp'; // Adjust path to your eighth image
// import image9 from './image9.jpg'; // Adjust path to your ninth image
// import image10 from './image10.webp'; // Adjust path to your tenth image
// import displacementImage from './displacement.jpg'; // Adjust path to your displacement image

// function App() {
//   const slidesData = [
//     { image: image1, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus veniam nam sapiente ea quas, ipsam quam. Eaque molestias laudantium incidunt ipsa quisquam itaque, eligendi, ad voluptatum ex eum placeat ab, expedita odit soluta autem quibusdam repudiandae commodi dolorem. Est!' },
//     { image: image2, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus veniam nam sapiente ea quas, ipsam quam. Eaque molestias laudantium incidunt ipsa quisquam itaque, eligendi, ad voluptatum ex eum placeat ab, expedita odit soluta autem quibusdam repudiandae commodi dolorem. Est!' },
//     { image: image3, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus veniam nam sapiente ea quas, ipsam quam. Eaque molestias laudantium incidunt ipsa quisquam itaque, eligendi, ad voluptatum ex eum placeat ab, expedita odit soluta autem quibusdam repudiandae commodi dolorem. Est!' },
//     { image: image4, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus veniam nam sapiente ea quas, ipsam quam. Eaque molestias laudantium incidunt ipsa quisquam itaque, eligendi, ad voluptatum ex eum placeat ab, expedita odit soluta autem quibusdam repudiandae commodi dolorem. Est!' },
//     { image: image5, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus veniam nam sapiente ea quas, ipsam quam. Eaque molestias laudantium incidunt ipsa quisquam itaque, eligendi, ad voluptatum ex eum placeat ab, expedita odit soluta autem quibusdam repudiandae commodi dolorem. Est!' },
//     { image: image6, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus veniam nam sapiente ea quas, ipsam quam. Eaque molestias laudantium incidunt ipsa quisquam itaque, eligendi, ad voluptatum ex eum placeat ab, expedita odit soluta autem quibusdam repudiandae commodi dolorem. Est!' },
//     { image: image7, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus veniam nam sapiente ea quas, ipsam quam. Eaque molestias laudantium incidunt ipsa quisquam itaque, eligendi, ad voluptatum ex eum placeat ab, expedita odit soluta autem quibusdam repudiandae commodi dolorem. Est!' },
//     { image: image8, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus veniam nam sapiente ea quas, ipsam quam. Eaque molestias laudantium incidunt ipsa quisquam itaque, eligendi, ad voluptatum ex eum placeat ab, expedita odit soluta autem quibusdam repudiandae commodi dolorem. Est!' },
//     { image: image9, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus veniam nam sapiente ea quas, ipsam quam. Eaque molestias laudantium incidunt ipsa quisquam itaque, eligendi, ad voluptatum ex eum placeat ab, expedita odit soluta autem quibusdam repudiandae commodi dolorem. Est!' },
//     { image: image10, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus veniam nam sapiente ea quas, ipsam quam. Eaque molestias laudantium incidunt ipsa quisquam itaque, eligendi, ad voluptatum ex eum placeat ab, expedita odit soluta autem quibusdam repudiandae commodi dolorem. Est!' },
//   ];

//   useEffect(() => {
//     let target = 0;
//     let current = 0;
//     let ease = 0.075;
//     let lastActiveSlide = 1;
//     let lastTarget = 0;
//     let scrollSpeed = 0;

//     const slider = document.querySelector('.slider');
//     const sliderWrapper = document.querySelector('.slider-wrapper');
//     const markerWrapper = document.querySelector('.marker-wrapper');
//     const activeSlide = document.querySelector('.active-slide');
//     const slides = document.querySelectorAll('.slide');

//     let maxScroll = sliderWrapper.offsetWidth - window.innerWidth;

//     // Initialize hover-effect for each slide image
//     slides.forEach((slide, index) => {
//       const imageDiv = slide.querySelector('.image');
//       new hoverEffect({
//         parent: imageDiv,
//         intensity: 0.8,
//         image1: slidesData[index].image, // Same image for both
//         image2: slidesData[9-index].image, // Same image for both
//         displacementImage: displacementImage,
//         speedIn: 2,
//         speedOut: 2,
//       });
//     });

//     function lerp(start, end, factor) {
//       return start + (end - start) * factor;
//     }

//     function updateActiveSliderNumber() {
//       const viewportCenter = window.innerWidth / 2;
//       let closestSlideIndex = 1;
//       let minDistance = Infinity;

//       slides.forEach((slide, index) => {
//         const slideRect = slide.getBoundingClientRect();
//         const slideCenter = slideRect.left + slideRect.width / 2;
//         const distance = Math.abs(viewportCenter - slideCenter);

//         if (distance < minDistance) {
//           minDistance = distance;
//           closestSlideIndex = index + 1;
//         }

//         // Apply scale to the closest slide, reset others
//         gsap.to(slide, {
//           scale: distance < slideRect.width / 2 ? 1.23 : 1,
//           duration: 1,
//           ease: 'power2.out',
//         });

//         // Get the text element within the slide
//         const textElement = slide.querySelector('.text');

//         // Calculate text movement (1.05 times faster than the slider)
//         const textMove = current * 1.05; // Corrected to 1.05
//         gsap.set(textElement, {
//           x: -textMove, // Move text 1.05 times faster
//         });

//         // Calculate opacity based on text element's center relative to viewport center
//         const textRect = textElement.getBoundingClientRect();
//         const textCenter = textRect.left + textRect.width / 2;
//         const textDistance = Math.abs(viewportCenter - textCenter);
//         const maxDistanceForOpacity = textRect.width / 2;
//         const opacity = gsap.utils.clamp(
//           0.4,
//           1,
//           1 - (textDistance / maxDistanceForOpacity) * (1 - 0.4)
//         );

//         gsap.to(textElement, {
//           opacity: opacity,
//           duration: 0.97,
//           ease: 'power2.out',
//         });
//       });

//       if (closestSlideIndex !== lastActiveSlide) {
//         activeSlide.textContent = `${closestSlideIndex + 2014}`;
//         lastActiveSlide = closestSlideIndex;
//       }
//     }

//     function update() {
//       current = lerp(current, target, ease);

//       scrollSpeed = lerp(scrollSpeed, target - lastTarget, 0.1);
//       lastTarget = target;

//       const maxSkew = 23;
//       const skewX = Math.min(Math.max(scrollSpeed * 0.2, -maxSkew / 2), maxSkew);

//       gsap.set('.slider-wrapper', {
//         x: -current,
//         skewX: skewX,
//       });

//       let moveRatio = current / maxScroll;
//       let markerMaxMove = window.innerWidth - markerWrapper.offsetWidth - 170;
//       let markerMove = 70 + moveRatio * markerMaxMove;

//       gsap.set('.marker-wrapper', {
//         x: markerMove,
//       });

//       updateActiveSliderNumber();

//       requestAnimationFrame(update);
//     }

//     const handleResize = () => {
//       maxScroll = sliderWrapper.offsetWidth - window.innerWidth;
//     };

//     const handleWheel = (e) => {
//       target += e.deltaY;
//       target = Math.max(0, target);
//       target = Math.min(maxScroll, target);
//     };

//     window.addEventListener('resize', handleResize);
//     window.addEventListener('wheel', handleWheel);
//     update();

//     // Cleanup event listeners on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       window.removeEventListener('wheel', handleWheel);
//     };
//   }, []);

//   return (
//     <>
//       <nav>
//         <div>
//           <div>ARBC</div>
//         </div>
//       </nav>

//       <div className="marker-wrapper">
//         <div className="marker">
//           <div className="grab"></div>
//         </div>
//         <div className="active-slide">2015</div>
//       </div>

//       <div className="slider">
//         <div className="slider-wrapper">
//           {slidesData.map((slide, index) => (
//             <div className="slide" key={index}>
//               <div className="image">
//                 {/* <img src={slide.image} alt="" /> */}
//               </div>
//               <div className="text">{slide.text}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;


import React, { useEffect, useRef } from 'react';
import hoverEffect from 'hover-effect';
import gsap from 'gsap';
import './App.css';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';
import image7 from './image7.jpg';
import image8 from './image8.webp';
import image9 from './image9.jpg';
import image10 from './image10.webp';
import video1 from './video1.mp4'; // Adjust paths to your videos
import video2 from './video2.mp4';
import video3 from './video3.mp4';
import video4 from './video1.mp4';
import video5 from './video2.mp4';
import video6 from './video3.mp4';
import video7 from './video1.mp4';
import video8 from './video2.mp4';
import video9 from './video3.mp4';
import video10 from './video1.mp4';
import displacementImage from './displacement.jpg';

function App() {
  const slidesData = [
    { image: image1, video: video1, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus veniam nam sapiente ea quas, ipsam quam. Eaque molestias laudantium incidunt ipsa quisquam itaque, eligendi, ad voluptatum ex eum placeat ab, expedita odit ' },
    { image: image2, video: video2, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus veniam nam sapiente ea quas, ipsam quam. Eaque molestias laudantium incidunt ipsa quisquam itaque, eligendi, ad voluptatum ex eum placeat ab, expedita odit soluta autem quibusdam ' },
    { image: image3, video: video3, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus veniam nam sapiente ea quas, ipsam quam. Eaque molestias laudantium incidunt ipsa quisquam itaque, eligendi, ad voluptatum ex eum placeat ' },
    { image: image4, video: video4, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus veniam nam sapiente ea quas, ipsam quam. Eaque molestias laudantium incidunt ipsa quisquam itaque, eligendi, ad voluptatum ex eum placeat ab, expedita odit soluta autem ' },
    { image: image5, video: video5, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus veniam nam sapiente ea quas, ipsam quam. Eaque molestias laudantium incidunt ipsa quisquam itaque, eligendi, ad voluptatum ex eum placeat ab,' },
    { image: image6, video: video6, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus veniam nam sapiente ea quas, ipsam quam. Eaque molestias laudantium incidunt ipsa quisquam itaque, eligendi, ad voluptatum ex eum placeat ab, expedita odit soluta autem quibusdam ' },
    { image: image7, video: video7, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus veniam nam sapiente ea quas, ipsam quam. Eaque molestias laudantium incidunt ipsa quisquam itaque, eligendi, ad voluptatum ex eum placeat ab, expedita odit soluta autem quibusdam ' },
    { image: image8, video: video8, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus veniam nam sapiente ea quas, ipsam quam. Eaque molestias laudantium incidunt ipsa quisquam itaque, eligendi, ad voluptatum ex eum placeat ab, expedita odit soluta autem quibusdam repudiandae commodi ' },
    { image: image9, video: video9, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus veniam nam sapiente ea quas, ipsam quam. Eaque molestias laudantium incidunt ipsa quisquam itaque, eligendi, ad voluptatum ex eum placeat ab, expedita odit soluta autem ' },
    { image: image10, video: video10, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus veniam nam sapiente ea quas, ipsam quam. Eaque molestias laudantium incidunt ipsa quisquam itaque, eligendi, ad voluptatum ex eum placeat ab, expedita odit soluta autem quibusdam repudiandae commodi dolorem. Est!' },
  ];

  const videoRefs = useRef([]); // Store references to video elements

  useEffect(() => {
    let target = 0;
    let current = 0;
    let ease = 0.075;
    let lastActiveSlide = 1;
    let lastTarget = 0;
    let scrollSpeed = 0;

    const slider = document.querySelector('.slider');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const markerWrapper = document.querySelector('.marker-wrapper');
    const activeSlide = document.querySelector('.active-slide');
    const slides = document.querySelectorAll('.slide');

    let maxScroll = sliderWrapper.offsetWidth - window.innerWidth;

    // Initialize hover effect for images and handle video playback
    slides.forEach((slide, index) => {
      const imageDiv = slide.querySelector('.image');
      const videoElement = videoRefs.current[index];

      // Apply hover-effect only to images
      new hoverEffect({
        parent: imageDiv,
        intensity: 0.8,
        image1: slidesData[index].image,
        image2: slidesData[index].image, // Use same image to avoid displacement with video
        displacementImage: displacementImage,
        speedIn: 4,
        speedOut: 4,
      });

      // Handle hover to show video
      imageDiv.addEventListener('mouseenter', () => {
        videoElement.style.opacity = 1;
        videoElement.style.transitionDelay = '0.35s';
        videoElement.play();
      });

      imageDiv.addEventListener('mouseleave', () => {
        videoElement.style.opacity = 0;
        videoElement.pause();
        videoElement.currentTime = 0; // Reset video to start
      });
    });

    function lerp(start, end, factor) {
      return start + (end - start) * factor;
    }

    function updateActiveSliderNumber() {
      const viewportCenter = window.innerWidth / 2;
      let closestSlideIndex = 1;
      let minDistance = Infinity;

      slides.forEach((slide, index) => {
        const slideRect = slide.getBoundingClientRect();
        const slideCenter = slideRect.left + slideRect.width / 2;
        const distance = Math.abs(viewportCenter - slideCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestSlideIndex = index + 1;
        }

        gsap.to(slide, {
          scale: distance < slideRect.width / 2 ? 1.23 : 1,
          duration: 1,
          ease: 'power2.out',
        });

        const textElement = slide.querySelector('.text');

        const textRect = textElement.getBoundingClientRect();
        const textCenter = textRect.left + textRect.width / 2;
        const textDistance = Math.abs(viewportCenter - textCenter);
        const maxDistanceForOpacity = textRect.width / 2;
        const opacity = gsap.utils.clamp(
          0.4,
          1,
          1 - (textDistance / maxDistanceForOpacity) * (1 - 0.4)
        );

        gsap.to(textElement, {
          opacity: opacity,
          duration: 0.97,
          ease: 'power2.out',
        });
      });

      if (closestSlideIndex !== lastActiveSlide) {
        activeSlide.textContent = `${closestSlideIndex + 2014}`;
        lastActiveSlide = closestSlideIndex;
      }
    }

    function update() {
      current = lerp(current, target, ease);
      scrollSpeed = lerp(scrollSpeed, target - lastTarget, 0.1);
      lastTarget = target;

      const maxSkew = 23;
      const skewX = Math.min(Math.max(scrollSpeed * 0.2, -maxSkew / 2), maxSkew);

      gsap.set('.slider-wrapper', {
        x: -current,
        skewX: skewX,
      });

      let moveRatio = current / maxScroll;
      let markerMaxMove = window.innerWidth - markerWrapper.offsetWidth - 170;
      let markerMove = 70 + moveRatio * markerMaxMove;

      gsap.set('.marker-wrapper', { x: markerMove });

      updateActiveSliderNumber();
      requestAnimationFrame(update);
    }

    const handleResize = () => {
      maxScroll = sliderWrapper.offsetWidth - window.innerWidth;
    };

    const handleWheel = (e) => {
      target += e.deltaY;
      target = Math.max(0, target);
      target = Math.min(maxScroll, target);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('wheel', handleWheel);
    update();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <>
      <nav>
        <div>
          <div>ARBC</div>
        </div>
      </nav>

      <div className="marker-wrapper">
        <div className="marker">
          <div className="grab"></div>
        </div>
        <div className="active-slide">2015</div>
      </div>

      <div className="slider">
        <div className="slider-wrapper">
          {slidesData.map((slide, index) => (
            <div className="slide" key={index}>
              <div className="image">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={slide.video}
                  muted
                  loop
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0,
                    transition: 'opacity 0.5s ease-in-out',
                  }}
                />
              </div>
              <div className="text">{slide.text}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;