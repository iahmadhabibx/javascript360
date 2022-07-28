function* generatorFunction() {
    console.log("Logging 1")
    yield 'Haulted'

    console.log("Logging 2")
    yield 'Haulted again'
}

const generatorObject = generatorFunction();
generatorObject.next().value //It will stop after first console
generatorObject.next().value //It will stop after second console

/*
    Output:
        Logging 1
        Logging 2
*/