class Node {
    constructor(value =  null) {
       this.value = value;
       this.left = null;
       this.right = null;
    }
}

class BTS {
    constructor() {
        this.root = null;
    }

    insertMethod(value) {
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        } else {
            let temp = this.root;
            while(true) {
                if(newNode.value < temp.value) {
                    if(temp.left === null) {
                       temp.left = newNode;
                       return true 
                    } else {
                        temp = temp.left;
                    }
                } else {
                    if(temp.right === null) {
                        temp.right = newNode;
                        return true 
                     } else {
                         temp = temp.right;
                     }
                }
            }
        }
    }

    searchMethod(value = 1) {
        if(this.root === null) throw new Error(`Our Binary Search Tree Is Empty`);
   
        let temp = this.root;
        while(true) {
          if(!temp) return -1; 
          if(value <= temp.value) {
              if(temp.value === value) {
                return temp;
              } else {
                temp = temp.left;
              }
          }  else if(value >= temp.value) {
            if(temp.value === value) {
                return temp;
            } else {
                temp = temp.right;
            }
          } 
        }
    }

    deleteMethod(value) {
        if(!this.root) throw new Error('Our Binary Search Tree Is Empty');
        let temp = this.root;
        let prev = this.root;

        while(temp) {
            if(value < temp.value) { 
                if(temp.value === value) {
                  temp.left = prev;
                  prev.left = null;
                } else {
                   prev = temp;
                   temp = temp.left;
                }
            } else {
               if(temp.value === value) {
                   
                } else {
                  prev = temp;
                  temp = temp.right
                }
            }
        }
    }
}

const firstNode = new BTS();
firstNode.insertMethod(5);
firstNode.insertMethod(3);
firstNode.insertMethod(6);
firstNode.insertMethod(2);
firstNode.insertMethod(4);
console.log(firstNode.searchMethod(5));
console.log(firstNode.deleteMethod(2));