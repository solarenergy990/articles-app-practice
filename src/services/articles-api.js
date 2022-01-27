import axios from 'axios';

const getArticles = async () => {
  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );

    return data;
  } catch (error) {
    console.log('something went wrong', error);
  }
};

export default getArticles;
