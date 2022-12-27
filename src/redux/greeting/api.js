const url = 'http://localhost:3000/api/greetings';
const randomGreeting = async () => {
  let result = [];
  await fetch(url).then((res) => res.json()).then((data) => {
    result = [...data];
  });
  return result;
};

export default randomGreeting;
