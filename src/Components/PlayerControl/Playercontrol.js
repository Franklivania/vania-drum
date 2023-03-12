import React, {useState} from 'react'
import './Playercontrol.scss'

const Playercontrol = () => {
    const [isPlaying, setIsPlaying] = useState([])
    const [isPrevious, setIsPrevious] = useState([])
    const [isNext, setIsNext] = useState([])

    function handlePlaying(){
        setIsPlaying(!isPlaying)
    }
    
    function handlePrevious(){
        setIsPrevious(!isPrevious)
    }
    function handleNext(){
        setIsNext(!isNext)
    }

  return (
    <section className='playercontrol'>
        <div className="top">

            <aside className="left">
                <button>
                    <i class="fa-solid fa-heart"></i>
                </button>
                <button>
                    <i class="fa-solid fa-music"></i>
                </button>
                <button>
                    <i class="fa-solid fa-up-right-and-down-left-from-center"></i>            
                </button>
            </aside>

            <aside className="center">
                <button onClick={handlePrevious}>
                    <i class="fa-solid fa-backward fa-2x"></i>
                </button>

                <button onClick={handlePlaying}>
                    <i className={`fa-solid fa-${ isPlaying ? 'play' : 'pause' } fa-3x`}></i>
                </button>

                <button onClick={handleNext}>
                    <i class="fa-solid fa-forward fa-2x"></i>
                </button>
            </aside>

            <aside className="right">
                <button>
                    <i class="fa-solid fa-volume-xmark"></i>
                </button>

                <input type="range" name="range" id="range" />

                <button>
                    <i class="fa-solid fa-volume"></i>                
                </button>

            </aside>
        </div>

        <div className="bottom">

        </div>
    </section>
  )
}

export default Playercontrol