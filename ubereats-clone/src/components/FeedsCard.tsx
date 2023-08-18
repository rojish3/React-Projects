import { IcardData } from "../Data/cardsData"

const FeedsCard: React.FC<IcardData> = ({image, value, label, link}) => {
  return (
    <div className="flex flex-col">
        <img src={image} alt={value} />
        <h2 className='text-xl font-bold lg:text-3xl'>{label}</h2>
        <a className='underline text-sm lg:text-xl' href='#'>{link}</a>
    </div>
  )
}

export default FeedsCard