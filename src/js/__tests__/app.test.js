import { GameSavingLoader } from "../app.js";

test("check savingLoader", async () => {
  const received = await GameSavingLoader.load().then((saving) => saving);

  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: "Hitman",
      level: 10,
      points: 2000,
    },
  };

  expect(received).toEqual(expected);
});
