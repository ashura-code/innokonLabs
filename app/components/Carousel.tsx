

import Image from "next/image"


export default function Carousel(){
    return(

<div aria-roledescription="carousel" className="relative w-full max-w-4xl" role="region">
  <div className="overflow-hidden">
    <div className="flex -ml-4 transform translate-x-0 translate-y-0 translate-z-0">
      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4" role="group">
        <img
          src="/placeholder.svg"
          width="900"
          height="600"
          alt="Scenic mountain landscape"
          className="object-cover rounded-lg h-60 w-90"
        />
      </div>
      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4" role="group">
        <img
          src="/placeholder.svg"
          width="900"
          height="600"
          alt="Tropical beach with palm trees"
          className="object-cover rounded-lg h-60 w-90"
        />
      </div>
      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4" role="group">
        <img
          src="/placeholder.svg"
          width="900"
          height="600"
          alt="Historic European architecture"
          className="object-cover rounded-lg h-60 w-90"
        />
      </div>
      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4" role="group">
        <img
          src="/placeholder.svg"
          width="900"
          height="600"
          alt="Serene forest landscape"
          className="object-cover rounded-lg h-60 w-90"
        />
      </div>
      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4" role="group">
        <img src="/placeholder.svg" width="900" height="600" className="object-cover rounded-lg h-60 w-90" />
      </div>
    </div>
  </div>
</div>
        
    )
}






