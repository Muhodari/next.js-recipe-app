import {
createClient,
createPreviewSubscriptionHook,
createImageUrlBuilder,
createPortableTextComponent
} from "next-sanity";

const config ={ 

    projectId:"2glrf999",
    dataset:"production",
    apiVersion:"2021-03-25",
    useCdn:false,
}

export const sanityClient = createClient(config)

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const UrlFor = (source)=> createImageUrlBuilder(config).image(source); 

export const PortableText = createPortableTextComponent({
    
}) 