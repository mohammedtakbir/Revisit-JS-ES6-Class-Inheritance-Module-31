const user= {
    id: 555,
    name: 'takbir',
    address: {
        street: {
            first: '31/B', 
            second: {
                road: 'kochukhet',
                city: 'dhaka',
           }
        }
    }
};
console.log(user.address.stret?.second.city ?? 'who the fuck you are, huh???');