import './Search.css'
import { useContext, useState } from 'react'
import { DataContext } from '../../contexts/DataContext'
import axios from 'axios'

function Search() {

    const { data, setData } = useContext(DataContext)
    const [input, setInput] = useState()
    const [error, setError] = useState(false)

    function handleSearch() {
        axios.post('http://localhost:3000/weather/', {
            city: input
        })
            .then((res) => {
                setData({ ...data, info: res.data });
                setError(false)
                console.log(res.data);
            })
            .catch((err) => {
                setData({
                    info: undefined,
                    type: true
                })
                setError(true)
                alert('Please enter a valid city name')
            })
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div id='search-container' className='inner-containers'>
            <h1 id='search-intro'>
                Use our weather app<br />
                to see the weather<br />
                around the world
            </h1>
            <div id={error ? 'label-error' : 'search-label'}>City name</div>
            <form id={error ? 'error-input-container' : 'input-container'} onSubmit={handleSubmit}>
                <input id='search-input' type="text" placeholder='search' onChange={(e) => setInput(e.target.value)} />
                <button id={error ? 'error-button' : 'search-button'} onClick={handleSearch}>Check</button>
            </form>
        </div>
    )
}

export default Search