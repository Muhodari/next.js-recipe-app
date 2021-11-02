export default{
    name:"chef",
    title:"Chef",
    type:"document",
    fields:[

       {
           name:"name",
           title:"Chef's title",
           type:"string"
        },
        {
            name:"image",
            title:"Image",
            type:"image",
            Options:{
                hotspot:true,
            },
         },

         {
             name:"bio",
             title:"Bio",
             type:"array",
        
     of:[
                  {
                     title:"Block",
                     type:"block",
                     styles:[ { title:"Normal",value:"normal" } ],
                     lists:[],

                 }
             ]

         }

    ]



}
