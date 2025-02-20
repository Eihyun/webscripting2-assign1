import { useState } from 'react'
import IonIcon from '@reacticons/ionicons'

import Album from './components/Album.jsx';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';

const DEFAULT_RECORDS = [
  {
    id: 1,
    title: "Lemonade",
    artist: "Beyoncé",
    price: 19.99,
    artworkUrl: "https://upload.wikimedia.org/wikipedia/en/5/53/Beyonce_-_Lemonade_%28Official_Album_Cover%29.png"
  },
  {
    id: 2,
    title: "Harry's House",
    artist: "Harry Styles",
    price: 22.99,
    artworkUrl: "https://upload.wikimedia.org/wikipedia/en/d/d5/Harry_Styles_-_Harry%27s_House.png"
  },
  {
    id: 3,
    title: "Hollywood's Bleeding",
    artist: "Post Malone",
    price: 20.99,
    artworkUrl: "https://upload.wikimedia.org/wikipedia/en/5/58/Post_Malone_-_Hollywood%27s_Bleeding.png"
  },
  {
    id: 4,
    title: "The Rise and Fall of a Midwest Princess",
    artist: "Chappell Roan",
    price: 20.99,
    artworkUrl: "https://upload.wikimedia.org/wikipedia/en/3/34/Chappell_Roan_-_The_Rise_and_Fall_of_a_Midwest_Princess.png"
  },
  {
    id: 5,
    title: "Hit Me Hard and Soft",
    artist: "Billie Eilish",
    price: 20.99,
    artworkUrl: "https://upload.wikimedia.org/wikipedia/en/a/aa/Billie_Eilish_-_Hit_Me_Hard_and_Soft.png"
  },
  {
    id: 6,
    title: "Spaceman",
    artist: "Nick Jonas",
    price: 20.99,
    artworkUrl: "https://upload.wikimedia.org/wikipedia/en/7/77/Nick_Jonas_-_Spaceman.png"
  },
  {
    id: 7,
    title: "SOS",
    artist: "SZA",
    price: 20.99,
    artworkUrl: "https://upload.wikimedia.org/wikipedia/en/2/2c/SZA_-_S.O.S.png"
  },
];

function App() {

  const [records, setRecords] = useState(DEFAULT_RECORDS);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if(favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }

  return (
    <div className="bg-gray-50 max-w-dvw min-h-screen p-8">
      <Navbar />
      <Header />
      <h1 className="text-4xl font-bold text-gray-800 mt-10">Record Store</h1>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {records.map(record => (
          <Album key={record.id} record={record} favorites={favorites} toggleFavorite={toggleFavorite} />
        ))}
      </div>
    </div>
  )
}


export default App
