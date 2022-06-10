const date = new Date("2022-05-07");
const object = {
    type: 'string',
    text: "Hi, there",
    date: date.toISOString(),
}
let clone_object = JSON.parse(JSON.stringify(object));
clone_object.text = "I am changing the text";

console.log(clone_object, object);

/*
CLONED OBJECT
{
  type: 'string',
  text: 'I am changing the text',
  date: '2022-05-07T00:00:00.000Z'
}

OBJECT
{ 
    type: 'string', 
    text: 'Hi, there', 
    date: '2022-05-07T00:00:00.000Z' 
}
*/