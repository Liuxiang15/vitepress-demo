import{_ as a,o as l,c as e,V as t}from"./chunks/framework.3aae2b97.js";const f=JSON.parse('{"title":"文件下载的消息格式","description":"","frontmatter":{},"headers":[],"relativePath":"column/6.network/13. 文件下载/课件.md","filePath":"column/6.network/13. 文件下载/课件.md","lastUpdated":1690463223000}'),o={name:"column/6.network/13. 文件下载/课件.md"},p=t('<h1 id="文件下载的消息格式" tabindex="-1">文件下载的消息格式 <a class="header-anchor" href="#文件下载的消息格式" aria-label="Permalink to &quot;文件下载的消息格式&quot;">​</a></h1><p>服务器只要在响应头中加入<code>Content-Disposition: attachment; filename=&quot;xxx&quot;</code>即可触发浏览器的下载功能</p><p>其中：</p><ul><li>attachment 表示附件，浏览器看到此字段，触发下载行为（不同的浏览器下载行为有所区别）</li><li>filename=&quot;xxx&quot;，这是告诉浏览器，保存文件时使用的默认文件名</li></ul><p>这部分操作是由服务器完成的，和前端开发无关</p><h1 id="启用迅雷下载" tabindex="-1">启用迅雷下载 <a class="header-anchor" href="#启用迅雷下载" aria-label="Permalink to &quot;启用迅雷下载&quot;">​</a></h1><p>用户可能安装了某些下载工具，这些下载工具在安装时，都会自动安装相应的浏览器插件，只要对下载地址稍作修改，就会触发浏览器使用插件进行下载，当然，不同插件的地址规则不同</p><p>比如，迅雷的下载地址规则为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">thunder://base64(AA地址ZZ)</span></span></code></pre></div><h1 id="示例服务器提供的下载地址" tabindex="-1">示例服务器提供的下载地址 <a class="header-anchor" href="#示例服务器提供的下载地址" aria-label="Permalink to &quot;示例服务器提供的下载地址&quot;">​</a></h1><p><a href="http://localhost:8000/download/Wallpaper1.jpg" target="_blank" rel="noreferrer">http://localhost:8000/download/Wallpaper1.jpg</a></p><p><a href="http://localhost:8000/download/Wallpaper2.jpg" target="_blank" rel="noreferrer">http://localhost:8000/download/Wallpaper2.jpg</a></p><p><a href="http://localhost:8000/download/Wallpaper3.jpg" target="_blank" rel="noreferrer">http://localhost:8000/download/Wallpaper3.jpg</a></p><p><a href="http://localhost:8000/download/Wallpaper4.jpg" target="_blank" rel="noreferrer">http://localhost:8000/download/Wallpaper4.jpg</a></p><p><a href="http://localhost:8000/download/Wallpaper5.jpg" target="_blank" rel="noreferrer">http://localhost:8000/download/Wallpaper5.jpg</a></p><p><a href="http://localhost:8000/download/Wallpaper6.jpg" target="_blank" rel="noreferrer">http://localhost:8000/download/Wallpaper6.jpg</a></p><p><a href="http://localhost:8000/download/Wallpaper7.jpg" target="_blank" rel="noreferrer">http://localhost:8000/download/Wallpaper7.jpg</a></p><p><a href="http://localhost:8000/download/Wallpaper8.jpg" target="_blank" rel="noreferrer">http://localhost:8000/download/Wallpaper8.jpg</a></p><p><a href="http://localhost:8000/download/Wallpaper9.jpg" target="_blank" rel="noreferrer">http://localhost:8000/download/Wallpaper9.jpg</a></p><p><a href="http://localhost:8000/download/Wallpaper10.jpg" target="_blank" rel="noreferrer">http://localhost:8000/download/Wallpaper10.jpg</a></p>',20),r=[p];function n(h,d,s,c,i,_){return l(),e("div",null,r)}const u=a(o,[["render",n]]);export{f as __pageData,u as default};
