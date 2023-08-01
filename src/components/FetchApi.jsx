import { useState, useEffect } from "react";
import ResponsiveGrid from "./DataSkeleton";
import Seasons from "./Seasons";
// import {RenderGenres} from "./ResponsiveGrid";
import BackToTop from "./BackToTop";
import '../App.css'
// import SearchBar from "./SearchBar";


export default function FetchAPI() {
  const [data, setData] = useState(null)
  const [preview, setPreview] = useState("");
  const [nnnnnnn, setnnnnnnn] = useState(null);

  const getApi = () => {
    fetch("https://podcast-api.netlify.app/shows")
      .then(response => response.json())
      .then((data) => { setData(data)


        const mapData = data.map((item) => {

          function showSeasons(id) {

            if(id){

              fetch(`https://podcast-api.netlify.app/id/${id}`)
              .then(res => res.json())
              .then(data => {
                console.log(data.seasons)

                const seas = data.seasons

                const seasM = seas.map((mm) => {
                  
                  {console.log(mm.title)}
                 return (
                    <>
                    
                      <Seasons
                       title={mm.title}
                       image = {mm.image}
                    />
                </>
                 ) 
                })

                setnnnnnnn(seasM)
              })
            
            }
          }
          return (
            <>
            {/* <SearchBar/> */}
              <div id="card">
              <ResponsiveGrid 
                key={item.id}
                {...item} 
                clicked={() => showSeasons(item.id)}
                />
              </div>
              <BackToTop />
              
            </>
          );
        });
        setPreview(mapData);
      });
  };

  useEffect(() => {
    getApi();
  }, []);
console.log()
  return (
    <>
      {nnnnnnn}
      <div key={preview}>{preview}</div>
    </>
  )
}
