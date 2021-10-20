// TODO: write your code here
import { GameSavingLoader } from "./GameSavingLoader.js";

export { GameSavingLoader };

GameSavingLoader.load().then(
  (saving) => saving,
  (error) => "Error",
);
