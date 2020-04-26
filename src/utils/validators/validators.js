export const requiredField = value => {
    if(value){
        return undefined;
    }
    return "Field is required";
};

export const maxLengthCreator = (maxLength) => {
    return (value) => {
        if(value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
        return undefined;
    }
};
