import { usePlayerStore } from '../store/playerStore'
import { Pause, Play } from './Player'

export const CardPlayButton = ({
  id,
  size = ' small'
}: {
  id: string
  size?: string
}) => {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore(state => state)

  const handleClick = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false)
      return
    }

    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then(res => res.json())
      .then(data => {
        const { songs, playlist } = data
        setIsPlaying(true)
        setCurrentMusic({
          songs,
          playlist,
          song: songs[0]
        })
      })
  }

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === id

  const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5'

  return (
    <button
      className='card-play-button rounded-full bg-green-500 p-4
      hover:scale-105 transition hover:bg-green-400'
      onClick={handleClick}>
      {isPlayingPlaylist ? (
        <Pause className={iconClassName} />
      ) : (
        <Play className={iconClassName} />
      )}
    </button>
  )
}
