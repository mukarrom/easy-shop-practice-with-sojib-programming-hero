'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/bundle';
import mainSlider from '@/data/mainSlider';
import SingleHeroSlider from './SingleHeroSlider';

const HeroSlider = () => {
	return (
		<div className="main-slider">
			<Swiper
				slidesPerView={1}
				loop
				navigation
				effect="fade"
				autoplay
				modules={[Navigation, EffectFade, Autoplay]}
			>
				{mainSlider.map((slider) => (
					<SwiperSlide key={slider.id}>
						<SingleHeroSlider slider={slider} />
					</SwiperSlide>
				))}
				<SwiperSlide>Slide 1</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default HeroSlider;
