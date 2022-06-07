import React from 'react';
import styles from './Cards.module.scss';

const Cards = ({ results }) => {

    let display;

    if(results){
        display = results.map(({id, name, image, location, status}) => (
            <div 
            key={id}
            className="col-4 position-relative mb-4"
            >
                    <div className={styles.cards}>
                        <img 
                        className={`${styles.img} img-fluid`}
                        src={ image } 
                        alt={ name } 
                        />

                        <div style={{
                            padding: '10px'
                        }} className="content">
                            <div className="fs-4 fw-bold mb-4">
                                { name }
                            </div>
                            <div className=''>
                                <div className="fs-6">
                                    Last Location
                                </div>
                                <div className='fs-6'>
                                    { location.name }
                                </div>
                            </div>
                        </div>
                        {
                            ( () => {
                                if(status === 'Dead') {
                                    return(
                                        <div className={`${styles.badge} badge bg-danger position-absolute`}>
                                    { status }
                                    </div>
                                    )
                                } else if(status === 'Alive') {
                                    return (
                                    <div className={`${styles.badge} badge bg-success position-absolute`}>
                                    { status }
                                    </div>
                                    )
                                } else{
                                    return (
                                    <div className={`${styles.badge} badge bg-secondary position-absolute`}>
                                    { status }
                                    </div>
                                    )
                                }
                            })()
                        }
                       
                    </div>
            </div>
        ))
    } else {
        display = 'No Characters Found';
    }

  return (
    <div className='row'>
        { display }
    </div>
  )
}

export default Cards