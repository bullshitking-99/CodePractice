function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}

const task = (timer, light, callback) => {
  setTimeout(() => {
    if (light === "red") {
      red();
    } else if (light === "green") {
      green();
    } else if (light === "yellow") {
      yellow();
    }
    callback();
  }, timer);
};
function loop() {
  task(3000, "red", () => {
    task(2000, "green", () => {
      task(1000, "yellow", loop);
    });
  });
}

loop();
