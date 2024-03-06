import { ipcMain } from 'electron'
import spotify from 'spotify-node-applescript'
import { promisify } from 'util'

const spotifyIsRunning = promisify(spotify.isRunning)
const spotifyGetState = promisify(spotify.getState)
const spotifyGetTrack = promisify(spotify.getTrack)

export function registerSpotifyHandlers() {
  ipcMain.handle('spotify:play', () => spotify.play())
  ipcMain.handle('spotify:pause', () => spotify.pause())
  ipcMain.handle('spotify:playPause', () => spotify.playPause())
  ipcMain.handle('spotify:next', () => spotify.next())
  ipcMain.handle('spotify:previous', () => spotify.previous())

  ipcMain.handle('spotify:isPlaying', async () => {
    if (!(await spotifyIsRunning())) return false
    return (await spotifyGetState()).state === 'playing'
  })
  ipcMain.handle('spotify:getTrack', async () => {
    if (!(await spotifyIsRunning())) return false
    return await spotifyGetTrack()
  })
}
