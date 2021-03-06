const _public = {};

_public.build = ({controller = {}, template = ''} = {}, container) => {
  const vm = new Vue({ template, ...controller });
  vm.$mount(container);
  return vm;
};

export default _public;
