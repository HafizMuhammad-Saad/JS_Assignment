var mobilePhones = {
    samsung: {
        galaxy: {
            note9: {
                name: 'Samsung Galaxy Note 9',  
                price: 799.99,
                color: "black",
                screenSize: "6.2 inches",
                storage: "128GB",
                camera: "12 MP",
                battery: "4500 mAh"
            },
            note10: {
                name: 'Samsung Galaxy Note 10',
                price: 1099.99,
                color: "blue",
                screenSize: "6.4 inches",
                storage: "256GB",
                price: 999.99,
                color: "white"
            },
        },
        Zfold: {
            pro: {
                name: 'Samsung Galaxy Z Fold Pro',
                price: 1299.99,
                color: "black",
                screenSize: "6.5 inches",
                storage: "256GB",
                camera: "12 MP",
                battery: "4500 mAh"
            },
            fold2: {
                name: 'Samsung Galaxy Z Fold 2',
                price: 1499.99,
                color: "black",
                screenSize: "6.7 inches",
                storage: "512GB",
                camera: "12 MP",
                battery: "4500 mAh"
            },
        }
    },
    apple: {
        iphone: {
            x: {
                name: 'Apple iPhone X',
                price: 1099.99,
                color: "white",
                screenSize: "6.1 inches",
                storage: "64GB",
                camera: "12 MP",
                battery: "3000 mAh"
            },
            xsMax: {
                name: 'Apple iPhone XS Max',
                price: 1499.99,
                color: "silver",
                screenSize: "6.5 inches",
                storage: "64GB",
                camera: "12 MP",
                battery: "3000 mAh"
            },
        },
    },

};

var selectedCompany = 'samsung'
for(var company in mobilePhones){   
    for(var variants in mobilePhones[company]){         
        for(var model in mobilePhones[company][variants]){
            console.log(mobilePhones[company][variants][model]);
            
        }
    }
    
}   