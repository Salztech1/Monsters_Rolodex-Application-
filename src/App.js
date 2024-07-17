//import { Component } from 'react';

import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';


import React from 'react';

function App() {

  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monster, setMonster] = useState([]);
  const [filteredMonster, setFilteredMonster] = useState(monster)


  console.log('rendered')
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonster(users))
  }, [])

  useEffect(() => {
    const newFilteredMonster = monster.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilteredMonster(newFilteredMonster)

  }, [monster, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }





  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox onChangeHandler={onSearchChange}
        className='monster-search-box'
        placeholder='Search Monsters' />

      <CardList fmonster={filteredMonster} />

    </div>
  );
}

export default App;


// class App extends Component {

//   constructor() {
//     super()
//     this.state = {
//       monster: [],
//       searchField: ''
//     }
//   }


//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(() => {
//         return { monster: users }
//       }))
//   }

//   onSearchChange = (event) => {
//     console.log(event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();


//     this.setState(() => {
//       return { searchField }
//     })

//   }

//   render() {
//     const { monster, searchField } = this.state;
//     const { onSearchChange } = this

//     const filteredMonster = monster.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>

//         <SearchBox onChangeHandler={onSearchChange}
//           className='monster-search-box'
//           placeholder='Search Monsters' />
//         <CardList fmonster={filteredMonster} />

//       </div>

//     );
//   };
// }

// export default App;
