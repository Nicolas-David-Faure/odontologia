import React , { useState }from 'react'
//Framer motion
import { motion } from 'framer-motion'
//styles
import './scss/divisor3.scss'
//img
import imgTools from '../../../../../assets/img/inicio/home/main/img-tool.jpg'
//icons
import arrowDown from '../../../../../assets/img/inicio/home/main/icons/iconmonstr-arrow-31.svg'
const Divisor3 = () => {
    const [animateArrow , setAnimateArrow] = useState(false) 
    const [showTitle, setShowTitle] = useState(false)
   const transformArrow = {
    arrowUp: {
        transform: 'rotate(180deg)',
        transition:{
            duration: 0.5,
            type:"spring",
            bounce:0.5
          }

    },

    arrowDown:{
        transform:'rotate(0deg)',
        transition:{
            duration: 0.5,
            type:"spring",
            bounce:0.5
          }
    }
   }
  return (
    <motion.section 
    animate={animateArrow ? {y: '-87%'} : {y:'0%'}}
    className='divisor3__container'>
      <motion.figure className='divisor3__container__branch_img-description'>
          <img src={imgTools} alt='This images shows dentist tools'/>

          <motion.div
           className='divisor3__cont_title'
           initial={{y:20}}
           animate={showTitle && (animateArrow == false) ? //if
                    {
                      color:'#000000',
                      y:0,
                      transition: {
                      duration:.3,
                        type:'spring'
                      }} 
                      : //else
                        {
                          color:'transparent',
                          y:20,transition:{duration:.3,type:'spring'}}
                      }
              >
              <h3 className='divisor3__title'>Descripcion de herramientas</h3>
          </motion.div>

          <div className='divisor3__cont_btn_arrowIcon'>
            
            <motion.button
              onClick={()=>setAnimateArrow(!animateArrow)}
              initial={{transform:'rotate(180deg)' }}
              animate={animateArrow ? 'arrowUp' : 'arrowDown'}
              variants={transformArrow}
              className='divisor3__btn_arrowIcon'> 

               <motion.img 
                  whileHover={{scale:1.5}}
                  onHoverStart={()=>{setShowTitle(true)}}
                  onHoverEnd={()=>{setShowTitle(false)}}
                  src={arrowDown} />
            </motion.button>
          </div>
      </motion.figure>
        
    <motion.div className='divisor3__container_description'>
      <motion.p className='divisor3__description'>
          En nuestra odontología, nos enorgullece trabajar con las mejores marcas y
          herramientas del mercado. Sabemos que la excelencia en el cuidado dental 
          comienza con la elección adecuada de equipos y materiales. Es por eso que
          nos aseguramos de utilizar únicamente productos de calidad, respaldados 
          por marcas reconocidas en la industria.
      </motion.p>
          <br />
      <p className='divisor3__description'>
          Trabajamos con líderes en el campo odontológico para brindar
          a nuestros pacientes una experiencia superior. Nuestro compromiso 
          con la excelencia se refleja en cada aspecto de nuestro trabajo, 
          desde los procedimientos rutinarios hasta las intervenciones más 
          complejas. Nos esforzamos por garantizar que cada paciente
          reciba un tratamiento de primera clase.               
      </p> 
          <br />
      <p className='divisor3__description'>
          Nuestras herramientas de vanguardia nos permiten realizar
          diagnósticos precisos y tratamientos eficientes.
          Utilizamos tecnología de punta en nuestras consultas
          para garantizar resultados óptimos. Además, trabajamos
          con las últimas innovaciones en materiales dentales,
          lo que nos permite ofrecer restauraciones duraderas y estéticamente atractivas.
      </p>    
          <br />
      <p className='divisor3__description'>
          Al colaborar con las mejores marcas y herramientas, 
          nos aseguramos de brindar a nuestros pacientes una 
          atención de alta calidad. Valoramos su confianza en
          nosotros y nos esforzamos por superar sus expectativas 
          en cada visita. Nuestro objetivo es ayudarlo a lograr una 
          sonrisa saludable y radiante, utilizando lo mejor que la
          odontología moderna tiene para ofrecer.
      </p>
    </motion.div>
  </motion.section>
  )
}

export default Divisor3
