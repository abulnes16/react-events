export const transformText = ({ text }) => {
    if (text) {
        if (text.length > 250) {
            return text.substr(0, 250);

        }else{
            return text;
        }

    } else {
        return null;
    }
}