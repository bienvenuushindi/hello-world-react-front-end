const Greeting = (props)  => {
    const { message } =  props
    return (
        <>
           <h1>Get a random greeting </h1>
           <h3>{ message } </h3>
        </>
    )
}

export default Greeting