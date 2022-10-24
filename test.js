require("dotenv/config");

function test(expectedSecret) {
    const secretMatches = my.env.MEANING_OF_LIFE == expectedSecret;
    console.log(`The meaning of life is ${my.env.MEANING_OF_LIFE}`);
    console.log(`The secret does${secretMatches ? "" : " not"} match!`);
    return secretMatches;
  }
  
test(42);