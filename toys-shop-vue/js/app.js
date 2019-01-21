const toy = (name, price, batteries, material, color, weight, package, image1, image2, image3, discr, quantity, id) => ({name, price, batteries, material, color, weight, package, image1, image2, image3, discr, quantity, id})
var qty = [0, 0, 0];


const toys = [
  toy('Soft Teddy Bear', '650', 'Included', 'Cotton', 'brown', '798', '12 x 10 x 10', 'img/toy-1/f1.jpg', 'img/toy-1/f2.jpg', 'img/toy-1/f3.jpg', 'Teddy bears are a timeless way to share love with every hug!', 0, 1),
  toy('LEGO Technic Cherry Picker', '10', 'Not needed', 'Plastic', ' ', '470', '15 x 15 x 9', 'img/toy-2/f1.png', 'img/toy-2/f2.png', 'img/toy-2/f3.png', 'Force and movement with this cool LEGO Technic', 0, 2),
  toy('Water Pistol', '4', 'Not needed', 'Plastic', 'blue/red/yellow', '470', '15 x 15 x 9', 'img/toy-3/f1.jpg', 'img/toy-3/f1.jpg', 'img/toy-3/f1.jpg', 'Water guns sports a variety of bright neon colors. Great for outdoor activities.', 0, 3)
      ]

Vue.component('tab-discription', {
  props: ['toy'],
  template: '<div><p>{{ toy.discr }}</p></div> '
})
Vue.component('tab-details', {
  props: ['toy'],
  template: '<div class="tab-pane fade show active" id="nav-details" role="tabpanel" aria-labelledby="nav-details-tab">                <table>  <tr> <td>Batteries Included</td> <td>{{ toy.batteries }}</td>  </tr> <tr> <td>Material Type(s)</td> <td>{{ toy.material }}</td> </tr> <tr> <td>Color</td> <td>{{ toy.color }}</td> </tr>  <tr> <td>Item Weight</td> <td>{{ toy.weight }} g</td> </tr> <tr>  <td>Package Dimensions</td> <td>{{ toy.package }}</td>  </tr> </table> </div>'
})


Vue.component("item", {
  template: '<div class="box"> <img :src="item_data.image1" /> <i class="fa fa-plus" v-on:click="addItem(item_data)"></i> <h2>{{item_data.name}}</h2> <p>$ {{item_data.price}}</p>            </div>',
  props: ["item_data", "buyitems"],
  methods: {
    addItem: function (item_data) {
      qty[item_data.id] += 1;
      if (qty[item_data.id] <= 1) {
        this.pushData();
      } else {
        var i = this.findIndex(this.$parent.buyitems, "id", item_data.name);
        this.$parent.buyitems[i].qty += 1;
        this.$parent.buyitems[i].total = this.$parent.buyitems[i].qty * this.$parent.buyitems[i].price;
        console.log(i);
      }
      
    },
    pushData: function () {
      this.$parent.buyitems.push({
        img: this.item_data.imgage1,
        name: this.item_data.name,
        price: this.item_data.price,
        qty: 1,
        total: this.item_data.price,
        id: this.item_data.id
      });
    },
    findIndex: function (array, attr, value) {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
          return i;
        }
      }
      return -1;
    },
  }
});
Vue.component("buyitem", {
  template: '<div class="row"> <h4>{{buy_data.name}}</h4> <p>$ {{buy_data.price}}</p> <div class="qty-minus" v-on:click="minusQty(buy_data)">-</div> <div class="qty">{{buy_data.qty}}</div>  <div class="qty-plus" v-on:click="plusQty(buy_data)">+</div> <div class="del" v-on:click="removeItem(buy_data)">Remove</div>  <div class="totalprice">{{buy_data.total}}</div> </div>',
  props: ["buy_data", "buyitems"],
  methods: {
    removeItem: function (buy_data) {
      var index = this.$parent.buyitems.indexOf(buy_data);
      this.$parent.buyitems.splice(index, 1);
      qty[buy_data.id] = 0;
    },
    plusQty: function (buy_data) {
      buy_data.qty += 1;
      buy_data.total = buy_data.qty * buy_data.price;
    },
    minusQty: function (buy_data) {
      buy_data.qty -= 1;
      if (buy_data.qty < 0) {
        buy_data.qty = 0;
      }
      buy_data.total = buy_data.qty * buy_data.price;
    }

  }
});

new Vue({
  el: '#home',
  data: {
    navBar: true
  }
})

new Vue ({
  el: '#product', 
  data: {
    toys: toys,
    toy: toys[0],
    selectedToyIndex: 0,
    search: '',
    modalVisibility: false,
    currentTab: 'Discription',
    tabs: ['Discription', 'Details'],
    buyitems: []
  },
  methods: {
    selectToy(index) {
      this.toy = toys[index]
      this.selectedToyIndex = index
    },
    total: function () {
      var sum = 0;
      this.buyitems.forEach(function (buyitem) {
        sum += parseInt(buyitem.total);
      });
      return sum;
    }
  },
  computed: {
    filteredToys() {
      return this.toys.filter(toy => {
        return toy.name.indexOf(this.search) > -1
      })
    },
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
 },
  components: {
    'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide    
  }
})

new Vue({
  el: '#home',
  data: {
    navBar: true
  }
})