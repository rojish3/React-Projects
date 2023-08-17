import { cities } from "../Data/citiesData"

const Cities = () => {
  return (
    <div className="w-full p-4 lg:px-12 lg:my-8">
        <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold py-2 lg:text-4xl">Cities near me</h2>
            <a href="#" className="underline hidden lg:block">View all 500+ cities</a>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15821920.365563406!2d-99.15418478972266!3d35.120800958701096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1692243149904!5m2!1sen!2snp" className="w-full h-72 lg:h-96"></iframe>
        <div className="grid grid-cols-2 leading-8 lg:grid-cols-4 lg:leading-[3rem]">
            {/* {
                cities.map((item) => ({...item}))
            } */}
            <ul>
                <li>Akron</li>
                <li>Albuquerque</li>
                <li>Bridgeport</li>
                <li>Concord</li>
                <li>Dayton</li>
                <li>El Paso</li>
            </ul>
            <ul>
                <li>Hartford</li>
                <li>Houston</li>
                <li>Indianapolis</li>
                <li>McAllen</li>
                <li>Mesa</li>
                <li>Milwaukee</li>
            </ul>
            <ul className="hidden lg:block">
                <li>Nashville</li> 
                <li>New Orleans</li> 
                <li>Oklahoma City</li> 
                <li>Omaha</li>
                <li>Orlando</li>
                <li>Palm Bay</li>
            </ul>
            <ul className="hidden lg:block">
                <li>Providence</li>
                <li>Queens</li>
                <li>San Antonio</li>
                <li>Stony Brook</li>
                <li>Tucson</li>
                <li>West Hollywood</li>
            </ul>
        </div>
        <a href="#" className="underline lg:hidden">View all 500+ cities</a>
    </div>
  )
}

export default Cities