const Countries = () => {
  return (
    <div className="w-full p-4 lg:px-12 lg:my-8">
        <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold py-2 lg:text-4xl">Countries with Uber Eats</h2>
            <a href="#" className="underline hidden lg:block">View all countries</a>
        </div>
        <div className="grid grid-cols-2 leading-8 lg:grid-cols-4 lg:leading-[3rem]">
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
            <ul>
                <li>Nashville</li> 
                <li>New Orleans</li> 
                <li>Oklahoma City</li> 
                <li>Omaha</li>
                <li>Orlando</li>
                <li>Palm Bay</li>
            </ul>
            <ul>
                <li>Providence</li>
                <li>Queens</li>
                <li>San Antonio</li>
                <li>Stony Brook</li>
                <li>Tucson</li>
                <li>West Hollywood</li>
            </ul>
        </div>
        <a href="#" className="underline lg:hidden">View all countries</a>
    </div>
  )
}

export default Countries