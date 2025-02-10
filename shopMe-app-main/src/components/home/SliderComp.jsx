import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div className='my-10'>
        <Slider {...settings}>
            <div className='!flex sm:flex-row flex-col justify-center items-center bg-gray-100 border'>
                <div className='flex flex-col gap-6 px-10 sm:py-0 py-10'>
                    <div className='font-bold sm:text-5xl text-3xl'>Nike AirForce 1</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatem porro repudiandae ex? Voluptas labore, mollitia consectetur quaerat quam iste fugiat enim tenetur magni, asperiores vero reiciendis ut optio soluta.</div>
                    <div className='border rounded-3xl p-2 text-2xl w-[200px] cursor-pointer
                        flex justify-center items-center bg-gray-200 hover:bg-gray-300'>İncele</div>
                </div>
                <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_300,c_limit/f8314e6f-5240-4579-b0d9-8b61072be3f1/resmi-nike-sitesi.jpg" alt="" />
            </div>
            <div className='!flex sm:flex-row flex-col justify-center items-center bg-gray-100 border'>
                <div className='flex flex-col gap-6 px-10 sm:py-0 py-10'>
                    <div className='font-bold sm:text-5xl text-3xl'>Nike Blazor</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatem porro repudiandae ex? Voluptas labore, mollitia consectetur quaerat quam iste fugiat enim tenetur magni, asperiores vero reiciendis ut optio soluta.</div>
                    <div className='border rounded-3xl p-2 text-2xl w-[200px] cursor-pointer
                        flex justify-center items-center bg-gray-200 hover:bg-gray-300'>İncele</div>
                </div>
                <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_300,c_limit/35b4e077-9f6e-44cd-a76e-a43d93588f46/resmi-nike-sitesi.jpg" alt="" />
            </div>
           
        </Slider>
    </div>
  )
}

export default SliderComp