import React, { useEffect, useState } from 'react'

const Home = () => {
    const [allCountries, setAllCountries] = useState([])
    
    useEffect(() => {
        getallcountries()
    },[])

    async function getallcountries(){
        const response = await fetch('https://restcountries.com/v3.1/all')
        const data = await response.json()
        setAllCountries(data)

    }

    console.log(allCountries)



  return (
    <div>
        <div className='firstDiv'>
        <div className='search'> 
            <input className='searched' type="search" placeholder='search for country'/>
            <i className="ri-search-line"></i>
        </div>
        <div>
        <select className='filter' name="cars" id="cars">
            <option value="">Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="asia"> Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            </select>
        </div>
        </div>

 <div className='cardi'>
    {allCountries && allCountries.map(country => (
        <div className="card" key={country.name.common}>
            <img src={country.flags.svg}  alt="..." style={{width:"15rem"}}/>
            <div className="card-body">
                <h4 className="card-text" style={{paddingBottom:"10px"}}><b>{country.name.common}</b></h4>
                <p className="card-text"><span style={{fontWeight:"bold"}}>Population:</span>  <span style={{color:"grey", fontSize:"small"}}>{country.population}</span></p>
                <p className="card-text"> <span>Region:</span> <span style={{color:"grey", fontSize:"small"}}>{country.region}</span> </p>
                <p className="card-text"> <span>Capital:</span> <span style={{color:"grey", fontSize:"small"}}>{country.capital}</span></p>
            </div>
        </div>
    ))}
</div>
    </div>
  )
}

export default Home