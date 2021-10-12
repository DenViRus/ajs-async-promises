import { read } from "./reader.js";
import { json } from "./parser.js";

export class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      const data = read();
      data
        .then((response) => {
          const value = json(response);
          return value;
        })
        .then((value) => {
          resolve(JSON.parse(value));
        });
    });
  }
}
