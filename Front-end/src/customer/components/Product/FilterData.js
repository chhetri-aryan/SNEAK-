const color = [
    'white',
    "black",
    "Red",
    "Marun",
    "Pink",
    "Green",
    "Yellow",
    "Black"
];

const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            { value : "white", label: "white"},
            { value : "green", label: "green"},
            { value : "blue", label: "blue"},
            { value : "red", label: "red"},
            { value : "purple", label: "purple"},
            { value : "yellow", label: "yellow"},
            { value : "black", label: "black"},

        ],
    },

    {
        id:'size',
        name:"Size", 
        options: [
        { value : "S", label: "S"},
        { value : "M", label: "M"},
        { value : "L", label: "L"},
        ]
    }
];

export const singleFilter = [
    {
        id : "price",
        name: "Price",
        options: [
            { value : "2000-3000", label: "2000-3000"},
            { value : "3000-4000", label: "3000-4000"},
            { value : "4000-8000", label: "4000-8000"},
            { value : "10000-20000", label: "10000-20000"},
        ]
    },
    {
        id : "discount",
        name: "Discount Range",
        options: [
            { value : "10", label: "10% & above"},
            { value : "20", label: "20% & above"},
            { value : "30", label: "30% & above"},
            { value : "40", label: "40% & above"},
            { value : "50", label: "50% & above"},
        ]
    },
    {
        id : "stock",
        name: "Availability",
        options: [
            { value : "in_stock", label: "In Stock"},
            { value : "out_of_stock", label: "Out Of Stock"},
            
        ]
    },

];

export default filters;
