import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, EffectFade, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

import About from './About';
import KeepCaseContent from './KeepCaseContent';
import BuyKeepCase from './BuyKeepCase';
import DotNavigation from "./DotNavigation";

SwiperCore.use([Mousewheel, EffectFade, Navigation, Pagination]);

const KeepCaseSlides = props => {
    const { custom } = props.match.params;
    return (
        <Swiper
            direction={'vertical'}
            mousewheel={true}
            spaceBetween={0}
            slidesPerView={1}
            effect={'slide'}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <KeepCaseContent custom={custom} />
            </SwiperSlide>
            <SwiperSlide>
                <About />
            </SwiperSlide>
            <SwiperSlide>
                <BuyKeepCase />
            </SwiperSlide>
        </Swiper>
    );
};

export default KeepCaseSlides;