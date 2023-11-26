
let cal = {
    total: 0,
     
     add : function(a){
         this.total = this.total + a;
         return this
     },
     
     mul : function(b){
        this.total = this.total * b;
        return this
     },
     sub : function(c){
         this.total = this.total - c;
         return this
     }
     
     
 }
 
 
 cal.add(5).mul(10).sub(30)
 console.log(cal.total)