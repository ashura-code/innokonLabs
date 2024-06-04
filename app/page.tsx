import Image from 'next/image';
import Carousel from './components/Carousel';
import { OrbitingCirclesDemo } from './components/Circle';

export default function Home() {
  return (
    <main className="h-max">
      {/* <Carousel/> */}
      <div className="relative h-[60vh] w-full bg-red-200">
        {/* <Image alt="image" fill={true} src={"http://localhost:3000/img1.jpg"} style={{ objectFit: "cover" }} /> */}
        <img src="./img1.jpg" className="object-cover w-full h-full" alt="" />
      </div>

      <section className="h-64 bg-slate-300 text-center p-6 flex flex-col justify-center items-center">
        <h1 className='text-5xl font-bold'>Our commitment to health</h1>
        <p>
          Innokon Labs is a company with over 10 years of specialized scientific
          research into health and nutrition with the aim of helping people live
          healthier. Our supplements are formulated by a team of doctors, health
          specialists and health care experts, strictly delivering industry-best
          products
        </p>
      </section>

      <div className="p-28 h-[110vh] flex flex-col gap-5 items-center justify-center">
        <section className="h-5/6 w-11/12  rounded flex">
          <section className="w-1/2 h-full">
            {/* <Image alt="image" src={"/img1.jpg"} layout="fill" objectFit="cover" /> */}
            <img src="./img2.jpg" alt="" />
          </section>
          <section className="w-1/2 h-full text-justify m-5">
            <p>We believe the best ingredients and top quality health products do
            not have to be expensive. It should be affordable and available to
            everyone. It is our mission to bring good health and a good life to
            everyone who desires to live better and live healthier.</p>
          </section>
        </section>

        <section className="h-5/6 w-11/12 rounded flex">
       
          <section className="w-1/2 h-full text-justify m-5">
            <p>We believe the best ingredients and top quality health products do
            not have to be expensive. It should be affordable and available to
            everyone. It is our mission to bring good health and a good life to
            everyone who desires to live better and live healthier.</p>
          </section>
          <section className="w-1/2 h-full ">
            {/* <Image alt="image" src={"/img1.jpg"} layout="fill" objectFit="cover" /> */}
            <img src="./img3.jpg" alt="" />
          </section>
        </section>
      </div>
    </main>
  );
}
