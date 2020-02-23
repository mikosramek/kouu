import React from 'react';

import WordFunctions from '../../utility/WordFunctions';

const Play = () => {
  const [lessons, setLessons] = React.useState([]);

  React.useEffect(() => {
      WordFunctions.getLessons(0).then((result) => {
        setLessons(result);
      });
  }, []);

  return(
    <>
      <h2>Play</h2>
      <ul>
        {
          lessons.map((lesson, i) => {
            const {name, desc, cost} = lesson;
            return (
              <li key={name + i}>
                <h3>{name}</h3>
                <p>{desc} | {cost}</p>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default Play;