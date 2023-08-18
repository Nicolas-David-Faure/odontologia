import React , { useRef , useEffect , useCallback }from 'react'
import styled from 'styled-components'
//redux
import { useSelector } from 'react-redux';
//Images & Svg

import { ReactComponent as ArrowLeft } from './img/iconmonstr-angel-left-thin.svg'
import { ReactComponent as ArrowRight } from './img/iconmonstr-angel-right-thin.svg'

//styles
import './scss/slideshow.scss'


const Slideshow = ( { 
  children = null, 
  controls = false , 
  autoplay = false ,
  speedTransition=500 ,
  speedInterval=1000
  } ) => {
  const mainSlice = useSelector((state)=>state.mainDisplaySlice.value)
  const slideshow = useRef(null);
  const slideContainer = useRef(null)
  
  const nextImage = useCallback(()=>{
    

    if(slideshow.current.children.length > 0){

      const firstElement = slideshow.current.children[0];
      slideshow.current.style.transition = `${speedTransition}ms ease-out all`;

      const slideSize = slideshow.current.children[0].offsetWidth;


      slideshow.current.style.transform = `translateX(-${slideSize}px)`

      const transition = ()=>{
        slideshow.current.style.transition = 'none'
        slideshow.current.style.transform = `translateX(0)`

        slideshow.current.appendChild(firstElement)

        slideshow.current.removeEventListener('transitionend',transition)
      }

      slideshow.current.addEventListener('transitionend', transition)
    }   
  
  
  },[speedTransition]);

  const previusImage =()=>{
    if(slideshow.current.children.length > 0){
      const lastElementIndex = slideshow.current.children.length - 1;
      const lastElement = slideshow.current.children[lastElementIndex];
      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild)

      slideshow.current.style.transition = 'none';
      const slideshowSize = slideshow.current.children[0].offsetWidth;


      slideshow.current.style.transform = `translateX(-${slideshowSize}px)`;
     
      setTimeout(()=>{
       
        slideshow.current.style.transition = `${speedTransition}ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      },40)

    }
  }


  // useEffect(()=>{
  //   if(autoplay){
  //     let interval = null;
  //       interval = setInterval(()=>{
  //             nextImage();
  //       },speedInterval);
        
  //       slideContainer.current.addEventListener('mouseenter',()=>{
  //          clearInterval(interval);
  //       })

  //      slideContainer.current.addEventListener('mouseleave',()=>{
  //             interval = setInterval(()=>{
  //             nextImage(); 
  //         },speedInterval);
  //       })
  //   }

  //     },[ speedInterval , autoplay , nextImage ])
  
  return (
    <section className='slideShow__container'>
      
      <MainContainer ref={slideContainer}>
        <SlideshowContainer ref={slideshow} >
          
            { children }
            
        </SlideshowContainer>
           {controls && <Controles>
              <Button onClick={previusImage}><ArrowLeft /></Button>
              <Button onClick={nextImage} right><ArrowRight /></Button>
            </Controles>}
       
      </MainContainer>
    </section>
  )
}
const MainContainer = styled.div`
  position: relative;
  height: 100%;

`
const SlideshowContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 100%; 
`
const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: ease all .3s ;
  z-index: 9;
  height: 100%;
  position: relative;
    img{
      width: 100%;
      vertical-align: top;
    }
`
const TextSlide = styled.div`
    background: ${props => props.backgroundColor ? props.backgroundColor : 'rgba(0,0,0,0.5)'};
    color: ${props => props.textColor ? props.textColor : '#fff'};
    width: 100%;
    height: 20%;
    padding: 10px 60px;
    position: absolute;
    bottom: 0;
    display: grid;
    place-items: center;
    text-align: center;
    p{
      
      font-size: ${props => props.fontSize ? props.fontSize : '1.5rem'};
    }
    @media screen and (max-width:700px){
      background: rgb(0,0,0);
      position: relative;
    }
`


const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
`

const Controles = styled.div`
    position:absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    pointer-events: none;
`

const Button = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;
   // &:hover{
   //   background: rgba(0,0,0,0.2);
   //   path{
   //     fill: #fff; 
   //   }
   // }
    path {
      filter: ${props=>props.right ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'};
    }
    ${props=>props.right ? 'right:0' : 'left: 0'} 
`
export { Slideshow , Slide , TextSlide };