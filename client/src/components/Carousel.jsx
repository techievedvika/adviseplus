import Carousel from 'react-bootstrap/Carousel';
import img from '../assets/carousel-1.jpeg'
import cr2 from '../assets/carousel-2.jpeg'
import ButtonComp from './Button';
import img1 from '../assets/carousel/1.jpeg';
import img2 from '../assets/carousel/2.jpeg';
import img3 from '../assets/carousel/3.jpeg';

function CarouselComp() {
  const images = [img1,img2,img3];
  return (
    <Carousel className='w-full'>
      {images.map((a,ind)=>(
        <Carousel.Item
        key={ind}
       className='relative'
      >
      <img  className='w-full lg:max-h-1/5 max-[440px]:h-[400px]  opacity-60' src={a}/>
        <Carousel.Caption
           style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            
          }}
          className='flex flex-col px-6 lg:px-24 max-[440px]:justify-center '
        >
          <p className='uppercase text-xl max-[440px]:text-center max-[440px]:hidden text-start ms-20 font-medium tracking-[0.2rem] ext-start lg:mt-16'>Business Consulting.</p>
          <p className='text-2xl lg:text-7xl max-[440px]:text-2xl font-bold  lg:w-1/2  my-2'>Making Difference Grow Your Business With Modern Ideas</p>
          <div className='flex max-[440px]:items-center max-[440px]:flex-col max-[440px]:gap-1  gap-3 my-3'>
            <ButtonComp
              text='Get Started Now'
              color1='primaryone'
              color2='primarytwo'
              color3='white'
              textcolor='white'
              textafter='black'
            />
            <ButtonComp
              text='Our Services'
              color1='white'
              color2='primaryone'
              color3='primaryone'
              textcolor='black'
              textafter='white'
            />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
      
    
      
    </Carousel>
  );
}

export default CarouselComp;