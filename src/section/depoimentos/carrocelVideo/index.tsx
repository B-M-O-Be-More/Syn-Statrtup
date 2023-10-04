// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';


// const videoData = [
//     { id: 1, src: 'https://www.youtube.com/watch?v=hOQvnWK8Lsc&list=PLW6eKBOgSmorku1sNr4tkYBZDn8Iiljaw&index=15&ab_channel=HumbertoGessinger' },
//     { id: 2, src: 'https://www.youtube.com/watch?v=5Mfo5dQ0qkQ&ab_channel=HumbertoGessinger' },
//     { id: 3, src: 'https://www.youtube.com/watch?v=mL2Evq3ge5A&ab_channel=NandoReis-Topic' },
//     { id: 4, src: 'https://www.youtube.com/watch?v=EpgM4hc1Viw&ab_channel=EngenheirosdoHawaii-Topic' },

// ];



// const VideoCarousel = () => {
//     const swiperParams = {
//         slidesPerView: 3,
//         spaceBetween: 10, // Espaço entre os slides 
//         loop: true, // Para criar um carrossel infinito
//         autoplay: {
//             delay: 3000, // Tempo de exibição de cada vídeo em milissegundos 
//             disableOnInteraction: true, // Permite que o carrossel continue após interação do usuário
//         },
//     };

//     return (
//         <Swiper {...swiperParams}>
//             {videoData.map((video) => (
//                 <SwiperSlide key={video.id}>
                  
//                     <iframe width="420" height="315"
//                         src={video.src}>
//                     </iframe>

//                 </SwiperSlide>
//             ))}
//         </Swiper>
//     );
// };

// export default VideoCarousel;
