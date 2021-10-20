import { read } from "./reader.js";
import { json } from "./parser.js";

export class GameSavingLoader {
  static load() {
    class GameSaving {
      constructor(data) {
        this.id = data.id;
        this.created = data.created;
        this.userInfo = data.userInfo;
      }
    }
    return read()
      .then((response) => response)
      .then((response) => json(response))
      .then((response) => JSON.parse(response))
      .then((response) => new GameSaving(response));
  }
}
