var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();
var dboperations = require('./dboperations');
const Product = require('./product');
const User = require('./user');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request, response, next)=>{
    console.log('middleware');
    next();
});

router.route('/users').get((request, response) => {
    dboperations.getUsers().then(result => {
        response.json(result[0])
    })
})

router.route('/user').get((request, response) => {
    dboperations.getUserByEmail("charbelsaba983@gmail.com").then(result => {
        response.json(result[0])
    })
})

router.route('/users').post((request, response) => {
    const user = new User("Test", "Test", "Test123", "test@gmail.com", "123456789", 0, "");
    dboperations.addUser(user).then(result => {
        response.status(201).json(result)
    })
})

router.route('/users').delete((request, response) => {
    dboperations.deleteUser("test@gmail.com").then(result => {
        response.status(202).json(result)
    })
})

router.route('/users').patch((request, response) => {
    dboperations.updateUser("test@gmail.com", "Test1", "Test2", "Test12345").then(result => {
        response.status(203).json(result)
    })
})

router.route('/userprofilepic').patch((request, response) => {
    dboperations.updateUserProfilePicture("test@gmail.com", "testpfp").then(result => {
        response.status(203).json(result)
    })
})

router.route('/userpassword').patch((request, response) => {
    dboperations.updateUserPassword("test@gmail.com", "123456").then(result => {
        response.status(203).json(result)
    })
})

router.route('/products').get((request, response) => {
    dboperations.getProductId("Asus Zenbook 13 UX334").then(result => {
        let id = JSON.stringify(result[0][0].id);
        console.log(id)
    });
    dboperations.getProducts().then(result => {
        response.json(result[0])
    })
});

router.route('/product/:id').get((request, response) => {
    dboperations.getProduct(request.params.id).then(result => {
        response.json(result[0])
    })
});

router.route('/product').post((request, response) => {
    let description = '. Intel Core i7-1195G7 \n';
    description += '. Windows 11 Home \n';
    description += '. 14.2 inch LTPS 500 nits, 3120x2080 (264 PPI), 90Hz, 10 point multi-touch \n';
    description += '. Intel Iris Xe Graphics \n';
    description += '. 16GB LPDDR4x, 1TB SSD \n';
    let product = new Product("Huawei Matebook X Pro 2022", description, 2100, "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/pc/matebook-x-pro-2022/specs/gray.png", "Huawei,Laptop,Notebook,Intel", 1);
    dboperations.addProduct(product).then(result => {
        response.status(201).json(result)
    });
});


router.route('/product').delete((request, response) => {
    dboperations.deleteProduct(2).then(result => {
        response.status(201).json(result)
    })
});

router.route('/product').patch((request, response) => {
    let description = '. Intel Core i7-1185G7 \n';
    description += '. Windows 11 Home \n';
    description += '. 13 inch PixelSense™ Flow Display, 2880 x 1920 (267 PPI), 120Hz, 10 point multi-touch \n';
    description += '.  Intel Iris Xe Graphics \n';
    description += '. 32GB LPDDR4, 1TB SSD \n';
    let product = new Product("Microsoft Surface Pro 8", description, 1000, "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWFHUx?ver=52c7&q=90&m=6&h=468&w=830&b=%23FFFFFFFF&l=f&o=t&aim=true", "Microsoft,Laptop,Notebook,Intel", 1);
    dboperations.updateProduct(20, product).then(result => {
        response.status(201).json(result)
    })
});


var port = process.env.PORT || 8090;
app.listen(port);
console.log('Product API is runnning at ' + port);
