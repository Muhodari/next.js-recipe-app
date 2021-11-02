export default{
    name:"recipe",
    title:"Recipe",
    type:"document",

fields:[
    {
        name:"name",
        title:"Recipe Name",
        type:"string"
    },
    {
        name:"slug",
        title:"Slug",
        type:"slug",
        option:{
            source:"name",
            maxLength:96,
        }
    },

    {
        name:"chef",
        title:"Chef",
        type:"reference",
        to:{ type:"chef" }
    },
    {
        name:"mainImage",
        title:"Recipe Main Image",
        type:"image",
        option:{
            hotspot:true
        }

    },
    {
        name:"ingredient",
        title:"Ingredient",
        type:"array",
        of:[
            {
                type:"object",
                fields:[
                    {
                        name:"ingredient",
                        title:"Ingredient",
                        type:"reference",
                        to:[ { type: "ingredient"} ],
                    },

                    {
                        name:"wholeNumber",
                        title:"whole Number",
                        type:"number",

                    },
                    {
                        name:"fraction",
                        title:"Fraction",
                        type:"string",
                        options:{
                            list:   ["1/2","1/3","1/4","3/4","2/3"]
                        }
                    },
                    {
                        name:"unit",
                        title:"Unit",
                        type:"string",
                        options:{
                            list:["grams","cup","Tpsc.","tsp."]
                        }
                    }

                ]
            }
        ]
    }
 
    ]
}