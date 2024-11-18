import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "m5RrNUapwzH3Ve3QtrGVQ-rsTJ_pnR7UM7--b54H95g",
});

export const getRandomImage = async () => {
    try {
        const result = await unsplash.photos.getRandom();
        if (result.type === 'success') {
            return result.response.urls.full;
        } else {
            console.log("hata: ", result.errors);
            return null;
        }
    } catch (error) {
       console.error("img alınırken bir hata oluştu: ", error);
       return null;
    }
};


