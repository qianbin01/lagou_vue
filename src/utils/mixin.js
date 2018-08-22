export const mixin = {
  data() {
    return {};
  },
  computed: {},
  methods: {},
  directives: {
    'load-more': {
      bind: (el, binding) => {
        el.addEventListener('scroll', () => {
          let scrollHeight = el.scrollHeight;
          let scrollTop = el.scrollTop;
          let height = el.clientHeight;
          if (scrollTop + height >= scrollHeight - 3) {
            binding.value();
          }
        }, false);
      }
    }
  }
};
