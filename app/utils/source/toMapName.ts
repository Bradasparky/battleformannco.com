export default (mapName: string) => {
  return mapName.split('_').slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
