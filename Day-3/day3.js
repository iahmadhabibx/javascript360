const captains = {
    pakistan: "Babar Azam",
    india: "Virat Kohli",
    newzealand: "Kane williamson",
    australia: "Steve Smith",
    bangladesh: 'Mominul Haque',
    england: 'Joe Root'
  }
  
  const getSpecifiedCaptain = (country) => {
    return captains[country] || "No Captain against this country found";
  }
  
  console.log(getSpecifiedCaptain('newzealand'));
  