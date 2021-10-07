import { Typography } from "antd";

const { Title, Paragraph, Link } = Typography;

const About = () => {
  return (
    <Typography>
      <Title level={2}>作者介绍🦈</Title>
      <Paragraph strong={true}>
        一个臭打游戏，一天上下闲着没事干的的脆脆鲨🦈..........
      </Paragraph>
      <Title level={2}>站点介绍</Title>
      <Title level={5}>本站点一共都使用到了以下技术栈......</Title>

      <Paragraph>
        <ul>
          <li>
            <Link href="https://reactjs.org/">
              React.js ------- 用于构建用户界面的 JavaScript 库
            </Link>
          </li>
          <li>
            <Link href="https://ant.design/">
              Ant Design ------- 一套企业级UI设计语言和React组件库
            </Link>
          </li>
          <li>
            <Link href="https://axios-http.com/">
              Axios ------- Axios 是一个基于 promise
              的网络请求库，可以用于浏览器和 node.js
            </Link>
          </li>
          <li>
            <Link href="https://emotion.sh/docs/introduction">
              Emotion ------- 一种在 JavaScript 文件中集成 CSS 代码的解决方案。
            </Link>
          </li>
          <li>
            <Link href="https://swiper.com.cn/">
              Swiper ------- 开源、免费、强大的触摸滑动插件
            </Link>
          </li>
        </ul>
      </Paragraph>

      <Title level={2}>发病！</Title>
      <Paragraph>
        <Title level={5}>应该也没有几个人能看到这个网站🥵🥵🥵</Title>
        黑的没一点色彩⚫⚫
        <br />
        羌笛声🎶笼罩了整片深海🌊🌊
        <br />
        那邪恶面的缪斯醒过来🧝‍♀️🧝‍♀️
        <br />
        比天空还要洁白🌅🌅
        <br />
        眉眼却有尖刀🔪隐隐在闪❇️❇️
        <br />
        Ai 请别听从她的召唤👄👄
        <br />
        Ai 别深陷她的迷幻🥴🥴
        <br />
        船舷🚤被左右摇摆⬅️➡️
        <br />
        用爱💞把结界打开🔯🔯
        <br />
        海妖有何手段🧞‍♀️🧞‍♀️
        <br />
        用正义之光✨打败🥊🥊
        <br />
        越美丽的越不可碰
        <br />
        魔鬼总是天使面孔😇😇
        <br />
        迷惑了所有瞳孔👁️👁️
        <br />
        幸亏有你叫醒我🗣🗣
        <br />
        越艰难的越要携手🤝🤝
        <br />
        一起穿过虚幻心魔👿👿
        <br />
        旅途的致命关口⚠️⚠️
        <br />
        有你就能够冲破💥💥
        <br />
        💃🏻👊💃🏻👊💃🏻👊💃🏻👊💃🏻
      </Paragraph>
    </Typography>
  );
};

export default About;
