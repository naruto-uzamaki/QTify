export const truncate = (string, length) => {
    if (string.length > length) {
      return string.slice(0, length) + '...';
    }
    return string;
};
  
export function sortByGenre(data, genreType){
    if(genreType === 'all'){
        return data;
    }
    return data.filter((item)=>{
        return item.genre.key === genreType;
    })
};