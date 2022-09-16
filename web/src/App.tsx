import * as Dialog from '@radix-ui/react-dialog';
import logoImg from './assets/logo-nlw-esports.svg';

import './styles/main.css';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useEffect, useState } from 'react';
import { GameBanner } from './components/GameBanner';

import { CreateAdModal } from './components/CreateAdModal';
import axios from 'axios';
 
interface Game{
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

export function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() =>{
    axios('http://localhost:3333/games').then(response => {
      setGames(response.data);
    })
  }, []);

  return (
    <div className="flex items-center flex-col mt-20 mb-[132px] max-w-[1344px] mx-auto">
      <img src={logoImg} alt="" />

      <h1 className="text-[64px] mt-20 text-white font-black">
        Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) =>{
          return(
            <GameBanner 
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              ads={game._count.ads}
            />
          )
        })}
      </div>
      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

