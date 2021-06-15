import React from 'react';
import '../../index.css'
import {NavBar} from '../../components/navbar/NavBar'
import {ItemListContainer} from '../../components/itemlistcontainer/ItemListContainer'

function Home() {
  const user = "Hola usuario!";

  return (
    <div className="Home">
      <NavBar />
      <ItemListContainer greeting={user} />
    </div>
  );
}

export default Home;
