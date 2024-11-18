import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "m5RrNUapwzH3Ve3QtrGVQ-rsTJ_pnR7UM7--b54H95g",
});

unsplash.photos.getRandom().then((result) => {
  if (result.type === "success") {
    console.log(result.response.urls.full);
  } else {
    console.log("Hata:", result.errors);
  }
});
