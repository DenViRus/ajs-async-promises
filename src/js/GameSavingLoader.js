import { read } from "./reader.js";
import { json } from "./parser.js";
import { GameSaving } from "./GameSaving.js";

export class GameSavingLoader {
  static load() {
    return read()
      .then((response) => response)
      .then((response) => json(response))
      .then((response) => JSON.parse(response))
      .then((response) => new GameSaving(response));
  }
}
