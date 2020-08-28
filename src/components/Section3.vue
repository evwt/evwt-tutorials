<template>
  <tutorial-section>
    <div slot="title">
      Layout
    </div>

    <div slot="intro">
      <p>
        A good place to start is adding a layout to your app. Check out the <a href="https://evwt-layout-playground.netlify.app" target="_blank">EVLayout playground</a> to get an idea of what's possible.
      </p>
    </div>

    <tutorial-step slot="step">
      <p>
        For our app, <a href="https://evwt-layout-playground.netlify.app/?name=%22app%22&direction=%22row%22&sizes=[%2232px%22,%221fr%22]&panes=[{name=%22toolbar%22&resizable=false},{name=%22right%22&direction=%22column%22&sizes=[%22250px%22,%221fr%22]&panes=[{name=%22categories%22},{name=%22main%22}]}]" target="_blank">this layout</a> is a good start.
      </p>

      <aside slot="aside">
        <a href="https://evwt-layout-playground.netlify.app/?name=%22app%22&direction=%22row%22&sizes=[%2232px%22,%221fr%22]&panes=[{name=%22toolbar%22&resizable=false},{name=%22right%22&direction=%22column%22&sizes=[%22250px%22,%221fr%22]&panes=[{name=%22categories%22},{name=%22main%22}]}]" target="_blank">
          <img
            width="600"
            alt="EVLayout Example"
            src="https://user-images.githubusercontent.com/611996/90986404-3a7e8e80-e548-11ea-9b3f-ec878473fa2e.png">
        </a>
      </aside>
    </tutorial-step>

    <tutorial-step slot="step">
      <p>
        Start with a fresh <tt>App.vue</tt>, and we'll add EvLayout to it.
      </p>
      <tutorial-highlighter
        slot="aside"
        title="App.vue"
        :text="snippetLayout1"
        lang="vue" />
    </tutorial-step>

    <tutorial-step slot="step">
      <p>
        Use it in your template with an empty layout.
      </p>
      <tutorial-highlighter
        slot="aside"
        title="App.vue"
        :text="snippetLayout3"
        lang="vue"
        :highlight-lines="['2:3', '7:14']" />
    </tutorial-step>

    <tutorial-step slot="step">
      <p>
        Now paste in the layout data from the layout builder.
      </p>
      <tutorial-highlighter
        slot="aside"
        title="App.vue"
        :text="snippetLayout4"
        lang="vue"
        :highlight-lines="['11:36']" />
    </tutorial-step>

    <tutorial-step slot="step">
      <p>
        EvLayout adds slots for each pane you define so let's add those.
      </p>
      <tutorial-highlighter
        slot="aside"
        title="App.vue"
        :text="snippetLayout5"
        lang="vue"
        :highlight-lines="['3:11']" />
    </tutorial-step>

    <tutorial-step slot="step">
      <p>
        Finally, let's add some basic CSS so we can see the layout.
      </p>
      <tutorial-highlighter
        slot="aside"
        title="App.vue"
        :text="snippetLayout6"
        lang="vue"
        :scroll-to-line="53"
        :highlight-lines="['53:72']" />
    </tutorial-step>

    <tutorial-step slot="step">
      <p>
        Launch your app with <tt>npm run electron:serve</tt> to see the results.
      </p>

      <aside slot="aside">
        <img
          width="600"
          alt="EVLayout Result"
          src="https://user-images.githubusercontent.com/611996/90990431-f6e74d00-e566-11ea-8486-afcfa80c8a9f.png">
      </aside>
    </tutorial-step>
  </tutorial-section>
</template>

<script>
import snippetLayout1 from '@/snippets/layout1';
import snippetLayout3 from '@/snippets/layout3';
import snippetLayout4 from '@/snippets/layout4';
import snippetLayout5 from '@/snippets/layout5';
import snippetLayout6 from '@/snippets/layout6';

export default {
  data() {
    return {
      snippetLayout1,
      snippetLayout3,
      snippetLayout4,
      snippetLayout5,
      snippetLayout6
    };
  }
};
</script>
