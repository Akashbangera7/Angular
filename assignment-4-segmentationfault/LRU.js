
// This is the code for LRU cache. LRU stands for Least Rcently Used. This algorithm works in this manner : When they are multiple values which needs to be stored but the cache capacity is limited, the least recently used value is replaced by the value

var LRUCache = function(capacity) {

        this.capacity = capacity; // Capacity of theLRU Cache
        this.length = 0  //Current length of the cache
        this.map = {}

        this.head = null
        this.tail = null
}

LRUCache.prototype.node = function(key,value){
    this.key = key
    this.value = value

    this.newer = null
    this.older = null

}

LRUCache.prototype.get = function(key){
    if(this.map.hasOwnProperty(key)){
      this.updateKey(key)
      return this.map[key].val
    }else{
      return -1
    }
  }
  LRUCache.prototype.updateKey = function(key){
    var node = this.map[key]
    // break the chain and reconnect with newer and older
    if(node.newer){
      node.newer.older= node.older
    }else{
      this.head = node.older
    }
  
    if(node.older){
      node.older.newer = node.newer
    }else{
      this.tail = node.newer
    }
  
    // replace the node into head - newest
    node.older = this.head
    node.newer = null
    if(this.head){
      this.head.newer = node
    }
    this.head = node
  
    // if no items in the bucket, set the tail to node too.
    if(!this.tail){
      this.tail = node
    }
  }

 LRUCache.prototype.set = function(key,value){
  var node = new this.node(key,value)
  // update the value for exist entries
  if(this.map.hasOwnProperty(key)){
    this.map[key].val = value//adding value to the hashmap
    this.updateKey(key)//updating the key value
    return
  }
  if(this.length >= this.capacity){
    // remove the least recently used item
    var dKey = this.tail.key
    this.tail = this.tail.newer
    if(this.tail){
      this.tail.older = null
    }
    delete this.map[dKey]//removing the least recently used value
    this.length --
  }
 // insert node into the head
  node.older = this.head
  // if have head, we need re-connect node with other nodes older than head
  if(this.head){
    this.head.newer = node
  }
  this.head = node
  // if no tail which means first insert, set the tail to node too
  if(!this.tail){
    this.tail = node
  }
  this.map[key] = node
  this.length ++
 
}
 var cache = new LRUCache(3);
// set some dummy values
cache.set("key1", "2");
cache.set("key2", "3");
cache.set("key3", "3");
cache.set("key4", "1");
cache.set("key5", "2");
cache.set("key6", "3");

 // some value1
//console.log(cache.length); // 5

console.log(cache.get("key1"));
console.log(cache.get("key2"));
console.log(cache.get("key3"));// null, since it's least recently used.
//console.log(cache.length); // 5

