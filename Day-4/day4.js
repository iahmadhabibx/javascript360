const data = [
    { language: "en", country: "United Kingdom" },
    { language: "en", country: "Australia" },
    { language: "en", country: "United States of America" },
    { language: "en", country: "Canada" },
    { language: "en", country: "Ireland" },
    { language: "en", country: "Scotland" },
    { language: "ara", country: "Suadia Arabia" },
    { language: "ara", country: "Kuwait" },
    { language: "ara", country: "Egypt" },
    { language: "ara", country: "United Arab Emirates" },
    { language: "ara", country: "Iran" },
    { language: "urdu", country: "Pakistan" },
    { language: "afr", country: "Ghana" },
    { language: "afr", country: "Nigeria" },
]

const rechainObject = (_array) => {
    const newObject = {}
    _array.forEach(obj => newObject[obj.language] = []);
    _array.forEach(obj => newObject[obj.language].push(obj.country));
    return newObject;
}

console.log(rechainObject(data));

/* 
Result:
    {
        "en":["United Kingdom","Australia","United States of America","Canada","Ireland","Scotland"],
        "ara":["Suadia Arabia","Kuwait","Egypt","United Arab Emirates","Iran"],
        "urdu":["Pakistan"],
        "afr":["Ghana","Nigeria"]
    }
*/