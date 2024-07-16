import React , { useEffect , useState}from 'react'
//REDUX
import { useSelector } from 'react-redux';
//DATA
import treatments from '../../data/treatments';
//STYLES
import './scss/treatmentDescription.scss';
import TreatmentNav from './TreatmentNav';

const TreatmentDescription = () => {
  const treatmentState = useSelector(store=>store.treatmentSlice.treatmentIndexToDisplay)

  const [imagen, setImagen] = useState('dental-examination.jpg');

  useEffect(() => {
    const cargarImagen = async () => {
      try {
        const imagenDinamica = await import(`../../../../../assets/img/treatments/${treatments[treatmentState].image}`);
        setImagen(imagenDinamica.default);
      } catch (error) {
        console.error('Error al cargar la imagen:', error);
      }
    };

    cargarImagen();
  }, [treatmentState]);

  if (!imagen) {
    return <div>Cargando imagen...</div>;
  }

  console.log(treatmentState)
  return (
    <section className='treatmentDescription__main'>
        <TreatmentNav />
      <article className='treatmentDescription__article'>

        <div className='treatmentDescription__cont_title'>
          <h2 className='treatmentDescription__title'>
              {treatmentState !== null ? 
             treatments[treatmentState].title : "ES NULO"}</h2>

            <p className='treatmentDescription__description'>
              {treatmentState !== null ?
             treatments[treatmentState].description : "ES NULO"}</p>
        </div>
        <figcaption className='treatmentDescription__cont_image'>
             <img className='treatmentDescription__image' 
           src={imagen} alt={imagen} />
        </figcaption>
        </article>
    </section>
  )
}

export default TreatmentDescription
