import json from "./parser";
import read from "./reader";

class GameSavingLoader {
  load() {
    const response = read();
    const result = response
      .then((res) => {
        return new Promise((resolve) => {
          resolve(json(res));
        });
      })
      .then((final) => {
        return final;
      });
  }
}

const gamer = new GameSavingLoader();
const test = gamer.load();
