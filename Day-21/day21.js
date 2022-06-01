const fish = ["weight", "area"];

const _obj = {
    name: "Fish" ,
    [fish[0]]: '3kg',
    [fish[1]]: 'Pacific ocean'
};
console.log(_obj); // { name: 'Fish', weight: '3kg', area: 'Pacific ocean' }