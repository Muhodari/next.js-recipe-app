import {
createClient,
createPreviewSubscriptionHook,
createImageUrlBuilder,
createProtableTextComponent
} from "next-sanity";

const config ={

    projectId:"2glrf999",
    dataset:"production",
    apiVersion:"2021-03-25",
    useCdn:false,
}

export const sanityClient = createClient()