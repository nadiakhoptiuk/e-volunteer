// import { useEffect, useLayoutEffect, useState } from 'react';

// const useScrollPosition = () => {
//   const [scrollPosition, setScrollPosition] = useState(null);

//   useLayoutEffect(() => {
//     const stored = window.sessionStorage.getItem('scrollPosition');

//     console.log('stored', JSON.parse(stored));

//     console.log('1');
//     console.log('scrollPosition', scrollPosition);

//     if (JSON.parse(stored) > 0) {
//       console.log('stored > 0');

//       setScrollPosition(JSON.parse(stored));
//     } else {
//       console.log('stored !> 0');
//       setScrollPosition(0);
//     }
//     // setScrollPosition(JSON.parse(stored) ? JSON.parse(stored) : 0);
//     console.log('scrollPosition', scrollPosition);
//   }, []);

//   useLayoutEffect(() => {
//     console.log('2');

//     if (scrollPosition !== null) {
//       setScrollPosition(window.pageYOffset);
//       console.log('upd state scrollPosition', scrollPosition);
//     }
//   }, [scrollPosition]);

//   useEffect(() => {
//     if (scrollPosition === null) return;

//     window.sessionStorage.setItem(
//       'scrollPosition',
//       JSON.stringify(scrollPosition),
//     );

//     console.log('setStorage', scrollPosition);
//   }, [scrollPosition]);

//   useEffect(() => {
//     console.log('3');
//     console.log('scrollPosition', scrollPosition);

//     const updatePosition = () => {
//       setScrollPosition(window.pageYOffset);
//     };

//     window.addEventListener('scroll', updatePosition);
//     updatePosition();

//     return () => {
//       window.removeEventListener('scroll', updatePosition);
//     };
//   }, []);

//   return scrollPosition;
// };

// export default useScrollPosition;
