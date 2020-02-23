import axios from 'axios';

const queryApi = (path, params) => {
  return axios({
    method: 'GET',
    url: `http://localhost:3001/${path}`,
    dataResponse: 'json',
    params: params
  });
}

const WordFunctions = {};

WordFunctions.getBooks = () => {
  return queryApi(`books/`);
}
WordFunctions.getLessons = (bookID) => {
  // return queryApi(`lessons`);
  return new Promise(resolve => {
    resolve([
      {
        id: 0,
        name: '1.1',
        desc: 'The first chapter!',
        bookID: bookID,
        cost: 100
      },
      {
        id: 1,
        name: '1.2',
        desc: 'The second chapter!',
        bookID: bookID,
        cost: 250
      }
    ]);
  })
}
WordFunctions.getWords = (lessonID) => {
  // return queryApi(`lessons/${lessonID}`);
}

export default WordFunctions;