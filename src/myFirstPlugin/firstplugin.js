import { defineAsyncComponent } from 'vue';
import { defu } from 'defu';
import { hideAll } from 'tippy.js';

export const tooltipOptionsInject = Symbol();
export function myFirstPlugin(app, options) {
  options = defu(options, {
    arrow: false,
  });

  app.config.globalProperties.$hideAllTolltips = hideAll;

  app.provide(tooltipOptionsInject, options);
  app.component(
    'ToolKit',
    defineAsyncComponent(() => import('./toolkit.vue'))
  );
  console.log('Working', options);
}
