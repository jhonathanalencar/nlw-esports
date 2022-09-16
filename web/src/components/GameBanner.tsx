interface GameBannerProps{
  bannerUrl: string;
  title: string;
  ads: number;
}

export function GameBanner({ bannerUrl, title, ads }: GameBannerProps){
  return(
    <a href="#" className="relative rounded-lg overflow-hidden">
      <img src={bannerUrl} alt="" />

      <div className="absolute pt-16 pb-4 px-4 bottom-0 left-0 right-0 bg-game-gradient w-full">
        <strong className="text-white block">{title}</strong>
        <span className="text-sm text-zinc-300 block">{ads} anúncio(s)</span>
      </div>
    </a>
  )
}