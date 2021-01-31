class StringBuilder{
    constructor(str){
        this._value=str;
    }
     get value() {
        return this._value;
   }
    append(str){
        this._value+=str;
        return this;
        }
    prepend(str){
        this._value=str+this._value;
        return this;
        }
    pad(str){
       return str + this._value + str;
      
    }   
}
const builder = new StringBuilder('.');
// Сделайте чтоб выводило так, сделайте чейнинг:

console.log(builder.append('^').prepend('^').pad('='));    // '=^.^='