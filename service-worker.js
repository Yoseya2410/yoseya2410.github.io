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
    "revision": "6e9890a877eac48aebb0b2d53bab4eac"
  },
  {
    "url": "addition/json.html",
    "revision": "5f36bd12b6b2002ee44c72a2f73a3320"
  },
  {
    "url": "addition/latex.html",
    "revision": "123e82fa35baa773ff7b0c5a82452e86"
  },
  {
    "url": "addition/markdown.html",
    "revision": "7376d435a800a4bcdfda2ab1d3cba1c8"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "29e96189fb0c00c8462f2f213aca479c"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "845fcf5bbe30b95b30bbab546544e5e8"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "1758e1c07a33c834fcf98edcdc0ea54e"
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
    "url": "assets/js/11.a2f8f3a8.js",
    "revision": "1ed382b2736cf70821de44797b571e25"
  },
  {
    "url": "assets/js/12.591c58fe.js",
    "revision": "12bb1bbdc007b32e198f40ed844284a8"
  },
  {
    "url": "assets/js/13.95767c99.js",
    "revision": "15039faf8fb6b520283833354a41a1bb"
  },
  {
    "url": "assets/js/14.660903ab.js",
    "revision": "7ff5a90b22023d0c94301902186a3186"
  },
  {
    "url": "assets/js/15.c7989319.js",
    "revision": "76f4e9a6cc7b3548960d76ac3a878de2"
  },
  {
    "url": "assets/js/16.8afa1a2a.js",
    "revision": "88fd26d3672607478947b3a3ec3a16f4"
  },
  {
    "url": "assets/js/17.009e3bb4.js",
    "revision": "bd5997b7e9274a983cc4a31f6ca13a8b"
  },
  {
    "url": "assets/js/18.875b82ec.js",
    "revision": "d09758c43d0b04e436d6816215494ad2"
  },
  {
    "url": "assets/js/19.ffd1dd38.js",
    "revision": "1851b0f2cb4046fe460d051b1a1f8cd6"
  },
  {
    "url": "assets/js/20.8939814c.js",
    "revision": "48fd1087eafe94c344d8696417f098d6"
  },
  {
    "url": "assets/js/21.a10b97d3.js",
    "revision": "ac2e19bac9f45b01f053678ec90857fe"
  },
  {
    "url": "assets/js/22.2c511bdf.js",
    "revision": "d917dc70dd2c1d31891f26fe39ccd338"
  },
  {
    "url": "assets/js/23.fe7b48b8.js",
    "revision": "17d369c87a242dddc8da2f652853d78e"
  },
  {
    "url": "assets/js/24.cde65fc6.js",
    "revision": "0aa75775c9c03b681af2f2e2f5c312d4"
  },
  {
    "url": "assets/js/25.2884e6e6.js",
    "revision": "e84629aa863c7f9172cfea18b1ecd0b0"
  },
  {
    "url": "assets/js/26.5df7d521.js",
    "revision": "fdd9d22a718efaf42ca6e99820395036"
  },
  {
    "url": "assets/js/27.806b06f8.js",
    "revision": "69d76e29eba80a6cfa6ef1ed87f3accc"
  },
  {
    "url": "assets/js/28.5a94610f.js",
    "revision": "d326b9b16e02e2adc4c7101ddc1e23f6"
  },
  {
    "url": "assets/js/29.2f0394cc.js",
    "revision": "7d7b29ce7e4e6caf6f8b0c408495ad25"
  },
  {
    "url": "assets/js/3.107e051b.js",
    "revision": "b0198408ea99fe4a38749e3bd363df34"
  },
  {
    "url": "assets/js/30.8682f810.js",
    "revision": "10eca467daeab38ed5e6e51cf55a7d49"
  },
  {
    "url": "assets/js/31.f6d665f0.js",
    "revision": "101a2469553513a54764267521ef170e"
  },
  {
    "url": "assets/js/32.9e442e58.js",
    "revision": "1beabf288dc2f58eb1a1868a8efc4dd5"
  },
  {
    "url": "assets/js/33.41c96d22.js",
    "revision": "5232d3a13d619d4292a681c02cd0f2d5"
  },
  {
    "url": "assets/js/34.b54f06fe.js",
    "revision": "13dd255feea4133699f2012439cdaef6"
  },
  {
    "url": "assets/js/35.8bfe2fc5.js",
    "revision": "fef514f031e11a01f7f0899e8e533e01"
  },
  {
    "url": "assets/js/36.f3e5cf65.js",
    "revision": "26967cffd95b1c07d858da45f4415093"
  },
  {
    "url": "assets/js/37.511b7916.js",
    "revision": "d5fc4c0993a9c47ee86022ac0e0ce78b"
  },
  {
    "url": "assets/js/38.70365882.js",
    "revision": "dea1c9128eb4391be674517bd35aa65e"
  },
  {
    "url": "assets/js/39.ac488812.js",
    "revision": "737923962b0dcfaf48bb939693b9360c"
  },
  {
    "url": "assets/js/4.3175c058.js",
    "revision": "734f736c5460cea66307e12f6391b8d8"
  },
  {
    "url": "assets/js/40.75974fc8.js",
    "revision": "b8da1d598647046c6da497b5033699fc"
  },
  {
    "url": "assets/js/41.f11efbb2.js",
    "revision": "949f54b17be32dd77401f5415ac045d0"
  },
  {
    "url": "assets/js/42.9f9a21d7.js",
    "revision": "809e2e127e1983f894fa0110dd532e24"
  },
  {
    "url": "assets/js/43.10c18261.js",
    "revision": "80c803538e05d69a5f98544afe5c5b5b"
  },
  {
    "url": "assets/js/44.370ca350.js",
    "revision": "f643cbf90e5bbf8534558785137001cc"
  },
  {
    "url": "assets/js/45.65a9f838.js",
    "revision": "c40529cf6691def62fdafe06a1fce532"
  },
  {
    "url": "assets/js/46.98c1bfbb.js",
    "revision": "6aeb3ee6d427460507b3c3e17d20fba6"
  },
  {
    "url": "assets/js/47.1cd959b3.js",
    "revision": "bf23007a785fc105764ea2e8b51d5685"
  },
  {
    "url": "assets/js/48.22c007d2.js",
    "revision": "0b4d7fab2f0f29c6b80030f645071255"
  },
  {
    "url": "assets/js/49.50518a0c.js",
    "revision": "33c0ff7dfe2f129740ce55acc2bf3b96"
  },
  {
    "url": "assets/js/5.56dd59ee.js",
    "revision": "dc5f21833f9e5f89306f5b08ad2c9424"
  },
  {
    "url": "assets/js/50.114bdbe3.js",
    "revision": "a09ed15d804002bb6e0cd87bfb829d99"
  },
  {
    "url": "assets/js/51.fbd7aab9.js",
    "revision": "df4c9ee7381a033e65f4be2051dcb904"
  },
  {
    "url": "assets/js/52.6d75f7d3.js",
    "revision": "7a50995de3fb3ea7126e4ad7e5b80169"
  },
  {
    "url": "assets/js/53.24d864fc.js",
    "revision": "9ff3bb86a352e0696033ddda78f7453a"
  },
  {
    "url": "assets/js/54.6adda14e.js",
    "revision": "dfe6b1299d14e87ef3fb945db48183d0"
  },
  {
    "url": "assets/js/55.d4e15abf.js",
    "revision": "fb8e4439f86ac1a1ebee0509cc3f3b6d"
  },
  {
    "url": "assets/js/56.e503f836.js",
    "revision": "1d1572b614dd29c59ff4d78707cd1745"
  },
  {
    "url": "assets/js/57.5a0ac73e.js",
    "revision": "6e38265d948192b6d833be431136a8e8"
  },
  {
    "url": "assets/js/58.1df11306.js",
    "revision": "871093284081470b4dd367c6e3d39839"
  },
  {
    "url": "assets/js/59.d4b1b9e9.js",
    "revision": "f9a2db25c18e540f2e297c4246595035"
  },
  {
    "url": "assets/js/6.292e69e9.js",
    "revision": "62cfb178e34916b51557b19c3f1e83ec"
  },
  {
    "url": "assets/js/60.11caee09.js",
    "revision": "1291117392882d441ec18b1534f456f8"
  },
  {
    "url": "assets/js/61.2915b04c.js",
    "revision": "defdfac7f07290c68338f289ddabe798"
  },
  {
    "url": "assets/js/62.7c6f8fde.js",
    "revision": "4cbed8d3481ee2128bcb0eeae49911fc"
  },
  {
    "url": "assets/js/63.5c379225.js",
    "revision": "99f6b856ed95926fb62249f108c1fbe1"
  },
  {
    "url": "assets/js/64.479e71bb.js",
    "revision": "9ea8e356640ca49fd73735bc85a19c8d"
  },
  {
    "url": "assets/js/65.7142a819.js",
    "revision": "dbfbdecca87b3980e565566744605596"
  },
  {
    "url": "assets/js/66.4c52e831.js",
    "revision": "a03605382a1f5230ba8de5a65d291281"
  },
  {
    "url": "assets/js/67.f420b15a.js",
    "revision": "ee1e82008cd890ae31880a800bd74327"
  },
  {
    "url": "assets/js/68.139db4cc.js",
    "revision": "30257c5fcae03f8eff87a6f7097d756a"
  },
  {
    "url": "assets/js/69.84085f97.js",
    "revision": "468895245fa69a9bcb94bad79b2a0203"
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
    "url": "assets/js/app.d68ad479.js",
    "revision": "a1a4b69ab26709bac31411fb532aa968"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "948fd97cd10d06a9aaa64cf9c0eccf4e"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "d8ed8d25c1021d3e31f92195950e0d0a"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "bbb7d3527bb98244b61d7d9fee429e31"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "45b831b7c62c5f9b97a95c1f1dc239ff"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "1d3e355f06b2370a70942ad52e8e89a1"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "0110636edcff9ffd38778fda0eed7231"
  },
  {
    "url": "computer/c/c.html",
    "revision": "eff11eb2661b98ded05b1c1f260371e3"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "2d41490d6bd2fc2d47c4f667b9e100cb"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "3f5413c187abb556fe2962b687f73367"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "064d5b1158b630d14cdf0c8f7aa544d7"
  },
  {
    "url": "computer/python/python.html",
    "revision": "77faaee0ba9719e49d594f258f7d90fc"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "2a35f75a3174d6e910e1843c46ad0659"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "ea9912f3d0654381bb8af88b9435c903"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "e200fc916754c4716a8552e98e8b9262"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "d2932bf72ebb50a747344289fe0cffb1"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "d26a036de828b5d80f79a4994faef712"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "9a55c1fd2521af5d9f39baeb54dfd954"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "35ea23534dc34aed25d1f5c9a63ebfb7"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "33efc0f8d7d8842644467b804b2ec493"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "15a35b6ec2cbbdfd540331287fed23fb"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "232fbae5c45032dac786041f65561bc9"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "2c08876959010da534e4d433ad0154d8"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "1c7a8e51b6dc61153711244d1166f125"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "559fb9f12637e1d90485a2e28216ac6f"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "a194f27ba423a2eb4f624799795926fe"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "1fee81ba6a0d00b9c570dc8a6a17a8bf"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "bc4239138c43bce36a4e18873724fa7d"
  },
  {
    "url": "graph/example.html",
    "revision": "ff7812627be9aed0297518d19cba346f"
  },
  {
    "url": "graph/test1.html",
    "revision": "6d8d5fc72157385b407c42e2c9557209"
  },
  {
    "url": "html/me.html",
    "revision": "dbc352538f39c8d6726dc70776ef82e3"
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
    "revision": "8d255eddad16c292738d1eb527cc7060"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/微积分.html",
    "revision": "75122f489e1a5e7322a7a26d16496dac"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "5e7cf8e320ae88f3e8f73ba717c7e2e4"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "6bd5aad3c4a5ac518b3e0825313a8eae"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "653436192d337e35fc0cf92520f13999"
  },
  {
    "url": "physics/光学.html",
    "revision": "416bfe1933cc7798f9d34e497bb51506"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "c649b965b5c33e1f646a3990639cc7f0"
  },
  {
    "url": "physics/力学.html",
    "revision": "ce604f194a6dd7387df8be3cdb6b04b0"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "cb226e9eb966003e605d38478c5bec0d"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "36029cb5360a7be35f67a9bb44708947"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "925e146368fc331514772a78158e20c6"
  },
  {
    "url": "physics/热学.html",
    "revision": "ea01ea95d70a8c4f585a64cbe409e0af"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "8bb48fb6113da9ddc7c7ef233cd904b6"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "0140d7fa57a5ac115e5ddeca4f848ed1"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "987988b8c2c7cb282c663107350c72f8"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "ab4c5cca997eb2f7c2ce1fe2813fb22f"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "7565783e34374eb4e88df302fd47e95a"
  },
  {
    "url": "web/html/css.html",
    "revision": "4ffe6f8c8b43e1fa7af739fd28dc09f1"
  },
  {
    "url": "web/html/html.html",
    "revision": "0d4c5c2f8e453632375d3ee0fcfbf11c"
  },
  {
    "url": "web/html/实例.html",
    "revision": "31c860268621ef57bc887af6d2a9581e"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "439fb5ed9416992ab3a2a9d1606fb5c8"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "7fea1eee214c3314d9a89d1c2c8fc7ea"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "d94475c85e0c3f423af86c71c9eae8f7"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "2deef3b7460cc0135a9bd3b91779f69f"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "ee789fb7fc0dfdf5965c024f06ddec16"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "5d2085f860cb3f6fdcd26bef3e4816c4"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "ffaeffb14f79a93557a3bd5fb68bc204"
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
