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
        For this app, we'll also install <a href="https://element.eleme.io/#/en-US/component/form" target="_blank">element-ui</a> for their form components.
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
        Add these lines to your <tt>main.js</tt> to install element-ui.
      </p>

      <tutorial-highlighter
        slot="aside"
        title="main.js"
        :text="install2"
        lang="javascript"
        :line-numbers="false"
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

let install2 = `import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, { size: 'small' });`;

export default {
  data() {
    return {
      install1,
      install2
    };
  }
};
</script>
