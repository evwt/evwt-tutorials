<template>
  <tutorial-section>
    <div slot="title">
      Setup
    </div>

    <tutorial-step slot="step">
      <p>
        Install the latest <tt>vue-cli</tt> and create your app.
      </p>
      <tutorial-highlighter
        slot="aside"
        :text="install1"
        lang="bash"
        :highlight-lines="[1,2]"
        :line-numbers="false" />
    </tutorial-step>

    <tutorial-step slot="step">
      <p>
        Add EVWT.
      </p>
      <tutorial-highlighter
        slot="aside"
        :text="install1"
        lang="bash"
        :highlight-lines="[3,4]"
        :line-numbers="false" />
    </tutorial-step>

    <tutorial-step slot="step">
      <p>
        For this app, we'll also add <a href="https://element.eleme.io/#/en-US/component/form" target="_blank">element-ui</a> for their form components.
      </p>
      <tutorial-highlighter
        slot="aside"
        :text="install1"
        lang="bash"
        :highlight-lines="[5]"
        :line-numbers="false" />
    </tutorial-step>

    <tutorial-step slot="step">
      <p>
        To finish the setup, add element-ui to main.js.
      </p>

      <tutorial-highlighter
        slot="aside"
        title="main.js"
        :text="install2"
        lang="javascript"
        :highlight-lines="[/element/i]" />
    </tutorial-step>

    <tutorial-step slot="step">
      <p>
        You should now be able to run your app to verify everything works correctly.
      </p>

      <tutorial-highlighter
        slot="aside"
        text="npm run electron:serve"
        lang="bash"
        :highlight-lines="[1]"
        :line-numbers="false" />
    </tutorial-step>
  </tutorial-section>
</template>

<script>
let install1 = `npm install -g @vue/cli
vue create my-app
cd my-app
vue add evwt
npm install element-ui`;

let install2 = `import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, { size: 'small' });

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
`;

export default {
  data() {
    return {
      install1,
      install2
    };
  }
};
</script>
