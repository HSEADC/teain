import React from 'react'
import classNames from 'classnames'
import A_Text from '../../Atoms/A_Text/A_Text'
import M_TeaCard from '../../Molecules/M_TeaCard/M_TeaCard'
import './O_TeaType.scss'
import A_Link from '../../Atoms/A_Link/A_Link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const O_TeaType = ({ className, object, index }) => {
  return (
    <div className={classNames('O_TeaType', className)}>
      <A_Text className={'A_CardTitl2'}>{object.translated_name}</A_Text>
      <div>
        <Swiper
          className="C_TeaCards"
          spaceBetween={24} // Расстояние между слайдами
          slidesPerView={1.2} // Количество отображаемых слайдов
          freeMode={true}
          navigation={{
            nextEl: `.A_SliderButtonRight_${index}`,
            prevEl: `.A_SliderButtonLeft_${index}`
          }}
          breakpoints={{
            475: {
              slidesPerView: 1.6,
            },
            744: {
              slidesPerView: 2.3,
            },
            1024: {
              slidesPerView: 3.3,
          },
          1440: {
              slidesPerView: 4,
          },
          1920: {
              slidesPerView: 5,
          },
          }}
          modules={[Navigation]}
          onSlideChange={() => console.log('slide change')}
        >
          {object.tea &&
            object.tea.map((id, index) => {
              return (
                <SwiperSlide key={index}>
                  <M_TeaCard key={index} id={id} />
                </SwiperSlide>
              )
            })}
          <SwiperSlide >

          </SwiperSlide>
        </Swiper>
      </div>
      <div className="W_TextLink">
        {object.description && (
          <A_Text className="A_Text">{object.description}</A_Text>
        )}

        <A_Link href={object.link} blank>
          {object.link_text}
        </A_Link>
      </div>

      <button
        className={`A_SliderButtonRight A_SliderButton A_SliderButtonRight_${index}`}
      >
        <svg
          fill="none"
          height="76"
          viewBox="0 0 101 76"
          width="101"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="50.3093"
            cy="38.5344"
            fill="#F6ECE0"
            rx="49.6726"
            ry="37.3787"
          />
          <ellipse
            cx="50.3093"
            cy="38.5344"
            fill="#F6ECE0"
            id="bg"
            rx="49.6726"
            ry="37.3787"
          />
          <path
            d="M56.8546 44.2464C57.1432 43.4961 57.4607 42.8035 57.807 42.1686C58.1533 41.5048 58.5429 40.8844 58.9757 40.3072H35.7732V36.7576H58.9757C58.5717 36.1804 58.1966 35.5743 57.8502 34.9395C57.5039 34.2757 57.1865 33.5687 56.8979 32.8183H60.1878C61.9771 34.925 63.9395 36.5267 66.075 37.6233V39.4847C63.9395 40.5236 61.9771 42.1109 60.1878 44.2464H56.8546Z"
            fill="#CC8931"
            id="arrow"
          />
          <path
            d="M99.6643 38.4546C99.6643 58.9752 77.5379 75.6104 50.2435 75.6104C22.9492 75.6104 0.822754 58.9752 0.822754 38.4546C0.822754 17.934 22.9492 1.29883 50.2435 1.29883C77.5379 1.29883 99.6643 17.934 99.6643 38.4546Z"
            id="stroke_btn"
            stroke="#CC8931"
            stroke-width="0.721471"
          />
          <path
            d="M56.8546 44.2464C57.1432 43.4961 57.4607 42.8035 57.807 42.1686C58.1533 41.5048 58.5429 40.8844 58.9757 40.3072H35.7732V36.7576H58.9757C58.5717 36.1804 58.1966 35.5743 57.8502 34.9395C57.5039 34.2757 57.1865 33.5687 56.8979 32.8183H60.1878C61.9771 34.925 63.9395 36.5267 66.075 37.6233V39.4847C63.9395 40.5236 61.9771 42.1109 60.1878 44.2464H56.8546Z"
            stroke="#CC8931"
            stroke-width="0.721471"
          />
        </svg>
      </button>
      <button
        className={`A_SliderButtonLeft A_SliderButton A_SliderButtonLeft_${index}`}
      >
        <svg
          fill="none"
          height="76"
          viewBox="0 0 101 76"
          width="101"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="50.3093"
            cy="38.5344"
            fill="#F6ECE0"
            rx="49.6726"
            ry="37.3787"
          />
          <ellipse
            cx="50.3093"
            cy="38.5344"
            fill="#F6ECE0"
            id="bg"
            rx="49.6726"
            ry="37.3787"
          />
          <path
            d="M43.6322 32.6627C43.3436 33.4131 43.0262 34.1057 42.6799 34.7406C42.3336 35.4043 41.944 36.0248 41.5111 36.602L64.7136 36.602L64.7136 40.1516L41.5111 40.1516C41.9151 40.7288 42.2903 41.3348 42.6366 41.9697C42.9829 42.6335 43.3003 43.3405 43.5889 44.0909L40.299 44.0909C38.5098 41.9842 36.5474 40.3825 34.4118 39.2858L34.4118 37.4245C36.5474 36.3855 38.5098 34.7983 40.299 32.6627L43.6322 32.6627Z"
            fill="#CC8931"
            id="arrow"
          />
          <path
            d="M0.822529 38.4546C0.822531 17.934 22.949 1.29882 50.2433 1.29882C77.5376 1.29882 99.6641 17.934 99.6641 38.4546C99.6641 58.9752 77.5376 75.6103 50.2433 75.6103C22.949 75.6103 0.822527 58.9751 0.822529 38.4546Z"
            stroke="#CC8931"
            strokeWidth="0.721471"
          />
          <path
            d="M43.6322 32.6627C43.3436 33.4131 43.0262 34.1057 42.6799 34.7406C42.3336 35.4043 41.944 36.0248 41.5111 36.602L64.7136 36.602L64.7136 40.1516L41.5111 40.1516C41.9151 40.7288 42.2903 41.3348 42.6366 41.9697C42.9829 42.6335 43.3003 43.3405 43.5889 44.0909L40.299 44.0909C38.5098 41.9842 36.5474 40.3825 34.4118 39.2858L34.4118 37.4245C36.5474 36.3855 38.5098 34.7983 40.299 32.6627L43.6322 32.6627Z"
            stroke="#CC8931"
            stroke-width="0.721471"
          />
        </svg>
      </button>
    </div>
  )
}

export default O_TeaType
