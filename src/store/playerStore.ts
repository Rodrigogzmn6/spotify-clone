import { create } from 'zustand'
import type { Playlist, Song } from '../lib/data'

interface State {
  isPlaying: boolean
  currentMusic: {
    playlist?: Playlist
    song?: Song
    songs?: Song[]
  }
  setIsPlaying: (arg0: boolean) => void
  setCurrentMusic: (arg0: {
    playlist?: Playlist
    song?: Song
    songs?: Song[]
  }) => void
  volume: number
  setVolume: (arg0: number) => void
}

export const usePlayerStore = create<State>(set => ({
  isPlaying: false,
  currentMusic: { playlist: undefined, song: undefined, songs: [] },
  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
  setCurrentMusic: currentMusic => set({ currentMusic }),
  volume: 0.5,
  setVolume: volume => set({ volume })
}))
