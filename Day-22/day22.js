let cricketers = ["Alastair Cook", "Kapil Dev", "Ian Bishop", "Zaheer Khan", "Ian Bell", "Babar Azam", "Imran Khan", "Waseem Akram"];
cricketers.forEach(name => {
    if (name.toLocaleLowerCase().endsWith("khan"))
        console.log(name);
})

/* Output */
// Zaheer Khan
// Imran Khan