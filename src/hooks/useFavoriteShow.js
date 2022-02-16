import { useDispatch, useSelector } from 'react-redux';
import { addShowToFavorite, removeShowFromFavorite } from 'jobsitychallengeapp/src/redux/actions/shows.actions';

const useLocalizer = () => {
  const dispatch = useDispatch();

  const { favShows } = useSelector(state => state.shows);

  const addToFavorite = (show) => {
    dispatch(addShowToFavorite(show));
  }

  const getFavoriteList = () => {
    return { favShows } = useSelector(state => state.shows);
  }

  const removeFromFav = (id) => {
    dispatch(removeShowFromFavorite(id));
  }

  const isInFav = (id) => {
    return (favShows.find((item) => item.id === id)) != undefined;
  }

  const getFavoriteById = (id) => {
    return favShows.find((item) => item.id === id);
  }

  return {getFavoriteById, isInFav, removeFromFav, getFavoriteList, addToFavorite};
}

export default useLocalizer;