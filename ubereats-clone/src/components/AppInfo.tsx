import { footerData } from '../Data/footerData';
import AppstoreImg from '../assets/app-store.png';
import PlaystoreImg from '../assets/play-store.png';

const AppInfo = () => {
  return (
    <div className="px-4 my-8 grid gap-y-10 lg:px-12 lg:grid-cols-2">
        <div className='flex flex-col gap-2 lg:justify-between lg:align-middle'>
          <h1 className="text-4xl">Uber <b>Eats</b></h1>
          <div className='flex flex-row space-x-5'>
              <img className='w-40' src={AppstoreImg} />
              <img className='w-40' src={PlaystoreImg} />
          </div>
        </div>
        <div className='grid gap-y-4 lg:grid lg:grid-cols-2'>
          {
            footerData.map((item, idx) => (
              <ul key={idx} className='leading-8 lg:leading-[3rem]'>
                <li>{item}</li>
              </ul>
            ))
          }
        </div>
    </div>
  )
}

export default AppInfo