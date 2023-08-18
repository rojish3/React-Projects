import { countriesData } from "../Data/countriesData"
const Countries = () => {
  return (
    <div className="w-full p-4 lg:px-12 lg:my-8">
        <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold py-2 lg:text-4xl">Countries with Uber Eats</h2>
            <a href="#" className="underline hidden lg:block">View all countries</a>
        </div>
        <div className="grid grid-cols-2 leading-8 lg:grid-cols-4 lg:leading-[3rem]">
            {
                countriesData.map((item, idx) => (
                    <ul key={idx}>
                        <li>{item}</li>
                    </ul>
                ))
            }
        </div>
        <a href="#" className="underline lg:hidden">View all countries</a>
    </div>
  )
}

export default Countries