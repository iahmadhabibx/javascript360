class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
    }

    off(eventName, listener) {
        if (!this.events[eventName]) return;

        this.events[eventName] = this.events[eventName].filter(
            (existingListener) => existingListener !== listener
        );
    }

    emit(eventName, ...args) {
        if (!this.events[eventName]) return;

        this.events[eventName].forEach((listener) => {
            listener(...args);
        });
    }
}

const emitter = new EventEmitter();

const greetListener = (name) => { console.log(`Hello, ${name}!`)};

const thankListener = () => { console.log("Thank you!") };

emitter.on("greet", greetListener);
emitter.on("thank", thankListener);

emitter.emit("greet", "Alice"); // Output: Hello, Alice!
emitter.emit("thank"); // Output: Thank you!

emitter.off("greet", greetListener);
emitter.emit("greet", "Bob"); // No output, greetListener is removed
