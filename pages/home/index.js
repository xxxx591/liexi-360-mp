import cookie from '../../js/cookie'
import listimg1 from "../../public/images/list_1.png";
import listimg2 from "../../public/images/list_2.png";
import listimg3 from "../../public/images/list_3.png";
import listimg4 from "../../public/images/list_4.png";
import listimg5 from "../../public/images/list_5.png";
import listimg6 from "../../public/images/list_6.png";
import listimg7 from "../../public/images/banner-box-5-1.png";
import listimg8 from "../../public/images/banner-box-5-2.png";
import listimg9 from "../../public/images/banner-box-5-3.png";
import listimg10 from "../../public/images/banner-box-5-4.png";
Page({
  name: "Home",

  data() {
    return {
      isLogined: false,
      userInfo: {},
      msg:'dddd',
      activeIndex: 0,
      loginFlag:true,
      tabList: [
        { name: "首页", path: "/" },
        { name: "免费查重", path: "submitThesis" },
        // { name: "真伪查询", path: "authQuery" },
        // { name: "学术资讯", path: "consultation" },
        // { name: "人工改重", path: "manualModify" },
        // { name: "使用帮助", path: "useHelp" },
        // { name: "关于我们", path: "aboutUs" }
      ],
      checked: true,
      list1: [
        {
          img: listimg1,
          title: "论文查重",
          content: "支持中英文、日语、韩语等世界多语种查重"
        },
        {
          img: listimg2,
          title: "智能降重",
          content: "根据报告重复内容自动修改，降低重复率"
        },
        {
          img: listimg3,
          title: "同步改重",
          content: "直接在报告里自行修改论文重复内容"
        },
        {
          img: listimg4,
          title: "论文纠错",
          content: "自动检查论文中的错别字并自动改正"
        },
        {
          img: listimg5,
          title: "自动排版",
          content: "集合各大院校论文排版格式可以进行自动排版"
        },
        {
          img: listimg6,
          title: "批量上传",
          content: "多篇文章打包一次上传适合批量上传文章使用"
        }
      ],
      list2: [
        {
          title: "安全保障",
          content: "上传论文数据加密处理,并定期删除论文保障论文安全"
        },
        {
          title: "优秀算法",
          content: "通过NLU指纹算法和NLP算法技术相结合论文检测结果更准更客观"
        },
        {
          title: "数据更全",
          content: "超9千万学术期刊及学位论文和近20亿互联网数据及800万图书数据"
        },
        {
          title: "速度更快",
          content: "分布式云计算方式部署计算机更有效加快计算效率推进项目进程"
        }
      ],
      list3: [
        {
          title: "高校",
          content: "高校老师学术论文 学生课程论文 毕业论文查重"
        },
        { title: "医院", content: "医生学术论文晋升职称论文查重评审" },
        { title: "企事业", content: "企事业单位内部晋升职称论文的查重" },
        { title: "其他", content: "其他有查重需求的个人或单位提供技术支持" }
      ],
      list4: [
        {
          img: listimg7,
          title: "pc电脑",
          content: "查重、改重、降重一体，体验 更好"
        },
        {
          img: listimg8,
          title: "手机浏览器",
          content: "提交论文，查看结果、充值更方便。"
        },
        {
          img: listimg9,
          title: "微信公众号",
          content: "关注后自动推送查重结果，方便论文检测，充值。"
        },
        {
          img: listimg10,
          title: "微信小程序",
          content: "路径更浅，论文查重、充值更方便。"
        }
      ],
      list5: [
        [
          {
            img: "#",
            user: "谢沅航",
            userContent: "随便说点什么来占字数",
            adminContent: "哈哈哈哈哈哈哈哈哈我不管我无敌了"
          },
          {
            img: "#",
            user: "谢沅航",
            userContent: "随便说点什么来占字数",
            adminContent: "哈哈哈哈哈哈哈哈哈我不管我无敌了"
          }
        ],
        [
          {
            img: "#",
            user: "谢沅航",
            userContent: "随便说点什么来占字数",
            adminContent: "哈哈哈哈哈哈哈哈哈我不管我无敌了"
          },
          {
            img: "#",
            user: "谢沅航",
            userContent: "随便说点什么来占字数",
            adminContent: "哈哈哈哈哈哈哈哈哈我不管我无敌了"
          },
          {
            img: "#",
            user: "谢沅航",
            userContent: "随便说点什么来占字数",
            adminContent: "哈哈哈哈哈哈哈哈哈我不管我无敌了"
          }
        ],
        [
          {
            img: "#",
            user: "谢沅航",
            userContent: "随便说点什么来占字数",
            adminContent: "哈哈哈哈哈哈哈哈哈我不管我无敌了"
          },
          {
            img: "#",
            user: "谢沅航",
            userContent: "随便说点什么来占字数",
            adminContent: "哈哈哈哈哈哈哈哈哈我不管我无敌了"
          }
        ]
      ],
      newsList1: [
        {
          time: "2019-10-11",
          title: "新闻标题",
          content: "新闻内容啊啊啊",
          id: "123"
        },
        {
          time: "2019-10-11",
          title: "新闻标题",
          content: "新闻内容啊啊啊",
          id: "123"
        },
        {
          time: "2019-10-11",
          title: "新闻标题",
          content: "新闻内容啊啊啊",
          id: "123"
        },
        {
          time: "2019-10-11",
          title: "新闻标题",
          content: "新闻内容啊啊啊",
          id: "123"
        }
      ],
      newsList2: [
        {
          time: "2019-10-11",
          title: "新闻标题",
          content: "新闻内容啊啊啊",
          id: "123"
        },
        {
          time: "2019-10-11",
          title: "新闻标题",
          content: "新闻内容啊啊啊",
          id: "123"
        },
        {
          time: "2019-10-11",
          title: "新闻标题",
          content: "新闻内容啊啊啊",
          id: "123"
        },
        {
          time: "2019-10-11",
          title: "新闻标题",
          content: "新闻内容啊啊啊",
          id: "123"
        }
      ],
      loginFlag: true, // 登陆框
      registerFlag: false, // 注册框
      userFlag: false, // 用户框
      userName: "",
      userPassword: "",
      userInfo: {},
      registerName: "", //用户名
      registerNickName: "", //昵称
      registerPassword: "", //密码
      registerPassword2: "", //确认密码
      code: "", //验证码,
      errerTitle:'提示',
      erreoMsg:'',
      visible:false

    };
  },
  computed: {
    getday() {
      return function(time) {
        return "12";
      };
    },
    getyear() {
      return function(time) {
        return "2019-10";
      };
    }
  },
  methods: {
    userLogin() {
      this.$router.push({
        path: "login"
      });
    },
    changeSserName(e){
      this.userName = e.detail.value
    },
    changeSserPassword(e){
      this.userPassword = e.detail.value
    },
    async loginNow() {
      let params = {
        username: this.userName,
        password: this.userPassword,
        tenantId: "936685"
      };

      let data = await this.$store.dispatch("login", params);
      // console.log(data);
      if (data.error_code != 400) {
        console.log(data);
        sessionStorage.setItem("refresh_token", data.refresh_token);
        cookie.setCookie("token", data.access_token);
        this.$store.BladeAuth = data.access_token;
        sessionStorage.setItem("user_info", JSON.stringify(data));
        this.userInfo = data;
        this.loginFlag = false;
        this.userFlag = true;
      } else {
        this.visible = true
        this.erreoTitle = '错误提示'
        this.erreoMsg = data.error_description
         
      }
    },
    goRouter(state) {
      switch (state) {
        case 1:
          this.$router.push("submitThesis");
          break;
        case 2:
          this.$router.push('tableList');
          break;
        default:
          break;
      }
    },
    async loginUser() {
      let user = await this.$store.dispatch("userInfo");
      sessionStorage.setItem("user_info", user.data);
      this.userInfo = user.data;
      this.loginFlag = false;
      this.userFlag = true;
      console.log(user);
    },
    async registerNow() {
      if (this.registerPassword != this.registerPassword2) {
        this.visible = true
        this.erreoTitle = '错误提示'
        this.erreoMsg = '两次密码输入不一致'
         
        return;
      }
      let params = {
        account: this.registerName,
        name: this.registerNickName,
        password: this.registerPassword
      };
      let data = await this.$store.dispatch("register", params);
      //  console.log(data);
      if (data.code == 200) {
        this.visible = true
        this.erreoTitle = '成功'
        this.erreoMsg = '注册成功'
        this.registerFlag = false;
        this.loginFlag = true;
         
      } else {
        this.visible = true
        this.erreoTitle = '错误提示'
        this.erreoMsg = data.error_description
         
      }
    },
    showregist() {
      this.loginFlag = false;
      this.registerFlag = true;
    },
    showlogin() {
      this.loginFlag = true;
      this.registerFlag = false;
    },
    loginOut() {
      this.loginFlag = true;
      this.registerFlag = false;
      this.userFlag = false;
      cookie.delCookie("token");
    }
  },
  created() {
    // if (this.$store.state.loginFlags) {
    //   this.userInfo = JSON.parse(sessionStorage.getItem("user_info"));
    //   this.userFlag = true;
    // }
  },
});
