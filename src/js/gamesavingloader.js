import GameSaving from './gamesaving';
import json from './parser';
import read from './reader';

class GameSavingLoader {
  static load() {
    return read()
      .then((response) => json(response))
      .then((parseResponse) => new GameSaving(JSON.parse(parseResponse)));
    /* .catch((rejected) => {
        console.error(rejected);
      }); */
  }
}

export default GameSavingLoader;

console.log(GameSavingLoader.load());
