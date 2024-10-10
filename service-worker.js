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
    "revision": "d5d70f9e13090f084fda594423dc008a"
  },
  {
    "url": "addition/latex.html",
    "revision": "11ae8d41c7e9abedd92a3b233cba98c8"
  },
  {
    "url": "addition/markdown.html",
    "revision": "1f8b452238d5dd063b90464656f23fa7"
  },
  {
    "url": "addition/svg.html",
    "revision": "28c85959fd86685e715d8f4b3bb59f79"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "bb1208c186285d5f0634ac12a8849dda"
  },
  {
    "url": "addition/xml.html",
    "revision": "e319752253f219cb3afad5dbab657ecd"
  },
  {
    "url": "addition/yaml.html",
    "revision": "cc377fa031674c98618332bd27b1bf81"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "9f7e067f8cfcd9505ff346be75b815a1"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "e209aa34e5f6bc80b8bc4f7426a9aca1"
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
    "url": "assets/js/10.2b3e4369.js",
    "revision": "549f00ccf747bdcd7095e3fdaa0b12d3"
  },
  {
    "url": "assets/js/11.68ff2e7a.js",
    "revision": "b86076d4542fe46b8eefd0db64bc3e14"
  },
  {
    "url": "assets/js/12.f8c86880.js",
    "revision": "5d322a97faf8b2774b766f3549192400"
  },
  {
    "url": "assets/js/13.9e64c98f.js",
    "revision": "85ba4862e8ffd0639f6162ef17855d14"
  },
  {
    "url": "assets/js/14.3c463ef7.js",
    "revision": "a2f15608eb082d122a810bc7c34ff9a0"
  },
  {
    "url": "assets/js/15.30762335.js",
    "revision": "dff820ec3561e820f302894e1b249983"
  },
  {
    "url": "assets/js/16.1eed6155.js",
    "revision": "6b9cca0958ea24b7648a3ec968c943e1"
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
    "url": "assets/js/19.fa4825d0.js",
    "revision": "f8c2c8a365d083f68efe8ee9d879c563"
  },
  {
    "url": "assets/js/20.c2998308.js",
    "revision": "93e47daf11e1c4b9dae54839ebdac2a0"
  },
  {
    "url": "assets/js/21.32ffbd78.js",
    "revision": "acf530ff0d2b6a02ae8307b2bb96ac4d"
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
    "url": "assets/js/24.de14bf04.js",
    "revision": "c44eecaf39350438293b5e127e2b8fb2"
  },
  {
    "url": "assets/js/25.55562a0a.js",
    "revision": "7fbc5ef3421ad82c0ef5047901330640"
  },
  {
    "url": "assets/js/26.ccc2d301.js",
    "revision": "7b208d54e9b7385c5eb26a415abf5093"
  },
  {
    "url": "assets/js/27.f78f1056.js",
    "revision": "e3638544acc45a8bcb002557e2bc24ec"
  },
  {
    "url": "assets/js/28.bf16b5ef.js",
    "revision": "ce7d26c0b8bdf243237ddfe4accd9860"
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
    "url": "assets/js/31.4705236c.js",
    "revision": "9cfc93e7a92f5b3dc658316ff8526fb6"
  },
  {
    "url": "assets/js/32.2bb90f88.js",
    "revision": "63f962506fa6d384766ac40cd73bdfa0"
  },
  {
    "url": "assets/js/33.c711cc23.js",
    "revision": "43a4d7e4dc40aa94ec1cab0d8356faa1"
  },
  {
    "url": "assets/js/34.35c598ce.js",
    "revision": "0c46af8cb22a3b2d9607d78a25d02f74"
  },
  {
    "url": "assets/js/35.d76fa0ff.js",
    "revision": "c37c1d3e1bb4b38471806520e871e69d"
  },
  {
    "url": "assets/js/36.002d9061.js",
    "revision": "963287cc1d34b956128b84e639b6202a"
  },
  {
    "url": "assets/js/37.320dd51c.js",
    "revision": "858e0146202206d01bc8f83bd88e08b2"
  },
  {
    "url": "assets/js/38.8d0d2f87.js",
    "revision": "89cfafd5833751a82fbc2f3bfe89c031"
  },
  {
    "url": "assets/js/39.153dbd13.js",
    "revision": "2c0666ba899155435154e02c4d3e2a7b"
  },
  {
    "url": "assets/js/4.b8905fb9.js",
    "revision": "6c0cedd046bc5818df252095ab54ec9b"
  },
  {
    "url": "assets/js/40.0db37018.js",
    "revision": "66d70cf50536e83f7db78f516839dd5d"
  },
  {
    "url": "assets/js/41.659eef0e.js",
    "revision": "81b4039cbcf820bb83a7663c9d9a23ca"
  },
  {
    "url": "assets/js/42.fc055bcb.js",
    "revision": "735f8cfdbe82f770bc83f9bb40f87747"
  },
  {
    "url": "assets/js/43.8edd35d8.js",
    "revision": "710784a733ebb1f27e49ab0554484187"
  },
  {
    "url": "assets/js/44.ae599754.js",
    "revision": "4aee9c1d0070edf8dab3636f2b6fbf8a"
  },
  {
    "url": "assets/js/45.e2add887.js",
    "revision": "37f151935da649819029f864a82c8cb1"
  },
  {
    "url": "assets/js/46.82658895.js",
    "revision": "5ab2b77abf142446764cd1b0154148bb"
  },
  {
    "url": "assets/js/47.ea01f7c4.js",
    "revision": "65bc70007c8ce9af6786a65b0c381164"
  },
  {
    "url": "assets/js/48.060281da.js",
    "revision": "f9e0be698aa8912ac13b6690bc485126"
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
    "url": "assets/js/50.72036a3f.js",
    "revision": "961bbc0607848eb797fa1ff5847f640a"
  },
  {
    "url": "assets/js/51.22815f17.js",
    "revision": "24565177454bfe8a6573eb72ee4af8eb"
  },
  {
    "url": "assets/js/52.23c6d722.js",
    "revision": "f7a793a1917f3edeaad6447303c788a9"
  },
  {
    "url": "assets/js/53.c289bf45.js",
    "revision": "c9c8ed8fc18cb7bb45ef5d69c3630f1c"
  },
  {
    "url": "assets/js/54.7ea19ed8.js",
    "revision": "c8b11db954af70eeeafaed8c72f0b812"
  },
  {
    "url": "assets/js/55.5fb0fe0a.js",
    "revision": "627a2f5f061ac667e4a77b08cd6aac40"
  },
  {
    "url": "assets/js/56.2d3554e1.js",
    "revision": "a72711d2ba801f8f7a1955cfca58934e"
  },
  {
    "url": "assets/js/57.2f949460.js",
    "revision": "1648484c951347b76531e9936d4b9069"
  },
  {
    "url": "assets/js/58.8480d9da.js",
    "revision": "87ff05af0d9cbf282263ade23c1eafa7"
  },
  {
    "url": "assets/js/59.67b4658e.js",
    "revision": "1eb5c27974a59086c1cfe2b4258c41a1"
  },
  {
    "url": "assets/js/6.7b540fa8.js",
    "revision": "ac11ad6e64e95a8733c65e5b1adb36b6"
  },
  {
    "url": "assets/js/60.e2a5e337.js",
    "revision": "f17486335fd2c781675c11cba066f154"
  },
  {
    "url": "assets/js/61.48893667.js",
    "revision": "6fef671ebd24c974d8dbd8ed697aadb0"
  },
  {
    "url": "assets/js/62.5836acea.js",
    "revision": "beb66ba605a26f2b356b94e3cd9ab54b"
  },
  {
    "url": "assets/js/63.a52bc2cc.js",
    "revision": "35bb2c27916ce32816fb9eba066722f1"
  },
  {
    "url": "assets/js/64.6b8a5585.js",
    "revision": "feb864923d6f18452dc5e7189101edfd"
  },
  {
    "url": "assets/js/65.33130e6c.js",
    "revision": "2a09155717f58087d04817324b6f099e"
  },
  {
    "url": "assets/js/66.2c437faa.js",
    "revision": "112b13ab8f060a8e303853e4e4f98332"
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
    "url": "assets/js/app.b4640380.js",
    "revision": "f128744ffad9055dfe4ebdc3b36e3dbb"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "c/c.html",
    "revision": "497183e7e78a302ce7b80a15dce50be9"
  },
  {
    "url": "c/参考.html",
    "revision": "e11d6dc5b07f5514754d361595c124dd"
  },
  {
    "url": "c/实例.html",
    "revision": "ea34e0814376c514ff6a32ecc3633c01"
  },
  {
    "url": "computer/harmonyos.html",
    "revision": "df9f403077fae30361ec56f38d53dac0"
  },
  {
    "url": "computer/操作系统.html",
    "revision": "e55092e56b731c5d3718af2430c2661f"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "b94f51310cbf71a3fb507adcb1dc6b76"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "591a820913e95ec8081945e2c8f28dff"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "dc82974335c0559c61db4703ed7efa20"
  },
  {
    "url": "cpp/cpp.html",
    "revision": "a84b74b2ee2177c127bf87cbd78caaa3"
  },
  {
    "url": "electronics/半导体物理.html",
    "revision": "ad24f98f923367f708974344d88c31a5"
  },
  {
    "url": "electronics/单片机应用.html",
    "revision": "96b6db7c7ab04ae3a75cc25897bcdd23"
  },
  {
    "url": "electronics/数字电路.html",
    "revision": "76f10a77875eb51ec69bf2f3667bd932"
  },
  {
    "url": "electronics/模拟电路.html",
    "revision": "bc480f32988e08663b514153d6181bad"
  },
  {
    "url": "electronics/电路基础.html",
    "revision": "63bc1d7181a284521fdeaa1f2f4f6266"
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
    "revision": "b7f615cf0b6aaf7bc9dc905f08303260"
  },
  {
    "url": "html/html.html",
    "revision": "d73850f45a5578779f306fe974378434"
  },
  {
    "url": "html/me.html",
    "revision": "dbc352538f39c8d6726dc70776ef82e3"
  },
  {
    "url": "html/实例.html",
    "revision": "2eb3496bceb2f3b703b66311129c42c7"
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
    "revision": "69ac133ad9814e2502d144e48e58c4bb"
  },
  {
    "url": "javascript/ajax.html",
    "revision": "4e9d19498e6c1f77f891cfdecc8e3f83"
  },
  {
    "url": "javascript/electron.html",
    "revision": "83617ec6ecc27ba2a298fc414a3b54c4"
  },
  {
    "url": "javascript/JavaScript.html",
    "revision": "c4e87c887f0ae192ccb7a84461bdaf7a"
  },
  {
    "url": "javascript/json.html",
    "revision": "b1f08cbf6338a22f950905f892389cea"
  },
  {
    "url": "javascript/nodejs.html",
    "revision": "dd77e802491aa117b3656323426dc347"
  },
  {
    "url": "javascript/pwa.html",
    "revision": "7dcb1f43c69dbc45f1570a69dee154dc"
  },
  {
    "url": "javascript/typescript.html",
    "revision": "e108a72c5eadf6b27e8e6d8a1573c7bc"
  },
  {
    "url": "javascript/Vue.html",
    "revision": "8ae5d4550763b8f78da6be96c4d1dc37"
  },
  {
    "url": "javascript/WebAssembly.html",
    "revision": "a749962b8451766e8bc88083321c1498"
  },
  {
    "url": "javascript/参考.html",
    "revision": "667b291455121fcc1caf428dac1dd4b7"
  },
  {
    "url": "javascript/实例.html",
    "revision": "8a1fa6eb3e470253c439bda36ecc5035"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "linux/linux.html",
    "revision": "4761fae760e67a859b1620c7fc84d97c"
  },
  {
    "url": "linux/shell.html",
    "revision": "f5c64117c5803ba09987be2b412be630"
  },
  {
    "url": "physics/光学.html",
    "revision": "3a5810871489d68aec70f9cad43da515"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "1e0cc7ed381cce0c4a4eb385927cae30"
  },
  {
    "url": "physics/力学.html",
    "revision": "c70c901442ba03065fbe316b506b6d37"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "6ed269b4d82bd3731f0034e65ec31a32"
  },
  {
    "url": "physics/微积分.html",
    "revision": "f587f66cd8cf4f406d88ff43a58e7a38"
  },
  {
    "url": "physics/数学物理方法.html",
    "revision": "8928db5d1b204b04ca9694fe0971230c"
  },
  {
    "url": "physics/概率统计.html",
    "revision": "7d6f0139051b8289c8b34599e022d09f"
  },
  {
    "url": "physics/热力学与统计物理1.html",
    "revision": "02479d8df941e1b6e88fafa0b6d96f63"
  },
  {
    "url": "physics/热力学与统计物理2.html",
    "revision": "106cdb7e9162c15e2b5c84157d8b23a2"
  },
  {
    "url": "physics/热学.html",
    "revision": "55e65492941be9c6279aa5462b55ad9e"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "7953a4e9a1bdadf99625014f2bbcf5f2"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "d399f2c8ca6a173c742610ed0b6c0553"
  },
  {
    "url": "physics/线性代数.html",
    "revision": "a699e76000460740b61fb9dd5f06c6a8"
  },
  {
    "url": "physics/量子力学1.html",
    "revision": "880054ab151ec9eb6b44d81ac893435b"
  },
  {
    "url": "physics/量子力学2.html",
    "revision": "885b67e432729da607ad9bee4bb0b163"
  },
  {
    "url": "physics/量子力学3.html",
    "revision": "d3af8b76e4c37cf8e9c1e29a1d5d6425"
  },
  {
    "url": "python/python.html",
    "revision": "5a4bf3430ee8eea4bda1840c7951c574"
  },
  {
    "url": "python/实例.html",
    "revision": "6df214be98eae6524a2708bc510eab6a"
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
