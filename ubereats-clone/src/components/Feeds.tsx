import FeedsCard from './FeedsCard';

import { cardData } from '../Data/cardsData';

const Feeds = () => {
  return (
    <div className='flex flex-col gap-5 px-4 lg:flex-row lg:my-16 lg:px-12 lg:gap-8'>
        { 
          cardData.map((item, idx) => (
            <FeedsCard key={idx} {...item} />
          ))
        }
    </div>
  )
}

export default Feeds