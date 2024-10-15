/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2d9bf93cf5a6cea22aad1f02849cf374"
  },
  {
    "url": "addition/latex.html",
    "revision": "b299f8277a9144e3c668d55912181b60"
  },
  {
    "url": "addition/markdown.html",
    "revision": "ca9f846e7f32c88df97cdc0e5448ec09"
  },
  {
    "url": "addition/svg.html",
    "revision": "c6f461e0fc726985a096ad6c46c5b7bf"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "74bc7e2d3473cda9950766c11d6ca741"
  },
  {
    "url": "addition/xml.html",
    "revision": "03a0f985d3a67ab9cad2064034ec2713"
  },
  {
    "url": "addition/yaml.html",
    "revision": "b29e92772060c6eb42b6e021bdb3a852"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "d0845873b7884b07e506d87e7bb897ad"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "4891a712cec2c268874a341fa580499b"
  },
  {
    "url": "assets/css/0.styles.7324eb70.css",
    "revision": "3d1fde1177ed845ee434b85c725f3b20"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.16039208.js",
    "revision": "772eb044def96e337eb4f8b080863794"
  },
  {
    "url": "assets/js/11.7cfb9174.js",
    "revision": "9f23c9e76215dda157d8f6f5daa9614b"
  },
  {
    "url": "assets/js/12.4f276704.js",
    "revision": "3c4c1e66afc6bd9b44a99367b3d2866d"
  },
  {
    "url": "assets/js/13.3c6bfe0a.js",
    "revision": "da156549200e469e1276e46f3e6ef4bc"
  },
  {
    "url": "assets/js/14.0bd01682.js",
    "revision": "c47328bc2c13f7115d3523316b3dae94"
  },
  {
    "url": "assets/js/15.93329453.js",
    "revision": "823bff4713cd6ebfa1df3f2270e59699"
  },
  {
    "url": "assets/js/16.7e387501.js",
    "revision": "121102fbd67275286d23f2aca679f314"
  },
  {
    "url": "assets/js/17.a4ee2dcc.js",
    "revision": "90031f5273046d6a7cadd6f681ddccc2"
  },
  {
    "url": "assets/js/18.3c65c578.js",
    "revision": "1e888ed867821210103a776df7d974bb"
  },
  {
    "url": "assets/js/19.bfa68350.js",
    "revision": "2c8f84a063fc1c020edb811f360159cf"
  },
  {
    "url": "assets/js/20.c42b9d9c.js",
    "revision": "24b55da104c6c2ebdbeb4bc1e570fb0f"
  },
  {
    "url": "assets/js/21.c5d94669.js",
    "revision": "b8488d42c95a8ebb11fadd889a4deccb"
  },
  {
    "url": "assets/js/22.3ba78248.js",
    "revision": "f0faaee7b85968d3a2f4de504b297654"
  },
  {
    "url": "assets/js/23.514af02c.js",
    "revision": "1f021b3ee4898221bf8f0b3b99310c14"
  },
  {
    "url": "assets/js/24.1b088810.js",
    "revision": "0fe127f1b1f2754a35b1448b3e18e21a"
  },
  {
    "url": "assets/js/25.ce3653a3.js",
    "revision": "ebdacec2148746f25484c3c6d9e79512"
  },
  {
    "url": "assets/js/26.9cf47397.js",
    "revision": "56c57b882017e36574bd090e0d0ebb43"
  },
  {
    "url": "assets/js/27.b1751166.js",
    "revision": "7cb4ea29a62e7fd8ee21a3b7a3346ce7"
  },
  {
    "url": "assets/js/28.181c375d.js",
    "revision": "242b5fcc22d02c0d0234600397ff2afd"
  },
  {
    "url": "assets/js/29.16206b95.js",
    "revision": "345019e0ffbc6b4f034553db8e5f73df"
  },
  {
    "url": "assets/js/3.107e051b.js",
    "revision": "b0198408ea99fe4a38749e3bd363df34"
  },
  {
    "url": "assets/js/30.7579c81a.js",
    "revision": "0358003931f9259e9974c56d188cc6d0"
  },
  {
    "url": "assets/js/31.262df2c5.js",
    "revision": "d5cae0d058b90b40c8d210ece5b64982"
  },
  {
    "url": "assets/js/32.c1139ca5.js",
    "revision": "fbadaee1f57ff1b98e972b533647093b"
  },
  {
    "url": "assets/js/33.6e991267.js",
    "revision": "f0909ec4992601e290bd9aa5b41205fd"
  },
  {
    "url": "assets/js/34.7dc88517.js",
    "revision": "bc17057f6d0550ceb626ccdd52c0aab8"
  },
  {
    "url": "assets/js/35.a0e2494b.js",
    "revision": "a6a7aeb380066576e037fe7936e79b59"
  },
  {
    "url": "assets/js/36.4f2a6c98.js",
    "revision": "bdac74ffaac47590838de1f7636dd0ba"
  },
  {
    "url": "assets/js/37.c3a5b353.js",
    "revision": "eaa7411fd83d5e700e281ffcd77b7b11"
  },
  {
    "url": "assets/js/38.8d0d2f87.js",
    "revision": "89cfafd5833751a82fbc2f3bfe89c031"
  },
  {
    "url": "assets/js/39.4011294e.js",
    "revision": "3fd34eb5d978a0778183f888cbcc0bb4"
  },
  {
    "url": "assets/js/4.6ca4c8bd.js",
    "revision": "c30d49386e037ce8b91fcfe76749f173"
  },
  {
    "url": "assets/js/40.0db37018.js",
    "revision": "66d70cf50536e83f7db78f516839dd5d"
  },
  {
    "url": "assets/js/41.8a45f9c4.js",
    "revision": "88618cea85d6fc9b095af0686d27f47f"
  },
  {
    "url": "assets/js/42.ec9c52f5.js",
    "revision": "6903936ca4b62005088d1fbf74a53b87"
  },
  {
    "url": "assets/js/43.0e41a140.js",
    "revision": "13d24e2ea7ffa4997b5dc2b83ce862f4"
  },
  {
    "url": "assets/js/44.577c97ae.js",
    "revision": "e917436bf43ed56c9a6714a9178a96ae"
  },
  {
    "url": "assets/js/45.6749edd1.js",
    "revision": "7073fb6b15ba8ed768c66d7ae39cf283"
  },
  {
    "url": "assets/js/46.df279e40.js",
    "revision": "c63dbacd2e8ade4582275d926cdf67ec"
  },
  {
    "url": "assets/js/47.6f214b41.js",
    "revision": "f76f712ab9df97305f4026186d283963"
  },
  {
    "url": "assets/js/48.12243049.js",
    "revision": "5e94969aba7556783101231b8db158a9"
  },
  {
    "url": "assets/js/49.066a046d.js",
    "revision": "038dd8ef05fb705a3b8e728542c43b88"
  },
  {
    "url": "assets/js/5.56dd59ee.js",
    "revision": "dc5f21833f9e5f89306f5b08ad2c9424"
  },
  {
    "url": "assets/js/50.1243fc50.js",
    "revision": "74d4b42cb068d4891f72625e6cce688f"
  },
  {
    "url": "assets/js/51.7afe8722.js",
    "revision": "27beea682eda34367d55103f72c693aa"
  },
  {
    "url": "assets/js/52.2d9af185.js",
    "revision": "36bba405810c8abdebfcd171fc55658e"
  },
  {
    "url": "assets/js/53.f73c14e1.js",
    "revision": "493e7893d783b132a0c74402fd241e7b"
  },
  {
    "url": "assets/js/54.97a89e2a.js",
    "revision": "a5e31ca74e62ed4c87acd6382f27a484"
  },
  {
    "url": "assets/js/55.5fb0fe0a.js",
    "revision": "627a2f5f061ac667e4a77b08cd6aac40"
  },
  {
    "url": "assets/js/56.ea035eda.js",
    "revision": "f6ef0e5df790124738ed34cd382e5312"
  },
  {
    "url": "assets/js/57.dcb3a91d.js",
    "revision": "db9932c886ece68b838c79af181a5d6e"
  },
  {
    "url": "assets/js/58.4fe72bc6.js",
    "revision": "085cffea46bf6ad9e94df658a6d9d6f2"
  },
  {
    "url": "assets/js/59.46d8e0bd.js",
    "revision": "b4c69aed8ff43bc528180a501369f0b9"
  },
  {
    "url": "assets/js/6.001f1b42.js",
    "revision": "72d8f108a866484e9869f64ff049fe2a"
  },
  {
    "url": "assets/js/60.e2940580.js",
    "revision": "db429738e1b3a3d51e3e3d6005e09c99"
  },
  {
    "url": "assets/js/61.edc840f7.js",
    "revision": "27f00ba3c8d5a53e0662050ffb3b41c1"
  },
  {
    "url": "assets/js/62.5836acea.js",
    "revision": "beb66ba605a26f2b356b94e3cd9ab54b"
  },
  {
    "url": "assets/js/63.7fd81bae.js",
    "revision": "859ae6b0c5cd9bfe208ade6cb2e61d1f"
  },
  {
    "url": "assets/js/64.8db1fb5b.js",
    "revision": "548109ce7f33be23954e0655b44f5956"
  },
  {
    "url": "assets/js/65.5b2d90f4.js",
    "revision": "0da67074b80bac1611ad2975cfc296e1"
  },
  {
    "url": "assets/js/66.67e8fd28.js",
    "revision": "d6e482b6c4553961ef59d4093c3c0ba4"
  },
  {
    "url": "assets/js/67.a7aa4604.js",
    "revision": "a73e2430a78e56a91e4903b7f34d8e45"
  },
  {
    "url": "assets/js/7.72cd435d.js",
    "revision": "f3455dfc88281262c49b92030b3b5b34"
  },
  {
    "url": "assets/js/8.398eb1ea.js",
    "revision": "9473028b95db7c2aaafa985276a37701"
  },
  {
    "url": "assets/js/9.c13a85dc.js",
    "revision": "8b2fc1d8e5263ae6b2c99363488e2ef9"
  },
  {
    "url": "assets/js/app.37ac8fd5.js",
    "revision": "e2c1934b8101b24257ce3f7af1a7e7aa"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "c/c.html",
    "revision": "b91415c63ddcce75bbd0f4cf1cdbb2a3"
  },
  {
    "url": "c/参考.html",
    "revision": "afbe8a74afd57d0b5188809013021990"
  },
  {
    "url": "c/实例.html",
    "revision": "9700090da2c0ab11676f78fb73222772"
  },
  {
    "url": "computer/harmonyos.html",
    "revision": "de025149165a0faf763ec6888a5c90c5"
  },
  {
    "url": "computer/操作系统.html",
    "revision": "11d270533c35e3f41a2ca9016eea62d7"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "51be3f169a8f9fa482852a83af6b10d8"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "357c823eee5e580893d47fc7f4d6024e"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "bbfa14e310100f8164b49c0b4d4bfa24"
  },
  {
    "url": "cpp/cpp.html",
    "revision": "152783d1401109d674a210400f9f440d"
  },
  {
    "url": "electronics/半导体物理.html",
    "revision": "84940cf326d8407b4889f9b66c389b9e"
  },
  {
    "url": "electronics/单片机应用.html",
    "revision": "7e7711f22ea5e4ae45e3bec113cffe7d"
  },
  {
    "url": "electronics/数字电路.html",
    "revision": "22d1d629096bf8ee46b2c45ef5d4808f"
  },
  {
    "url": "electronics/模拟电路.html",
    "revision": "6c9fe16f8708c6c9cea0f93a30090519"
  },
  {
    "url": "electronics/电路基础.html",
    "revision": "5a8a93628d2133c5078d1ffd7d6846b9"
  },
  {
    "url": "graph/example.html",
    "revision": "52833cbee1d9094f64c1f2b7307f0304"
  },
  {
    "url": "graph/test1.html",
    "revision": "1ce2c3df8f71d1d54aede014d24f17d5"
  },
  {
    "url": "html/css.html",
    "revision": "18d2bbc46e2b5ced476e87df71c4630c"
  },
  {
    "url": "html/html.html",
    "revision": "d1543b9ff0c24282454f96730e8d36d0"
  },
  {
    "url": "html/me.html",
    "revision": "dbc352538f39c8d6726dc70776ef82e3"
  },
  {
    "url": "html/实例.html",
    "revision": "056bd289bfab4b658154abb5b27995d4"
  },
  {
    "url": "img/icon/BULBASAUR.png",
    "revision": "27c12869d37faad54a58c0e5489595dd"
  },
  {
    "url": "img/icon/PIKACHU.png",
    "revision": "60cc8e1e4e21bff837fb25f7427907f2"
  },
  {
    "url": "img/logo.png",
    "revision": "c89844f2aee46b3530d38e552691b75c"
  },
  {
    "url": "img/python/图表绘制示例1.svg",
    "revision": "9d50e22c8fa88a4350d14dd83abd02bf"
  },
  {
    "url": "img/单片机/8051单片机.png",
    "revision": "0b03e8386c72ed2da31313c1055b17e4"
  },
  {
    "url": "img/单片机/LCD1602工作原理配图.png",
    "revision": "15a26ce46f8e8923080c6b9884f2a2a5"
  },
  {
    "url": "img/单片机/LCD1602接线图.png",
    "revision": "c5a45ae5543e5e9ea5eb5ab1b8d09b60"
  },
  {
    "url": "img/单片机/中断程序执行过程.svg",
    "revision": "026e065d6fe8a7f96b9a47d027a94681"
  },
  {
    "url": "img/单片机/按键的使用电路示意图.png",
    "revision": "371523aa6672e00be1b04259a073cd3a"
  },
  {
    "url": "img/单片机/按键闭合波形.svg",
    "revision": "a38d5733c84edc393140ebd082b1ee9f"
  },
  {
    "url": "img/单片机/矩阵键盘原理图.png",
    "revision": "bf3ca54fdbd626d1f20829da9d796135"
  },
  {
    "url": "img/计算机组成原理/8086物理地址生成过程.svg",
    "revision": "63d569e0387a4fa81ba6b3e84f12f084"
  },
  {
    "url": "img/计算机组成原理/X86体系结构.svg",
    "revision": "b93af07c2cd84c88a0ba89671e4b0cf2"
  },
  {
    "url": "img/计算机组成原理/X86指令简介.svg",
    "revision": "2384a4adf327079658b89e0d6d7d4fce"
  },
  {
    "url": "img/计算机组成原理/冯诺依曼结构图.svg",
    "revision": "d4c0d14e88ab991aa66dd26a4f487d2b"
  },
  {
    "url": "img/计算机组成原理/指令的格式.svg",
    "revision": "91ad50c06b61b441612dbabcde6c0c91"
  },
  {
    "url": "img/计算机组成原理/标志寄存器.svg",
    "revision": "302403f1560f1591367b053ae43cb773"
  },
  {
    "url": "img/计算机组成原理/简单指令系统示例.svg",
    "revision": "574de3077d079e92200b925678fe7964"
  },
  {
    "url": "img/计算机组成原理/计算机执行指令的过程.svg",
    "revision": "1534b8a2a6e0d812035830007a53c164"
  },
  {
    "url": "img/计算机组成原理/计算机运行过程.svg",
    "revision": "5394f42c9cdef3e6dd0872f96ad7df6d"
  },
  {
    "url": "img/计算机组成原理/输入输出示意图.svg",
    "revision": "c57103fb80fc751fc7fdb997e92a59f7"
  },
  {
    "url": "img/计算机组成原理/运算任务示例.svg",
    "revision": "5a9d04f92c26c28b063ee48785daa75a"
  },
  {
    "url": "img/计算机组成原理/运算器的结构.svg",
    "revision": "a0c2b4c16ef3392b44988f17d2423c72"
  },
  {
    "url": "index.html",
    "revision": "b568c4c986f361b48f646a5cd497c869"
  },
  {
    "url": "javascript/ajax.html",
    "revision": "d86ad2d445718ca757696ef36eb278a0"
  },
  {
    "url": "javascript/electron.html",
    "revision": "91f7824b36e96c760c6b427759bf4361"
  },
  {
    "url": "javascript/JavaScript.html",
    "revision": "6f07bcedb605c01c53cd1f380152e1ca"
  },
  {
    "url": "javascript/json.html",
    "revision": "b7c061c24114836d22a6b656df3aa976"
  },
  {
    "url": "javascript/nodejs.html",
    "revision": "854932e8ce5efdd35ae6013c338edff5"
  },
  {
    "url": "javascript/pwa.html",
    "revision": "7aef2e7eb4e2eb331799445569b0eaac"
  },
  {
    "url": "javascript/typescript.html",
    "revision": "eefebd481f60c78b124ced6ee8c3d05b"
  },
  {
    "url": "javascript/Vue.html",
    "revision": "d237ee35942caa8a40a0c6bfccc3a796"
  },
  {
    "url": "javascript/WebAssembly.html",
    "revision": "865f8ace322ba78f571b3a37fd92ea2f"
  },
  {
    "url": "javascript/参考.html",
    "revision": "c9fee070dbf79889de74accaa1e46f18"
  },
  {
    "url": "javascript/实例.html",
    "revision": "adadddd8c242f3cb8869b4b287c3ecdf"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "linux/linux.html",
    "revision": "0a18120f523f4add732760628f10a644"
  },
  {
    "url": "linux/shell.html",
    "revision": "20aa3b25be206499896eb3a826651c3d"
  },
  {
    "url": "physics/光学.html",
    "revision": "badcf2b27c52eda4341e52bc20b33f12"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "4a6743b964c9d92ce40b2eea9a47c05c"
  },
  {
    "url": "physics/力学.html",
    "revision": "f580a1706fbc00074b936eec82f5d406"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "c468e252956d8471b714c02693bedece"
  },
  {
    "url": "physics/微积分.html",
    "revision": "bd400029f3d53cff123b0798328a8ba6"
  },
  {
    "url": "physics/数学物理方法.html",
    "revision": "6f6fdf5238557c55ff5be4ff009b18af"
  },
  {
    "url": "physics/概率统计.html",
    "revision": "79825847c1537e881974ab2baa23a3ca"
  },
  {
    "url": "physics/热力学与统计物理1.html",
    "revision": "b1ee617f04c850da1a31fcd2a87ff47d"
  },
  {
    "url": "physics/热力学与统计物理2.html",
    "revision": "7d0d162c05e0f6246881e6a0cb312f69"
  },
  {
    "url": "physics/热学.html",
    "revision": "3e1ecfcd8cc2f0357ad0f40349456164"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "b40d21543f535d197c669204607457ef"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "1a2132b6a58a9a3cf7a561eca611850e"
  },
  {
    "url": "physics/线性代数.html",
    "revision": "4b276b52a8c54e697413489bc62357f2"
  },
  {
    "url": "physics/量子力学1.html",
    "revision": "de8ea13d56aadcc11fe86172e79d5848"
  },
  {
    "url": "physics/量子力学2.html",
    "revision": "945966d11cdf98658b91679e13ea8a41"
  },
  {
    "url": "physics/量子力学3.html",
    "revision": "9f6aa6d6a54ee33961c83cbab2853cf6"
  },
  {
    "url": "python/python.html",
    "revision": "911e814f1cb724e5af88370d46b3b887"
  },
  {
    "url": "python/参考.html",
    "revision": "36e43f9af0b26b7e999f90b1b9dd596c"
  },
  {
    "url": "python/实例.html",
    "revision": "5df778270203279b27063203660e72e8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
