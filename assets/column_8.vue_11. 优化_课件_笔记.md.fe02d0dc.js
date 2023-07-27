import{_ as e,o as a,c as o,V as s}from"./chunks/framework.3aae2b97.js";const f=JSON.parse('{"title":"使用key","description":"","frontmatter":{},"headers":[],"relativePath":"column/8.vue/11. 优化/课件/笔记.md","filePath":"column/8.vue/11. 优化/课件/笔记.md","lastUpdated":1690463223000}'),l={name:"column/8.vue/11. 优化/课件/笔记.md"},n=s(`<h1 id="使用key" tabindex="-1">使用key <a class="header-anchor" href="#使用key" aria-label="Permalink to &quot;使用key&quot;">​</a></h1><p>对于通过循环生成的列表，应给每个列表项一个稳定且唯一的key，这有利于在列表变动时，尽量少的删除、新增、改动元素</p><h1 id="使用冻结的对象" tabindex="-1">使用冻结的对象 <a class="header-anchor" href="#使用冻结的对象" aria-label="Permalink to &quot;使用冻结的对象&quot;">​</a></h1><p>冻结的对象不会被响应化</p><h1 id="使用函数式组件" tabindex="-1">使用函数式组件 <a class="header-anchor" href="#使用函数式组件" aria-label="Permalink to &quot;使用函数式组件&quot;">​</a></h1><p>参见<a href="https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6" target="_blank" rel="noreferrer">函数式组件</a></p><h1 id="使用计算属性" tabindex="-1">使用计算属性 <a class="header-anchor" href="#使用计算属性" aria-label="Permalink to &quot;使用计算属性&quot;">​</a></h1><p>如果模板中某个数据会使用多次，并且该数据是通过计算得到的，使用计算属性以缓存它们</p><h1 id="非实时绑定的表单项" tabindex="-1">非实时绑定的表单项 <a class="header-anchor" href="#非实时绑定的表单项" aria-label="Permalink to &quot;非实时绑定的表单项&quot;">​</a></h1><p>当使用<code>v-model</code>绑定一个表单项时，当用户改变表单项的状态时，也会随之改变数据，从而导致<code>vue</code>发生重渲染（<code>rerender</code>），这会带来一些性能的开销。</p><p>特别是当用户改变表单项时，页面有一些动画正在进行中，由于JS执行线程和浏览器渲染线程是互斥的，最终会导致动画出现卡顿。</p><p>我们可以通过使用<code>lazy</code>或不使用<code>v-model</code>的方式解决该问题，但要注意，这样可能会导致在某一个时间段内数据和表单项的值是不一致的。</p><h1 id="保持对象引用稳定" tabindex="-1">保持对象引用稳定 <a class="header-anchor" href="#保持对象引用稳定" aria-label="Permalink to &quot;保持对象引用稳定&quot;">​</a></h1><p>在绝大部分情况下，<code>vue</code>触发<code>rerender</code>的时机是其依赖的数据发生<strong>变化</strong></p><p>若数据没有发生变化，哪怕给数据重新赋值了，<code>vue</code>也是不会做出任何处理的</p><p>下面是<code>vue</code>判断数据<strong>没有变化</strong>的源码</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// value 为旧值， newVal 为新值</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (newVal </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> (newVal </span><span style="color:#89DDFF;">!==</span><span style="color:#A6ACCD;"> newVal </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">!==</span><span style="color:#A6ACCD;"> value)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>因此，如果需要，只要能保证组件的依赖数据不发生变化，组件就不会重新渲染。</p><p>对于原始数据类型，保持其值不变即可</p><p>对于对象类型，保持其引用不变即可</p><p>从另一方面来说，由于可以通过保持属性引用稳定来避免子组件的重渲染，那么我们应该细分组件来尽量避免多余的渲染</p><h1 id="使用v-show替代v-if" tabindex="-1">使用v-show替代v-if <a class="header-anchor" href="#使用v-show替代v-if" aria-label="Permalink to &quot;使用v-show替代v-if&quot;">​</a></h1><p>对于频繁切换显示状态的元素，使用v-show可以保证虚拟dom树的稳定，避免频繁的新增和删除元素，特别是对于那些内部包含大量dom元素的节点，这一点极其重要</p><p>关键字：频繁切换显示状态、内部包含大量dom元素</p><h1 id="使用延迟装载-defer" tabindex="-1">使用延迟装载（defer） <a class="header-anchor" href="#使用延迟装载-defer" aria-label="Permalink to &quot;使用延迟装载（defer）&quot;">​</a></h1><p>首页白屏时间主要受到两个因素的影响：</p><ul><li><p>打包体积过大</p><p>巨型包需要消耗大量的传输时间，导致JS传输完成前页面只有一个<code>&lt;div&gt;</code>，没有可显示的内容</p></li><li><p>需要立即渲染的内容太多</p><p>JS传输完成后，浏览器开始执行JS构造页面。</p><p>但可能一开始要渲染的组件太多，不仅JS执行的时间很长，而且执行完后浏览器要渲染的元素过多，从而导致页面白屏</p></li></ul><p>打包体积过大需要自行优化打包体积，本节不予讨论</p><p>本节仅讨论渲染内容太多的问题。</p><p>一个可行的办法就是<strong>延迟装载组件</strong>，让组件按照指定的先后顺序依次一个一个渲染出来</p><blockquote><p>延迟装载是一个思路，本质上就是利用<code>requestAnimationFrame</code>事件分批渲染内容，它的具体实现多种多样</p></blockquote><h1 id="使用keep-alive" tabindex="-1">使用keep-alive <a class="header-anchor" href="#使用keep-alive" aria-label="Permalink to &quot;使用keep-alive&quot;">​</a></h1><p>后续讲解</p><h1 id="长列表优化" tabindex="-1">长列表优化 <a class="header-anchor" href="#长列表优化" aria-label="Permalink to &quot;长列表优化&quot;">​</a></h1><p>后续讲解</p>`,35),t=[n];function p(r,c,i,d,h,u){return a(),o("div",null,t)}const v=e(l,[["render",p]]);export{f as __pageData,v as default};
