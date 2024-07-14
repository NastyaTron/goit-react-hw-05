import axios from "axios";

export const fetchMoviesWithQuery = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDBhN2RiZmRjNzcyYTM0MDFkOGE0NzI1ZTI2YjZmZiIsIm5iZiI6MTcyMDg2NzEwMC4wOTI1ODIsInN1YiI6IjY2OTI1NDNlYjFkNjgyOTk5NmM0Njc0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3BGD5aVl8x2g70dlzIXOlT-8reI9oOxDC-JL71nXzMA",
    },
  };
  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getMovieById = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDBhN2RiZmRjNzcyYTM0MDFkOGE0NzI1ZTI2YjZmZiIsIm5iZiI6MTcyMDg2NzEwMC4wOTI1ODIsInN1YiI6IjY2OTI1NDNlYjFkNjgyOTk5NmM0Njc0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3BGD5aVl8x2g70dlzIXOlT-8reI9oOxDC-JL71nXzMA",
    },
  };
  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};
