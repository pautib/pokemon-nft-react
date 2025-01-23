/*
* The imgUrl can be a static img (png) or a dynamic img (gif) url.
*/
export const getBase64EncodedImg = async (imgUrl) => {

    try {

        const base64Img = await fetch(imgUrl)
        .then((response) => response.blob())
        .then((blob) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = () => reject(new Error('FileReader error'));
            });
        });

        return base64Img;

    } catch (e) {
        console.error(e);
        throw new Error(`${imgUrl} could not be fetched`);
    }


}