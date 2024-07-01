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
    "revision": "124f402dca8b1ca74d8467dde25327e1"
  },
  {
    "url": "addition/latex.html",
    "revision": "c4e1c2854539af1c9c99a708018d2027"
  },
  {
    "url": "addition/markdown.html",
    "revision": "94f1b51ce85ffb250c15712857967407"
  },
  {
    "url": "addition/svg.html",
    "revision": "d8352c3df227b4fb5c4220b97c674d07"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "c91ef534082c06d9c2f38a650e8d6509"
  },
  {
    "url": "addition/xml.html",
    "revision": "cdc97c56e6ccfda9798e5167d6c2f3c8"
  },
  {
    "url": "addition/yaml.html",
    "revision": "77b99dbbc6872493fd7597e5b5274dcf"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "cb60bdb57523afb9ff9f67a1ae775aae"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "8844bac6c725ee7b996fb0ed3f3fa31e"
  },
  {
    "url": "assets/css/0.styles.707743cf.css",
    "revision": "3a8415e4dd783b81e3006c7554281520"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.5229b8e3.js",
    "revision": "33d26850976959c8e9a03ce7237a00a0"
  },
  {
    "url": "assets/js/11.0f90872c.js",
    "revision": "60afd9941c7ac92c60f87969ab70e775"
  },
  {
    "url": "assets/js/12.66114ef8.js",
    "revision": "1766ce93fc72f9fbcef2fbde7ed1fb36"
  },
  {
    "url": "assets/js/13.7f2038ab.js",
    "revision": "36d374d5a1d0f01a18e91cdc30fd7c43"
  },
  {
    "url": "assets/js/14.b70d5f2f.js",
    "revision": "8feb043acde323037f0f6aacd7bedc09"
  },
  {
    "url": "assets/js/15.508b9af3.js",
    "revision": "8b8899e3115297b3b58e8b6b5ff8123e"
  },
  {
    "url": "assets/js/16.119de68b.js",
    "revision": "1f64ca21753e051325e67c020c3229a1"
  },
  {
    "url": "assets/js/17.d4c78597.js",
    "revision": "00b2785aeb33d94ffbc3ea1090b56a6e"
  },
  {
    "url": "assets/js/18.d252a04d.js",
    "revision": "2415dfa0591c3d4590281ddadd825fa1"
  },
  {
    "url": "assets/js/19.e206be32.js",
    "revision": "d221c70bf170a2911c2d716a6cf5bec6"
  },
  {
    "url": "assets/js/2.2eb898ea.js",
    "revision": "649cdd60cf48808762ba6dda5515228e"
  },
  {
    "url": "assets/js/20.0eb1afc7.js",
    "revision": "8a5222797f6b734d2992dd59eb8162f1"
  },
  {
    "url": "assets/js/21.f41d1540.js",
    "revision": "0058217f1c7d500ebb29c8e16fd91163"
  },
  {
    "url": "assets/js/22.2013fb71.js",
    "revision": "9205a8055a79156d07d972f187b23c86"
  },
  {
    "url": "assets/js/23.7559f203.js",
    "revision": "f000fd4a2ec880a58ebfde7c7b8ce578"
  },
  {
    "url": "assets/js/24.4a2842fe.js",
    "revision": "8d09bdec068c6f4608e94bdc40932f44"
  },
  {
    "url": "assets/js/25.06e5b089.js",
    "revision": "d1de0fff57fcbd3ed351e8545320f425"
  },
  {
    "url": "assets/js/26.f09e39ac.js",
    "revision": "a3cc99a37b84d704523e3da44202e8fe"
  },
  {
    "url": "assets/js/27.db5e9423.js",
    "revision": "8c6cf21d0363048932b66384b639beb6"
  },
  {
    "url": "assets/js/28.7c6f39be.js",
    "revision": "0a805c9e9733ef3814986b55b46edfbe"
  },
  {
    "url": "assets/js/29.d09c7e47.js",
    "revision": "04a99533ab697c8c27129e69b637f875"
  },
  {
    "url": "assets/js/3.9eb5b8e5.js",
    "revision": "958aaabadd1c685a5d5e13f085ee5dc9"
  },
  {
    "url": "assets/js/30.4719179f.js",
    "revision": "8a4d00d7256da6bb4f7f0e8443eb108e"
  },
  {
    "url": "assets/js/31.a5001293.js",
    "revision": "16371bed89cf2fa0a848d3fa4f4e79c9"
  },
  {
    "url": "assets/js/32.e626d8ac.js",
    "revision": "4df2cd9b725334d6684052df5c18aa0a"
  },
  {
    "url": "assets/js/33.a8d6406f.js",
    "revision": "463e8dc650b0280d6c31e7cd916871de"
  },
  {
    "url": "assets/js/34.041568b6.js",
    "revision": "67a2c01bd454ea1bf89be2aba8981a3d"
  },
  {
    "url": "assets/js/35.f88e39c6.js",
    "revision": "905da1f336cfd66eca2ccdc08aa80d31"
  },
  {
    "url": "assets/js/36.26c0c6ff.js",
    "revision": "3c28ebe598b739de7879e8c8b603a858"
  },
  {
    "url": "assets/js/37.622a705c.js",
    "revision": "4bee3347864a450c3886ee1fa7ddf404"
  },
  {
    "url": "assets/js/38.c5e33294.js",
    "revision": "dd7a510fbd22a4e459c78ff95d779297"
  },
  {
    "url": "assets/js/39.4d57e8c0.js",
    "revision": "fc4feb713b6cea6f2cead68fecd39003"
  },
  {
    "url": "assets/js/4.0495ed1d.js",
    "revision": "a85812709bae302ee0209d3b1d4299d1"
  },
  {
    "url": "assets/js/40.7ad64a69.js",
    "revision": "19a2bce9c8f1168da9a0234f4ac13f19"
  },
  {
    "url": "assets/js/41.157dfd9b.js",
    "revision": "678f104548866dfd870e7cec7b1f36f7"
  },
  {
    "url": "assets/js/42.061b9bab.js",
    "revision": "10f131e0e382d9e7c7303f7d55fe5f31"
  },
  {
    "url": "assets/js/43.1908fb7b.js",
    "revision": "ccea243e0e3271280e24906f23767895"
  },
  {
    "url": "assets/js/44.82cd7ec8.js",
    "revision": "7cc12fe5f1e12ab2094986616ef715f1"
  },
  {
    "url": "assets/js/45.57262161.js",
    "revision": "adc5caf45233ead0e14be4d0f0b69935"
  },
  {
    "url": "assets/js/46.9b8baa0d.js",
    "revision": "a91ddc9bba3c65b547dfdce857b6056b"
  },
  {
    "url": "assets/js/47.edc22cc0.js",
    "revision": "efcc066ca00e31fb0ce95d19517b1eb6"
  },
  {
    "url": "assets/js/48.462ad9ee.js",
    "revision": "6de9744b463421e7ce6d6cd2b8938c9b"
  },
  {
    "url": "assets/js/49.9db18832.js",
    "revision": "bacf2cb547eec29776a134bd18fcba31"
  },
  {
    "url": "assets/js/5.b6ca0b83.js",
    "revision": "46225919b86a2a2c25674a7dc243af45"
  },
  {
    "url": "assets/js/50.83f3bea9.js",
    "revision": "626415a2d38c9734f97b31026f6a3b7a"
  },
  {
    "url": "assets/js/51.a56e4426.js",
    "revision": "c49b21084d46ae19f9a7db269a96dc01"
  },
  {
    "url": "assets/js/52.91fe61e8.js",
    "revision": "59137ba8a52f275b2f0c3405af2736fc"
  },
  {
    "url": "assets/js/53.745c2462.js",
    "revision": "a04584a777b0e6bc461aaba15ba8c0a5"
  },
  {
    "url": "assets/js/54.bcc99aae.js",
    "revision": "6fe75dc4f8f4cfc2f0642b2382a8e916"
  },
  {
    "url": "assets/js/55.e583ed36.js",
    "revision": "d4311861c3471b023abcca463f0403e4"
  },
  {
    "url": "assets/js/56.e81b3d11.js",
    "revision": "5b6957c261bf833ba16cf122f2c52c41"
  },
  {
    "url": "assets/js/57.2fab41b3.js",
    "revision": "53d1de967a38f2de4390a9aefd10a40e"
  },
  {
    "url": "assets/js/58.1fa9fe26.js",
    "revision": "e1eb6c70eec2704f9a332fde66fd58ba"
  },
  {
    "url": "assets/js/59.edeef6f4.js",
    "revision": "f9562202f1c20881aeb2bca083dba48d"
  },
  {
    "url": "assets/js/6.37434864.js",
    "revision": "cb892eef551a61eda012258dad75ce7e"
  },
  {
    "url": "assets/js/60.6af1bd83.js",
    "revision": "61760bf6fed322cf891258938eec496b"
  },
  {
    "url": "assets/js/61.a9695dff.js",
    "revision": "4ec538f51026c0bd3293e25bca6c7ee1"
  },
  {
    "url": "assets/js/62.1938be71.js",
    "revision": "f9b3c037130a83d7ed43ae749fceee6b"
  },
  {
    "url": "assets/js/7.b72a9c92.js",
    "revision": "58bf00e8c15a34f7a5848405f504c132"
  },
  {
    "url": "assets/js/8.904e6c51.js",
    "revision": "38e4043dd416c1ef6edb713f923451b4"
  },
  {
    "url": "assets/js/9.752ff5f0.js",
    "revision": "0ac363a927af6ab73ab38f9bad4628c0"
  },
  {
    "url": "assets/js/app.82ea3dd4.js",
    "revision": "df39e659e560a69369c7d7d2635a05b4"
  },
  {
    "url": "c/c.html",
    "revision": "6d14309e3d311af639eea06617563d91"
  },
  {
    "url": "c/cpp.html",
    "revision": "1df701d02cef9c2792474b18472cc307"
  },
  {
    "url": "c/参考.html",
    "revision": "b18fcc119fb51098233ca03cf092b876"
  },
  {
    "url": "c/实例.html",
    "revision": "8b34234ceac7e87ebda1ce1e1d801e14"
  },
  {
    "url": "computer/harmonyos.html",
    "revision": "575fa4d9d892b2778fe3d93c442e374d"
  },
  {
    "url": "computer/操作系统.html",
    "revision": "e388aa147f40e35af060fc272d1b34ee"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "f0a00cd42711a5ba8bad8c56bea93c61"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "f7c243450fc8fb41a0bdb78eb9278e22"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "0c92590158ab488e5ad042fc700a8782"
  },
  {
    "url": "electronics/半导体物理.html",
    "revision": "1b7fc5099aea5ddc64d4f7d2e10869c8"
  },
  {
    "url": "electronics/单片机原理.html",
    "revision": "67de8fe218b18f9d2165e98c65266bb4"
  },
  {
    "url": "electronics/数字电路.html",
    "revision": "5e088197e98191b3d36d6a44351ecbc7"
  },
  {
    "url": "electronics/模拟电路.html",
    "revision": "83803289867ebde3bd4ebb8b9efa44bc"
  },
  {
    "url": "electronics/电路基础.html",
    "revision": "4963c6aefee444ad7425cad1f29ee393"
  },
  {
    "url": "html/css.html",
    "revision": "9ba4a0c7efa4f2552c5d58593a02d4fe"
  },
  {
    "url": "html/html.html",
    "revision": "fd2aaf29664c050e0bbb5ca55340642e"
  },
  {
    "url": "html/me.html",
    "revision": "dbc352538f39c8d6726dc70776ef82e3"
  },
  {
    "url": "html/实例.html",
    "revision": "5d17eff8c174858cb73495da999fa9f8"
  },
  {
    "url": "img/logo.png",
    "revision": "c89844f2aee46b3530d38e552691b75c"
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
    "revision": "b9ffe8c48e51e9d8ac78fe9fd509d2d8"
  },
  {
    "url": "javascript/electron.html",
    "revision": "e154f2a86030e939732683fa63f7d6e5"
  },
  {
    "url": "javascript/JavaScript.html",
    "revision": "1824c9396cef0a25a8044f2d30a3ab08"
  },
  {
    "url": "javascript/json.html",
    "revision": "b8bb44f2a6f7bfffed01f9c2b529a627"
  },
  {
    "url": "javascript/pwa.html",
    "revision": "0d2a7ab73be4eba3db1dcc58f12b0031"
  },
  {
    "url": "javascript/typescript.html",
    "revision": "175d909c651d550143f66a5fa18a5ce2"
  },
  {
    "url": "javascript/Vue.html",
    "revision": "b0f77b653e297871283286b212198ed5"
  },
  {
    "url": "javascript/WebAssembly.html",
    "revision": "ae642023b395bd89a559d5b189f56461"
  },
  {
    "url": "javascript/参考.html",
    "revision": "ae21d877eeede5d3229427c5e6a732af"
  },
  {
    "url": "javascript/实例.html",
    "revision": "e0285a2c183e9e49a85267c4db1af8e6"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "linux/linux.html",
    "revision": "103caf173086b009cc4a28ebe469fe1e"
  },
  {
    "url": "linux/shell.html",
    "revision": "1ebaa51faa2469990f2a5afab613e30b"
  },
  {
    "url": "physics/光学.html",
    "revision": "6177a7984152cb5e39b8489b42bf5ee1"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "bd5cbd6a15732bfe4033e0ecdb5f022c"
  },
  {
    "url": "physics/力学.html",
    "revision": "fd224d8f54d14db442a8396c217d4351"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "0d69f90e63f26c05af95326645ca9a64"
  },
  {
    "url": "physics/微积分.html",
    "revision": "7781f162bd6762264b5c7dc7623f80cc"
  },
  {
    "url": "physics/数学物理方法.html",
    "revision": "e90734ba2a4c1c4955795444ea80d2d1"
  },
  {
    "url": "physics/概率统计.html",
    "revision": "37225f1163d64e97cb4b795491e3d39e"
  },
  {
    "url": "physics/热力学与统计物理1.html",
    "revision": "e44f491b3aa5ca1cae92294d18d68d0b"
  },
  {
    "url": "physics/热力学与统计物理2.html",
    "revision": "1c2dc520347a5ab9f114c7e899b20e9f"
  },
  {
    "url": "physics/热学.html",
    "revision": "b85073d1c64fcca9bb96930302a794b0"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "266b36c2878573a23edd2edde03fd020"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "116e4f15cda73a28c11afbf147e407b4"
  },
  {
    "url": "physics/线性代数.html",
    "revision": "fb8f4c5899989405179cb57d40b298e4"
  },
  {
    "url": "physics/量子力学1.html",
    "revision": "c5da990cedd1f94a34a855a3a4763267"
  },
  {
    "url": "physics/量子力学2.html",
    "revision": "4ffe53f52781d777752c0c26e71fc6f4"
  },
  {
    "url": "physics/量子力学3.html",
    "revision": "da9d643e21ed890813a7eca8a6bbf7c4"
  },
  {
    "url": "python/python.html",
    "revision": "15bc0b72ff6664a7a7345a5129ea6a74"
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
