import React from 'react'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const slides = [
    {
        title: "Yeni sezon parçaları keşfet",
        description: "Günlük stilini tamamlayacak özenle seçilmiş ürünleri tek ekranda incele, filtrele ve favorilerine ekle.",
        cta: "Ürünleri incele",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Teknoloji ve stil bir arada",
        description: "Elektronikten aksesuara kadar farklı kategorileri hızlı arama ve sıralama seçenekleriyle keşfet.",
        cta: "Kategorilere göz at",
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    },
];

const SliderComp = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div>
        <Slider {...settings}>
            {slides.map((slide) => (
                <div key={slide.title}>
                    <div className='grid min-h-[420px] overflow-hidden rounded-[32px] border border-stone-200 bg-stone-900 text-white lg:grid-cols-[1fr_0.9fr]'>
                        <div className='flex flex-col justify-center gap-6 px-8 py-10 lg:px-14'>
                            <div className='inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-200'>
                                Öne çıkan koleksiyon
                            </div>
                            <div className='max-w-xl text-3xl font-black leading-tight sm:text-5xl'>
                                {slide.title}
                            </div>
                            <div className='max-w-xl text-sm leading-7 text-stone-300 sm:text-base'>
                                {slide.description}
                            </div>
                            <Link
                                to="/"
                                className='inline-flex w-fit items-center justify-center rounded-2xl bg-white px-5 py-3 text-base font-bold text-stone-900 transition hover:bg-amber-200'
                            >
                                {slide.cta}
                            </Link>
                        </div>
                        <div className='relative min-h-[280px]'>
                            <img src={slide.image} alt={slide.title} className='h-full w-full object-cover' />
                            <div className='absolute inset-0 bg-gradient-to-r from-transparent to-stone-950/35' />
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
  )
}

export default SliderComp
