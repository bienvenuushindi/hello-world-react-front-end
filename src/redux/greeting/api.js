const url = 'http://127.0.0.1:3000/api/greetings';
const randomGreeting = async () => {
    let result = []
    await fetch(url).then(res => res.json()).then(data => {
        result = [...data]
    })
    return result
}

export default randomGreeting