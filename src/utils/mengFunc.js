export default {
  sortArray(arr){
    return arr.sort((a,b)=>{
      return a-b;
    })
  },
  deepClone(obj) { 
    let type = this.isArrayOrObj(obj);
    if (!type) {
      return obj;
    }
    return JSON.parse(JSON.stringify(obj));
  },
 
};
