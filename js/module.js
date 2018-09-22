var basketModule = (function () {
    var basket = [];
      return {
          addItem: function (values) {
              basket.push(values);
          },
          getItemCount: function () {
              return basket.length;
          },
          getTotal: function () {
             let q = this.getItemCount();
             let p = 0;
              while(q--){
                  p += basket[q].price; 
              }
              return p;
          }
      }
  }());

basketModule.addItem({ item: 'bread', price: 0.5 });
basketModule.addItem({ item: 'butter', price: 0.3 });

console.log(basketModule.getItemCount());
console.log(basketModule.getTotal());