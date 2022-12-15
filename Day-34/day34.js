const data = {time: 50, name: ""};
data.time ||= 10;
console.info(data.time); //50

data.name ||= "John Doe";
console.info(data.name); //John Doe