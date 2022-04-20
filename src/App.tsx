
import React from 'react';
import './App.css';
import { ImageList } from './ImageList';
import { Helmet } from "react-helmet";
import type { ResponseData } from './types';
import { MyButton } from './components/MyButton';
import { MyInput } from './components/MyInput';
import { MySelect } from './components/MySelect';







const App: React.FC = () => {

  
  
  const [data, setData] = React.useState<ResponseData | undefined>(undefined);

  

  const fetchData = async () => {
    const result = await fetch('https://pixabay.com/api/?key=15819227-ef2d84d1681b9442aaa9755b8&q=luxury&image_type=all&per_page=32&');
  
    const data : ResponseData = await result.json();

    setData(data);
    console.log(data)
    
  };

  React.useEffect(() => {
    fetchData();
    
  }, []);

  // Inputs state
  const [inputs, setInputs] = React.useState({
    search: '',
    select: ''
    
});
 //Handler for retrieving search and select values
const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) : void => {
    setInputs({
        ...inputs,
        [e.target.name] : e.target.value

    })
   
}
// getting images on click
const getImages = async () => {
  
  const result = await fetch(`https://pixabay.com/api/?key=15819227-ef2d84d1681b9442aaa9755b8&q=${inputs.search}&image_type=${inputs.select}&per_page=32&`);
    const data : ResponseData= await result.json();
    setData(data);
}
//getting images on pressing enter
const getImagesOnEnter = (evt:React.KeyboardEvent) => {
    var key = evt.key;
    if (key === "Enter") {
        getImages();
    } 
}

console.log(inputs);

  return (
        
    <div className="main">
      <Helmet>
        <title>Custom Pixabay App</title>
        <meta name="description" content="Find stock images and videos from Pixabay "/>
      </Helmet>
          <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
            <div className="hero">
              <div className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
                  <h1 className=" font-bold text-3xl text-gray-900">Stunning Pixabay free images </h1>
                  <p className=" font-base text-base text-gray-600">high quality stock images and videos</p>
          </div>
          <div className="box pt-6">
            <div className="box-wrapper">
              <div className="bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                <MyButton onClick={getImages} />
                
                <MyInput
                 name="search"
                 type="search"
                 value={inputs.search}
                 onChange={handleChange}
                 placeholder="search for images"
                 className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
                  onKeyEnter={getImagesOnEnter}
                />

                                <div className="select">
                                    <MySelect
                                        
                                        name="select"
                                                options={[
                                        { label: "Type", value: "other" },
                                        { label: "All", value: "all" },
                                        { label: "Photos", value: "photos" },
                                        { label: "Illustration", value: "illustration" },
                                        { label: "Vector", value: "vector" }
                                        ]}
                                        onChange={handleChange}
                                    />
                                
                                </div>
              </div>
            </div>
          </div>
                
              
                  {data ? (
                  <ImageList hits={data.hits }/>
                ) : (
            
                  "Loading...🙂"
                )}
            </div>
       
         
      </div>
     
    </div>
    
    
    )

  
 
}

export default App;
