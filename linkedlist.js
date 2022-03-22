class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    // Defining push method

    push(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        
        this.length++;
        return this;
    }


    // Defining pop method

    pop() {
        let temp = this.head;
        let pre  = this.head;

        if(!this.head)
            console.erro('LinkedList is already empty');

        while(temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if(this.length === 0)
            this.head = null;
            this.tail = null;

        return temp;
    }


    // Defining unshift method

    unshift(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
            this.length++;
            return this;
    }


    // Defining shift method

      shift() {
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if(this.length === 0) 
            this.tail = null;

        return temp;        
      }

    // Defining get method
    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for(let i = 0; i < index; i++) {
            temp = temp.next
        }

        return temp;
    }

     set(index, value) {
         let temp = this.get(index);
         if(temp)
             temp.value = value;
             return true
         return false;
     }

    insert(index, value) {
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);
        if(index < 0 || index > this.length) return undefined;

        const  newNode = new Node(value);
        let temp = this.get(index-1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++
        return true;  
    }

    remove(index) {
        if(index === 0) return this.shift();
        if(index === this.length) return this.pop();
        if(index < 0 || index > this.length) return undefined;
        
        let data = this.get(index);
        let prev = this.get(index - 1);
        prev.next = data.next;
        data.next = null;
        this.length--;
        return data;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let next = temp.next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return this;
    }
}


let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);



