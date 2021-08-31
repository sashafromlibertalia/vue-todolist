import Vue from 'vue'
import App from './App.vue'
import InlineSvg from "vue-inline-svg";
import ImageFinder from "@/mixins/ImageFinder";

Vue.mixin(ImageFinder);
Vue.component("inline-svg", InlineSvg);
Vue.config.productionTip = false

new Vue({
  el: "#app",
  render: h => h(App),
})
