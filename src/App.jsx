import { useState } from 'react'
import './App.css'
import {Posts} from './Content'

function App() {
  const [list, setList] = useState(Posts);
  const [query, setQuery] =useState('');
  const[sortField, setSortField] = useState('title');
  const [sortBy, setSortBy] = useState('ascending');
  const [result, setResult] = useState()

  const handleChange =(e) =>{
    const results = Posts.filter((post) =>{
      if(e.target.value ==="") return Posts;
      return post['title'].toLowerCase().includes(e.target.value.toLowerCase())
    })
    setQuery(query);
    setList(results)
  }


  return (
    <div>
      <form>
        <div>
          <span className='span'>Search:</span>
          <input type="search" placeholder='Search' onChange={handleChange}/>
        </div>
        <div>
          <span className='span'>  Sort Field:</span>
          <select name="field">
            <option value="title">None</option>
            <option value="title">Title</option>
            <option value="description">Description</option>
          </select>
        </div>
        <div>
          <span className='span'>  Sort By:</span>
          <select name="sortby">
            <option value="ascending">None</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </form>
      <div>
        {list.map((post) => (
          <div className="card">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))}

        {list.length === 0 && <h2>Empty List!</h2>}
      </div>
    </div>
  );
}

export default App
