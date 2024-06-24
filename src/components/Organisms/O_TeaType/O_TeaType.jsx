// import React from 'react'
// import classNames from 'classnames'
// import A_Text from '../../Atoms/A_Text/A_Text'
// import M_TeaCard from '../../Molecules/M_TeaCard/M_TeaCard'
// import 'swiper/swiper-bundle.css'
//
// import { Swiper, SwiperSlide } from 'swiper/react'
// import A_Link from '../../Atoms/A_Link/A_Link'
//
// const O_TeaType = ({ className, items, tea_type }) => {
//   return (
//     <div className={classNames('O_TeaType', className)}>
//       <A_Text className={'A_CardTitl2'}>
//         {tea_type[0].fields.translated_name}
//       </A_Text>
//       <div>
//         <Swiper
//           className="C_TeaCards swiper_1"
//           spacebeetween={24}
//           slidesPerView={4}
//           onSlideChange={() => console.log('slide change')}
//         >
//           {items &&
//             items.map((item, index) => {
//               if (
//                 item.fields.tea_type.includes(tea_type) ===
//                 tea_type[0].fields.name
//               ) {
//                 return null
//               }
//               return (
//                 <SwiperSlide key={index}>
//                   <M_TeaCard
//                     key={index}
//                     top_name={item.fields.top_name}
//                     bottom_name={item.fields.bottom_name}
//                     imgPath={item.fields.image[0].url}
//                   />
//                 </SwiperSlide>
//               )
//             })}
//         </Swiper>
//       </div>
//       <div className="W_TextLink">
//         {tea_type[0].fields.description && (
//           <A_Text className="A_Text">{tea_type[0].fields.description}</A_Text>
//         )}
//
//         <A_Link href={'#'} blank>
//           Рецепты на черном чае
//         </A_Link>
//       </div>
//     </div>
//   )
// }
//
// export default O_TeaType
