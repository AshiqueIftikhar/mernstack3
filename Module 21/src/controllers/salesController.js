const sales = require('../models/salesModel');

// Total Revenue
exports.totalRevenue = (req, res)=>{
    const query = [
        {
            $group:{
                _id:null,
                totalRevenue:{
                    $sum: {
                        $multiply:[
                            '$quantity', '$price'
                        ]
                    }
                }
            }
        }
    ];

    sales.aggregate(query).then((data,error)=>{
        if(error){
            res.status(400).json({status:"failed", data: error})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
   
}

// Quantity by Product
exports.quantityByProduct = (req, res)=>{
    const query = [
        {
            $group:{
                _id:'$product',
                totalQuantity:{
                    $sum: '$quantity'
                }
                
            }
        }
    ];
    sales.aggregate(query).then((data,error)=>{
        if(error){
            res.status(400).json({status:"failed", data: error})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

// Top Products 
exports.topProduct = (req, res)=>{
    const query = [
        {
            $group:{
                _id:'$product',
                totalRevenue:{
                    $sum: { $multiply:['$quantity', '$price']}
                }
            }
        },
        {
            $sort:{
                totalRevenue: -1
            }
        },
        {
            $limit: 5
        }
    ]
    sales.aggregate(query).then((data,error)=>{
        if(error){
            res.status(400).json({status:"failed", data: error})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}
  
// Average Price
exports.averagePrice = (req, res)=>{
    const query = [
        {
            $group:{
                _id:null,
                averagePrice:{
                    $avg: '$price'
                }
            }
        }
    ];
    sales.aggregate(query).then((data,error)=>{
        if(error){
            res.status(400).json({status:"failed", data: error})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

// Revenue By Month
exports.revenueByMonth = (req, res)=>{
    const query = [
        {
            $group:{
                _id:{
                    $dateToString: {format: '%Y-%m', date: '$date'},
                    // year: { $year: '$date' },
                    // month: { $month: '$date' },
                },
                totalRevenue:{
                    $sum:{$multiply:['$quantity','$price']}
                }
            }
        }
    ];

    sales.aggregate(query).then((data,error)=>{
        if(error){
            res.status(400).json({status:"failed", data: error})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

// Highest Quantity Sold
exports.highestQuantitySold = (req, res)=>{
    const query = [
        {
            $group:{
                _id:'$date',
                maxQuantity:{$max:'$quantity'}
            }
        },
        {
            $sort:{
                maxQuantity: -1
            }
        },
        {
            $limit: 1
        }
    ];

    sales.aggregate(query).then((data,error)=>{
        if(error){
            res.status(400).json({status:"failed", data: error})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

// Department Salary Expense
exports.departmentSalaryExpense = (req, res)=>{
    const query = [
        
    ];

    sales.aggregate(query).then((data,error)=>{
        if(error){
            res.status(400).json({status:"failed", data: error})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}
