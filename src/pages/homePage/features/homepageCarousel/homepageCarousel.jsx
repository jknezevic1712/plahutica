import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper";

import { utilsUpdateActiveBlogId } from "../../../../redux/actions/utils/utilsActions";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const HomepageCarousel = ({ imagesArray }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        slidesPerGroup={1}
        navigation={true}
        className="mySwiper"
        effect={"coverflow"}
        pagination={false}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        onSlideChange={(props) => {
          let swiperActiveIndex = props.activeIndex;
          dispatch(utilsUpdateActiveBlogId(swiperActiveIndex));
        }}
      >
        {imagesArray.map((url, blogId) => {
          return (
            <SwiperSlide key={blogId}>
              <Link className="homepage-tile_image_link" to={`/blog/${blogId}`}>
                <img className="homepage-tile_image" src={url} alt="" />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default HomepageCarousel;
