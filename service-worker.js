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
    "revision": "01f61c7b3e5a7b01b2960750e4ab5361"
  },
  {
    "url": "addition/json.html",
    "revision": "ab94eae4f6ae6d057bbafecce9a11708"
  },
  {
    "url": "addition/latex.html",
    "revision": "a725b98797f64ab78baf5ddc73b72ef2"
  },
  {
    "url": "addition/markdown.html",
    "revision": "5517eec1e73256702155a7a513184057"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "27e7b666e94eb8adc81411f4f20c4e5c"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "ff3f35c47bcff25c0c8058880f7a14e9"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "6848190e7b77f4d9ea0ba0e879b2f625"
  },
  {
    "url": "assets/css/0.styles.189745cf.css",
    "revision": "ddb75e9c344d89e558f2b89cdeb375c6"
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
    "url": "assets/js/12.a6cb48d5.js",
    "revision": "7aeadfa181d18b6bdd7deee6ab74218f"
  },
  {
    "url": "assets/js/13.42187ce4.js",
    "revision": "be6810c5b76f2e99f306c404f4f06e62"
  },
  {
    "url": "assets/js/14.df67a50c.js",
    "revision": "c3f9691aa5dc9bdfb5089bae1ee16c23"
  },
  {
    "url": "assets/js/15.e057374a.js",
    "revision": "02ae86dfcaff302589c44c2560481f5a"
  },
  {
    "url": "assets/js/16.8afa1a2a.js",
    "revision": "88fd26d3672607478947b3a3ec3a16f4"
  },
  {
    "url": "assets/js/17.73149a2c.js",
    "revision": "c8ba7db33763702947eedc99c3b18f94"
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
    "url": "assets/js/20.1edce5ea.js",
    "revision": "2fdf3d253f5d3b604c3f8690a8593797"
  },
  {
    "url": "assets/js/21.961e341d.js",
    "revision": "27538a69b6afc403c91fb6331e768d25"
  },
  {
    "url": "assets/js/22.7504f977.js",
    "revision": "c9bd892621d1d8a4c8e90590bc48446c"
  },
  {
    "url": "assets/js/23.680b209b.js",
    "revision": "e61e073a07df2782495fbee9c25f8676"
  },
  {
    "url": "assets/js/24.356f82f7.js",
    "revision": "b898be8073867d7bdb08a26c077a82a5"
  },
  {
    "url": "assets/js/25.49253622.js",
    "revision": "79992919ccae5a882c62ea80abbe0ce5"
  },
  {
    "url": "assets/js/26.d49d8044.js",
    "revision": "2295cbe418bd8b80fb00ca173eb7c794"
  },
  {
    "url": "assets/js/27.9371343d.js",
    "revision": "155504538970f3061ad69179fdc618da"
  },
  {
    "url": "assets/js/28.5a94610f.js",
    "revision": "d326b9b16e02e2adc4c7101ddc1e23f6"
  },
  {
    "url": "assets/js/29.70e028d0.js",
    "revision": "0c0f9828ac0c39677ea35e3ed5dc2b2d"
  },
  {
    "url": "assets/js/3.107e051b.js",
    "revision": "b0198408ea99fe4a38749e3bd363df34"
  },
  {
    "url": "assets/js/30.48e0350d.js",
    "revision": "767730cccf9bec2ca59c1ca8bcc5d781"
  },
  {
    "url": "assets/js/31.3d42683b.js",
    "revision": "19a2a80545f0761bc91ee6bc6c5a1f80"
  },
  {
    "url": "assets/js/32.c2d87d68.js",
    "revision": "5d6ccd4ec2ef7de3fd040e2171755228"
  },
  {
    "url": "assets/js/33.743597ed.js",
    "revision": "9f695a2066f4e81879463d1d464d02e0"
  },
  {
    "url": "assets/js/34.6e4c5b1b.js",
    "revision": "49ddd2ebf713148bc52e6812bf1bdc20"
  },
  {
    "url": "assets/js/35.999ecef9.js",
    "revision": "e97ffa5c41f6432936f0fbbacaa2417b"
  },
  {
    "url": "assets/js/36.dd8231a2.js",
    "revision": "fdff964fb2d6358c35b4878b100adc3e"
  },
  {
    "url": "assets/js/37.03c37eb8.js",
    "revision": "560503a4fa0611dd072150475ab303ec"
  },
  {
    "url": "assets/js/38.7942e6d9.js",
    "revision": "3e2311395c0066faad26800383dac9fa"
  },
  {
    "url": "assets/js/39.ac488812.js",
    "revision": "737923962b0dcfaf48bb939693b9360c"
  },
  {
    "url": "assets/js/4.1a23b33c.js",
    "revision": "e4435ffd98788df3245c3a225e9d5337"
  },
  {
    "url": "assets/js/40.75974fc8.js",
    "revision": "b8da1d598647046c6da497b5033699fc"
  },
  {
    "url": "assets/js/41.52b4a1ec.js",
    "revision": "f4fd41299823bcaf735207828718e0ba"
  },
  {
    "url": "assets/js/42.f114d870.js",
    "revision": "120ceb4195ee0605bca64e0fe702316c"
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
    "url": "assets/js/49.6febccb3.js",
    "revision": "019c9066615821b931f70486256d5dfe"
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
    "url": "assets/js/51.75fb44ec.js",
    "revision": "f370a5c65231ee18aaba50397d6db934"
  },
  {
    "url": "assets/js/52.6d75f7d3.js",
    "revision": "7a50995de3fb3ea7126e4ad7e5b80169"
  },
  {
    "url": "assets/js/53.bb4f2d6b.js",
    "revision": "661752b46b611e0a4ab6a6d5f66d8f68"
  },
  {
    "url": "assets/js/54.6adda14e.js",
    "revision": "dfe6b1299d14e87ef3fb945db48183d0"
  },
  {
    "url": "assets/js/55.e0cf2247.js",
    "revision": "1e8dae430b8b704f22ec140f8a48dce6"
  },
  {
    "url": "assets/js/56.477b3f69.js",
    "revision": "05bfa6af35c595d609a667f778031a85"
  },
  {
    "url": "assets/js/57.d3f8fc67.js",
    "revision": "3e8d076f6287d27cbbbabcce6089467b"
  },
  {
    "url": "assets/js/58.79e401aa.js",
    "revision": "db877a4a9e70bec986f188ea68bd1e20"
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
    "url": "assets/js/60.8f1c0e80.js",
    "revision": "e1b7e3bb6ee670ccc668a7a8b77b4c49"
  },
  {
    "url": "assets/js/61.24e88608.js",
    "revision": "04640c578337558fad76bc47d1f3b4bb"
  },
  {
    "url": "assets/js/62.7c6f8fde.js",
    "revision": "4cbed8d3481ee2128bcb0eeae49911fc"
  },
  {
    "url": "assets/js/63.9d921255.js",
    "revision": "097793b99b10e78a6c325da585854a22"
  },
  {
    "url": "assets/js/64.fff84a3e.js",
    "revision": "25593aacb7ad0e7a2e43fcb6684a54ad"
  },
  {
    "url": "assets/js/65.a84f5525.js",
    "revision": "25a3bf9a9d512934962aa3fc76c37791"
  },
  {
    "url": "assets/js/66.3b204612.js",
    "revision": "8cf238346b4714588053b0ce1cb53802"
  },
  {
    "url": "assets/js/67.900ca016.js",
    "revision": "adfeae4fdc86fc2dbc01e1fe9e6a9768"
  },
  {
    "url": "assets/js/68.93804e8c.js",
    "revision": "2a17a0e78ec2f2782838219e9355a24e"
  },
  {
    "url": "assets/js/69.84085f97.js",
    "revision": "468895245fa69a9bcb94bad79b2a0203"
  },
  {
    "url": "assets/js/7.86f37046.js",
    "revision": "15518e66a31bbd4bc2f3567409ee4888"
  },
  {
    "url": "assets/js/8.7c2d113d.js",
    "revision": "07c106c791a969425d6a8eac5fc3fc7a"
  },
  {
    "url": "assets/js/9.c13a85dc.js",
    "revision": "8b2fc1d8e5263ae6b2c99363488e2ef9"
  },
  {
    "url": "assets/js/app.b7313008.js",
    "revision": "93657932524c4f6a0c51dd4df566efed"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "9aca7364d646be189d81173bfe5fbe33"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "ad88955be19a4015f8412262fe039a67"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "098f7e93398528757a2c3be8a8e8d4cf"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "675903a1594ba9b1e77f477aaa6d1fcf"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "03c15fac923340515ead594e2d4d863c"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "271a5f8528efa39d2e6ebc9bb460a363"
  },
  {
    "url": "computer/c/c.html",
    "revision": "f512fdcaa0ce7e7422c452c1c99f813b"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "9f9bd6e8eb2d22a6a5c17fa6e9da5453"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "ef6ca2baaa976be635bb959379975b8f"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "4f38058e35abacca818095ac631a3aa4"
  },
  {
    "url": "computer/python/python.html",
    "revision": "c5d42ec411f464da8d2e35ea7c9ec801"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "b18a83ddbdc9dff3c1adf0dc3bb07a58"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "4a06464db62b5c17fdfb80c7a1ac71e1"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "69eaa194e72360692b2a5e171025bc46"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "2189729a4c39cadc4a8e2cfae8aa3d28"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "3ebd5434999622d572ad001dd78226ec"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "3f3853c0013b2316d163286d81e5e25f"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "940a7c380f92c166e50d06b4da43e4db"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "fa296205e52e9adf97e2e31411e44014"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "8793ead94112356fe76feb7b98f74cd3"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "fbf50b74e00cc52fa14d1a6aa8530c7a"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "412bd56f056ecc3768f6d0e00d1c5df0"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "ae9b25660b64384beba8dd17cd93ed49"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "7f4700c355bc07266039c6260022e8fb"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "ee36bd7efc08baba9ef079211955fb32"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "675a960eef0dd89387d2ffc5a0dcadf0"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "855cb49fd661cda3c4182cbf887f7a8d"
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
    "revision": "c79982279d74c8da6957674b56b9f817"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/微积分.html",
    "revision": "409db09de98401b2343f83c280cbe547"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "ec00afe9b40b4951fe6572df11f400b4"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "37646f93858d06bf642d70dd07db63bd"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "73494db2e675835ad9e3392df93d1e39"
  },
  {
    "url": "physics/光学.html",
    "revision": "9024aa5032a7288432993f56776587b0"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "73195a9605b08501e685c8d8734a4188"
  },
  {
    "url": "physics/力学.html",
    "revision": "5647de73a27aa1ab602be0803fa949ca"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "a8362438e5812aa4a27305dfc2748d2b"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "2a8da4fa0d74e7696af651dc178d24a2"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "605a0ab6a4d073cbb7f73fe483ef3ea5"
  },
  {
    "url": "physics/热学.html",
    "revision": "2db2d0b2c0090274b95d69ab2e27e4b4"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "08d3a4aff2e32ad8f923f335a9c60477"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "3f766319fadb586ad22ade4d30ed5467"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "b5b4bf3e5cbc27ed081080a8f19b2ab0"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "305eda97c2082104e4a7c5feec050d81"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "036eded0ccb9a7c377350c6fdbdd44d4"
  },
  {
    "url": "web/html/css.html",
    "revision": "c3d19bd09488a51bb9f170dc8f9a5259"
  },
  {
    "url": "web/html/html.html",
    "revision": "2d53e4eace95bb9097ba77955d50c6ec"
  },
  {
    "url": "web/html/实例.html",
    "revision": "2abc22c8c4f6860a8bc5fbc071558e8b"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "f0c56d5c98c799f8c5bb323b551a9e28"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "b20f0529426dc1714c0386f5c2278753"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "101b945787b2eefc572535ac5c5ee28f"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "92c776e96362e101ca5de51cbd1a5aa4"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "d84a166a846acd295a4cb176704ab032"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "396188cd5f174c9c8edce31c016d93d4"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "27dcc2768a7e4a65782422477d7a387f"
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
