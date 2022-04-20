import React from 'react';
import type { Hits } from './types';
import ReactTooltip from 'react-tooltip';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




interface Props{
    hits: Hits[];
}
//Customized arrows for slick-slider
const SampleNextArrow = (props : any) =>{
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black",marginRight: "1rem" }}
        onClick={onClick}
      />
    );
}
const SamplePrevArrow = (props : any) =>{
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black",marginLeft: "1rem",zIndex:"99" }}
        onClick={onClick}
      />
    );
  }



export const ImageList: React.FC<Props> = ({ hits }) => {

    const [openModal, setOpenModal] = React.useState({open:false,idx:1});

   

    

    const SimpleSlider = (props:{ index:number}) => {

      
    
        const settings = {
          
          infinite: true,
          speed: 500,
          slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            fade: true,
            initialSlide:props.index
            
        }
        return (
          <>
            
            <Slider {...settings}>
                    {hits.map((hit, img) =>
                        
                            
                            <img className="w-full h-96 object-cover py-5"
                                src={hit.webformatURL}
                                key={`img-list-${img}`}
                                alt={hit.type} />
                        
                       )}
                       
            </Slider>
          </>
        );
      
    }

    

    
return (
        <>
    


            <section id="photos" className="my-5 grid grid-cols-1 md:grid-cols-4 gap-4">
               
            {hits.map((hit, idx) => <div className="grid grid-cols-1 " key={`img-list-${idx}`}>
                    <button onClick={() => setOpenModal({open:true,idx:idx})}>
                    <img className="w-full h-64 object-cover" src={hit.webformatURL} alt={hit.tags}/>
                    </button>
              
                            
                            
                                <div className="w-full px-4 mt-4 mb-4 grid  grid-cols-3 md:grid-cols-1 xl:grid-cols-3">
                                    {hit.userImageURL ? (
                                        <>
                                            <div className="col-span-1 px-4 md:mb-4 mb-0 lg:mb-0 flex items-center justify-center">
                                            <img src={hit.userImageURL}
                                            alt={hit.type}
                                            className="shadow rounded-full w-12  h-12  align-middle border-none"
                                                data-tip={hit.user}
                                                
                                        />
                                            </div>
                                        
                                        </>
                                    
                                    ) : (
                                            <>
                                        <div className="col-span-1 px-4 md:mb-4 mb-0 lg:mb-0 flex items-center justify-center">
                                                <img src="https://basaschools.co.za/wp-content/uploads/2021/04/boy-avator.png"
                                        alt="avatar"
                                        className="shadow rounded-full w-12 h-12 align-middle border-none"
                                        data-tip="Unavailable source"
                                    />
                                                </div>
                                                
                                            </>
                                    
                                    
                                    )}
                                    <div className="col-span-2 xl:grid-span-1 md:grid-span-1 text-center md:px-1 px-4 lg:px-4 h-12">
                                        <p>Tags : {hit.tags}</p>
                                
                                    </div>
                                    
                                </div> 
                                
                           
                        </div>
              
                )}
                
            <Modal open={openModal.open}
                onClose={() => setOpenModal({open:false,idx:1})}
                center
                classNames={{
                    modal: 'my-fixed-modal'
                    
                }}
                
                >
                
                <SimpleSlider index={openModal.idx}/>
                </Modal>
                
                <ReactTooltip/>
                    
        </section>
       
        
            </>

       
        
    )
}