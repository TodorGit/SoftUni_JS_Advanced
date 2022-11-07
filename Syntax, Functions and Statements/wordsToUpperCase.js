function upperCase(text){

    return text.match(/\w+/g).join(", ").toUpperCase()
}