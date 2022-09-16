import * as Dialog from '@radix-ui/react-dialog';
import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdBanner(){
  return(
    <div className=" mx-auto w-full pt-1 mt-8 bg-nlw-gradient rounded-lg rounded-b-xl">
      <div className="bg-[#2A2634] py-6 px-8 flex justify-between items-center rounded-lg">
        <div className="flex flex-col">
          <strong className="text-white text-2xl font-black block">Não encontrou seu duo?</strong>
          <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
        </div>
        
        <Dialog.Trigger className="bg-violet-500 text-white font-medium rounded-md gap-3 py-3 px-4 flex items-center hover:bg-violet-600 transition-colors">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  )
}