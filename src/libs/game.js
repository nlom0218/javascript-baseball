const { Console, Random } = require("@woowacourse/mission-utils");
const validation = require("./validation");

const game = {
  start: () => {
    Console.print("숫자 야구 게임을 시작합니다.");
  },

  setAnswer: () => {
    const numArr = Random.pickUniqueNumbersInRange(1, 9, 3);

    return Number(numArr.join(""));
  },

  getAnswer: () => game.setAnswer(),

  progress: (answer) => {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      const isValidPlayerInput = validation.playerInput(input);

      if (!isValidPlayerInput) return game.exitWithException();
    });
  },

  getResult: (answer, input) => {
    let ball = 0;
    let strike = 0;

    [...input].forEach((item, idx) => {
      if (![...(answer + "")].includes(item)) return;

      if ((answer + "")[idx] === item) strike++;
      else ball++;
    });

    return { ball, strike };
  },

  exitWithException: () => {
    throw new Error("잘못된 값을 입력하여 애플리케이션이 종료합니다.");
  },
};

module.exports = game;
