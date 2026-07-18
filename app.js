const majors = [
  {
    "id": "cs",
    "name": "计算机科学",
    "en": "Computer Science",
    "category": "计算与数据",
    "risk": 68,
    "overview": "研究计算、算法、系统与信息处理的基础学科。AI会明显减少只负责“按要求写代码”的基础岗位，但理解复杂系统、处理工程问题和承担安全责任仍然需要专业人员。",
    "threshold": "当工作主要是照着明确需求写常见功能，AI生成后又能靠自动测试迅速检查时，这类岗位最容易减少。",
    "high": [
      {
        "direction": "模板化网页与低代码开发",
        "jobs": [
          "前端开发助理",
          "网页制作专员",
          "低代码实施顾问"
        ],
        "entry": "大专或本科",
        "preferred": "本科 + 可上线的项目作品",
        "why": "常见页面、表单和组件已经非常成熟，AI可以快速生成，企业对纯执行人员的需求会减少。",
        "directionEn": "Template Web and Low-code Development",
        "jobsEn": [
          "Front-end Development Assistant",
          "Web Production Specialist",
          "Low-code Implementation Consultant"
        ],
        "entryEn": "Associate degree or bachelor’s degree",
        "preferredEn": "bachelor’s degree + relevant project or professional experience",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "基础业务系统开发",
        "jobs": [
          "初级软件工程师",
          "应用开发工程师",
          "内部系统开发专员"
        ],
        "entry": "本科",
        "preferred": "本科 + 实习或真实业务项目",
        "why": "简单的增删改查、接口调用和后台管理系统，很容易被AI工具批量完成。",
        "directionEn": "Basic Business Systems Development",
        "jobsEn": [
          "Junior Software Engineer",
          "Application Development Engineer",
          "Internal Systems Development Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree + relevant project or professional experience",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "常规测试与技术文档",
        "jobs": [
          "初级测试工程师",
          "测试用例设计助理",
          "技术文档专员"
        ],
        "entry": "大专或本科",
        "preferred": "本科 + 自动化测试能力",
        "why": "生成测试用例、整理说明文档和检查常见错误，正是AI最擅长的重复性工作。",
        "directionEn": "Routine Testing and Technical Documentation",
        "jobsEn": [
          "Junior Testing Engineer",
          "Test-case Design Assistant",
          "Technical-documentation Specialist"
        ],
        "entryEn": "Associate degree or bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      }
    ],
    "border": [
      {
        "direction": "后端与云应用开发",
        "jobs": [
          "后端开发工程师",
          "云应用工程师",
          "平台开发工程师"
        ],
        "entry": "本科",
        "preferred": "本科或硕士 + 大型系统经验",
        "why": "代码本身会越来越容易生成，但数据库设计、系统稳定性和上线后的责任仍需要工程师承担。",
        "directionEn": "Backend and Cloud Application Development",
        "jobsEn": [
          "Backend Development Engineer",
          "Cloud Application Engineer",
          "Platform Development Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Bachelor’s degree or master’s degree + large-scale systems experience",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "数据工程",
        "jobs": [
          "数据工程师",
          "数据平台工程师",
          "数据仓库工程师"
        ],
        "entry": "本科",
        "preferred": "硕士或本科 + 复杂数据项目",
        "why": "AI能写SQL和数据管道，但数据质量、权限、成本和跨部门口径很难完全自动处理。",
        "directionEn": "Data Engineering",
        "jobsEn": [
          "Data Engineer",
          "Data Platform Engineer",
          "Data Warehouse Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can speed modelling and planning, but real systems introduce safety constraints, site variation, testing and integration problems that require experienced engineers."
      },
      {
        "direction": "产品型全栈开发",
        "jobs": [
          "全栈工程师",
          "产品工程师",
          "技术型创业者"
        ],
        "entry": "本科",
        "preferred": "本科 + 产品、用户和商业经验",
        "why": "只写功能容易被替代；能判断用户需求、快速试验并推动产品落地的人仍然有价值。",
        "directionEn": "Product-oriented Full-stack Development",
        "jobsEn": [
          "Full-stack Engineer",
          "Product Engineer",
          "Technical Entrepreneur"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree + relevant project or professional experience",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      }
    ],
    "safe": [
      {
        "direction": "核心系统与计算基础",
        "jobs": [
          "分布式系统工程师",
          "数据库内核工程师",
          "编译器工程师"
        ],
        "entry": "本科",
        "preferred": "硕士或博士更常见",
        "why": "这类工作需要深入理解计算机原理，并对性能、可靠性和复杂故障负责。",
        "directionEn": "Core Systems and Computing Foundations",
        "jobsEn": [
          "Distributed Systems Engineer",
          "Database Kernel Engineer",
          "Compiler Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis more common",
        "whyEn": "This track relies more heavily on domain judgement, complex trade-offs, accountability or original problem-solving, so AI is more likely to extend professional capability than remove the role."
      },
      {
        "direction": "网络安全与系统可靠性",
        "jobs": [
          "安全工程师",
          "安全研究员",
          "站点可靠性工程师 SRE"
        ],
        "entry": "本科",
        "preferred": "硕士或本科 + 安全认证/实战经验",
        "why": "攻击方式不断变化，判断真实风险和处理线上事故不能只靠自动生成答案。",
        "directionEn": "Cybersecurity and System Reliability",
        "jobsEn": [
          "Security Engineer",
          "Security Researcher",
          "Site Reliability Engineer (SRE)"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or bachelor’s degree + securitycertification/hands-on experience",
        "whyEn": "The work involves changing threats, regulation, ethical trade-offs and accountability. AI can flag issues, but people must decide what risk is acceptable and own the consequences."
      },
      {
        "direction": "计算机与行业交叉",
        "jobs": [
          "医疗信息学工程师",
          "金融科技工程师",
          "工业软件工程师"
        ],
        "entry": "本科",
        "preferred": "硕士或双专业背景更有优势",
        "why": "难点在于理解医疗、金融或制造场景，并把技术真正嵌入业务。",
        "directionEn": "Computing with Industry Specialisation",
        "jobsEn": [
          "Health Informatics Engineer",
          "Fintech Engineer",
          "Industrial Software Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or an interdisciplinary or dual-field backgroundis advantageous",
        "whyEn": "This track relies more heavily on domain judgement, complex trade-offs, accountability or original problem-solving, so AI is more likely to extend professional capability than remove the role."
      }
    ],
    "advice": [
      "不要把“会写代码”当核心卖点，重点建立算法、系统、数据结构和调试能力。",
      "至少形成一个“计算机+真实行业”组合，如CS+医疗、CS+金融或CS+机器人。",
      "作品集应证明你能定义问题、做技术取舍、部署并对结果负责。"
    ],
    "adviceEn": [
      "Build durable foundations in algorithms, statistics, data structures, systems and evaluation—not only familiarity with current AI tools.",
      "Complete projects that show problem definition, data or system choices, testing, deployment and responsibility for failures.",
      "Develop a domain pairing such as computing + healthcare, finance, manufacturing, public policy or robotics.",
      "Use postgraduate study selectively for research-heavy, mathematically demanding or highly specialised tracks."
    ]
  },
  {
    "id": "visual",
    "name": "视觉传达",
    "en": "Visual Communication",
    "category": "创意传播与人文社科",
    "risk": 76,
    "overview": "围绕图形、品牌、信息与视觉叙事解决传播问题。生成式图像和视频使基础执行供给激增，真正有价值的部分正从“做图”迁移到策略、系统、洞察和跨媒介体验。",
    "threshold": "当工作只是根据文案、尺寸和参考风格快速出图，客户主要比较表面效果时，AI会直接挤压这类设计岗位。",
    "high": [
      {
        "direction": "电商与社交媒体视觉执行",
        "jobs": [
          "电商美工",
          "社媒设计师",
          "平面设计助理"
        ],
        "entry": "大专或本科",
        "preferred": "本科 + 商业作品集",
        "why": "主图、海报、封面和活动素材可以批量生成，单纯拼速度和数量越来越难形成优势。",
        "directionEn": "E-commerce and Social-media Visual Production",
        "jobsEn": [
          "E-commerce Visual Designer",
          "Social-media Designer",
          "Graphic Design Assistant"
        ],
        "entryEn": "Associate degree or bachelor’s degree",
        "preferredEn": "Bachelor’s degree + businessportfolio",
        "whyEn": "Generative tools can now produce large volumes of first-draft visual or written material. Roles that compete mainly on speed, format and volume are therefore under strong pressure."
      },
      {
        "direction": "基础标志与插画制作",
        "jobs": [
          "Logo设计助理",
          "商业插画师",
          "视觉素材设计师"
        ],
        "entry": "大专或本科",
        "preferred": "本科 + 有辨识度的作品集",
        "why": "简单标志、图标和风格化插画已经可以由生成式工具快速提供大量方案。",
        "directionEn": "Basic Logo and Illustration Production",
        "jobsEn": [
          "Logo Design Assistant",
          "Commercial Illustrator",
          "Visual Asset Designer"
        ],
        "entryEn": "Associate degree or bachelor’s degree",
        "preferredEn": "bachelor’s degree + relevant project or professional experience",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "模板化短视频包装",
        "jobs": [
          "视频包装助理",
          "短视频剪辑师",
          "字幕与封面设计师"
        ],
        "entry": "大专或本科",
        "preferred": "本科 + 动态设计能力",
        "why": "剪辑、字幕、转场、配音和缩略图越来越能由软件自动完成。",
        "directionEn": "Template-based Short-video Packaging",
        "jobsEn": [
          "Video Packaging Assistant",
          "Short-video Editor",
          "Subtitling And Thumbnail Designer"
        ],
        "entryEn": "Associate degree or bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      }
    ],
    "border": [
      {
        "direction": "品牌视觉设计",
        "jobs": [
          "品牌设计师",
          "视觉识别设计师",
          "包装设计师"
        ],
        "entry": "本科",
        "preferred": "本科或硕士 + 完整品牌项目",
        "why": "执行环节会被AI加速，但品牌定位、调性判断和长期一致性仍需要人来把关。",
        "directionEn": "Brand Visual Design",
        "jobsEn": [
          "Brand Designer",
          "Visual Identity Designer",
          "Packaging Designer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "UI与数字产品视觉",
        "jobs": [
          "UI设计师",
          "视觉交互设计师",
          "设计系统设计师"
        ],
        "entry": "本科",
        "preferred": "本科或硕士 + 用户研究/交互能力",
        "why": "界面可以自动生成，但信息怎么组织、用户是否看得懂、产品是否好用仍需要判断。",
        "directionEn": "UI and Digital Product Visual Design",
        "jobsEn": [
          "UI Designer",
          "Visual Interaction Designer",
          "Design Systems Designer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "动态视觉与三维内容",
        "jobs": [
          "动态设计师",
          "三维视觉设计师",
          "创意技术设计师"
        ],
        "entry": "本科",
        "preferred": "本科或硕士 + 技术型作品集",
        "why": "AI能帮助做素材和预演，但镜头、节奏、审美控制和制作统筹仍需要经验。",
        "directionEn": "Motion Design and 3D Content",
        "jobsEn": [
          "Motion Design Designer",
          "3D Visual Designer",
          "Creative Technology Designer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      }
    ],
    "safe": [
      {
        "direction": "品牌策略与设计研究",
        "jobs": [
          "品牌策略师",
          "设计研究员",
          "信息设计师"
        ],
        "entry": "本科",
        "preferred": "硕士更有优势",
        "why": "这类工作要理解用户、市场和文化，再把研究结果变成长期品牌系统。",
        "directionEn": "Brand Strategy and Design Research",
        "jobsEn": [
          "Brand Strategist",
          "Specialist Researcher",
          "Information Designer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degreeis advantageous",
        "whyEn": "The central challenge is defining new questions, designing valid methods and interpreting uncertain evidence. AI can accelerate research, but originality and scientific judgement remain essential."
      },
      {
        "direction": "服务设计与复杂体验",
        "jobs": [
          "服务设计师",
          "体验策略师",
          "无障碍设计师"
        ],
        "entry": "本科",
        "preferred": "硕士较常见",
        "why": "需要观察真实用户、协调不同部门并改造完整服务流程，不能只靠生成一张图。",
        "directionEn": "Service Design and Complex Experiences",
        "jobsEn": [
          "Service Designer",
          "Experience Strategist",
          "Accessibility Designer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degreeis common",
        "whyEn": "Trust, cultural understanding, negotiation and live judgement are central to the role. AI can support preparation, but cannot fully replace the relationship or accountability."
      },
      {
        "direction": "艺术指导与高责任视觉沟通",
        "jobs": [
          "艺术指导",
          "创意总监",
          "医疗/公共信息设计师"
        ],
        "entry": "本科",
        "preferred": "本科或硕士 + 多年项目经验",
        "why": "最终需要有人对传播效果、社会影响和团队产出负责，AI主要承担辅助工作。",
        "directionEn": "Art Direction and High-stakes Visual Communication",
        "jobsEn": [
          "Art Director",
          "Creative Director",
          "Healthcare / Public Information Designer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Bachelor’s degree or master’s degree + several years of project experience",
        "whyEn": "The work depends on research, strategic intent, cultural judgement and responsibility for the final message—not simply generating an attractive output."
      }
    ],
    "advice": [
      "作品集少放“漂亮成品”，多展示调研、概念筛选、失败迭代和系统化落地。",
      "主动学习生成式设计工作流，但把AI当草图与变体引擎，而非个人风格替代品。",
      "优先选择有用户研究、交互、数据可视化或社会议题模块的课程。"
    ],
    "adviceEn": [
      "Develop a recognisable subject or issue specialism alongside strong research, writing, visual or communication skills.",
      "Show primary evidence—interviews, fieldwork, archives, experiments, audience research or original reporting—rather than only polished outputs.",
      "Use AI for ideation and production, while making your own judgement, sourcing, ethics and editorial responsibility visible.",
      "Choose postgraduate study when it unlocks professional licensing, advanced research methods or a clearly defined specialist role."
    ]
  },
  {
    "id": "mech",
    "name": "机械工程",
    "en": "Mechanical Engineering",
    "category": "工程与制造",
    "risk": 43,
    "overview": "研究力学、热流体、机械设计、制造与机电系统。AI会改变CAD、仿真和优化流程，但真实世界约束、实验验证、安全责任和跨系统集成仍然很难完全交给AI。",
    "threshold": "当工作主要是套用标准零件、修改尺寸、出工程图和整理清单，而很少接触测试、现场和安全决策时，更容易被AI压缩。",
    "high": [
      {
        "direction": "标准件建模与工程制图",
        "jobs": [
          "机械制图员",
          "CAD工程助理",
          "BOM专员"
        ],
        "entry": "大专或本科",
        "preferred": "本科 + CAD/PLM实操",
        "why": "成熟零件库和参数化软件已经能自动完成大量建模、标注和清单整理。",
        "directionEn": "Standard-part Modelling and Engineering Drawing",
        "jobsEn": [
          "Mechanical Drafter",
          "CAD Assistant",
          "Bill of Materials Specialist"
        ],
        "entryEn": "Associate degree or bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The routine parts are highly standardised—such as drafting, documentation, parameter changes or basic checks—so AI-enabled software can reduce the amount of entry-level execution work."
      },
      {
        "direction": "成熟产品的参数改型",
        "jobs": [
          "产品改型工程师",
          "机械设计助理",
          "配置工程师"
        ],
        "entry": "本科",
        "preferred": "本科 + 产品平台经验",
        "why": "如果只是调整尺寸、材料或配置，AI和生成式设计工具会显著减少人工工作量。",
        "directionEn": "Parameter-based Modification of Mature Products",
        "jobsEn": [
          "Product Adaptation Engineer",
          "Mechanical Design Assistant",
          "Configuration Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree + relevant project or professional experience",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "常规仿真与报告整理",
        "jobs": [
          "CAE分析助理",
          "仿真工程助理",
          "技术资料工程师"
        ],
        "entry": "本科",
        "preferred": "硕士或本科 + 真实验证经验",
        "why": "建立常规模型和生成报告越来越容易，单纯会操作软件不再足够。",
        "directionEn": "Routine Simulation and Report Preparation",
        "jobsEn": [
          "CAE Analysis Assistant",
          "Simulation Assistant",
          "Technical-data Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      }
    ],
    "border": [
      {
        "direction": "结构设计与CAE分析",
        "jobs": [
          "机械结构工程师",
          "CAE工程师",
          "疲劳分析工程师"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "AI可以给方案，但边界条件设错、材料失效或安全系数判断错误会带来真实后果。",
        "directionEn": "Structural Design and CAE Analysis",
        "jobsEn": [
          "Mechanical Structures Engineer",
          "CAE Engineer",
          "Fatigue Analysis Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "制造工艺与产线优化",
        "jobs": [
          "制造工程师",
          "工艺工程师",
          "精益生产工程师"
        ],
        "entry": "本科",
        "preferred": "本科或硕士 + 工厂经验",
        "why": "标准流程能被优化，但设备异常、人员配合和成本取舍往往依赖现场经验。",
        "directionEn": "Manufacturing Processes and Production-line Optimisation",
        "jobsEn": [
          "Manufacturing Engineer",
          "Process Engineer",
          "Lean Manufacturing Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can speed modelling and planning, but real systems introduce safety constraints, site variation, testing and integration problems that require experienced engineers."
      },
      {
        "direction": "汽车零部件与系统集成",
        "jobs": [
          "汽车零部件工程师",
          "整车集成工程师",
          "测试工程师"
        ],
        "entry": "本科",
        "preferred": "硕士或本科 + 行业项目",
        "why": "单个零件更容易自动设计，但整车性能、法规、安全和供应链仍需要系统工程师。",
        "directionEn": "Automotive Components and Systems Integration",
        "jobsEn": [
          "Automotive Components Engineer",
          "Vehicle Integration Engineer",
          "Testing Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      }
    ],
    "safe": [
      {
        "direction": "机器人与机电一体化",
        "jobs": [
          "机器人工程师",
          "机电系统工程师",
          "自动化研发工程师"
        ],
        "entry": "本科",
        "preferred": "硕士更有优势",
        "why": "这类岗位要把机械、控制、传感器和软件放到真实机器上反复调试。",
        "directionEn": "Robotics and Mechatronics",
        "jobsEn": [
          "Robotics Engineer",
          "Mechatronic Systems Engineer",
          "Automated R&D Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degreeis advantageous",
        "whyEn": "The role depends on physical systems, testing, safety, site conditions and accountability for real-world performance. AI can assist design, but cannot independently own the outcome."
      },
      {
        "direction": "能源、热管理与高可靠装备",
        "jobs": [
          "热设计工程师",
          "能源系统工程师",
          "航空航天工程师"
        ],
        "entry": "本科",
        "preferred": "硕士或博士较常见",
        "why": "高温、高压、极端环境和安全要求使工程判断与实验验证不可省略。",
        "directionEn": "Energy, Thermal Management and High-reliability Equipment",
        "jobsEn": [
          "Thermal Design Engineer",
          "Energy Systems Engineer",
          "Aerospace Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis common",
        "whyEn": "Trust, cultural understanding, negotiation and live judgement are central to the role. AI can support preparation, but cannot fully replace the relationship or accountability."
      },
      {
        "direction": "失效分析与先进制造",
        "jobs": [
          "失效分析工程师",
          "增材制造工程师",
          "系统工程师"
        ],
        "entry": "本科",
        "preferred": "硕士或博士更有优势",
        "why": "需要从损坏实物和测试数据中找出原因，并给出能真正生产和验证的改进方案。",
        "directionEn": "Failure Analysis and Advanced Manufacturing",
        "jobsEn": [
          "Failure Analysis Engineer",
          "Additive Manufacturing Engineer",
          "Systems Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis advantageous",
        "whyEn": "The role depends on physical systems, testing, safety, site conditions and accountability for real-world performance. AI can assist design, but cannot independently own the outcome."
      }
    ],
    "advice": [
      "课程选择应强化控制、编程、传感器、数值方法，而不只停留在传统制图。",
      "项目中必须出现实物原型、测试数据、失效分析和迭代证据。",
      "优先培养把仿真结果与现实边界条件相互校验的能力。"
    ],
    "adviceEn": [
      "Strengthen mathematics, physics, modelling, experimentation and the ability to validate ideas against real-world constraints.",
      "Show the full engineering cycle: requirements, concepts, calculations, prototypes, testing, failure analysis and iteration.",
      "Learn to use AI and simulation tools, while demonstrating that you can question assumptions and verify safety-critical results.",
      "Check whether target roles require professional accreditation, registration, site experience or a specialised master’s degree."
    ]
  },
  {
    "id": "psych",
    "name": "心理学",
    "en": "Psychology",
    "category": "创意传播与人文社科",
    "risk": 42,
    "overview": "研究认知、行为、情绪与社会互动。量表评分、资料整理和基础内容可自动化，但临床关系、伦理责任、复杂评估和真实场景干预较难替代。",
    "threshold": "当工作只是根据问卷分数给出标准解释，或提供通用情绪建议，又不承担诊断和危机处理责任时，最容易被AI接手。",
    "high": [
      {
        "direction": "标准化心理测评与科普内容",
        "jobs": [
          "心理测评助理",
          "心理内容编辑",
          "员工关怀内容运营"
        ],
        "entry": "本科",
        "preferred": "本科 + 统计或内容经验",
        "why": "量表计分、通用解释和科普文章可以快速自动生成。",
        "directionEn": "Standardised Psychological Testing and Educational Content",
        "jobsEn": [
          "Psychological Assessment Assistant",
          "Psychology Content Editor",
          "Employee-wellbeing Content Operations Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree + relevant project or professional experience",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "基础研究资料处理",
        "jobs": [
          "研究助理",
          "问卷数据助理",
          "文献整理员"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "数据清洗、编码和文献摘要会大量自动化，只做这些步骤的岗位会减少。",
        "directionEn": "Basic Research Data Processing",
        "jobsEn": [
          "Research Assistant",
          "Survey Data Assistant",
          "Literature Research Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "低风险的脚本式陪伴",
        "jobs": [
          "在线支持专员",
          "心理健康客服",
          "基础教练助理"
        ],
        "entry": "大专或本科",
        "preferred": "本科 + 受督导实践",
        "why": "对常见问题提供固定话术和日常提醒，AI已经能够完成相当一部分。",
        "directionEn": "Low-risk Scripted Support",
        "jobsEn": [
          "Online Support Specialist",
          "Mental-health Support Agent",
          "Basic Coaching Assistant"
        ],
        "entryEn": "Associate degree or bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "Rule-based screening, standard forms and routine documentation are increasingly automatable. Human value shifts toward exceptions, investigation and accountable judgement."
      }
    ],
    "border": [
      {
        "direction": "用户研究与消费者洞察",
        "jobs": [
          "用户研究员",
          "消费者洞察分析师",
          "体验研究员"
        ],
        "entry": "本科",
        "preferred": "硕士更常见",
        "why": "AI能整理访谈，但研究问题怎么设计、受访者为何这样说，仍需要专业判断。",
        "directionEn": "User Research and Consumer Insights",
        "jobsEn": [
          "User Researcher",
          "Consumer Insight Analyst",
          "Experience Researcher"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degreeis more common",
        "whyEn": "AI can prepare information and options, but the work still depends on stakeholder trust, negotiation, context and responsibility for implementation."
      },
      {
        "direction": "组织心理与人才测评",
        "jobs": [
          "组织发展顾问",
          "人才测评顾问",
          "员工体验经理"
        ],
        "entry": "本科",
        "preferred": "心理学/组织心理硕士更有优势",
        "why": "测评工具会自动化，但组织文化、管理冲突和变革推动很难靠模板解决。",
        "directionEn": "Organisational Psychology and Talent Assessment",
        "jobsEn": [
          "Organisational Development Consultant",
          "Talent Assessment Consultant",
          "Employee Experience Manager"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "心理咨询与生涯教练",
        "jobs": [
          "心理咨询师",
          "学校辅导员",
          "生涯教练"
        ],
        "entry": "本科",
        "preferred": "相关硕士 + 当地认证/受督导时数",
        "why": "一般建议可以生成，但长期信任关系、伦理边界和个体差异仍需要真人。",
        "directionEn": "Counselling Psychology and Career Coaching",
        "jobsEn": [
          "Counselling Psychologist",
          "School Counsellor",
          "Career Coach"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant certification, registration or licence",
        "whyEn": "AI can prepare information and options, but the work still depends on stakeholder trust, negotiation, context and responsibility for implementation."
      }
    ],
    "safe": [
      {
        "direction": "临床心理与危机干预",
        "jobs": [
          "临床心理学家",
          "危机干预专员",
          "儿童与家庭治疗师"
        ],
        "entry": "相关本科",
        "preferred": "临床博士/专业硕士 + 注册执照",
        "why": "需要面对复杂病史、自伤风险和家庭关系，并承担专业责任。",
        "directionEn": "Clinical Psychology and Crisis Intervention",
        "jobsEn": [
          "Clinical Psychologist",
          "Crisis Intervention Specialist",
          "Child And Family Therapist"
        ],
        "entryEn": "bachelor’s degree",
        "preferredEn": "PhD + relevant certification, registration or licence",
        "whyEn": "The work combines specialist knowledge with patient safety, regulation, professional judgement and human trust. AI is more likely to support licensed practitioners than replace them."
      },
      {
        "direction": "神经心理与司法评估",
        "jobs": [
          "神经心理学家",
          "司法心理学家",
          "临床评估专家"
        ],
        "entry": "相关本科",
        "preferred": "博士或专业学位 + 注册资格",
        "why": "评估结果可能影响治疗、司法或重大人生决定，必须由受训专业人员负责。",
        "directionEn": "Neuropsychological and Forensic Assessment",
        "jobsEn": [
          "Specialist Psychologist",
          "Forensic Psychologist",
          "Domain Specialist"
        ],
        "entryEn": "bachelor’s degree",
        "preferredEn": "PhD + relevant certification, registration or licence",
        "whyEn": "The work combines specialist knowledge with patient safety, regulation, professional judgement and human trust. AI is more likely to support licensed practitioners than replace them."
      },
      {
        "direction": "行为科学研究",
        "jobs": [
          "行为科学家",
          "实验心理学研究员",
          "计算心理学研究员"
        ],
        "entry": "本科",
        "preferred": "研究型硕士或博士",
        "why": "核心价值在于提出新问题、设计实验和解释因果。",
        "directionEn": "Behavioural Science Research",
        "jobsEn": [
          "Behavioural Scientist",
          "Experimental Psychology Researcher",
          "Computational Psychology Researcher"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "PhD",
        "whyEn": "The central challenge is defining new questions, designing valid methods and interpreting uncertain evidence. AI can accelerate research, but originality and scientific judgement remain essential."
      }
    ],
    "advice": [
      "申请前区分心理学研究、咨询服务、商业用户研究和神经科学等不同路径。",
      "加强统计、实验设计、编程和伦理训练，避免只停留在“喜欢帮助别人”。",
      "选择能提供受督导实践、实验室或真实研究项目的课程。"
    ],
    "adviceEn": [
      "Develop a recognisable subject or issue specialism alongside strong research, writing, visual or communication skills.",
      "Show primary evidence—interviews, fieldwork, archives, experiments, audience research or original reporting—rather than only polished outputs.",
      "Use AI for ideation and production, while making your own judgement, sourcing, ethics and editorial responsibility visible.",
      "Choose postgraduate study when it unlocks professional licensing, advanced research methods or a clearly defined specialist role."
    ]
  },
  {
    "id": "media",
    "name": "传媒",
    "en": "Media & Communication",
    "category": "创意传播与人文社科",
    "risk": 72,
    "overview": "涵盖新闻、内容生产、传播策略、媒介研究与平台运营。AI显著降低文本、图片、配音和剪辑成本，基础内容岗位会减少，可信度、调查能力和受众关系更重要。",
    "threshold": "如果工作的核心是改写公开信息、批量出内容、做基础剪辑和平台搬运，而没有独家采访或重要判断，就处于高危区。",
    "high": [
      {
        "direction": "资讯改写与日常内容生产",
        "jobs": [
          "内容编辑",
          "SEO编辑",
          "社交媒体运营专员"
        ],
        "entry": "大专或本科",
        "preferred": "本科 + 垂直领域知识",
        "why": "标题、摘要、日更文案和多版本改写是生成式AI最成熟的应用之一。",
        "directionEn": "News Rewriting and Daily Content Production",
        "jobsEn": [
          "Content Editor",
          "SEO Editor",
          "Social-media Operations Specialist"
        ],
        "entryEn": "Associate degree or bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "Generative tools can now produce large volumes of first-draft visual or written material. Roles that compete mainly on speed, format and volume are therefore under strong pressure."
      },
      {
        "direction": "基础视频后期与多平台适配",
        "jobs": [
          "视频剪辑助理",
          "字幕编辑",
          "短视频包装专员"
        ],
        "entry": "大专或本科",
        "preferred": "本科 + 拍摄/叙事能力",
        "why": "自动剪辑、配音、字幕和尺寸适配会减少纯后期执行岗位。",
        "directionEn": "Basic Video Post-production and Multi-platform Adaptation",
        "jobsEn": [
          "Video Editing Assistant",
          "Subtitling Editor",
          "Short-video Packaging Specialist"
        ],
        "entryEn": "Associate degree or bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "常规公关稿与媒体监测",
        "jobs": [
          "公关助理",
          "媒体监测专员",
          "企业内容专员"
        ],
        "entry": "本科",
        "preferred": "本科 + 行业或数据能力",
        "why": "新闻稿初稿、舆情摘要和产品说明大多有固定格式，容易自动化。",
        "directionEn": "Routine PR Copy and Media Monitoring",
        "jobsEn": [
          "Public Relations Assistant",
          "Media Monitoring Specialist",
          "Corporate Content Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      }
    ],
    "border": [
      {
        "direction": "品牌内容与整合营销",
        "jobs": [
          "内容策略师",
          "品牌传播经理",
          "整合营销专员"
        ],
        "entry": "本科",
        "preferred": "硕士或本科 + 品牌项目经验",
        "why": "内容生产会更快，但品牌说什么、何时说、出了问题如何处理仍要由人决定。",
        "directionEn": "Brand Content and Integrated Marketing",
        "jobsEn": [
          "Content Strategist",
          "Brand Communication Manager",
          "Integrated Marketing Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "数据新闻与可视化报道",
        "jobs": [
          "数据记者",
          "新闻可视化设计师",
          "调查数据分析员"
        ],
        "entry": "本科",
        "preferred": "硕士或本科 + 数据分析能力",
        "why": "AI能清洗数据，但选题、核验来源和防止误导仍是记者的责任。",
        "directionEn": "Data Journalism and Visual Reporting",
        "jobsEn": [
          "Data Journalist",
          "News Visualisation Designer",
          "Survey Data Analyst"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "影视编剧与制作",
        "jobs": [
          "编剧",
          "制片助理",
          "内容开发编辑"
        ],
        "entry": "本科",
        "preferred": "本科或硕士 + 作品与行业经验",
        "why": "AI能提供草稿和分镜，但原创人物、制片协作和现场变化仍需要创作者。",
        "directionEn": "Screenwriting and Production",
        "jobsEn": [
          "Screenwriter",
          "Production Assistant",
          "Content Development Editor"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      }
    ],
    "safe": [
      {
        "direction": "调查新闻与事实核查",
        "jobs": [
          "调查记者",
          "事实核查员",
          "现场记者"
        ],
        "entry": "本科",
        "preferred": "本科 + 新闻实务和垂直专长",
        "why": "独家信息要靠采访、现场和长期信任获得，错误还可能带来法律后果。",
        "directionEn": "Investigative Journalism and Fact-checking",
        "jobsEn": [
          "Investigation Journalist",
          "Fact-checking Reviewer",
          "Site Journalist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work depends on research, strategic intent, cultural judgement and responsibility for the final message—not simply generating an attractive output."
      },
      {
        "direction": "危机传播与公共事务",
        "jobs": [
          "危机公关顾问",
          "公共事务经理",
          "政策传播顾问"
        ],
        "entry": "本科",
        "preferred": "硕士或本科 + 多年行业经验",
        "why": "需要理解利益相关者、法规和社会情绪，并在高压环境中作决定。",
        "directionEn": "Crisis Communication and Public Affairs",
        "jobsEn": [
          "Crisis PR Consultant",
          "Public Affairs Manager",
          "Policy Communication Consultant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or bachelor’s degree + several years of industry experience",
        "whyEn": "Trust, cultural understanding, negotiation and live judgement are central to the role. AI can support preparation, but cannot fully replace the relationship or accountability."
      },
      {
        "direction": "纪录片与深度垂直内容",
        "jobs": [
          "纪录片导演",
          "深度内容制作人",
          "垂直社群主理人"
        ],
        "entry": "本科",
        "preferred": "学历不是唯一门槛；作品与长期积累更重要",
        "why": "价值来自真实关系、长期观察和个人判断。",
        "directionEn": "Documentary and In-depth Specialist Content",
        "jobsEn": [
          "Documentary Director",
          "In-depth Content Producer",
          "Specialist Community Community Lead"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree or equivalent preparation",
        "whyEn": "The work depends on research, strategic intent, cultural judgement and responsibility for the final message—not simply generating an attractive output."
      }
    ],
    "advice": [
      "构建“内容能力+一个专业领域”，例如传媒+科技、金融、健康或国际事务。",
      "作品集必须体现采访、核验、原创信息源和传播效果，而非只展示成片。",
      "学习数据分析、版权伦理、平台的运作方式和AI内容鉴别。"
    ],
    "adviceEn": [
      "Develop a recognisable subject or issue specialism alongside strong research, writing, visual or communication skills.",
      "Show primary evidence—interviews, fieldwork, archives, experiments, audience research or original reporting—rather than only polished outputs.",
      "Use AI for ideation and production, while making your own judgement, sourcing, ethics and editorial responsibility visible.",
      "Choose postgraduate study when it unlocks professional licensing, advanced research methods or a clearly defined specialist role."
    ]
  },
  {
    "id": "acct",
    "name": "会计学",
    "en": "Accounting",
    "category": "商业与经济",
    "risk": 78,
    "overview": "处理记录、报告、审计、税务和经营控制。规则明确、数据结构化的基础工作高度适合自动化，但复杂判断、签字责任、内部控制和业务咨询仍具价值。",
    "threshold": "当输入是标准凭证和规则，输出是可自动核对的报表，而且不需要讨论重大判断时，这类会计工作最容易被自动化。",
    "high": [
      {
        "direction": "记账、报销与基础对账",
        "jobs": [
          "应付会计",
          "应收会计",
          "费用会计"
        ],
        "entry": "大专或本科",
        "preferred": "本科 + ERP/自动化工具",
        "why": "发票识别、费用分类和银行对账已经能够大规模自动处理。",
        "directionEn": "Bookkeeping, Expenses and Basic Reconciliation",
        "jobsEn": [
          "Accounts Payable Accountant",
          "Accounts Receivable Accountant",
          "Expense Accountant"
        ],
        "entryEn": "Associate degree or bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "标准税表与常规报表",
        "jobs": [
          "税务助理",
          "总账会计助理",
          "财务报表专员"
        ],
        "entry": "本科",
        "preferred": "本科 + CPA/ACCA/ACA考试进度",
        "why": "固定规则下的计算、填表和报表生成会越来越少依赖人工。",
        "directionEn": "Standard Tax Returns and Routine Reporting",
        "jobsEn": [
          "Domain Assistant",
          "General-ledger Accounting Assistant",
          "Financial Reporting Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "基础审计程序与底稿",
        "jobs": [
          "审计助理",
          "审计数据专员",
          "底稿整理员"
        ],
        "entry": "本科",
        "preferred": "本科 + 专业资格考试进度",
        "why": "抽样、比对和异常初筛可以由AI完成，初级团队规模可能缩小。",
        "directionEn": "Basic Audit Procedures and Working Papers",
        "jobsEn": [
          "Audit Assistant",
          "Audit Data Specialist",
          "Audit Working-paper Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree + relevant certification, registration or licence",
        "whyEn": "Rule-based screening, standard forms and routine documentation are increasingly automatable. Human value shifts toward exceptions, investigation and accountable judgement."
      }
    ],
    "border": [
      {
        "direction": "管理会计与财务分析",
        "jobs": [
          "管理会计师",
          "FP&A分析师",
          "成本分析师"
        ],
        "entry": "本科",
        "preferred": "硕士或本科 + CPA/CIMA及业务经验",
        "why": "报表会自动生成，但为什么偏差、预算怎么调整仍需要理解业务。",
        "directionEn": "Management Accounting and Financial Analysis",
        "jobsEn": [
          "Management Accountant",
          "FP&A Analyst",
          "Cost Analyst"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can prepare information and options, but the work still depends on stakeholder trust, negotiation, context and responsibility for implementation."
      },
      {
        "direction": "税务咨询",
        "jobs": [
          "税务顾问",
          "国际税务分析师",
          "转让定价顾问"
        ],
        "entry": "本科",
        "preferred": "税务硕士或专业资格更有优势",
        "why": "常规规则容易查，但跨境安排、争议处理和监管沟通仍然复杂。",
        "directionEn": "Tax Advisory",
        "jobsEn": [
          "Specialist Consultant",
          "International Tax Analyst",
          "Transfer Pricing Consultant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant certification, registration or licence",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "外部审计",
        "jobs": [
          "审计师",
          "高级审计员",
          "审计经理"
        ],
        "entry": "本科",
        "preferred": "专业资格 + 经验是关键",
        "why": "程序执行会减少，但重大错报、持续经营和签字责任仍由专业人员承担。",
        "directionEn": "External Audit",
        "jobsEn": [
          "Auditor",
          "Senior Auditor",
          "Audit Manager"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree or equivalent preparation + relevant project or professional experience + relevant certification, registration or licence",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      }
    ],
    "safe": [
      {
        "direction": "法证会计与舞弊调查",
        "jobs": [
          "法证会计师",
          "反舞弊调查员",
          "诉讼支持顾问"
        ],
        "entry": "本科",
        "preferred": "专业资格 + 法务/调查经验",
        "why": "需要拼接不完整证据、访谈相关人员，并在法律程序中解释结论。",
        "directionEn": "Forensic Accounting and Fraud Investigation",
        "jobsEn": [
          "Forensic Accountant",
          "Fraud Investigation Investigator",
          "Litigation Support Consultant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree or equivalent preparation + relevant project or professional experience + relevant certification, registration or licence",
        "whyEn": "This track relies more heavily on domain judgement, complex trade-offs, accountability or original problem-solving, so AI is more likely to extend professional capability than remove the role."
      },
      {
        "direction": "内部控制与风险治理",
        "jobs": [
          "内控经理",
          "风险合规经理",
          "ESG鉴证顾问"
        ],
        "entry": "本科",
        "preferred": "硕士或专业资格 + 行业经验",
        "why": "重点是判断流程哪里可能出问题，并推动组织真正整改。",
        "directionEn": "Internal Controls and Risk Governance",
        "jobsEn": [
          "Internal Controls Manager",
          "Risk And Compliance Manager",
          "ESG Assurance Consultant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience + relevant certification, registration or licence",
        "whyEn": "The work involves changing threats, regulation, ethical trade-offs and accountability. AI can flag issues, but people must decide what risk is acceptable and own the consequences."
      },
      {
        "direction": "交易、重组与财务转型",
        "jobs": [
          "交易咨询顾问",
          "重组顾问",
          "财务系统转型顾问"
        ],
        "entry": "本科",
        "preferred": "硕士/MBA或专业资格更有优势",
        "why": "涉及交易谈判、复杂模型、管理层沟通和落地实施，不能只靠自动生成报表。",
        "directionEn": "Transactions, Restructuring and Finance Transformation",
        "jobsEn": [
          "Transaction Advisory Consultant",
          "Restructuring Consultant",
          "Finance-systems Transformation Consultant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant certification, registration or licence",
        "whyEn": "This track relies more heavily on domain judgement, complex trade-offs, accountability or original problem-solving, so AI is more likely to extend professional capability than remove the role."
      }
    ],
    "advice": [
      "不要把职业定位停留在“做账”，应强化审计判断、控制、数据和业务理解。",
      "学习SQL、BI、ERP、流程自动化和AI审计工具。",
      "尽早规划目标地区的专业认证与实习路径。"
    ],
    "adviceEn": [
      "Combine quantitative literacy with a clear understanding of firms, markets, incentives, regulation and a specific industry.",
      "Build projects that move from a business question to evidence, analysis, trade-offs and a recommendation that could actually be implemented.",
      "Do not stop at dashboards or reports; learn to challenge data quality, explain causality and communicate decisions to stakeholders.",
      "A master’s degree is most useful for technical, research, regulated or leadership tracks—not as a substitute for relevant experience."
    ]
  },
  {
    "id": "finance",
    "name": "金融学",
    "en": "Finance",
    "category": "商业与经济",
    "risk": 67,
    "overview": "研究资本配置、资产定价、公司融资与风险。数据搜集、建模、报告和基础交易将继续自动化，但资本责任、客户信任、非结构化交易和监管复杂性形成分化。",
    "threshold": "当工作主要是整理公开资料、套用标准估值表和给普通客户提供通用建议时，AI会明显减少初级岗位数量。",
    "high": [
      {
        "direction": "基础投研资料与晨报",
        "jobs": [
          "研究助理",
          "市场资讯分析员",
          "投资内容编辑"
        ],
        "entry": "本科",
        "preferred": "本科 + 行业研究或数据能力",
        "why": "新闻摘要、财务数据整理和例行观点初稿可以自动完成。",
        "directionEn": "Basic Investment Research and Morning Briefs",
        "jobsEn": [
          "Research Assistant",
          "Market Intelligence Analyst",
          "Investment Content Editor"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "标准估值与交易材料",
        "jobs": [
          "投行分析师助理",
          "估值分析员",
          "路演材料专员"
        ],
        "entry": "本科",
        "preferred": "硕士或本科 + 强实习经历",
        "why": "可比公司、基础模型和PPT初稿高度标准化，初级工作量会减少。",
        "directionEn": "Standard Valuation and Transaction Materials",
        "jobsEn": [
          "Domain Assistant",
          "Valuation Analyst",
          "Pitch Materials Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "零售信贷与基础理财",
        "jobs": [
          "信贷审核助理",
          "理财顾问助理",
          "金融客服专员"
        ],
        "entry": "本科",
        "preferred": "本科 + 从业资格",
        "why": "规则明确的小额信贷初筛和标准资产配置越来越能自动完成。",
        "directionEn": "Retail Credit and Basic Financial Advice",
        "jobsEn": [
          "Credit Review Assistant",
          "Financial Adviser Assistant",
          "Financial Customer Support Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree + relevant certification, registration or licence",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      }
    ],
    "border": [
      {
        "direction": "量化研究与交易",
        "jobs": [
          "量化研究员",
          "量化开发工程师",
          "算法交易员"
        ],
        "entry": "本科",
        "preferred": "硕士或博士更常见",
        "why": "AI能写代码和试模型，但数据质量、交易成本和风险控制决定能否真正赚钱。",
        "directionEn": "Quantitative Research and Trading",
        "jobsEn": [
          "Quantitative Researcher",
          "Quantitative Development Engineer",
          "Algorithmic Trader"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis more common",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "投资银行与资本市场",
        "jobs": [
          "投行分析师",
          "并购顾问",
          "资本市场顾问"
        ],
        "entry": "本科",
        "preferred": "硕士/MBA或顶尖实习更有优势",
        "why": "材料制作会减少，但客户沟通、交易推进和关键谈判仍需要人。",
        "directionEn": "Investment Banking and Capital Markets",
        "jobsEn": [
          "Investment Banking Analyst",
          "M&A Consultant",
          "Capital Markets Consultant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "财富管理",
        "jobs": [
          "财富顾问",
          "私人银行顾问",
          "家族办公室分析师"
        ],
        "entry": "本科",
        "preferred": "硕士或专业资格 + 客户经验",
        "why": "普通组合会自动化，高净值客户的税务、传承和信任关系更难替代。",
        "directionEn": "Wealth Management",
        "jobsEn": [
          "Wealth Consultant",
          "Private Banking Consultant",
          "Family-office Analyst"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience + relevant certification, registration or licence",
        "whyEn": "AI can prepare information and options, but the work still depends on stakeholder trust, negotiation, context and responsibility for implementation."
      }
    ],
    "safe": [
      {
        "direction": "复杂并购、重组与私募投资",
        "jobs": [
          "并购经理",
          "私募股权投资经理",
          "重组顾问"
        ],
        "entry": "本科",
        "preferred": "硕士/MBA + 多年交易经验",
        "why": "需要判断管理团队、行业格局和谈判条件，并承担重大资本决策。",
        "directionEn": "Complex M&A, Restructuring and Private Equity",
        "jobsEn": [
          "M&A Manager",
          "Private Equity Manager",
          "Restructuring Consultant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "This track relies more heavily on domain judgement, complex trade-offs, accountability or original problem-solving, so AI is more likely to extend professional capability than remove the role."
      },
      {
        "direction": "风险管理与模型验证",
        "jobs": [
          "市场风险经理",
          "模型验证专家",
          "反欺诈策略专家"
        ],
        "entry": "本科",
        "preferred": "硕士或博士 + FRM等资格更有优势",
        "why": "模型越多，越需要独立人员检查假设、偏差和极端情况下的后果。",
        "directionEn": "Risk Management and Model Validation",
        "jobsEn": [
          "Market Risk Manager",
          "Model Validation Specialist",
          "Anti-fraud Strategy Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "PhD + relevant certification, registration or licence",
        "whyEn": "The work involves changing threats, regulation, ethical trade-offs and accountability. AI can flag issues, but people must decide what risk is acceptable and own the consequences."
      },
      {
        "direction": "产业与跨境金融",
        "jobs": [
          "产业研究员",
          "基础设施金融顾问",
          "跨境融资经理"
        ],
        "entry": "本科",
        "preferred": "硕士 + 行业/地区经验",
        "why": "核心能力是产业理解、政策判断和复杂融资结构设计。",
        "directionEn": "Industrial and Cross-border Finance",
        "jobsEn": [
          "Industry Research Researcher",
          "Infrastructure Finance Consultant",
          "Cross-border Financing Manager"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "This track relies more heavily on domain judgement, complex trade-offs, accountability or original problem-solving, so AI is more likely to extend professional capability than remove the role."
      }
    ],
    "advice": [
      "把Excel建模升级为概率统计、编程、数据库和因果思维。",
      "建立一个可验证的行业专长，不做只会复述公开信息的泛金融学生。",
      "理解AI模型风险、数据偏差、合规与决策问责。"
    ],
    "adviceEn": [
      "Combine quantitative literacy with a clear understanding of firms, markets, incentives, regulation and a specific industry.",
      "Build projects that move from a business question to evidence, analysis, trade-offs and a recommendation that could actually be implemented.",
      "Do not stop at dashboards or reports; learn to challenge data quality, explain causality and communicate decisions to stakeholders.",
      "A master’s degree is most useful for technical, research, regulated or leadership tracks—not as a substitute for relevant experience."
    ]
  },
  {
    "id": "civil",
    "name": "土木工程",
    "en": "Civil Engineering",
    "category": "工程与制造",
    "risk": 39,
    "overview": "负责建筑、交通、水利和基础设施的设计、施工与维护。BIM、生成式设计和监测分析会重塑流程，但现场条件、安全法规、签章责任与长期资产管理难以自动化。",
    "threshold": "当工作主要是重复建模、图纸标注、工程量初算和规范检索，又不需要到现场承担安全责任时，更容易被AI替代。",
    "high": [
      {
        "direction": "重复性CAD/BIM建模",
        "jobs": [
          "BIM建模员",
          "CAD绘图员",
          "土建设计助理"
        ],
        "entry": "大专或本科",
        "preferred": "本科 + BIM协调能力",
        "why": "标准构件、图纸标注和模型检查越来越能由软件自动完成。",
        "directionEn": "Repetitive CAD/BIM Modelling",
        "jobsEn": [
          "BIM Modeller",
          "CAD Drafter",
          "Civil Design Assistant"
        ],
        "entryEn": "Associate degree or bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "标准构件初步设计",
        "jobs": [
          "结构设计助理",
          "构件设计员",
          "规范计算助理"
        ],
        "entry": "本科",
        "preferred": "本科 + 执业资格路径",
        "why": "常见梁柱尺寸和规范条文可以自动推荐，单纯计算型工作会减少。",
        "directionEn": "Preliminary Design of Standard Components",
        "jobsEn": [
          "Structural Design Assistant",
          "Component Designer",
          "Code-compliance Calculations Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree + relevant certification, registration or licence",
        "whyEn": "Generative tools can now produce large volumes of first-draft visual or written material. Roles that compete mainly on speed, format and volume are therefore under strong pressure."
      },
      {
        "direction": "工程资料与投标整理",
        "jobs": [
          "工程资料员",
          "投标助理",
          "进度报告专员"
        ],
        "entry": "大专或本科",
        "preferred": "本科 + 合同/项目能力",
        "why": "文档归档、周报和投标材料初稿有固定格式，适合自动化。",
        "directionEn": "Engineering Documentation and Tender Preparation",
        "jobsEn": [
          "Engineering Documentation Officer",
          "Tender Assistant",
          "Progress Reporting Specialist"
        ],
        "entryEn": "Associate degree or bachelor’s degree",
        "preferredEn": "bachelor’s degree + relevant project or professional experience",
        "whyEn": "The routine parts are highly standardised—such as drafting, documentation, parameter changes or basic checks—so AI-enabled software can reduce the amount of entry-level execution work."
      }
    ],
    "border": [
      {
        "direction": "结构设计",
        "jobs": [
          "结构工程师",
          "抗震设计工程师",
          "桥梁设计工程师"
        ],
        "entry": "本科",
        "preferred": "硕士 + 当地执业资格更有优势",
        "why": "计算可以自动化，但结构体系、抗震概念和最终签字责任仍由工程师承担。",
        "directionEn": "Structural Design",
        "jobsEn": [
          "Structural Engineer",
          "Seismic Design Engineer",
          "Bridge Design Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant certification, registration or licence",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "造价、计划与合同管理",
        "jobs": [
          "造价工程师",
          "项目计划工程师",
          "合同工程师"
        ],
        "entry": "本科",
        "preferred": "专业资格 + 项目经验",
        "why": "自动算量会提高效率，但变更、索赔、供应链和现场条件经常超出标准模型。",
        "directionEn": "Cost, Planning and Contract Management",
        "jobsEn": [
          "Cost Engineering Engineer",
          "Project Planning Engineer",
          "Contract Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree or equivalent preparation + relevant project or professional experience + relevant certification, registration or licence",
        "whyEn": "AI can prepare information and options, but the work still depends on stakeholder trust, negotiation, context and responsibility for implementation."
      },
      {
        "direction": "交通与城市基础设施规划",
        "jobs": [
          "交通规划师",
          "城市基础设施顾问",
          "交通模型分析师"
        ],
        "entry": "本科",
        "preferred": "硕士更常见",
        "why": "模型能给预测，但政策、公众意见、土地和实施资金都需要综合判断。",
        "directionEn": "Transport and Urban Infrastructure Planning",
        "jobsEn": [
          "Transport Planning Planner",
          "Urban Infrastructure Consultant",
          "Transport Modelling Analyst"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degreeis more common",
        "whyEn": "AI can speed modelling and planning, but real systems introduce safety constraints, site variation, testing and integration problems that require experienced engineers."
      }
    ],
    "safe": [
      {
        "direction": "复杂结构与防灾工程",
        "jobs": [
          "高级结构工程师",
          "防灾工程师",
          "基础设施韧性顾问"
        ],
        "entry": "本科",
        "preferred": "硕士或博士 + 执业资格",
        "why": "高风险项目需要处理极端荷载和不确定性，错误后果很严重。",
        "directionEn": "Complex Structures and Disaster-resilient Engineering",
        "jobsEn": [
          "Senior Structural Engineer",
          "Disaster Resilience Engineer",
          "Infrastructure Resilience Consultant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhD + professional licence",
        "whyEn": "The role depends on physical systems, testing, safety, site conditions and accountability for real-world performance. AI can assist design, but cannot independently own the outcome."
      },
      {
        "direction": "岩土、施工与检测修复",
        "jobs": [
          "岩土工程师",
          "施工项目经理",
          "结构检测工程师"
        ],
        "entry": "本科",
        "preferred": "硕士/执业资格 + 现场经验",
        "why": "地下条件、施工现场和老旧结构的问题往往无法只靠图纸判断。",
        "directionEn": "Geotechnics, Construction, Inspection and Rehabilitation",
        "jobsEn": [
          "Geotechnical Engineer",
          "Construction Project Manager",
          "Structural Inspection Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree/professional licence + field or site experience",
        "whyEn": "The role depends on physical systems, testing, safety, site conditions and accountability for real-world performance. AI can assist design, but cannot independently own the outcome."
      },
      {
        "direction": "水资源与低碳基础设施",
        "jobs": [
          "水资源工程师",
          "环境基础设施工程师",
          "重大项目经理"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "需要协调技术、生态、社区、法规和长期运营，是典型的复杂现实问题。",
        "directionEn": "Water Resources and Low-carbon Infrastructure",
        "jobsEn": [
          "Water Resources Engineer",
          "Environmental Infrastructure Engineer",
          "Major Projects Manager"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "The role depends on physical systems, testing, safety, site conditions and accountability for real-world performance. AI can assist design, but cannot independently own the outcome."
      }
    ],
    "advice": [
      "重视工程地质、材料、施工方法、规范和现场实习，而不只学软件。",
      "学习BIM、GIS、数字孪生、传感监测和数据分析。",
      "把安全、成本、碳排、维护和利益相关者纳入同一个设计决策。"
    ],
    "adviceEn": [
      "Strengthen mathematics, physics, modelling, experimentation and the ability to validate ideas against real-world constraints.",
      "Show the full engineering cycle: requirements, concepts, calculations, prototypes, testing, failure analysis and iteration.",
      "Learn to use AI and simulation tools, while demonstrating that you can question assumptions and verify safety-critical results.",
      "Check whether target roles require professional accreditation, registration, site experience or a specialised master’s degree."
    ]
  },
  {
    "id": "eee",
    "name": "电子与电气工程",
    "en": "Electrical & Electronic Engineering",
    "category": "工程与制造",
    "risk": 42,
    "overview": "覆盖电路、通信、控制、芯片、电力和嵌入式系统。AI可辅助设计与验证，但硬件约束、信号完整性、实时性、安全认证和物理测试使这些岗位仍很难被完全替代。",
    "threshold": "当工作只是按成熟方案做基础电路计算、标准元件选择、测试脚本和参数调整时，AI会明显减少重复劳动。",
    "high": [
      {
        "direction": "基础电路与元件选型",
        "jobs": [
          "电子工程助理",
          "硬件设计助理",
          "元件应用工程师"
        ],
        "entry": "本科",
        "preferred": "本科 + 实物项目",
        "why": "标准电路和器件资料可以由AI快速检索并生成初步方案。",
        "directionEn": "Basic Circuit Design and Component Selection",
        "jobsEn": [
          "Electronics Assistant",
          "Hardware Design Assistant",
          "Component Applications Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree + relevant project or professional experience",
        "whyEn": "Generative tools can now produce large volumes of first-draft visual or written material. Roles that compete mainly on speed, format and volume are therefore under strong pressure."
      },
      {
        "direction": "常规测试与技术文档",
        "jobs": [
          "测试工程师助理",
          "硬件验证助理",
          "技术文档工程师"
        ],
        "entry": "大专或本科",
        "preferred": "本科 + 自动化测试能力",
        "why": "测试脚本、数据整理和报告生成会越来越自动化。",
        "directionEn": "Routine Testing and Technical Documentation",
        "jobsEn": [
          "Domain Assistant",
          "Hardware Verification Assistant",
          "Technical-documentation Engineer"
        ],
        "entryEn": "Associate degree or bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "成熟模块参数调试",
        "jobs": [
          "控制调试工程师",
          "通信优化助理",
          "应用工程师"
        ],
        "entry": "本科",
        "preferred": "本科 + 现场联调经验",
        "why": "在固定范围内调参数很适合自动优化，单纯操作软件的岗位会减少。",
        "directionEn": "Parameter Tuning of Mature Modules",
        "jobsEn": [
          "Control Commissioning Engineer",
          "Communications Optimisation Assistant",
          "Application Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree + relevant project or professional experience",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      }
    ],
    "border": [
      {
        "direction": "数字芯片设计与验证",
        "jobs": [
          "数字IC设计工程师",
          "验证工程师",
          "FPGA工程师"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "AI能生成部分代码，但复杂规格、时序、功耗和验证漏洞仍需要专业团队。",
        "directionEn": "Digital Chip Design and Verification",
        "jobsEn": [
          "Digital IC Design Engineer",
          "Validation Engineer",
          "FPGA Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "电力系统与新能源电网",
        "jobs": [
          "电力系统工程师",
          "电网调度工程师",
          "新能源并网工程师"
        ],
        "entry": "本科",
        "preferred": "硕士 + 行业资格更有优势",
        "why": "预测和优化会自动化，但电网安全和事故责任不能完全交给AI。",
        "directionEn": "Power Systems and Renewable Grids",
        "jobsEn": [
          "Power Systems Engineer",
          "Grid Dispatch Engineer",
          "Renewable-grid Integration Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant certification, registration or licence",
        "whyEn": "AI can speed modelling and planning, but real systems introduce safety constraints, site variation, testing and integration problems that require experienced engineers."
      },
      {
        "direction": "嵌入式与物联网系统",
        "jobs": [
          "嵌入式工程师",
          "固件工程师",
          "物联网系统工程师"
        ],
        "entry": "本科",
        "preferred": "硕士或本科 + 硬件联调经验",
        "why": "代码容易生成，但实时性、功耗、传感器误差和硬件故障必须在实物上解决。",
        "directionEn": "Embedded and IoT Systems",
        "jobsEn": [
          "Embedded Engineer",
          "Firmware Engineer",
          "Iot Systems Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      }
    ],
    "safe": [
      {
        "direction": "芯片架构、模拟与射频",
        "jobs": [
          "芯片架构师",
          "模拟IC工程师",
          "射频工程师"
        ],
        "entry": "本科",
        "preferred": "硕士或博士较常见",
        "why": "这些方向依赖深厚电路知识、制造约束和大量经验，错误成本很高。",
        "directionEn": "Chip Architecture, Analogue and RF Engineering",
        "jobsEn": [
          "Specialist Role",
          "Analogue IC Engineer",
          "RF Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis common",
        "whyEn": "The role depends on physical systems, testing, safety, site conditions and accountability for real-world performance. AI can assist design, but cannot independently own the outcome."
      },
      {
        "direction": "功率电子与关键能源系统",
        "jobs": [
          "功率电子工程师",
          "电驱系统工程师",
          "储能系统工程师"
        ],
        "entry": "本科",
        "preferred": "硕士更有优势",
        "why": "涉及高压、高功率、热管理和安全认证，必须做真实测试。",
        "directionEn": "Power Electronics and Critical Energy Systems",
        "jobsEn": [
          "Power Electronics Engineer",
          "Electric-drive Systems Engineer",
          "Energy-storage Systems Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degreeis advantageous",
        "whyEn": "This track relies more heavily on domain judgement, complex trade-offs, accountability or original problem-solving, so AI is more likely to extend professional capability than remove the role."
      },
      {
        "direction": "机器人控制与医疗电子",
        "jobs": [
          "控制算法工程师",
          "传感器融合工程师",
          "医疗电子研发工程师"
        ],
        "entry": "本科",
        "preferred": "硕士或博士更有竞争力",
        "why": "需要把算法与真实设备、人体和安全要求结合，AI只能辅助其中一部分。",
        "directionEn": "Robot Control and Medical Electronics",
        "jobsEn": [
          "Control Algorithm Engineer",
          "Sensor Fusion Engineer",
          "Medical-electronics R&D Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "PhD",
        "whyEn": "The work combines specialist knowledge with patient safety, regulation, professional judgement and human trust. AI is more likely to support licensed practitioners than replace them."
      }
    ],
    "advice": [
      "同时掌握电路/信号基础与C/C++、Python、控制和数据工具。",
      "项目应包含示波器、板卡、传感器或真实硬件调试，而非只做仿真。",
      "优先选择具有安全、实时、能耗或物理约束的方向。"
    ],
    "adviceEn": [
      "Strengthen mathematics, physics, modelling, experimentation and the ability to validate ideas against real-world constraints.",
      "Show the full engineering cycle: requirements, concepts, calculations, prototypes, testing, failure analysis and iteration.",
      "Learn to use AI and simulation tools, while demonstrating that you can question assumptions and verify safety-critical results.",
      "Check whether target roles require professional accreditation, registration, site experience or a specialised master’s degree."
    ]
  },
  {
    "id": "mgmt",
    "name": "管理学",
    "en": "Management",
    "category": "商业与经济",
    "risk": 62,
    "overview": "研究组织、战略、运营、市场与人力资源。基础分析、汇报和流程管理会被AI减少，真正的管理价值转向目标设定、资源取舍、组织协调和结果问责。",
    "threshold": "当工作主要是整理会议、做通用PPT、汇总市场资料和执行固定流程时，AI会直接减少这类初级管理岗位。",
    "high": [
      {
        "direction": "行政与项目资料整理",
        "jobs": [
          "项目助理",
          "行政管理专员",
          "PMO助理"
        ],
        "entry": "大专或本科",
        "preferred": "本科 + 数据/项目工具能力",
        "why": "会议纪要、进度汇总和例行报告已经可以自动生成。",
        "directionEn": "Administrative and Project Documentation",
        "jobsEn": [
          "Project Assistant",
          "Administration Specialist",
          "PMO Assistant"
        ],
        "entryEn": "Associate degree or bachelor’s degree",
        "preferredEn": "bachelor’s degree + relevant project or professional experience",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "通用市场调研与竞品扫描",
        "jobs": [
          "市场研究助理",
          "商业分析助理",
          "战略实习生"
        ],
        "entry": "本科",
        "preferred": "本科 + 行业研究或数据分析",
        "why": "公开资料搜索和基础PPT很容易由AI完成，单纯信息搬运价值下降。",
        "directionEn": "General Market Research and Competitor Scanning",
        "jobsEn": [
          "Market Research Assistant",
          "Business Analysis Assistant",
          "Strategy Intern"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "标准招聘与培训运营",
        "jobs": [
          "招聘助理",
          "培训运营专员",
          "人事流程专员"
        ],
        "entry": "本科",
        "preferred": "本科 + 劳动法规/组织能力",
        "why": "简历初筛、课程文案和流程通知会大量自动化。",
        "directionEn": "Standard Recruitment and Training Operations",
        "jobsEn": [
          "Recruitment Assistant",
          "Training Operations Specialist",
          "HR Process Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      }
    ],
    "border": [
      {
        "direction": "产品管理",
        "jobs": [
          "产品经理",
          "产品运营经理",
          "增长产品经理"
        ],
        "entry": "本科",
        "preferred": "本科或硕士 + 技术/行业经验",
        "why": "文档会自动生成，但需求取舍、用户验证和跨团队推动仍需要人。",
        "directionEn": "Product Management",
        "jobsEn": [
          "Product Manager",
          "Product Operations Manager",
          "Growth Product Manager"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Bachelor’s degree or master’s degree + technical/industry experience",
        "whyEn": "AI can prepare information and options, but the work still depends on stakeholder trust, negotiation, context and responsibility for implementation."
      },
      {
        "direction": "管理咨询",
        "jobs": [
          "咨询顾问",
          "业务分析师",
          "组织变革顾问"
        ],
        "entry": "本科",
        "preferred": "硕士/MBA更有优势",
        "why": "资料整理会减少，真正有价值的是定义问题、说服客户并推动方案实施。",
        "directionEn": "Management Consulting",
        "jobsEn": [
          "Consulting Consultant",
          "Business Analyst",
          "Organisational Change Consultant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree/MBAis advantageous",
        "whyEn": "AI can prepare information and options, but the work still depends on stakeholder trust, negotiation, context and responsibility for implementation."
      },
      {
        "direction": "运营与供应链管理",
        "jobs": [
          "运营经理",
          "供应链计划经理",
          "流程改善工程师"
        ],
        "entry": "本科",
        "preferred": "硕士或本科 + 一线经验",
        "why": "预测和排程会更智能，但突发异常、人员协同和流程改造仍靠管理者。",
        "directionEn": "Operations and Supply-chain Management",
        "jobsEn": [
          "Operations Manager",
          "Supply-chain Planning Manager",
          "Process Improvement Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can prepare information and options, but the work still depends on stakeholder trust, negotiation, context and responsibility for implementation."
      }
    ],
    "safe": [
      {
        "direction": "组织变革与危机管理",
        "jobs": [
          "变革管理负责人",
          "危机项目经理",
          "组织发展总监"
        ],
        "entry": "本科",
        "preferred": "硕士/MBA + 多年管理经验",
        "why": "需要处理利益冲突、组织情绪和重大不确定性，AI无法独立获得授权。",
        "directionEn": "Organisational Change and Crisis Management",
        "jobsEn": [
          "Change Management Lead",
          "Crisis Programme Manager",
          "Organisational Development Director"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "Trust, cultural understanding, negotiation and live judgement are central to the role. AI can support preparation, but cannot fully replace the relationship or accountability."
      },
      {
        "direction": "实体业务与供应链韧性",
        "jobs": [
          "工厂运营负责人",
          "供应链总监",
          "区域业务经理"
        ],
        "entry": "本科",
        "preferred": "硕士/MBA或工程背景 + 经验",
        "why": "现场运营、供应商关系和重大资源调配需要长期经验与责任担当。",
        "directionEn": "Physical Operations and Supply-chain Resilience",
        "jobsEn": [
          "Plant Operations Lead",
          "Supply Chain Director",
          "Regional Business Manager"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "This track relies more heavily on domain judgement, complex trade-offs, accountability or original problem-solving, so AI is more likely to extend professional capability than remove the role."
      },
      {
        "direction": "创业与业务负责人",
        "jobs": [
          "创业者",
          "事业部负责人",
          "商业谈判负责人"
        ],
        "entry": "学历不是硬性门槛",
        "preferred": "经验、行业资源和执行能力更重要",
        "why": "这类角色要决定做什么、承担成败，并协调员工、客户和投资人。",
        "directionEn": "Entrepreneurship and Business Leadership",
        "jobsEn": [
          "Entrepreneur",
          "Business Unit Lead",
          "Business Negotiation Lead"
        ],
        "entryEn": "bachelor’s degree or equivalent preparation",
        "preferredEn": "bachelor’s degree or equivalent preparation + relevant project or professional experience",
        "whyEn": "This track relies more heavily on domain judgement, complex trade-offs, accountability or original problem-solving, so AI is more likely to extend professional capability than remove the role."
      }
    ],
    "advice": [
      "必须叠加第二专长：数据、工程、金融、供应链、心理或某一产业。",
      "用真实项目证明你做过取舍、协调冲突并对指标负责。",
      "学习数据分析和AI工作流，但不要把“会生成报告”当管理能力。"
    ],
    "adviceEn": [
      "Combine quantitative literacy with a clear understanding of firms, markets, incentives, regulation and a specific industry.",
      "Build projects that move from a business question to evidence, analysis, trade-offs and a recommendation that could actually be implemented.",
      "Do not stop at dashboards or reports; learn to challenge data quality, explain causality and communicate decisions to stakeholders.",
      "A master’s degree is most useful for technical, research, regulated or leadership tracks—not as a substitute for relevant experience."
    ]
  },
  {
    "id": "phil",
    "name": "哲学",
    "en": "Philosophy",
    "category": "创意传播与人文社科",
    "risk": 55,
    "overview": "训练概念分析、论证、伦理与认识论。AI能生成流畅论证和综述，却容易掩盖假设与责任主体；哲学的职业安全取决于能否进入伦理治理、政策、法律或技术等真实决策场景。",
    "threshold": "当工作只是总结已有观点、改写论证或提供没有专业背景的泛泛评论时，AI很容易完成。",
    "high": [
      {
        "direction": "哲学内容与基础教学材料",
        "jobs": [
          "人文内容编辑",
          "课程内容助理",
          "知识类新媒体编辑"
        ],
        "entry": "本科",
        "preferred": "本科 + 明确的专业领域",
        "why": "通用知识讲解、摘要和题目设计已经可以快速生成。",
        "directionEn": "Philosophy Content and Introductory Teaching Materials",
        "jobsEn": [
          "Humanities Content Editor",
          "Curriculum Content Assistant",
          "Educational New Media Editor"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "文本整理与标准论证改写",
        "jobs": [
          "编辑助理",
          "研究资料助理",
          "写作辅导助理"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "比较观点、调整表达和整理参考资料属于AI擅长的文字工作。",
        "directionEn": "Text Processing and Standard Argument Rewriting",
        "jobsEn": [
          "Editorial Assistant",
          "Research Documentation Assistant",
          "Writing Support Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "Generative tools can now produce large volumes of first-draft visual or written material. Roles that compete mainly on speed, format and volume are therefore under strong pressure."
      },
      {
        "direction": "泛伦理评论",
        "jobs": [
          "企业内容顾问",
          "伦理内容撰稿人",
          "公共议题编辑"
        ],
        "entry": "本科",
        "preferred": "硕士 + 科技/医疗/法律知识",
        "why": "没有行业事实和责任约束的评论很容易被AI替代。",
        "directionEn": "General-purpose Ethics Commentary",
        "jobsEn": [
          "Corporate Content Consultant",
          "Ethics Content Writer",
          "Public-issues Editor"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "Rule-based screening, standard forms and routine documentation are increasingly automatable. Human value shifts toward exceptions, investigation and accountable judgement."
      }
    ],
    "border": [
      {
        "direction": "出版、编辑与思想写作",
        "jobs": [
          "图书编辑",
          "评论作者",
          "研究型记者"
        ],
        "entry": "本科",
        "preferred": "硕士或长期写作积累",
        "why": "语言生产会更容易，但选题眼光、原创判断和作者关系仍重要。",
        "directionEn": "Publishing, Editing and Ideas-led Writing",
        "jobsEn": [
          "Book Editor",
          "Commentary Writer",
          "Research Journalist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "政策分析",
        "jobs": [
          "政策研究员",
          "智库分析师",
          "公共事务研究员"
        ],
        "entry": "本科",
        "preferred": "硕士较常见",
        "why": "资料检索可以自动化，但制度如何运行、价值如何取舍仍需要人。",
        "directionEn": "Policy Analysis",
        "jobsEn": [
          "Policy Researcher",
          "Specialist Analyst",
          "Public Affairs Researcher"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degreeis common",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "企业伦理与合规",
        "jobs": [
          "伦理与合规专员",
          "负责任AI顾问",
          "公司治理研究员"
        ],
        "entry": "本科",
        "preferred": "哲学/法律/公共政策硕士更有优势",
        "why": "模板政策容易生成，真正困难的是把原则变成组织能够执行的规则。",
        "directionEn": "Business Ethics and Compliance",
        "jobsEn": [
          "Ethics And Compliance Specialist",
          "Responsible AI Consultant",
          "Corporate Governance Researcher"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      }
    ],
    "safe": [
      {
        "direction": "AI伦理与科技治理",
        "jobs": [
          "AI治理研究员",
          "科技政策顾问",
          "负责任创新负责人"
        ],
        "entry": "本科",
        "preferred": "硕士或博士更常见",
        "why": "需要同时理解技术、法律和价值冲突，并参与真实制度设计。",
        "directionEn": "AI Ethics and Technology Governance",
        "jobsEn": [
          "AI Governance Researcher",
          "Technology Policy Consultant",
          "Responsible Innovation Lead"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis more common",
        "whyEn": "The work involves changing threats, regulation, ethical trade-offs and accountability. AI can flag issues, but people must decide what risk is acceptable and own the consequences."
      },
      {
        "direction": "生命伦理与公共政策",
        "jobs": [
          "生命伦理顾问",
          "研究伦理专员",
          "卫生政策研究员"
        ],
        "entry": "本科",
        "preferred": "硕士/博士或专业学位",
        "why": "医疗与生命科学中的决定会影响患者权益，必须进行严谨论证和审查。",
        "directionEn": "Bioethics and Public Policy",
        "jobsEn": [
          "Bioethics Consultant",
          "Research Ethics Specialist",
          "Health Policy Researcher"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "PhD",
        "whyEn": "The work involves changing threats, regulation, ethical trade-offs and accountability. AI can flag issues, but people must decide what risk is acceptable and own the consequences."
      },
      {
        "direction": "逻辑、认知与跨学科研究",
        "jobs": [
          "逻辑学研究员",
          "认知科学研究员",
          "学术研究人员"
        ],
        "entry": "本科",
        "preferred": "博士通常是研究岗位门槛",
        "why": "前沿研究要求提出新问题、建立论证并接受学术同行检验。",
        "directionEn": "Logic, Cognition and Interdisciplinary Research",
        "jobsEn": [
          "Logic Researcher",
          "Cognitive Science Researcher",
          "Academic Researcher"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "PhD",
        "whyEn": "The central challenge is defining new questions, designing valid methods and interpreting uncertain evidence. AI can accelerate research, but originality and scientific judgement remain essential."
      }
    ],
    "advice": [
      "将哲学与计算机、法律、经济、生命科学或公共政策组合。",
      "作品应围绕具体案例拆解假设、形成规范判断，避免停留在哲学家观点罗列。",
      "补足数据、政策分析、写作或技术能力，建立可进入产业的接口。"
    ],
    "adviceEn": [
      "Develop a recognisable subject or issue specialism alongside strong research, writing, visual or communication skills.",
      "Show primary evidence—interviews, fieldwork, archives, experiments, audience research or original reporting—rather than only polished outputs.",
      "Use AI for ideation and production, while making your own judgement, sourcing, ethics and editorial responsibility visible.",
      "Choose postgraduate study when it unlocks professional licensing, advanced research methods or a clearly defined specialist role."
    ]
  },
  {
    "id": "swe",
    "name": "软件工程",
    "en": "Software Engineering",
    "category": "计算与数据",
    "risk": 72,
    "overview": "强调软件全生命周期、架构、协作、测试、部署与维护。AI最先压缩代码生产和初级工单，但大型系统的需求澄清、集成、可靠性和组织协作仍需要工程负责人。",
    "threshold": "当工作只是实现小功能、写模板接口、补测试和改简单Bug，而且需求和验收都很清楚时，最容易被AI接手。",
    "high": [
      {
        "direction": "小型功能与模板接口开发",
        "jobs": [
          "初级软件工程师",
          "API开发助理",
          "应用开发专员"
        ],
        "entry": "本科",
        "preferred": "本科 + 真实项目",
        "why": "常见接口、表单和业务功能可以由代码助手快速生成。",
        "directionEn": "Small Features and Template API Development",
        "jobsEn": [
          "Junior Software Engineer",
          "API Development Assistant",
          "Application Development Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree + relevant project or professional experience",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "单元测试、注释与简单重构",
        "jobs": [
          "测试开发助理",
          "代码质量工程师助理",
          "维护工程师"
        ],
        "entry": "本科",
        "preferred": "本科 + 自动化工具能力",
        "why": "规则明确、可自动检查的工作会率先被AI覆盖。",
        "directionEn": "Unit Testing, Documentation and Simple Refactoring",
        "jobsEn": [
          "Test Development Assistant",
          "Domain Assistant",
          "Maintenance Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "低复杂度维护与升级",
        "jobs": [
          "应用维护工程师",
          "缺陷修复工程师",
          "依赖升级专员"
        ],
        "entry": "大专或本科",
        "preferred": "本科 + 系统排障经验",
        "why": "常见错误和依赖更新可以由AI代理连续处理。",
        "directionEn": "Low-complexity Maintenance and Upgrades",
        "jobsEn": [
          "Application Maintenance Engineer",
          "Defect Fixing Engineer",
          "Dependency Upgrade Specialist"
        ],
        "entryEn": "Associate degree or bachelor’s degree",
        "preferredEn": "bachelor’s degree + relevant project or professional experience",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      }
    ],
    "border": [
      {
        "direction": "应用后端与DevOps",
        "jobs": [
          "后端工程师",
          "DevOps工程师",
          "云平台工程师"
        ],
        "entry": "本科",
        "preferred": "本科或硕士 + 线上经验",
        "why": "自动化会提高效率，但部署失败、成本失控和线上故障仍需工程师负责。",
        "directionEn": "Applied Backend Engineering and DevOps",
        "jobsEn": [
          "Backend Engineer",
          "Devops Engineer",
          "Cloud Platform Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can speed modelling and planning, but real systems introduce safety constraints, site variation, testing and integration problems that require experienced engineers."
      },
      {
        "direction": "移动应用开发",
        "jobs": [
          "iOS工程师",
          "Android工程师",
          "跨平台开发工程师"
        ],
        "entry": "本科",
        "preferred": "本科 + 产品和端侧优化经验",
        "why": "标准页面越来越容易，真正难的是性能、隐私、设备差异和用户体验。",
        "directionEn": "Mobile Application Development",
        "jobsEn": [
          "Ios Engineer",
          "Android Engineer",
          "Cross-platform Development Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree + relevant project or professional experience",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "企业系统实施与集成",
        "jobs": [
          "ERP实施顾问",
          "系统集成工程师",
          "业务系统顾问"
        ],
        "entry": "本科",
        "preferred": "本科或硕士 + 行业流程经验",
        "why": "软件配置会自动化，但旧系统、组织流程和跨部门冲突很复杂。",
        "directionEn": "Enterprise Systems Implementation and Integration",
        "jobsEn": [
          "ERP Implementation Consultant",
          "Systems Integration Engineer",
          "Business Systems Consultant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      }
    ],
    "safe": [
      {
        "direction": "软件架构与平台工程",
        "jobs": [
          "软件架构师",
          "平台工程师",
          "SRE工程师"
        ],
        "entry": "本科",
        "preferred": "硕士或多年大型系统经验",
        "why": "需要设计长期可维护的系统，并在故障时承担最终责任。",
        "directionEn": "Software Architecture and Platform Engineering",
        "jobsEn": [
          "Specialist Role",
          "Platform Engineer",
          "SRE Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or several years of large-scale systems experience",
        "whyEn": "The role depends on physical systems, testing, safety, site conditions and accountability for real-world performance. AI can assist design, but cannot independently own the outcome."
      },
      {
        "direction": "安全与关键软件",
        "jobs": [
          "应用安全工程师",
          "实时系统工程师",
          "关键系统验证工程师"
        ],
        "entry": "本科",
        "preferred": "硕士/认证 + 行业经验",
        "why": "金融、交通、医疗等系统对安全和合规要求高，不能只接受AI生成代码。",
        "directionEn": "Safety-critical Software",
        "jobsEn": [
          "Application Security Engineer",
          "Real-time Systems Engineer",
          "Critical-systems Verification Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree/certification + industry experience",
        "whyEn": "The work involves changing threats, regulation, ethical trade-offs and accountability. AI can flag issues, but people must decide what risk is acceptable and own the consequences."
      },
      {
        "direction": "开发者工具与基础设施",
        "jobs": [
          "开发工具工程师",
          "基础设施工程师",
          "技术负责人"
        ],
        "entry": "本科",
        "preferred": "硕士或深厚工程经验",
        "why": "工作对象是复杂的软件生态，重点在于解决新的系统问题。",
        "directionEn": "Developer Tools and Infrastructure",
        "jobsEn": [
          "Developer Tools Engineer",
          "Infrastructure Engineer",
          "Technical Lead"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "The role depends on physical systems, testing, safety, site conditions and accountability for real-world performance. AI can assist design, but cannot independently own the outcome."
      }
    ],
    "advice": [
      "减少只做“功能演示”的项目，增加部署、监控、性能、故障恢复和安全设计。",
      "熟练使用AI编码工具，同时保留独立阅读代码、调试与验证能力。",
      "争取参与多人长期项目，证明你能处理模糊需求和技术债。"
    ],
    "adviceEn": [
      "Build durable foundations in algorithms, statistics, data structures, systems and evaluation—not only familiarity with current AI tools.",
      "Complete projects that show problem definition, data or system choices, testing, deployment and responsibility for failures.",
      "Develop a domain pairing such as computing + healthcare, finance, manufacturing, public policy or robotics.",
      "Use postgraduate study selectively for research-heavy, mathematically demanding or highly specialised tracks."
    ]
  },
  {
    "id": "bio",
    "name": "生物学",
    "en": "Biology",
    "category": "自然与生命科学",
    "risk": 46,
    "overview": "研究生命系统从分子到生态的机制。文献、图像分析和数据处理高度受益于AI，但实验设计、样本质量、湿实验操作、伦理与新机制发现仍需深厚训练。",
    "threshold": "当工作主要是整理文献、给数据库加标签、清洗常规数据或分类标准图像时，AI会减少这类辅助岗位。",
    "high": [
      {
        "direction": "文献与数据库注释",
        "jobs": [
          "生物信息注释员",
          "文献研究助理",
          "科学数据库专员"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "检索、摘要和已有知识整理可以大量自动完成。",
        "directionEn": "Literature and Database Annotation",
        "jobsEn": [
          "Bioinformatics Annotator",
          "Literature Research Assistant",
          "Scientific Database Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "标准图像与数据处理",
        "jobs": [
          "显微图像分析助理",
          "实验数据助理",
          "生物统计助理"
        ],
        "entry": "本科",
        "preferred": "本科或硕士 + 编程能力",
        "why": "清晰、标准化的数据分类越来越适合自动识别。",
        "directionEn": "Standard Image and Data Processing",
        "jobsEn": [
          "Microscopy-image Analysis Assistant",
          "Experimental Data Assistant",
          "Biostatistics Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "常规实验记录与科普",
        "jobs": [
          "实验室助理",
          "科学内容编辑",
          "研究行政助理"
        ],
        "entry": "本科",
        "preferred": "本科 + 实验或专业写作能力",
        "why": "记录整理和报告初稿会被AI加速，单纯文字工作价值下降。",
        "directionEn": "Routine Lab Records and Science Communication",
        "jobsEn": [
          "Laboratory Assistant",
          "Science Content Editor",
          "Research Administration Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      }
    ],
    "border": [
      {
        "direction": "生物信息学",
        "jobs": [
          "生物信息分析师",
          "基因组数据工程师",
          "计算生物学助理"
        ],
        "entry": "本科",
        "preferred": "硕士或博士更常见",
        "why": "流程会自动化，但样本质量、统计假设和生物学解释仍需要专业人员。",
        "directionEn": "Bioinformatics",
        "jobsEn": [
          "Bioinformatics Analyst",
          "Genomic Data Engineer",
          "Computational Biology Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis more common",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "生态建模与环境数据",
        "jobs": [
          "生态数据分析师",
          "物种分布模型员",
          "环境研究员"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "模型可以自动跑，但野外数据偏差、因果机制和政策含义要靠研究者判断。",
        "directionEn": "Ecological Modelling and Environmental Data",
        "jobsEn": [
          "Ecological Data Analyst",
          "Species-distribution Modeller",
          "Environmental Researcher"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "常规湿实验与实验平台",
        "jobs": [
          "研究技术员",
          "细胞实验员",
          "实验平台工程师"
        ],
        "entry": "本科",
        "preferred": "硕士更有优势",
        "why": "机器人能做重复步骤，但样本异常、污染和实验失败仍需要现场处理。",
        "directionEn": "Routine Wet-lab Work and Experimental Platforms",
        "jobsEn": [
          "Research Technician",
          "Cell-lab Technician",
          "Experimental-platform Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degreeis advantageous",
        "whyEn": "AI can speed modelling and planning, but real systems introduce safety constraints, site variation, testing and integration problems that require experienced engineers."
      }
    ],
    "safe": [
      {
        "direction": "机制生物学与新模型研究",
        "jobs": [
          "分子生物学研究员",
          "细胞生物学研究员",
          "发育生物学家"
        ],
        "entry": "本科",
        "preferred": "博士通常是独立研究岗位门槛",
        "why": "核心工作是提出新假设并设计能区分不同解释的实验。",
        "directionEn": "Mechanistic Biology and New-model Research",
        "jobsEn": [
          "Molecular Biology Researcher",
          "Cell Biology Researcher",
          "Developmental Biology Biologist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "PhD",
        "whyEn": "The central challenge is defining new questions, designing valid methods and interpreting uncertain evidence. AI can accelerate research, but originality and scientific judgement remain essential."
      },
      {
        "direction": "合成生物学与细胞工程",
        "jobs": [
          "合成生物学家",
          "细胞工程研究员",
          "多组学科学家"
        ],
        "entry": "本科",
        "preferred": "硕士或博士较常见",
        "why": "需要把设计、实验和复杂生物系统结合，结果往往难以提前预测。",
        "directionEn": "Synthetic Biology and Cell Engineering",
        "jobsEn": [
          "Synthesis Biologist",
          "Cell Engineering Researcher",
          "Multi-omics Scientist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis common",
        "whyEn": "The role depends on physical systems, testing, safety, site conditions and accountability for real-world performance. AI can assist design, but cannot independently own the outcome."
      },
      {
        "direction": "野外生态、保护与生物安全",
        "jobs": [
          "保护生物学家",
          "野外生态学家",
          "生物安全专家"
        ],
        "entry": "本科",
        "preferred": "硕士或博士 + 现场经验",
        "why": "必须进入真实生态环境、处理利益冲突并承担公共与环境责任。",
        "directionEn": "Field Ecology, Conservation and Biosafety",
        "jobsEn": [
          "Conservation Biologist",
          "Field Ecologist",
          "Biosafety Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhD + field or site experience",
        "whyEn": "The role depends on physical systems, testing, safety, site conditions and accountability for real-world performance. AI can assist design, but cannot independently own the outcome."
      }
    ],
    "advice": [
      "尽早决定偏湿实验、计算生物、生态还是产业转化，并建立对应方法栈。",
      "同时训练统计、Python/R和实验设计，避免只会背知识。",
      "争取产生原创数据并解释异常结果，证明对实验因果链的掌握。"
    ],
    "adviceEn": [
      "Build strong scientific foundations and learn how evidence is produced through experiments, measurement and reproducible analysis.",
      "Combine computational skills with laboratory or field experience so that you can both analyse data and understand how it was generated.",
      "Use projects to show hypothesis formation, method choice, uncertainty, controls and interpretation—not only final conclusions.",
      "Research, clinical and advanced R&D careers often reward postgraduate study; decide by working backward from the target role."
    ]
  },
  {
    "id": "ai",
    "name": "人工智能",
    "en": "Artificial Intelligence",
    "category": "计算与数据",
    "risk": 38,
    "overview": "研究机器学习、感知、推理、智能体与AI系统。表面上最接近AI反而不等于最安全：调用API和微调模板会迅速商品化，基础研究、系统能力、数据与行业落地更稳。",
    "threshold": "当方向只是调用现成模型、包装提示词或用公开数据做普通预测项目时，门槛会迅速降低，岗位也容易变得大同小异。",
    "high": [
      {
        "direction": "简单AI应用与聊天机器人",
        "jobs": [
          "AI应用开发助理",
          "聊天机器人实施专员",
          "提示词运营"
        ],
        "entry": "本科",
        "preferred": "本科 + 产品或行业能力",
        "why": "现成平台已经能快速搭建，单纯会调API很难形成长期竞争力。",
        "directionEn": "Simple AI Applications and Chatbots",
        "jobsEn": [
          "AI Application Development Assistant",
          "Chatbot Implementation Specialist",
          "Prompt Operations Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "模板化机器学习项目",
        "jobs": [
          "初级数据科学家",
          "机器学习实习生",
          "自动建模专员"
        ],
        "entry": "本科",
        "preferred": "硕士 + 真实业务数据经验",
        "why": "在公开、干净数据上训练分类模型越来越可以一键完成。",
        "directionEn": "Template-based Machine-learning Projects",
        "jobsEn": [
          "Specialist Data Scientist",
          "Machine-learning Intern",
          "Automated Modelling Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "基础模型接口集成",
        "jobs": [
          "AI集成工程师助理",
          "智能客服实施顾问",
          "AI解决方案助理"
        ],
        "entry": "本科",
        "preferred": "本科 + 软件工程/行业知识",
        "why": "接口连接和简单流程编排会由现成平台直接完成，纯集成岗位可能快速减少。",
        "directionEn": "Foundation-model API Integration",
        "jobsEn": [
          "Domain Assistant",
          "AI Customer-service Implementation Consultant",
          "AI Solutions Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      }
    ],
    "border": [
      {
        "direction": "应用机器学习",
        "jobs": [
          "机器学习工程师",
          "推荐算法工程师",
          "预测建模工程师"
        ],
        "entry": "本科",
        "preferred": "硕士更常见",
        "why": "训练代码会自动化，但问题定义、数据获取、上线监控和业务效果仍决定成败。",
        "directionEn": "Applied Machine Learning",
        "jobsEn": [
          "Machine Learning Engineer",
          "Recommendation Algorithm Engineer",
          "Predictive Modelling Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degreeis more common",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "模型微调与评测",
        "jobs": [
          "模型评测工程师",
          "对齐数据工程师",
          "领域模型工程师"
        ],
        "entry": "本科",
        "preferred": "硕士或博士更有优势",
        "why": "工具会成熟，但高质量标准、困难样本和安全评测仍稀缺。",
        "directionEn": "Model Fine-tuning and Evaluation",
        "jobsEn": [
          "Model Evaluation Engineer",
          "Alignment Data Engineer",
          "Domain Model Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis advantageous",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "计算机视觉与自然语言应用",
        "jobs": [
          "计算机视觉工程师",
          "NLP工程师",
          "多模态应用工程师"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "通用任务会商品化，医疗、工业等垂直场景仍需要领域理解和部署能力。",
        "directionEn": "Computer Vision and Natural-language Applications",
        "jobsEn": [
          "Computer Vision Engineer",
          "NLP Engineer",
          "Multimodal Application Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      }
    ],
    "safe": [
      {
        "direction": "基础模型与AI安全研究",
        "jobs": [
          "AI研究科学家",
          "模型安全研究员",
          "可解释性研究员"
        ],
        "entry": "本科",
        "preferred": "博士通常是核心研究岗位门槛",
        "why": "要提出新方法、验证模型行为并处理尚无标准答案的问题。",
        "directionEn": "Foundation Models and AI Safety Research",
        "jobsEn": [
          "AI Research Scientist",
          "Model Safety Researcher",
          "Interpretability Researcher"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "PhD",
        "whyEn": "The central challenge is defining new questions, designing valid methods and interpreting uncertain evidence. AI can accelerate research, but originality and scientific judgement remain essential."
      },
      {
        "direction": "机器学习系统与算力优化",
        "jobs": [
          "ML系统工程师",
          "推理优化工程师",
          "AI基础设施工程师"
        ],
        "entry": "本科",
        "preferred": "硕士或博士更有优势",
        "why": "需要理解模型、芯片、网络和大规模系统，直接决定成本和性能。",
        "directionEn": "ML Systems and Compute Optimisation",
        "jobsEn": [
          "ML Systems Engineer",
          "Inference Optimisation Engineer",
          "AI Infrastructure Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis advantageous",
        "whyEn": "This track relies more heavily on domain judgement, complex trade-offs, accountability or original problem-solving, so AI is more likely to extend professional capability than remove the role."
      },
      {
        "direction": "机器人、科学AI与医疗AI",
        "jobs": [
          "机器人工程师",
          "科学机器学习研究员",
          "医疗AI研发工程师"
        ],
        "entry": "本科",
        "preferred": "硕士或博士 + 行业合作",
        "why": "需要把AI放进真实物理或高责任场景中，必须经过实验、验证和监管。",
        "directionEn": "Robotics, AI for Science and Medical AI",
        "jobsEn": [
          "Robotics Engineer",
          "Scientific Machine Learning Researcher",
          "Medical AI R&D Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "PhD",
        "whyEn": "The work combines specialist knowledge with patient safety, regulation, professional judgement and human trust. AI is more likely to support licensed practitioners than replace them."
      }
    ],
    "advice": [
      "先学好线代、概率、优化、算法和系统，再谈大模型应用。",
      "项目必须有清晰基线、评测、误差分析、部署成本和安全边界。",
      "选择“AI+科学/工程/医疗/治理”等有真实约束的交叉方向。"
    ],
    "adviceEn": [
      "Build durable foundations in algorithms, statistics, data structures, systems and evaluation—not only familiarity with current AI tools.",
      "Complete projects that show problem definition, data or system choices, testing, deployment and responsibility for failures.",
      "Develop a domain pairing such as computing + healthcare, finance, manufacturing, public policy or robotics.",
      "Use postgraduate study selectively for research-heavy, mathematically demanding or highly specialised tracks."
    ]
  },
  {
    "id": "trade",
    "name": "国际贸易",
    "en": "International Trade",
    "category": "商业与经济",
    "risk": 70,
    "overview": "涉及跨境交易、供应链、规则、市场与商务协调。文件处理、询报价和基础市场分析高度自动化，但地缘政治、合规、谈判、供应链风险与本地关系仍复杂。",
    "threshold": "当工作主要是翻译函电、整理单证、跟踪订单和汇总公开市场信息时，AI与自动化系统会直接减少人手。",
    "high": [
      {
        "direction": "外贸函电与单证",
        "jobs": [
          "外贸助理",
          "单证员",
          "报关资料专员"
        ],
        "entry": "大专或本科",
        "preferred": "本科 + 贸易合规能力",
        "why": "翻译、邮件、发票和报关文件有固定格式，容易自动生成和检查。",
        "directionEn": "Foreign-trade Correspondence and Documentation",
        "jobsEn": [
          "Foreign Trade Assistant",
          "Documentation Specialist",
          "Customs Documentation Specialist"
        ],
        "entryEn": "Associate degree or bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "标准询价与产品匹配",
        "jobs": [
          "采购助理",
          "外贸业务助理",
          "商品信息专员"
        ],
        "entry": "本科",
        "preferred": "本科 + 产品/供应链知识",
        "why": "公开产品搜索、初步比价和标准回复可以由AI快速完成。",
        "directionEn": "Standard Quotations and Product Matching",
        "jobsEn": [
          "Procurement Assistant",
          "Foreign-trade Business Assistant",
          "Product Information Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "订单跟踪与常规客服",
        "jobs": [
          "订单运营专员",
          "跨境客服",
          "物流协调助理"
        ],
        "entry": "大专或本科",
        "preferred": "本科 + 异常处理经验",
        "why": "正常流程可以由系统自动提醒和回复，人工主要会留下异常情况。",
        "directionEn": "Order Tracking and Routine Customer Support",
        "jobsEn": [
          "Order Operations Specialist",
          "Cross-border Customer Support Specialist",
          "Logistics Coordination Assistant"
        ],
        "entryEn": "Associate degree or bachelor’s degree",
        "preferredEn": "bachelor’s degree + relevant project or professional experience",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      }
    ],
    "border": [
      {
        "direction": "跨境电商运营",
        "jobs": [
          "跨境电商运营经理",
          "海外市场专员",
          "国际品牌运营"
        ],
        "entry": "本科",
        "preferred": "硕士或本科 + 选品/投放经验",
        "why": "内容和广告会自动化，但选品、定价、库存和品牌长期经营仍需要人。",
        "directionEn": "Cross-border E-commerce Operations",
        "jobsEn": [
          "Cross-border E-commerce Manager",
          "Overseas Market Specialist",
          "International Brand Operations Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "采购与供应链分析",
        "jobs": [
          "国际采购员",
          "供应链分析师",
          "供应商管理专员"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "预测会更强，但供应商风险、质量问题和谈判仍依赖关系与现场信息。",
        "directionEn": "Procurement and Supply-chain Analytics",
        "jobsEn": [
          "International Buyer",
          "Supply Chain Analyst",
          "Vendor Management Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "贸易合规",
        "jobs": [
          "贸易合规专员",
          "出口管制分析师",
          "关务顾问"
        ],
        "entry": "本科",
        "preferred": "法律/国际贸易硕士或专业认证更有优势",
        "why": "规则检索容易，但制裁、原产地和复杂交易结构需要谨慎判断。",
        "directionEn": "Trade Compliance",
        "jobsEn": [
          "Trade Compliance Specialist",
          "Export Controls Analyst",
          "Customs Consultant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant certification, registration or licence",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      }
    ],
    "safe": [
      {
        "direction": "国际商务谈判与渠道建设",
        "jobs": [
          "国际业务经理",
          "大客户经理",
          "海外渠道负责人"
        ],
        "entry": "本科",
        "preferred": "硕士或本科 + 地区经验",
        "why": "建立信任、理解文化差异和处理利益冲突是核心工作。",
        "directionEn": "International Business Negotiation and Channel Development",
        "jobsEn": [
          "International Business Manager",
          "Key Account Manager",
          "Overseas Channel Lead"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "Trust, cultural understanding, negotiation and live judgement are central to the role. AI can support preparation, but cannot fully replace the relationship or accountability."
      },
      {
        "direction": "供应链韧性与地缘风险",
        "jobs": [
          "供应链风险经理",
          "地缘风险分析师",
          "出口管制顾问"
        ],
        "entry": "本科",
        "preferred": "硕士 + 地区/语言/政策背景",
        "why": "需要在突发政策、战争、物流中断时做高风险决策。",
        "directionEn": "Supply-chain Resilience and Geopolitical Risk",
        "jobsEn": [
          "Supply-chain Risk Manager",
          "Geopolitical Risk Analyst",
          "Export Controls Consultant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "The work involves changing threats, regulation, ethical trade-offs and accountability. AI can flag issues, but people must decide what risk is acceptable and own the consequences."
      },
      {
        "direction": "跨境并购与贸易融资",
        "jobs": [
          "跨境并购顾问",
          "贸易融资经理",
          "市场进入顾问"
        ],
        "entry": "本科",
        "preferred": "硕士/MBA + 金融或法律经验",
        "why": "涉及监管、资本、谈判和本地关系，远超标准信息处理。",
        "directionEn": "Cross-border M&A and Trade Finance",
        "jobsEn": [
          "Cross-border M&A Consultant",
          "Trade Finance Manager",
          "Market-entry Consultant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "This track relies more heavily on domain judgement, complex trade-offs, accountability or original problem-solving, so AI is more likely to extend professional capability than remove the role."
      }
    ],
    "advice": [
      "在语言能力之外，继续补充数据分析、供应链、金融或区域研究。",
      "学习关税、原产地、制裁、贸易融资和合同风险。",
      "通过真实跨境项目证明客户开发、谈判和交付能力。"
    ],
    "adviceEn": [
      "Combine quantitative literacy with a clear understanding of firms, markets, incentives, regulation and a specific industry.",
      "Build projects that move from a business question to evidence, analysis, trade-offs and a recommendation that could actually be implemented.",
      "Do not stop at dashboards or reports; learn to challenge data quality, explain causality and communicate decisions to stakeholders.",
      "A master’s degree is most useful for technical, research, regulated or leadership tracks—not as a substitute for relevant experience."
    ]
  },
  {
    "id": "physics",
    "name": "物理",
    "en": "Physics",
    "category": "自然与生命科学",
    "risk": 34,
    "overview": "研究物质、能量与自然规律，强调建模、实验和定量推理。AI会辅助推导、模拟和数据分析，但提出可检验问题、设计实验、理解仪器与发现新规律仍高度研究密集。",
    "threshold": "当工作只是解标准题、跑成熟模型、做参数扫描和整理常规数据时，AI会显著减少重复劳动。",
    "high": [
      {
        "direction": "标准计算与数据拟合",
        "jobs": [
          "实验数据助理",
          "初级建模分析员",
          "物理教学内容助理"
        ],
        "entry": "本科",
        "preferred": "本科 + 编程/实验能力",
        "why": "公式推导、拟合和报告初稿已经可以由AI快速完成。",
        "directionEn": "Standard Computation and Data Fitting",
        "jobsEn": [
          "Experimental Data Assistant",
          "Junior Modelling Analyst",
          "Physics Teaching Content Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "成熟模型的参数扫描",
        "jobs": [
          "仿真助理",
          "计算研究助理",
          "数值分析助理"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "如果模型和流程都固定，只是改变参数，自动化程度会很高。",
        "directionEn": "Parameter Sweeps for Established Models",
        "jobsEn": [
          "Simulation Assistant",
          "Computational Research Assistant",
          "Numerical Analysis Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "通用教学与科普内容",
        "jobs": [
          "物理课程编辑",
          "科普内容作者",
          "题库研发助理"
        ],
        "entry": "本科",
        "preferred": "硕士或教学资质更有优势",
        "why": "标准讲解和题目生成容易，但真正教学诊断仍需要人。",
        "directionEn": "General Teaching and Educational Content",
        "jobsEn": [
          "Physics Curriculum Editor",
          "Science Writer",
          "Assessment-bank R&D Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      }
    ],
    "border": [
      {
        "direction": "计算物理",
        "jobs": [
          "计算物理学家",
          "科学计算工程师",
          "模拟软件工程师"
        ],
        "entry": "本科",
        "preferred": "硕士或博士较常见",
        "why": "AI能写代码，但模型选择、数值稳定性和结果是否可信仍靠专家。",
        "directionEn": "Computational Physics",
        "jobsEn": [
          "Computational Physicist",
          "Scientific Computing Engineer",
          "Simulation Software Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis common",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "医学物理",
        "jobs": [
          "医学物理师",
          "放疗物理师",
          "医学成像物理师"
        ],
        "entry": "物理相关本科",
        "preferred": "医学物理硕士/博士 + 当地注册",
        "why": "涉及患者剂量、设备质量和临床安全，必须由受训人员负责。",
        "directionEn": "Medical Physics",
        "jobsEn": [
          "Medical Physicist",
          "Radiotherapy Physicist",
          "Medical Imaging Physicist"
        ],
        "entryEn": "bachelor’s degree",
        "preferredEn": "PhD + relevant certification, registration or licence",
        "whyEn": "AI can support analysis and documentation, but professionals still need to interpret patient context, communicate uncertainty and make decisions within clinical and regulatory boundaries."
      },
      {
        "direction": "光学与光子工程",
        "jobs": [
          "光学工程师",
          "激光工程师",
          "成像系统工程师"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "软件能优化设计，但仪器搭建、制造误差和系统测试仍很复杂。",
        "directionEn": "Optics and Photonics Engineering",
        "jobsEn": [
          "Optical Engineer",
          "Laser Engineer",
          "Imaging Systems Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "AI can speed modelling and planning, but real systems introduce safety constraints, site variation, testing and integration problems that require experienced engineers."
      }
    ],
    "safe": [
      {
        "direction": "前沿理论与实验物理",
        "jobs": [
          "量子物理研究员",
          "粒子物理学家",
          "天体物理学家"
        ],
        "entry": "本科",
        "preferred": "博士通常是研究岗位门槛",
        "why": "研究的是尚无标准答案的问题，需要原创理论或大型实验。",
        "directionEn": "Frontier Theoretical and Experimental Physics",
        "jobsEn": [
          "Quantum Physics Researcher",
          "Particle Physics Physicist",
          "Astrophysics Physicist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "PhD",
        "whyEn": "The role depends on physical systems, testing, safety, site conditions and accountability for real-world performance. AI can assist design, but cannot independently own the outcome."
      },
      {
        "direction": "半导体与量子器件",
        "jobs": [
          "器件物理研究员",
          "量子工程师",
          "半导体研发科学家"
        ],
        "entry": "本科",
        "preferred": "硕士或博士较常见",
        "why": "需要把物理原理与纳米制造、低温或精密测量结合。",
        "directionEn": "Semiconductor and Quantum Devices",
        "jobsEn": [
          "Device Physics Researcher",
          "Quantum Engineer",
          "Semiconductor R&D Scientist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis common",
        "whyEn": "The role depends on physical systems, testing, safety, site conditions and accountability for real-world performance. AI can assist design, but cannot independently own the outcome."
      },
      {
        "direction": "精密仪器与科学计算",
        "jobs": [
          "精密测量工程师",
          "科学仪器研发工程师",
          "高性能计算科学家"
        ],
        "entry": "本科",
        "preferred": "硕士或博士更有优势",
        "why": "真实仪器、噪声和极端精度要求使经验与实验验证不可替代。",
        "directionEn": "Precision Instruments and Scientific Computing",
        "jobsEn": [
          "Precision Measurement Engineer",
          "Scientific-instrument R&D Engineer",
          "High-performance Computing Scientist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis advantageous",
        "whyEn": "The central challenge is defining new questions, designing valid methods and interpreting uncertain evidence. AI can accelerate research, but originality and scientific judgement remain essential."
      }
    ],
    "advice": [
      "同时建立实验仪器能力和计算能力，避免只会解题。",
      "用研究项目展示从假设、误差预算到验证的完整链条。",
      "根据职业目标主动连接半导体、量子、能源、医疗或数据领域。"
    ],
    "adviceEn": [
      "Build strong scientific foundations and learn how evidence is produced through experiments, measurement and reproducible analysis.",
      "Combine computational skills with laboratory or field experience so that you can both analyse data and understand how it was generated.",
      "Use projects to show hypothesis formation, method choice, uncertainty, controls and interpretation—not only final conclusions.",
      "Research, clinical and advanced R&D careers often reward postgraduate study; decide by working backward from the target role."
    ]
  },
  {
    "id": "pharm",
    "name": "药学",
    "en": "Pharmacy",
    "category": "自然与生命科学",
    "risk": 41,
    "overview": "涵盖药物发现、制剂、药理、临床用药与监管。AI加速筛选、文献和药物信息处理，但实验验证、患者安全、药物责任与监管审批使核心岗位不易完全替代。",
    "threshold": "当工作只是查说明书、整理文献、做低风险规则匹配或管理标准库存流程时，AI和信息系统会承担越来越多。",
    "high": [
      {
        "direction": "常规药品信息与资料整理",
        "jobs": [
          "药品信息助理",
          "医学内容编辑",
          "药学资料专员"
        ],
        "entry": "药学本科",
        "preferred": "本科 + 医学写作/法规能力",
        "why": "说明书摘要、相互作用检索和常见问答可以自动生成。",
        "directionEn": "Routine Drug Information and Documentation",
        "jobsEn": [
          "Drug Information Assistant",
          "Medical Content Editor",
          "Pharmacy Documentation Specialist"
        ],
        "entryEn": "bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "基础虚拟筛选与文献初筛",
        "jobs": [
          "计算药学助理",
          "药物发现数据助理",
          "文献研究助理"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "公开数据库检索和候选物初步排序会被自动化工具覆盖。",
        "directionEn": "Basic Virtual Screening and Literature Triage",
        "jobsEn": [
          "Computational Pharmaceutics Assistant",
          "Drug-discovery Data Assistant",
          "Literature Research Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "低风险规则审核与库存",
        "jobs": [
          "处方审核助理",
          "药品库存专员",
          "药房运营专员"
        ],
        "entry": "大专或本科",
        "preferred": "药学本科 + 当地资格",
        "why": "明确规则下的重复核对适合自动化，但最终药学责任仍需注册人员。",
        "directionEn": "Low-risk Rules Review and Inventory Work",
        "jobsEn": [
          "Prescription Review Assistant",
          "Drug Inventory Specialist",
          "Pharmacy Operations Specialist"
        ],
        "entryEn": "Associate degree or bachelor’s degree",
        "preferredEn": "bachelor’s degree + relevant certification, registration or licence",
        "whyEn": "Rule-based screening, standard forms and routine documentation are increasingly automatable. Human value shifts toward exceptions, investigation and accountable judgement."
      }
    ],
    "border": [
      {
        "direction": "药物化学与计算药学",
        "jobs": [
          "药物化学家",
          "计算化学家",
          "药物设计科学家"
        ],
        "entry": "药学/化学本科",
        "preferred": "硕士或博士较常见",
        "why": "AI能提出分子，但合成是否可行、活性是否真实仍要靠实验。",
        "directionEn": "Medicinal Chemistry and Computational Pharmaceutics",
        "jobsEn": [
          "Medicinal Chemist",
          "Computational Chemist",
          "Drug Design Scientist"
        ],
        "entryEn": "bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis common",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "医院药学",
        "jobs": [
          "医院药师",
          "药物信息药师",
          "用药管理药师"
        ],
        "entry": "药学专业学位",
        "preferred": "注册资格；临床方向常需住院培训/硕士",
        "why": "常见咨询会自动化，但多病共存、复杂用药和跨专业沟通仍需要药师。",
        "directionEn": "Hospital Pharmacy",
        "jobsEn": [
          "Hospital Pharmacist",
          "Medicines Information Pharmacist",
          "Medication Management Pharmacist"
        ],
        "entryEn": "bachelor’s degree or equivalent preparation",
        "preferredEn": "master’s degree + relevant certification, registration or licence",
        "whyEn": "AI can support analysis and documentation, but professionals still need to interpret patient context, communicate uncertainty and make decisions within clinical and regulatory boundaries."
      },
      {
        "direction": "药物警戒与安全性",
        "jobs": [
          "药物警戒专员",
          "安全性信号分析师",
          "医学审评专员"
        ],
        "entry": "本科",
        "preferred": "硕士/药学专业学位 + 法规经验",
        "why": "AI能发现信号，但是否存在因果关系以及如何向监管机构解释仍需专家。",
        "directionEn": "Pharmacovigilance and Drug Safety",
        "jobsEn": [
          "Pharmacovigilance Specialist",
          "Drug-safety Signal Analyst",
          "Medical Review Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can support analysis and documentation, but professionals still need to interpret patient context, communicate uncertainty and make decisions within clinical and regulatory boundaries."
      }
    ],
    "safe": [
      {
        "direction": "临床药学与个体化用药",
        "jobs": [
          "临床药师",
          "肿瘤药师",
          "药物基因组学药师"
        ],
        "entry": "药学专业学位",
        "preferred": "注册资格 + 临床培训/专科认证",
        "why": "要结合患者病情、检验结果和治疗目标作个体化决定。",
        "directionEn": "Clinical Pharmacy and Personalised Medicine",
        "jobsEn": [
          "Clinical Pharmacist",
          "Oncology Pharmacist",
          "Pharmacogenomics Pharmacist"
        ],
        "entryEn": "bachelor’s degree or equivalent preparation",
        "preferredEn": "bachelor’s degree or equivalent preparation + relevant certification, registration or licence",
        "whyEn": "The work combines specialist knowledge with patient safety, regulation, professional judgement and human trust. AI is more likely to support licensed practitioners than replace them."
      },
      {
        "direction": "制剂、工艺与监管科学",
        "jobs": [
          "制剂科学家",
          "工艺开发科学家",
          "药品注册事务专家"
        ],
        "entry": "药学/化工本科",
        "preferred": "硕士或博士更有优势",
        "why": "药物能否稳定生产、符合质量标准并获批，需要大量实验和监管判断。",
        "directionEn": "Formulation, Process and Regulatory Science",
        "jobsEn": [
          "Formulation Scientist",
          "Process Development Scientist",
          "Drug Regulatory Affairs Specialist"
        ],
        "entryEn": "bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis advantageous",
        "whyEn": "This track relies more heavily on domain judgement, complex trade-offs, accountability or original problem-solving, so AI is more likely to extend professional capability than remove the role."
      },
      {
        "direction": "新药研发与转化药理",
        "jobs": [
          "药理学家",
          "毒理学家",
          "转化医学科学家"
        ],
        "entry": "相关本科",
        "preferred": "博士通常是核心研发岗位门槛",
        "why": "需要整合动物、细胞和临床证据，决定项目是否继续投入。",
        "directionEn": "Drug Discovery and Translational Pharmacology",
        "jobsEn": [
          "Pharmacologist",
          "Toxicologist",
          "Translational Medicine Scientist"
        ],
        "entryEn": "bachelor’s degree",
        "preferredEn": "PhD",
        "whyEn": "This track relies more heavily on domain judgement, complex trade-offs, accountability or original problem-solving, so AI is more likely to extend professional capability than remove the role."
      }
    ],
    "advice": [
      "先区分执业药师、医院临床、工业研发、监管和商业路径。",
      "补足统计、药代动力学、编程和临床证据评价。",
      "申请项目时核实目标国家课程是否满足注册或实习要求。"
    ],
    "adviceEn": [
      "Build strong scientific foundations and learn how evidence is produced through experiments, measurement and reproducible analysis.",
      "Combine computational skills with laboratory or field experience so that you can both analyse data and understand how it was generated.",
      "Use projects to show hypothesis formation, method choice, uncertainty, controls and interpretation—not only final conclusions.",
      "Research, clinical and advanced R&D careers often reward postgraduate study; decide by working backward from the target role."
    ]
  },
  {
    "id": "math",
    "name": "数学",
    "en": "Mathematics",
    "category": "计算与数据",
    "risk": 44,
    "overview": "研究结构、数量、空间与变化，是AI、工程和科学的基础。AI能完成大量标准推导与计算，但证明策略、建模假设、抽象创新和高风险量化判断仍有价值。",
    "threshold": "当工作只是解标准题、运行成熟统计流程或按既定规则做计算时，AI会迅速降低这类任务的人工需求。",
    "high": [
      {
        "direction": "标准题解与教学材料",
        "jobs": [
          "题库编辑",
          "数学内容助理",
          "在线答疑专员"
        ],
        "entry": "本科",
        "preferred": "本科 + 教学资质/课程设计能力",
        "why": "步骤固定的题目、答案和讲解可以批量生成。",
        "directionEn": "Standard Solutions and Teaching Materials",
        "jobsEn": [
          "Question Bank Editor",
          "Mathematics Content Assistant",
          "Online Q&A Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "例行统计与模型报告",
        "jobs": [
          "统计助理",
          "数据报告专员",
          "研究数据助理"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "标准检验、图表和文字结论已经可以自动完成。",
        "directionEn": "Routine Statistics and Model Reporting",
        "jobsEn": [
          "Statistics Assistant",
          "Data Reporting Specialist",
          "Research Data Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "规则化精算与风险计算",
        "jobs": [
          "精算助理",
          "风险计算专员",
          "定价分析助理"
        ],
        "entry": "本科",
        "preferred": "精算考试进度 + 数据能力",
        "why": "固定公式下的重复计算会自动化，单纯计算型岗位会减少。",
        "directionEn": "Rule-based Actuarial and Risk Calculation",
        "jobsEn": [
          "Actuarial Assistant",
          "Risk Calculation Specialist",
          "Pricing Analysis Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree or equivalent preparation",
        "whyEn": "Rule-based screening, standard forms and routine documentation are increasingly automatable. Human value shifts toward exceptions, investigation and accountable judgement."
      }
    ],
    "border": [
      {
        "direction": "应用统计与建模",
        "jobs": [
          "统计师",
          "生物统计师",
          "数据建模师"
        ],
        "entry": "本科",
        "preferred": "硕士较常见",
        "why": "工具会自动跑模型，但研究设计、变量选择和结果解释仍需要专业训练。",
        "directionEn": "Applied Statistics and Modelling",
        "jobsEn": [
          "Statistician",
          "Biostatistician",
          "Data Modeller"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degreeis common",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "量化分析",
        "jobs": [
          "量化分析师",
          "风险模型师",
          "金融工程师"
        ],
        "entry": "本科",
        "preferred": "硕士或博士更常见",
        "why": "模型容易生成，真正困难的是数据、市场机制和风险管理。",
        "directionEn": "Quantitative Analysis",
        "jobsEn": [
          "Quantitative Analyst",
          "Risk Modeller",
          "Finance Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis more common",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "数学教育",
        "jobs": [
          "中学数学教师",
          "课程设计师",
          "学习科学研究员"
        ],
        "entry": "本科",
        "preferred": "教师资格；研究方向常需硕士/博士",
        "why": "AI能讲题，但发现学生误区、设计启发过程和建立学习动力仍需要教师。",
        "directionEn": "Mathematics Education",
        "jobsEn": [
          "Secondary-school Mathematics Teacher",
          "Curriculum Designer",
          "Learning Science Researcher"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "PhD + relevant certification, registration or licence",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      }
    ],
    "safe": [
      {
        "direction": "纯数学研究",
        "jobs": [
          "大学数学研究员",
          "理论数学家",
          "博士后研究员"
        ],
        "entry": "数学本科",
        "preferred": "博士是学术研究门槛",
        "why": "需要创造新概念、提出猜想并完成证明。",
        "directionEn": "Pure Mathematics Research",
        "jobsEn": [
          "University Mathematics Researcher",
          "Theoretical Mathematician",
          "Postdoctoral Researcher"
        ],
        "entryEn": "Mathematicsbachelor’s degree",
        "preferredEn": "PhD",
        "whyEn": "The central challenge is defining new questions, designing valid methods and interpreting uncertain evidence. AI can accelerate research, but originality and scientific judgement remain essential."
      },
      {
        "direction": "密码、优化与科学计算",
        "jobs": [
          "密码学家",
          "运筹优化工程师",
          "数值计算科学家"
        ],
        "entry": "本科",
        "preferred": "硕士或博士更有竞争力",
        "why": "涉及新的算法、复杂约束和高安全要求，不能只依赖现成模型。",
        "directionEn": "Cryptography, Optimisation and Scientific Computing",
        "jobsEn": [
          "Cryptographer",
          "Operations-research Optimisation Engineer",
          "Numerical Computation Scientist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "PhD",
        "whyEn": "The central challenge is defining new questions, designing valid methods and interpreting uncertain evidence. AI can accelerate research, but originality and scientific judgement remain essential."
      },
      {
        "direction": "高责任模型与因果推断",
        "jobs": [
          "模型验证专家",
          "因果推断科学家",
          "决策科学家"
        ],
        "entry": "本科",
        "preferred": "硕士或博士较常见",
        "why": "结论会影响医疗、金融或政策，需要解释假设并对误差负责。",
        "directionEn": "High-stakes Modelling and Causal Inference",
        "jobsEn": [
          "Model Validation Specialist",
          "Causal Inference Scientist",
          "Decision Science Scientist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis common",
        "whyEn": "The central challenge is defining new questions, designing valid methods and interpreting uncertain evidence. AI can accelerate research, but originality and scientific judgement remain essential."
      }
    ],
    "advice": [
      "不要只展示竞赛或解题，应证明能把现实问题形式化并检验假设。",
      "学习Python/R、数值方法、优化和数据沟通。",
      "选择一个应用接口，如AI、金融、生物、物理或运筹。"
    ],
    "adviceEn": [
      "Build durable foundations in algorithms, statistics, data structures, systems and evaluation—not only familiarity with current AI tools.",
      "Complete projects that show problem definition, data or system choices, testing, deployment and responsibility for failures.",
      "Develop a domain pairing such as computing + healthcare, finance, manufacturing, public policy or robotics.",
      "Use postgraduate study selectively for research-heavy, mathematically demanding or highly specialised tracks."
    ]
  },
  {
    "id": "chem",
    "name": "化学",
    "en": "Chemistry",
    "category": "自然与生命科学",
    "risk": 42,
    "overview": "研究物质结构、反应与性质。AI可预测分子、路线和谱图，但真实合成、仪器、杂质、放大、安全与机制验证仍需要实验判断。",
    "threshold": "当工作只是检索反应、初步判断标准谱图、跑固定计算流程或写常规报告时，AI会明显减少人工工作量。",
    "high": [
      {
        "direction": "基础谱图与文献检索",
        "jobs": [
          "分析实验助理",
          "化学信息专员",
          "文献研究助理"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "标准谱图和公开反应资料可以被AI快速识别和总结。",
        "directionEn": "Basic Spectral Analysis and Literature Search",
        "jobsEn": [
          "Analytical Laboratory Assistant",
          "Chemical Information Specialist",
          "Literature Research Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "常规计算与数据库筛选",
        "jobs": [
          "计算化学助理",
          "分子数据分析员",
          "虚拟筛选专员"
        ],
        "entry": "本科",
        "preferred": "硕士或博士更常见",
        "why": "固定软件流程和公开数据库筛选会高度自动化。",
        "directionEn": "Routine Computation and Database Screening",
        "jobsEn": [
          "Computational Chemistry Assistant",
          "Molecular Data Analyst",
          "Virtual Screening Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis more common",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "标准质量与安全文档",
        "jobs": [
          "质量文件专员",
          "SDS专员",
          "实验报告助理"
        ],
        "entry": "大专或本科",
        "preferred": "本科 + GMP/法规经验",
        "why": "格式固定的报告和安全资料容易生成，但最终审核仍需专业人员。",
        "directionEn": "Standard Quality and Safety Documentation",
        "jobsEn": [
          "Quality Documentation Specialist",
          "SDS Specialist",
          "Lab-report Assistant"
        ],
        "entryEn": "Associate degree or bachelor’s degree",
        "preferredEn": "bachelor’s degree + relevant project or professional experience",
        "whyEn": "Rule-based screening, standard forms and routine documentation are increasingly automatable. Human value shifts toward exceptions, investigation and accountable judgement."
      }
    ],
    "border": [
      {
        "direction": "分析化学与方法开发",
        "jobs": [
          "分析化学家",
          "质谱工程师",
          "色谱方法开发员"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "仪器能自动识别，但复杂样品、干扰和新方法验证仍需要化学家。",
        "directionEn": "Analytical Chemistry and Method Development",
        "jobsEn": [
          "Analytical Chemist",
          "Mass Spectrometry Engineer",
          "Chromatography Method Developer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "有机合成",
        "jobs": [
          "有机合成化学家",
          "工艺化学家",
          "药物化学家"
        ],
        "entry": "本科",
        "preferred": "硕士或博士较常见",
        "why": "AI能建议路线，但真实反应、副产物和放大问题仍要靠实验解决。",
        "directionEn": "Organic Synthesis",
        "jobsEn": [
          "Organic Synthesis Chemist",
          "Process Chemist",
          "Medicinal Chemist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis common",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "计算化学",
        "jobs": [
          "计算化学家",
          "分子模拟科学家",
          "化学数据科学家"
        ],
        "entry": "本科",
        "preferred": "硕士或博士更常见",
        "why": "工具门槛降低，但模型何时可信、如何与实验相互验证仍是关键。",
        "directionEn": "Computational Chemistry",
        "jobsEn": [
          "Computational Chemist",
          "Molecular Simulation Scientist",
          "Specialist Data Scientist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis more common",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      }
    ],
    "safe": [
      {
        "direction": "新反应、催化与复杂合成",
        "jobs": [
          "催化研究员",
          "合成科学家",
          "化学研发科学家"
        ],
        "entry": "本科",
        "preferred": "博士通常是核心研究岗位门槛",
        "why": "目标是发现新的反应规律，需要长期实验和原创判断。",
        "directionEn": "Novel Reactions, Catalysis and Complex Synthesis",
        "jobsEn": [
          "Catalysis Researcher",
          "Synthesis Scientist",
          "Specialist R&D Scientist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "PhD",
        "whyEn": "The central challenge is defining new questions, designing valid methods and interpreting uncertain evidence. AI can accelerate research, but originality and scientific judgement remain essential."
      },
      {
        "direction": "材料、能源与化学生物学",
        "jobs": [
          "材料化学家",
          "电池化学家",
          "化学生物学研究员"
        ],
        "entry": "本科",
        "preferred": "硕士或博士较常见",
        "why": "需要跨越化学、材料和生物系统，并把实验结果做成可用技术。",
        "directionEn": "Materials, Energy and Chemical Biology",
        "jobsEn": [
          "Materials Chemist",
          "Battery Chemist",
          "Chemical Biology Researcher"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis common",
        "whyEn": "This track relies more heavily on domain judgement, complex trade-offs, accountability or original problem-solving, so AI is more likely to extend professional capability than remove the role."
      },
      {
        "direction": "工艺安全与复杂检测",
        "jobs": [
          "工艺安全工程师",
          "高级分析科学家",
          "环境污染物专家"
        ],
        "entry": "本科",
        "preferred": "硕士/专业认证 + 行业经验",
        "why": "关系到装置安全、产品质量或公共环境，错误代价高。",
        "directionEn": "Process Safety and Complex Inspection",
        "jobsEn": [
          "Process Safety Engineer",
          "Advanced Analytics Scientist",
          "Environmental Contaminants Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience + relevant certification, registration or licence",
        "whyEn": "The work involves changing threats, regulation, ethical trade-offs and accountability. AI can flag issues, but people must decide what risk is acceptable and own the consequences."
      }
    ],
    "advice": [
      "重视实验记录、误差、纯化、表征与安全，而非只追求“成功反应”。",
      "学习计算化学、数据分析和自动化实验，但保持实验验证能力。",
      "通过研究项目证明你能解释异常结果和优化路线。"
    ],
    "adviceEn": [
      "Build strong scientific foundations and learn how evidence is produced through experiments, measurement and reproducible analysis.",
      "Combine computational skills with laboratory or field experience so that you can both analyse data and understand how it was generated.",
      "Use projects to show hypothesis formation, method choice, uncertainty, controls and interpretation—not only final conclusions.",
      "Research, clinical and advanced R&D careers often reward postgraduate study; decide by working backward from the target role."
    ]
  },
  {
    "id": "econ",
    "name": "经济学",
    "en": "Economics",
    "category": "商业与经济",
    "risk": 58,
    "overview": "研究激励、市场、政策与资源配置。数据清洗、文献综述和标准模型可被AI加速，但识别策略、制度背景、政策权衡与因果解释仍是核心。",
    "threshold": "当工作只是整理经济新闻、画常规图表、跑标准回归或写没有明确识别方法的行业报告时，AI很容易完成。",
    "high": [
      {
        "direction": "经济资讯与市场简报",
        "jobs": [
          "经济研究助理",
          "市场资讯分析员",
          "财经内容编辑"
        ],
        "entry": "本科",
        "preferred": "本科 + 数据和行业能力",
        "why": "公开数据、新闻摘要和图表可以自动生成。",
        "directionEn": "Economic News and Market Briefing",
        "jobsEn": [
          "Economic Research Assistant",
          "Market Intelligence Analyst",
          "Financial Content Editor"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "标准回归与文献整理",
        "jobs": [
          "研究助理",
          "数据分析助理",
          "政策资料助理"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "代码和综述会自动化，只有会跑模型不再构成优势。",
        "directionEn": "Standard Regression and Literature Processing",
        "jobsEn": [
          "Research Assistant",
          "Data Analytics Assistant",
          "Policy Documentation Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "通用行业分析",
        "jobs": [
          "行业分析助理",
          "商业研究员",
          "咨询分析助理"
        ],
        "entry": "本科",
        "preferred": "本科或硕士 + 行业经验",
        "why": "缺少独家数据和明确方法的报告很容易被AI复制。",
        "directionEn": "General Industry Analysis",
        "jobsEn": [
          "Industry Analysis Assistant",
          "Business Researcher",
          "Consulting Analysis Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Bachelor’s degree or master’s degree + industry experience",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      }
    ],
    "border": [
      {
        "direction": "宏观与市场研究",
        "jobs": [
          "宏观分析师",
          "市场经济学家",
          "首席经济学家助理"
        ],
        "entry": "本科",
        "preferred": "硕士较常见",
        "why": "信息处理会更快，但情景判断、政策变化和对外沟通仍需要经验。",
        "directionEn": "Macroeconomic and Market Research",
        "jobsEn": [
          "Macroeconomic Analyst",
          "Market Economist",
          "Domain Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degreeis common",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "商业经济与定价分析",
        "jobs": [
          "商业经济学家",
          "定价分析师",
          "平台策略分析师"
        ],
        "entry": "本科",
        "preferred": "硕士 + 企业数据经验",
        "why": "AI能建模，但企业内部数据、竞争反应和实施选择仍需人负责。",
        "directionEn": "Business Economics and Pricing Analysis",
        "jobsEn": [
          "Business Economist",
          "Pricing Analyst",
          "Platform Strategy Analyst"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "公共政策分析",
        "jobs": [
          "政策分析师",
          "政府经济顾问",
          "智库研究员"
        ],
        "entry": "本科",
        "preferred": "硕士较常见",
        "why": "资料汇总容易，真正困难的是理解制度、利益分配和可执行性。",
        "directionEn": "Public Policy Analysis",
        "jobsEn": [
          "Policy Analyst",
          "Government Economics Consultant",
          "Specialist Researcher"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degreeis common",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      }
    ],
    "safe": [
      {
        "direction": "因果推断与实验设计",
        "jobs": [
          "计量经济学家",
          "实验经济学家",
          "因果推断科学家"
        ],
        "entry": "本科",
        "preferred": "硕士或博士较常见",
        "why": "要判断政策或商业措施是否带来真实影响，需要严谨的研究设计和因果证据。",
        "directionEn": "Causal Inference and Experimental Design",
        "jobsEn": [
          "Econometrics Economist",
          "Laboratory Economist",
          "Causal Inference Scientist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis common",
        "whyEn": "The role depends on physical systems, testing, safety, site conditions and accountability for real-world performance. AI can assist design, but cannot independently own the outcome."
      },
      {
        "direction": "竞争、劳动、健康与环境经济",
        "jobs": [
          "竞争政策经济学家",
          "劳动经济学家",
          "健康经济学家"
        ],
        "entry": "本科",
        "preferred": "硕士或博士更有优势",
        "why": "需要深入理解具体制度、市场行为和政策后果。",
        "directionEn": "Competition, Labour, Health and Environmental Economics",
        "jobsEn": [
          "Competition Policy Economist",
          "Labour Economist",
          "Specialist Economist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis advantageous",
        "whyEn": "This track relies more heavily on domain judgement, complex trade-offs, accountability or original problem-solving, so AI is more likely to extend professional capability than remove the role."
      },
      {
        "direction": "机制设计与高责任政策评估",
        "jobs": [
          "机制设计研究员",
          "高级政策经济学家",
          "市场设计专家"
        ],
        "entry": "本科",
        "preferred": "博士通常是研究和高级岗位门槛",
        "why": "涉及规则如何改变行为和资源分配，需要原创模型与高责任判断。",
        "directionEn": "Mechanism Design and High-stakes Policy Evaluation",
        "jobsEn": [
          "Mechanism Design Researcher",
          "Senior Policy Economist",
          "Market Design Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "PhD",
        "whyEn": "The work involves changing threats, regulation, ethical trade-offs and accountability. AI can flag issues, but people must decide what risk is acceptable and own the consequences."
      }
    ],
    "advice": [
      "强化计量、统计、编程和数据生成过程，而不只讲理论概念。",
      "研究项目应清楚区分相关与因果，并讨论识别假设。",
      "选择一个实质领域形成深度，如健康、环境、劳动或产业组织。"
    ],
    "adviceEn": [
      "Combine quantitative literacy with a clear understanding of firms, markets, incentives, regulation and a specific industry.",
      "Build projects that move from a business question to evidence, analysis, trade-offs and a recommendation that could actually be implemented.",
      "Do not stop at dashboards or reports; learn to challenge data quality, explain causality and communicate decisions to stakeholders.",
      "A master’s degree is most useful for technical, research, regulated or leadership tracks—not as a substitute for relevant experience."
    ]
  },
  {
    "id": "mse",
    "name": "材料科学与工程",
    "en": "Materials Science & Engineering",
    "category": "工程与制造",
    "risk": 35,
    "overview": "连接材料的成分、结构、工艺、性能与应用。AI加速材料筛选和表征，但样品制备、跨尺度机制、制造可行性和可靠性验证使这些岗位仍很难被完全替代。",
    "threshold": "当工作只是分类标准显微图、检索公开配方、做模板化性能预测或整理常规质量资料时，最容易被自动化。",
    "high": [
      {
        "direction": "标准表征数据初筛",
        "jobs": [
          "材料分析助理",
          "显微图像分析员",
          "实验数据专员"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "清晰的图像和谱图可以由AI快速分类，纯数据整理岗位会减少。",
        "directionEn": "Initial Screening of Standard Characterisation Data",
        "jobsEn": [
          "Materials Analysis Assistant",
          "Microscopy Image Analyst",
          "Experimental Data Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "公开数据库性能预测",
        "jobs": [
          "材料信息助理",
          "计算材料助理",
          "配方筛选专员"
        ],
        "entry": "本科",
        "preferred": "硕士 + 实验能力",
        "why": "只用公开数据做模板模型越来越容易，缺少实验验证的价值有限。",
        "directionEn": "Performance Prediction with Public Databases",
        "jobsEn": [
          "Materials Information Assistant",
          "Computational Materials Assistant",
          "Formulation Screening Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "常规质量与失效资料整理",
        "jobs": [
          "质量工程师助理",
          "材料检测员",
          "失效资料专员"
        ],
        "entry": "大专或本科",
        "preferred": "本科 + 现场分析能力",
        "why": "报告和初步分类会自动化，但复杂原因仍需工程师调查。",
        "directionEn": "Routine Quality and Failure-data Processing",
        "jobsEn": [
          "Domain Assistant",
          "Materials Testing Technician",
          "Failure-data Specialist"
        ],
        "entryEn": "Associate degree or bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      }
    ],
    "border": [
      {
        "direction": "计算材料与材料信息学",
        "jobs": [
          "计算材料工程师",
          "材料数据科学家",
          "模拟研发工程师"
        ],
        "entry": "本科",
        "preferred": "硕士或博士较常见",
        "why": "模型会更强，但数据是否可靠、预测能否在实验中实现仍是难点。",
        "directionEn": "Computational Materials and Materials Informatics",
        "jobsEn": [
          "Computational Materials Engineer",
          "Materials Data Scientist",
          "Simulation R&D Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis common",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "材料检测与失效分析",
        "jobs": [
          "材料检测工程师",
          "失效分析工程师",
          "可靠性工程师"
        ],
        "entry": "本科",
        "preferred": "硕士或本科 + 行业经验",
        "why": "自动识别能帮助初筛，但真实零件为何损坏往往涉及工艺、载荷和环境。",
        "directionEn": "Materials Testing and Failure Analysis",
        "jobsEn": [
          "Materials Testing Engineer",
          "Failure Analysis Engineer",
          "Reliability Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or bachelor’s degree + industry experience",
        "whyEn": "AI can speed modelling and planning, but real systems introduce safety constraints, site variation, testing and integration problems that require experienced engineers."
      },
      {
        "direction": "配方与工艺优化",
        "jobs": [
          "材料配方工程师",
          "工艺开发工程师",
          "产品开发工程师"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "算法能给建议，但成本、稳定性、生产放大和客户要求要综合平衡。",
        "directionEn": "Formulation and Process Optimisation",
        "jobsEn": [
          "Materials Formulation Engineer",
          "Process Development Engineer",
          "Product Development Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      }
    ],
    "safe": [
      {
        "direction": "半导体、能源与生物材料",
        "jobs": [
          "半导体材料工程师",
          "电池材料科学家",
          "生物材料研究员"
        ],
        "entry": "本科",
        "preferred": "硕士或博士较常见",
        "why": "前沿材料需要复杂制备、表征和长期可靠性验证。",
        "directionEn": "Semiconductor, Energy and Biomaterials",
        "jobsEn": [
          "Semiconductor Materials Engineer",
          "Battery Materials Scientist",
          "Biomaterials Researcher"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis common",
        "whyEn": "This track relies more heavily on domain judgement, complex trade-offs, accountability or original problem-solving, so AI is more likely to extend professional capability than remove the role."
      },
      {
        "direction": "先进表征与极端环境材料",
        "jobs": [
          "表征科学家",
          "高温材料工程师",
          "腐蚀与可靠性专家"
        ],
        "entry": "本科",
        "preferred": "硕士或博士更有优势",
        "why": "需要操作高级仪器并解释复杂现象，错误可能影响重大装备安全。",
        "directionEn": "Advanced Characterisation and Extreme-environment Materials",
        "jobsEn": [
          "Characterisation Scientist",
          "High-temperature Materials Engineer",
          "Corrosion And Reliability Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis advantageous",
        "whyEn": "This track relies more heavily on domain judgement, complex trade-offs, accountability or original problem-solving, so AI is more likely to extend professional capability than remove the role."
      },
      {
        "direction": "自动化实验与材料研发",
        "jobs": [
          "材料研发科学家",
          "自动化实验平台工程师",
          "材料信息学负责人"
        ],
        "entry": "本科",
        "preferred": "博士或硕士 + 强实验/计算背景",
        "why": "未来有前景的是让AI设计实验，再由自动化平台验证并不断改进的完整研发流程。",
        "directionEn": "Automated Experimentation and Materials R&D",
        "jobsEn": [
          "Materials R&D Scientist",
          "Automated Experimentation Platform Engineer",
          "Materials Informatics Lead"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "PhD",
        "whyEn": "The role depends on physical systems, testing, safety, site conditions and accountability for real-world performance. AI can assist design, but cannot independently own the outcome."
      }
    ],
    "advice": [
      "项目必须把结构—工艺—性能—应用连起来，避免只描述材料“很先进”。",
      "同时学习表征、实验设计、Python和材料数据库。",
      "优先选择有产业场景和可靠性约束的课题。"
    ],
    "adviceEn": [
      "Strengthen mathematics, physics, modelling, experimentation and the ability to validate ideas against real-world constraints.",
      "Show the full engineering cycle: requirements, concepts, calculations, prototypes, testing, failure analysis and iteration.",
      "Learn to use AI and simulation tools, while demonstrating that you can question assumptions and verify safety-critical results.",
      "Check whether target roles require professional accreditation, registration, site experience or a specialised master’s degree."
    ]
  },
  {
    "id": "ds",
    "name": "数据科学",
    "en": "Data Science",
    "category": "计算与数据",
    "risk": 66,
    "overview": "以统计、计算和领域知识从数据中提取决策价值。代码、可视化和常规模型快速自动化，真正重要的能力变成问题定义、数据质量、因果、部署与业务责任。",
    "threshold": "当工作只是做常规图表、写SQL、搭仪表盘或在干净数据上套模板模型时，AI会明显减少初级数据岗位。",
    "high": [
      {
        "direction": "常规报表与仪表盘",
        "jobs": [
          "数据分析助理",
          "BI报表专员",
          "运营数据专员"
        ],
        "entry": "本科",
        "preferred": "本科 + 业务理解",
        "why": "AI已经能写查询、生成图表和解释常见变化。",
        "directionEn": "Routine Reports and Dashboards",
        "jobsEn": [
          "Data Analytics Assistant",
          "BI Reporting Specialist",
          "Operations Data Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "模板化预测与分类",
        "jobs": [
          "初级数据科学家",
          "建模分析助理",
          "自动机器学习专员"
        ],
        "entry": "本科",
        "preferred": "硕士 + 真实脏数据经验",
        "why": "在整理好的数据上跑普通模型越来越容易一键完成。",
        "directionEn": "Template-based Prediction and Classification",
        "jobsEn": [
          "Specialist Data Scientist",
          "Modelling Analysis Assistant",
          "Automl Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "常规A/B测试计算",
        "jobs": [
          "实验分析助理",
          "增长数据助理",
          "产品数据专员"
        ],
        "entry": "本科",
        "preferred": "本科或硕士 + 实验设计能力",
        "why": "计算显著性和写结论会自动化，只会套公式的岗位价值下降。",
        "directionEn": "Routine A/B Test Calculations",
        "jobsEn": [
          "Experimental Analysis Assistant",
          "Growth Data Assistant",
          "Product Data Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      }
    ],
    "border": [
      {
        "direction": "产品分析",
        "jobs": [
          "产品数据分析师",
          "增长分析师",
          "商业智能分析师"
        ],
        "entry": "本科",
        "preferred": "本科或硕士 + 产品经验",
        "why": "查询会自动化，但指标怎么定义、异常为何发生以及如何推动产品改变仍需要人。",
        "directionEn": "Product Analytics",
        "jobsEn": [
          "Product Data Analyst",
          "Growth Analyst",
          "Business Intelligence Analyst"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "机器学习工程",
        "jobs": [
          "机器学习工程师",
          "数据平台工程师",
          "推荐系统工程师"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "建模工具会更简单，但数据管道、线上性能和监控仍是复杂工程。",
        "directionEn": "Machine-learning Engineering",
        "jobsEn": [
          "Machine Learning Engineer",
          "Data Platform Engineer",
          "Recommendation Systems Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "AI can speed modelling and planning, but real systems introduce safety constraints, site variation, testing and integration problems that require experienced engineers."
      },
      {
        "direction": "商业分析",
        "jobs": [
          "商业分析师",
          "战略数据分析师",
          "供应链分析师"
        ],
        "entry": "本科",
        "preferred": "硕士或本科 + 行业经验",
        "why": "报告会自动生成，能把分析变成组织行动的人更难被替代。",
        "directionEn": "Business Analysis",
        "jobsEn": [
          "Business Analyst",
          "Strategic Data Analyst",
          "Supply Chain Analyst"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or bachelor’s degree + industry experience",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      }
    ],
    "safe": [
      {
        "direction": "因果推断与决策科学",
        "jobs": [
          "因果推断科学家",
          "决策科学家",
          "高级实验设计师"
        ],
        "entry": "本科",
        "preferred": "硕士或博士较常见",
        "why": "需要判断措施是否真的有效，并在不完整数据下支持重要决策。",
        "directionEn": "Causal Inference and Decision Science",
        "jobsEn": [
          "Causal Inference Scientist",
          "Decision Science Scientist",
          "Advanced Experimental Designer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis common",
        "whyEn": "The central challenge is defining new questions, designing valid methods and interpreting uncertain evidence. AI can accelerate research, but originality and scientific judgement remain essential."
      },
      {
        "direction": "数据治理、隐私与模型风险",
        "jobs": [
          "数据治理经理",
          "隐私工程师",
          "模型风险专家"
        ],
        "entry": "本科",
        "preferred": "硕士/专业认证 + 监管经验",
        "why": "组织需要有人决定数据能否使用、模型是否公平以及出了问题谁负责。",
        "directionEn": "Data Governance, Privacy and Model Risk",
        "jobsEn": [
          "Data Governance Manager",
          "Privacy Engineer",
          "Model Risk Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience + relevant certification, registration or licence",
        "whyEn": "The work involves changing threats, regulation, ethical trade-offs and accountability. AI can flag issues, but people must decide what risk is acceptable and own the consequences."
      },
      {
        "direction": "医疗、工业与科学数据",
        "jobs": [
          "医疗数据科学家",
          "工业数据科学家",
          "科学计算数据专家"
        ],
        "entry": "本科",
        "preferred": "硕士或博士 + 领域知识",
        "why": "数据难获取、噪声大且关系到真实设备或患者，领域理解比套模型更重要。",
        "directionEn": "Healthcare, Industrial and Scientific Data",
        "jobsEn": [
          "Healthcare Data Scientist",
          "Industrial Data Scientist",
          "Scientific-computing Data Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "PhD",
        "whyEn": "This track relies more heavily on domain judgement, complex trade-offs, accountability or original problem-solving, so AI is more likely to extend professional capability than remove the role."
      }
    ],
    "advice": [
      "把重点从“模型准确率”转向数据生成机制、基线、因果和决策价值。",
      "至少掌握SQL、Python/R、统计推断、实验和数据工程基础。",
      "选择有真实脏数据、利益相关者和上线反馈的项目。"
    ],
    "adviceEn": [
      "Build durable foundations in algorithms, statistics, data structures, systems and evaluation—not only familiarity with current AI tools.",
      "Complete projects that show problem definition, data or system choices, testing, deployment and responsibility for failures.",
      "Develop a domain pairing such as computing + healthcare, finance, manufacturing, public policy or robotics.",
      "Use postgraduate study selectively for research-heavy, mathematically demanding or highly specialised tracks."
    ]
  },
  {
    "id": "de",
    "name": "设计工程",
    "en": "Design Engineering",
    "category": "工程与制造",
    "risk": 39,
    "overview": "融合工程、设计、人因、商业与原型开发。AI能快速生成概念和CAD方案，但用户洞察、跨学科取舍、实物验证与产品责任形成较强安全区。",
    "threshold": "当设计工作只停留在生成外观图、概念拼贴和没有测试的提案时，AI可以很快做出大量相似结果。",
    "high": [
      {
        "direction": "概念图与外观变体",
        "jobs": [
          "概念设计助理",
          "产品效果图设计师",
          "创意视觉设计师"
        ],
        "entry": "本科",
        "preferred": "本科 + 原型和研究能力",
        "why": "AI能迅速生成大量造型，单纯出图不再稀缺。",
        "directionEn": "Concept Visuals and Form Variations",
        "jobsEn": [
          "Concept Design Assistant",
          "Product Visualisation Designer",
          "Creative Visual Designer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "Generative tools can now produce large volumes of first-draft visual or written material. Roles that compete mainly on speed, format and volume are therefore under strong pressure."
      },
      {
        "direction": "基础CAD与展示板",
        "jobs": [
          "CAD设计助理",
          "产品设计助理",
          "作品展示设计师"
        ],
        "entry": "本科",
        "preferred": "本科 + 工程实现能力",
        "why": "简单形态建模和排版会越来越自动化。",
        "directionEn": "Basic CAD and Presentation Boards",
        "jobsEn": [
          "CAD Design Assistant",
          "Product Design Assistant",
          "Portfolio Presentation Designer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "趋势拼贴与无验证提案",
        "jobs": [
          "创新研究助理",
          "趋势研究助理",
          "概念策划助理"
        ],
        "entry": "本科",
        "preferred": "本科 + 真实用户研究",
        "why": "公开趋势整理和漂亮概念很容易生成，没有验证就难以证明价值。",
        "directionEn": "Trend Collages and Unvalidated Concepts",
        "jobsEn": [
          "Innovation Research Assistant",
          "Trend Research Assistant",
          "Concept Planning Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      }
    ],
    "border": [
      {
        "direction": "工业产品设计",
        "jobs": [
          "工业设计师",
          "产品设计师",
          "CMF设计师"
        ],
        "entry": "本科",
        "preferred": "本科或硕士 + 制造项目",
        "why": "造型会被AI加速，但人因、成本、材料和生产限制仍需综合考虑。",
        "directionEn": "Industrial Product Design",
        "jobsEn": [
          "Industrial Designer",
          "Product Designer",
          "CMF Designer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "交互原型与数字服务",
        "jobs": [
          "交互设计师",
          "UX设计师",
          "服务原型设计师"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "界面可以生成，复杂用户流程、研究和可用性测试仍需要人。",
        "directionEn": "Interactive Prototyping and Digital Services",
        "jobsEn": [
          "Interaction Design Designer",
          "UX Designer",
          "Service Prototype Designer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "创新咨询",
        "jobs": [
          "创新顾问",
          "设计策略师",
          "产品创新经理"
        ],
        "entry": "本科",
        "preferred": "硕士 + 商业/工程经验",
        "why": "创意发散会自动化，真正困难的是让组织接受并实施新方案。",
        "directionEn": "Innovation Consulting",
        "jobsEn": [
          "Innovation Consultant",
          "Design Strategist",
          "Product Innovation Manager"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can prepare information and options, but the work still depends on stakeholder trust, negotiation, context and responsibility for implementation."
      }
    ],
    "safe": [
      {
        "direction": "医疗与辅助技术设计",
        "jobs": [
          "医疗产品设计师",
          "辅助技术工程师",
          "人因工程师"
        ],
        "entry": "本科",
        "preferred": "硕士 + 法规/临床合作更有优势",
        "why": "需要理解患者、医护流程和安全标准，并通过严格测试。",
        "directionEn": "Healthcare and Assistive Technology Design",
        "jobsEn": [
          "Healthcare Product Designer",
          "Assistive Technology Engineer",
          "Human Factors Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "The work depends on research, strategic intent, cultural judgement and responsibility for the final message—not simply generating an attractive output."
      },
      {
        "direction": "机器人与智能硬件",
        "jobs": [
          "机器人产品设计师",
          "智能硬件工程师",
          "人机交互工程师"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "要把机械、电子、软件和用户体验整合成真正能用的产品。",
        "directionEn": "Robotics and Smart Hardware",
        "jobsEn": [
          "Robotics Product Designer",
          "Smart Hardware Engineer",
          "Human-computer Interaction Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "The role depends on physical systems, testing, safety, site conditions and accountability for real-world performance. AI can assist design, but cannot independently own the outcome."
      },
      {
        "direction": "从调研到落地的完整产品开发",
        "jobs": [
          "设计工程师",
          "产品开发工程师",
          "创新项目负责人"
        ],
        "entry": "本科",
        "preferred": "硕士或本科 + 完整落地项目",
        "why": "从发现问题、做原型、工程验证到制造和商业化，AI只能参与部分环节。",
        "directionEn": "End-to-end Product Development from Research to Delivery",
        "jobsEn": [
          "Specialist Engineer",
          "Product Development Engineer",
          "Innovation Programme Lead"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "The central challenge is defining new questions, designing valid methods and interpreting uncertain evidence. AI can accelerate research, but originality and scientific judgement remain essential."
      }
    ],
    "advice": [
      "作品集必须同时出现需求证据、工程约束、原型、测试和迭代。",
      "学习基础力学、电子、编程、制造和用户研究，避免只会表达概念。",
      "选择医疗、气候、机器人等问题复杂且结果可验证的领域。"
    ],
    "adviceEn": [
      "Strengthen mathematics, physics, modelling, experimentation and the ability to validate ideas against real-world constraints.",
      "Show the full engineering cycle: requirements, concepts, calculations, prototypes, testing, failure analysis and iteration.",
      "Learn to use AI and simulation tools, while demonstrating that you can question assumptions and verify safety-critical results.",
      "Check whether target roles require professional accreditation, registration, site experience or a specialised master’s degree."
    ]
  },
  {
    "id": "cheme",
    "name": "化学工程",
    "en": "Chemical Engineering",
    "category": "工程与制造",
    "risk": 37,
    "overview": "研究物质与能量在工业尺度的转化，涵盖反应、分离、传递、控制和安全。AI可优化流程，但放大、设备、异常工况和过程安全极难完全数字化。",
    "threshold": "当工作只是把参数输入成熟软件、做标准物料衡算、生成报表和整理操作文件时，最容易被AI和流程软件取代。",
    "high": [
      {
        "direction": "标准流程计算与报表",
        "jobs": [
          "工艺设计助理",
          "物料衡算工程助理",
          "技术文件专员"
        ],
        "entry": "本科",
        "preferred": "本科 + 真实工厂项目",
        "why": "固定流程下的计算、图表和文档已经能自动完成。",
        "directionEn": "Standard Process Calculations and Reporting",
        "jobsEn": [
          "Process Design Assistant",
          "Domain Assistant",
          "Technical-file Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree + relevant project or professional experience",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "常规流程模拟",
        "jobs": [
          "流程模拟助理",
          "过程数据分析员",
          "工艺优化助理"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "会操作软件的门槛下降，单纯跑模型不再足够。",
        "directionEn": "Routine Process Simulation",
        "jobsEn": [
          "Process Simulation Assistant",
          "Process Data Analyst",
          "Process Optimisation Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "重复性质量趋势分析",
        "jobs": [
          "生产数据专员",
          "质量分析助理",
          "SOP资料专员"
        ],
        "entry": "大专或本科",
        "preferred": "本科 + GMP/工厂经验",
        "why": "趋势图和标准程序检索适合自动化，人工会更多处理异常。",
        "directionEn": "Repetitive Quality-trend Analysis",
        "jobsEn": [
          "Production Data Specialist",
          "Quality Analysis Assistant",
          "SOP Documentation Specialist"
        ],
        "entryEn": "Associate degree or bachelor’s degree",
        "preferredEn": "bachelor’s degree + relevant project or professional experience",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      }
    ],
    "border": [
      {
        "direction": "过程设计与优化",
        "jobs": [
          "工艺工程师",
          "过程设计工程师",
          "流程优化工程师"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "AI能建议参数，但放大、经济性和原料变化仍需要工程判断。",
        "directionEn": "Process Design and Optimisation",
        "jobsEn": [
          "Process Engineer",
          "Process Design Engineer",
          "Process Optimisation Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "过程控制",
        "jobs": [
          "控制工程师",
          "DCS工程师",
          "过程自动化工程师"
        ],
        "entry": "本科",
        "preferred": "硕士或本科 + 装置经验",
        "why": "算法会更智能，但传感器故障、安全联锁和现场状态必须由人负责。",
        "directionEn": "Process Control",
        "jobsEn": [
          "Control Engineer",
          "DCS Engineer",
          "Process Automation Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "生产工程",
        "jobs": [
          "生产工程师",
          "装置工程师",
          "运营优化工程师"
        ],
        "entry": "本科",
        "preferred": "本科或硕士 + 工厂经验",
        "why": "排程和预测会自动化，真正困难的是停机、质量波动和跨班组协调。",
        "directionEn": "Production Engineering",
        "jobsEn": [
          "Production Engineer",
          "Plant Engineer",
          "Operations Optimisation Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can speed modelling and planning, but real systems introduce safety constraints, site variation, testing and integration problems that require experienced engineers."
      }
    ],
    "safe": [
      {
        "direction": "过程安全与事故分析",
        "jobs": [
          "过程安全工程师",
          "HAZOP主持人",
          "事故调查专家"
        ],
        "entry": "本科",
        "preferred": "硕士/专业认证 + 多年经验",
        "why": "关系到重大危险源和人员生命，必须由有资质的工程师判断。",
        "directionEn": "Process Safety and Incident Analysis",
        "jobsEn": [
          "Process Safety Engineer",
          "HAZOP Facilitator",
          "Incident Investigation Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience + relevant certification, registration or licence",
        "whyEn": "The work involves changing threats, regulation, ethical trade-offs and accountability. AI can flag issues, but people must decide what risk is acceptable and own the consequences."
      },
      {
        "direction": "新能源、碳捕集与生物过程",
        "jobs": [
          "氢能工艺工程师",
          "碳捕集工程师",
          "生物过程工程师"
        ],
        "entry": "本科",
        "preferred": "硕士或博士更有优势",
        "why": "新流程还没有成熟模板，需要实验、放大和多学科研发。",
        "directionEn": "New Energy, Carbon Capture and Bioprocesses",
        "jobsEn": [
          "Hydrogen Process Engineer",
          "Carbon Capture Engineer",
          "Bioprocess Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis advantageous",
        "whyEn": "This track relies more heavily on domain judgement, complex trade-offs, accountability or original problem-solving, so AI is more likely to extend professional capability than remove the role."
      },
      {
        "direction": "工艺放大与装置开车",
        "jobs": [
          "工艺放大工程师",
          "开车工程师",
          "先进分离研发工程师"
        ],
        "entry": "本科",
        "preferred": "硕士或多年现场经验",
        "why": "从实验室到大型装置会出现大量不可预见问题，现场经验非常关键。",
        "directionEn": "Process Scale-up and Plant Commissioning",
        "jobsEn": [
          "Process Scale-up Engineer",
          "Plant Commissioning Engineer",
          "Advanced Separation R&D Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or several years of field or site experience",
        "whyEn": "The role depends on physical systems, testing, safety, site conditions and accountability for real-world performance. AI can assist design, but cannot independently own the outcome."
      }
    ],
    "advice": [
      "重视热力学、传递、反应工程、控制和过程安全的整体联系。",
      "学习流程模拟、Python和优化，但必须理解模型假设与现场限制。",
      "选择能源转型、制药、生物制造或先进材料等增长接口。"
    ],
    "adviceEn": [
      "Strengthen mathematics, physics, modelling, experimentation and the ability to validate ideas against real-world constraints.",
      "Show the full engineering cycle: requirements, concepts, calculations, prototypes, testing, failure analysis and iteration.",
      "Learn to use AI and simulation tools, while demonstrating that you can question assumptions and verify safety-critical results.",
      "Check whether target roles require professional accreditation, registration, site experience or a specialised master’s degree."
    ]
  },
  {
    "id": "bme",
    "name": "生物医学工程",
    "en": "Biomedical Engineering",
    "category": "工程与制造",
    "risk": 36,
    "overview": "把工程方法用于诊断、治疗、器械与人体系统。AI强化医学影像和信号分析，但临床验证、法规、人体差异、硬件与安全责任使这些岗位仍很难被完全替代。",
    "threshold": "当方向只是拿公开数据做普通医学分类、清洗标准信号或开发没有临床验证的健康应用时，最容易变得大同小异。",
    "high": [
      {
        "direction": "公开数据的医学AI项目",
        "jobs": [
          "医学数据分析助理",
          "影像算法实习生",
          "健康AI应用助理"
        ],
        "entry": "本科",
        "preferred": "硕士 + 临床合作/真实数据",
        "why": "公开数据集上的普通分类越来越容易完成，难以形成独特价值。",
        "directionEn": "Medical AI Projects Using Public Data",
        "jobsEn": [
          "Medical Data Assistant",
          "Imaging-algorithm Intern",
          "Health AI Applications Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "基础生理信号处理",
        "jobs": [
          "生理信号分析助理",
          "算法测试助理",
          "医疗数据专员"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "标准滤波、特征提取和报告生成会被工具自动化。",
        "directionEn": "Basic Physiological Signal Processing",
        "jobsEn": [
          "Physiological-signal Analysis Assistant",
          "Algorithm Testing Assistant",
          "Healthcare Data Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "无临床验证的健康应用",
        "jobs": [
          "健康App产品助理",
          "数字健康内容专员",
          "健康科技运营"
        ],
        "entry": "本科",
        "preferred": "本科 + 产品/临床研究能力",
        "why": "通用建议和界面容易生成，但没有验证和监管支撑的产品门槛很低。",
        "directionEn": "Health Applications without Clinical Validation",
        "jobsEn": [
          "Health-app Product Assistant",
          "Digital-health Content Specialist",
          "Health Technology Operations Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      }
    ],
    "border": [
      {
        "direction": "医学影像AI",
        "jobs": [
          "医学影像算法工程师",
          "临床AI工程师",
          "影像数据科学家"
        ],
        "entry": "本科",
        "preferred": "硕士或博士更常见",
        "why": "模型会商品化，但数据治理、临床评测、医院部署和监管仍然困难。",
        "directionEn": "AI for Medical Imaging",
        "jobsEn": [
          "Medical-imaging Algorithms Engineer",
          "Clinical AI Engineer",
          "Imaging Data Scientist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis more common",
        "whyEn": "AI can support analysis and documentation, but professionals still need to interpret patient context, communicate uncertainty and make decisions within clinical and regulatory boundaries."
      },
      {
        "direction": "生物信号与可穿戴设备",
        "jobs": [
          "生物信号算法工程师",
          "可穿戴设备工程师",
          "数字生物标志物科学家"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "AI能分析信号，但传感器质量、个体差异和临床意义需要联合判断。",
        "directionEn": "Biosignals and Wearable Devices",
        "jobsEn": [
          "Biosignal Algorithm Engineer",
          "Wearable-device Engineer",
          "Digital Biomarker Scientist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "AI can speed modelling and planning, but real systems introduce safety constraints, site variation, testing and integration problems that require experienced engineers."
      },
      {
        "direction": "医疗器械设计",
        "jobs": [
          "医疗器械研发工程师",
          "验证工程师",
          "产品安全工程师"
        ],
        "entry": "本科",
        "preferred": "硕士 + 法规/质量体系经验",
        "why": "概念和文档会自动化，但测试、风险管理和注册审批不能省略。",
        "directionEn": "Medical Device Design",
        "jobsEn": [
          "Medical-device R&D Engineer",
          "Validation Engineer",
          "Product Safety Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can support analysis and documentation, but professionals still need to interpret patient context, communicate uncertainty and make decisions within clinical and regulatory boundaries."
      }
    ],
    "safe": [
      {
        "direction": "植入器械、神经工程与康复机器人",
        "jobs": [
          "神经工程师",
          "植入器械研发工程师",
          "康复机器人工程师"
        ],
        "entry": "本科",
        "preferred": "硕士或博士较常见",
        "why": "需要直接与人体和复杂硬件交互，安全与长期可靠性要求很高。",
        "directionEn": "Implantable Devices, Neuroengineering and Rehabilitation Robotics",
        "jobsEn": [
          "Specialist Engineer",
          "Implantable-device R&D Engineer",
          "Rehabilitation Robotics Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis common",
        "whyEn": "The role depends on physical systems, testing, safety, site conditions and accountability for real-world performance. AI can assist design, but cannot independently own the outcome."
      },
      {
        "direction": "临床系统与医疗器械法规",
        "jobs": [
          "临床工程师",
          "医疗器械法规专家",
          "人因安全工程师"
        ],
        "entry": "本科",
        "preferred": "硕士/专业认证 + 医院或企业经验",
        "why": "需要协调医生、患者、工程师和监管机构，并承担合规责任。",
        "directionEn": "Clinical Systems and Medical Device Regulation",
        "jobsEn": [
          "Clinical Engineer",
          "Medical-device Regulation Specialist",
          "Human Factors Safety Engineer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience + relevant certification, registration or licence",
        "whyEn": "The work combines specialist knowledge with patient safety, regulation, professional judgement and human trust. AI is more likely to support licensed practitioners than replace them."
      },
      {
        "direction": "组织工程、微流控与精准医疗",
        "jobs": [
          "组织工程研究员",
          "微流控研发科学家",
          "精准医疗科学家"
        ],
        "entry": "本科",
        "preferred": "博士通常是核心研发岗位门槛",
        "why": "属于实验密集型前沿研究，需要长期验证和跨学科合作。",
        "directionEn": "Tissue Engineering, Microfluidics and Precision Medicine",
        "jobsEn": [
          "Tissue Engineering Researcher",
          "Microfluidics R&D Scientist",
          "Precision Medicine Scientist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "PhD",
        "whyEn": "The role depends on physical systems, testing, safety, site conditions and accountability for real-world performance. AI can assist design, but cannot independently own the outcome."
      }
    ],
    "advice": [
      "本科阶段至少建立一个硬核主轴：电子、机械、材料、计算或生物。",
      "项目要讨论临床需求、误差、患者安全、验证和法规，而非只报准确率。",
      "优先争取医院、实验室或器械企业中的真实场景经历。"
    ],
    "adviceEn": [
      "Strengthen mathematics, physics, modelling, experimentation and the ability to validate ideas against real-world constraints.",
      "Show the full engineering cycle: requirements, concepts, calculations, prototypes, testing, failure analysis and iteration.",
      "Learn to use AI and simulation tools, while demonstrating that you can question assumptions and verify safety-critical results.",
      "Check whether target roles require professional accreditation, registration, site experience or a specialised master’s degree."
    ]
  },
  {
    "id": "soc",
    "name": "社会科学",
    "en": "Social Sciences",
    "category": "创意传播与人文社科",
    "risk": 60,
    "overview": "涵盖社会学、政治学、公共政策、人类学等对制度与群体的研究。AI擅长文本和资料处理，但田野关系、制度语境、价值冲突与政策执行难以复制。",
    "threshold": "当工作只是汇总公开文本、做描述性统计、整理问卷或写没有实地证据的政策简报时，AI会承担越来越多。",
    "high": [
      {
        "direction": "公开资料摘要与基础编码",
        "jobs": [
          "社会研究助理",
          "文本编码助理",
          "舆情资料专员"
        ],
        "entry": "本科",
        "preferred": "本科 + 方法训练",
        "why": "公开文本分类和摘要可以自动完成，纯资料整理岗位会减少。",
        "directionEn": "Public-source Summarisation and Basic Coding",
        "jobsEn": [
          "Social Research Assistant",
          "Text Coding Assistant",
          "Public-sentiment Documentation Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "标准问卷与描述性报告",
        "jobs": [
          "调查执行助理",
          "市场研究助理",
          "数据报告专员"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "常规统计和报告生成会自动化，关键在于样本和问题设计。",
        "directionEn": "Standard Surveys and Descriptive Reports",
        "jobsEn": [
          "Survey Operations Assistant",
          "Market Research Assistant",
          "Data Reporting Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "通用政策与舆情简报",
        "jobs": [
          "政策资料助理",
          "舆情分析助理",
          "公共事务研究助理"
        ],
        "entry": "本科",
        "preferred": "本科或硕士 + 专题知识",
        "why": "如果没有独家数据和制度分析，AI可以很快产出类似内容。",
        "directionEn": "General Policy and Public-sentiment Briefing",
        "jobsEn": [
          "Policy Documentation Assistant",
          "Sentiment Analysis Assistant",
          "Public-affairs Research Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "Rule-based screening, standard forms and routine documentation are increasingly automatable. Human value shifts toward exceptions, investigation and accountable judgement."
      }
    ],
    "border": [
      {
        "direction": "市场与舆情研究",
        "jobs": [
          "市场研究员",
          "舆情分析师",
          "消费者研究顾问"
        ],
        "entry": "本科",
        "preferred": "硕士更有竞争力",
        "why": "AI能整理数据，但样本是否可靠、观点为何形成以及客户如何行动仍需人。",
        "directionEn": "Market and Public-sentiment Research",
        "jobsEn": [
          "Market Researcher",
          "Public Sentiment Analyst",
          "Consumer Research Consultant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "公共政策分析",
        "jobs": [
          "政策分析师",
          "政府项目评估员",
          "智库研究员"
        ],
        "entry": "本科",
        "preferred": "硕士较常见",
        "why": "信息检索会更快，但制度限制、利益冲突和执行条件很复杂。",
        "directionEn": "Public Policy Analysis",
        "jobsEn": [
          "Policy Analyst",
          "Government Programme Evaluator",
          "Specialist Researcher"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degreeis common",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "国际关系与地区研究",
        "jobs": [
          "国际事务分析师",
          "地区研究员",
          "政治风险分析师"
        ],
        "entry": "本科",
        "preferred": "硕士 + 语言/地区经历更有优势",
        "why": "新闻汇总容易，真正的判断来自语言、历史、当地关系和长期观察。",
        "directionEn": "International Relations and Area Studies",
        "jobsEn": [
          "International Affairs Analyst",
          "Area Studies Researcher",
          "Political Risk Analyst"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      }
    ],
    "safe": [
      {
        "direction": "田野调查与民族志",
        "jobs": [
          "民族志研究员",
          "社区研究员",
          "用户田野研究员"
        ],
        "entry": "本科",
        "preferred": "硕士或博士较常见",
        "why": "需要进入真实社区建立信任，理解人们不会直接写在数据里的经验。",
        "directionEn": "Field Research and Ethnography",
        "jobsEn": [
          "Ethnography Researcher",
          "Community Researcher",
          "User Field Research Researcher"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis common",
        "whyEn": "The role depends on physical systems, testing, safety, site conditions and accountability for real-world performance. AI can assist design, but cannot independently own the outcome."
      },
      {
        "direction": "因果政策评估与公共服务设计",
        "jobs": [
          "政策评估专家",
          "社会影响分析师",
          "公共服务设计师"
        ],
        "entry": "本科",
        "preferred": "硕士或博士更有优势",
        "why": "要判断政策是否有效，并协调政府、机构和服务对象。",
        "directionEn": "Causal Policy Evaluation and Public Service Design",
        "jobsEn": [
          "Policy Evaluation Specialist",
          "Specialist Analyst",
          "Public Service Designer"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or PhDis advantageous",
        "whyEn": "The work involves changing threats, regulation, ethical trade-offs and accountability. AI can flag issues, but people must decide what risk is acceptable and own the consequences."
      },
      {
        "direction": "冲突调解与高风险地区研究",
        "jobs": [
          "冲突研究员",
          "社会影响顾问",
          "社区协调负责人"
        ],
        "entry": "本科",
        "preferred": "硕士 + 现场经验",
        "why": "涉及安全、文化和多方利益，必须依靠人际判断与责任承担。",
        "directionEn": "Conflict Mediation and High-risk Area Studies",
        "jobsEn": [
          "Conflict Research Researcher",
          "Specialist Consultant",
          "Community Coordination Lead"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree + field or site experience",
        "whyEn": "The work involves changing threats, regulation, ethical trade-offs and accountability. AI can flag issues, but people must decide what risk is acceptable and own the consequences."
      }
    ],
    "advice": [
      "掌握定量、定性与混合研究方法，并理解各自证据边界。",
      "形成地区、政策或议题专长，避免泛泛谈社会问题。",
      "通过访谈、田野、数据或项目评估产生一手证据。"
    ],
    "adviceEn": [
      "Develop a recognisable subject or issue specialism alongside strong research, writing, visual or communication skills.",
      "Show primary evidence—interviews, fieldwork, archives, experiments, audience research or original reporting—rather than only polished outputs.",
      "Use AI for ideation and production, while making your own judgement, sourcing, ethics and editorial responsibility visible.",
      "Choose postgraduate study when it unlocks professional licensing, advanced research methods or a clearly defined specialist role."
    ]
  },
  {
    "id": "ba",
    "name": "商业分析",
    "en": "Business Analytics",
    "category": "商业与经济",
    "risk": 64,
    "overview": "商业分析把统计、数据工具和商业判断结合起来，用于产品、营销、运营、供应链、定价和风险决策。AI会明显加快取数、制图、写报告和基础预测，但真正有价值的岗位会越来越看重：能否提出正确问题、判断数据是否可信，并把分析结果变成可以执行的商业决定。",
    "threshold": "当工作主要是从固定系统取数、套用现成指标、更新看板并写出格式相似的结论时，AI很容易接手大部分流程。",
    "high": [
      {
        "direction": "常规商业智能报表与经营看板",
        "jobs": [
          "BI报表分析员",
          "经营数据专员",
          "数据可视化助理"
        ],
        "entry": "本科",
        "preferred": "本科 + SQL、BI工具和业务实习",
        "why": "固定口径的取数、图表更新和周月报总结已经可以由AI和自动化平台快速完成，单纯负责出报表的岗位会减少。",
        "directionEn": "Routine BI Reporting and Management Dashboards",
        "jobsEn": [
          "BI Reporting Analyst",
          "Business-performance Data Specialist",
          "Data Visualisation Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree + relevant project or professional experience",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "基础营销与电商数据分析",
        "jobs": [
          "营销数据分析助理",
          "电商运营分析师",
          "广告投放分析专员"
        ],
        "entry": "本科",
        "preferred": "本科 + 平台数据或实验经验",
        "why": "渠道对比、转化漏斗、广告归因和活动复盘越来越能自动生成，只会整理平台数据的分析人员容易被压缩。",
        "directionEn": "Basic Marketing and E-commerce Analytics",
        "jobsEn": [
          "Marketing Analytics Assistant",
          "E-commerce Operations Analyst",
          "Advertising Analytics Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree + relevant project or professional experience",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "标准化销售与财务分析",
        "jobs": [
          "销售运营分析师",
          "财务分析助理",
          "商业分析助理"
        ],
        "entry": "本科",
        "preferred": "本科 + 财务基础和行业理解",
        "why": "常规预算差异、销售预测和模板化管理报告可以由AI快速完成，价值会从写报告转向解释原因和推动行动。",
        "directionEn": "Standardised Sales and Financial Analysis",
        "jobsEn": [
          "Sales Operations Analyst",
          "Financial Analysis Assistant",
          "Business Analysis Assistant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      }
    ],
    "border": [
      {
        "direction": "产品与增长分析",
        "jobs": [
          "产品数据分析师",
          "增长分析师",
          "用户行为分析师"
        ],
        "entry": "本科",
        "preferred": "本科或硕士 + A/B测试和产品经验",
        "why": "AI可以发现数据规律，但指标怎么定义、实验是否有效、增长是否伤害长期用户价值，仍需要分析师和产品团队共同判断。",
        "directionEn": "Product and Growth Analytics",
        "jobsEn": [
          "Product Data Analyst",
          "Growth Analyst",
          "User Behaviour Analyst"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "供应链、定价与需求预测",
        "jobs": [
          "供应链分析师",
          "定价分析师",
          "需求计划分析师"
        ],
        "entry": "本科",
        "preferred": "硕士更有优势，或本科 + 运筹/统计项目",
        "why": "预测模型会越来越自动化，但库存、交付、竞争、产能和客户关系之间的现实限制不能只靠模型决定。",
        "directionEn": "Supply Chain, Pricing and Demand Forecasting",
        "jobsEn": [
          "Supply Chain Analyst",
          "Pricing Analyst",
          "Demand Planning Analyst"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degreeis advantageous, or bachelor’s degree + operations research/statisticsprojects",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "风险、欺诈与客户洞察",
        "jobs": [
          "风险策略分析师",
          "欺诈分析师",
          "客户洞察分析师"
        ],
        "entry": "本科",
        "preferred": "硕士或本科 + 金融、零售等行业经验",
        "why": "AI擅长识别异常和分群，但规则改变、合规要求、误伤客户和业务损失之间需要有人做取舍并承担后果。",
        "directionEn": "Risk, Fraud and Customer Insights",
        "jobsEn": [
          "Risk Strategy Analyst",
          "Fraud Analyst",
          "Customer Insight Analyst"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      }
    ],
    "safe": [
      {
        "direction": "运筹优化与决策科学",
        "jobs": [
          "运筹分析师",
          "决策科学家",
          "优化算法分析师"
        ],
        "entry": "本科",
        "preferred": "硕士较常见；算法研究或复杂模型岗位常需博士",
        "why": "这类工作要在成本、资源、时间和风险等限制下设计可执行方案，同时处理模型结构与现实约束。",
        "directionEn": "Operations Research, Optimisation and Decision Science",
        "jobsEn": [
          "Operations Research Analyst",
          "Decision Science Scientist",
          "Optimisation Algorithms Analyst"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "PhD",
        "whyEn": "The central challenge is defining new questions, designing valid methods and interpreting uncertain evidence. AI can accelerate research, but originality and scientific judgement remain essential."
      },
      {
        "direction": "因果推断与实验设计",
        "jobs": [
          "实验分析师",
          "营销科学分析师",
          "计量分析师"
        ],
        "entry": "本科",
        "preferred": "硕士较常见；研究型岗位博士更有优势",
        "why": "看到相关性很容易，证明某项策略是否真正造成结果变化则更难，需要严谨的实验设计、统计假设和业务理解。",
        "directionEn": "Causal Inference and Experimental Design",
        "jobsEn": [
          "Laboratory Analyst",
          "Marketing Science Analyst",
          "Econometrics Analyst"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degreeis common; research rolesPhDis advantageous",
        "whyEn": "The role depends on physical systems, testing, safety, site conditions and accountability for real-world performance. AI can assist design, but cannot independently own the outcome."
      },
      {
        "direction": "数据产品与分析战略",
        "jobs": [
          "数据产品经理",
          "业务数据策略顾问",
          "分析转化经理"
        ],
        "entry": "本科",
        "preferred": "硕士、MBA或多年数据与业务项目经验",
        "why": "核心工作是决定企业应该解决什么问题、需要建设什么数据能力，并协调管理层、业务和技术团队把结果真正落地。",
        "directionEn": "Data Products and Analytics Strategy",
        "jobsEn": [
          "Data Product Manager",
          "Business Data Strategy Consultant",
          "Analytics Translation Manager"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "This track relies more heavily on domain judgement, complex trade-offs, accountability or original problem-solving, so AI is more likely to extend professional capability than remove the role."
      }
    ],
    "advice": [
      "不要把商业分析理解成做Excel和看板；统计、SQL、Python、实验设计和商业逻辑都要形成扎实基础。",
      "尽早选择一个行业场景深入，如零售、金融、供应链、医疗或互联网产品，否则容易停留在通用报表层面。",
      "项目应展示从提出商业问题、整理数据、选择方法到给出行动建议的完整过程，并说明建议可能带来的收益和风险。",
      "想走运筹、因果推断或决策科学，硕士通常更有价值；想做一般业务分析，本科阶段的实习和真实项目往往比单纯增加学历更重要。"
    ],
    "adviceEn": [
      "Combine quantitative literacy with a clear understanding of firms, markets, incentives, regulation and a specific industry.",
      "Build projects that move from a business question to evidence, analysis, trade-offs and a recommendation that could actually be implemented.",
      "Do not stop at dashboards or reports; learn to challenge data quality, explain causality and communicate decisions to stakeholders.",
      "A master’s degree is most useful for technical, research, regulated or leadership tracks—not as a substitute for relevant experience."
    ]
  },
  {
    "id": "bism",
    "name": "商业信息系统管理",
    "en": "Business Information Systems Management / MIS",
    "category": "商业与经济",
    "risk": 57,
    "overview": "商业信息系统管理，也常被称为管理信息系统（MIS），研究企业如何选择、建设、整合和管理信息系统，使技术真正支持运营与决策。它介于商科和计算机之间：不只关注软件怎么写，也关注业务流程、数据、项目实施、网络安全、供应商管理和组织变革。",
    "threshold": "当工作只是按照固定步骤开账号、配置标准软件、维护基础数据或编写系统说明时，自动化平台和AI会明显减少人工需求。",
    "high": [
      {
        "direction": "常规IT支持与账号配置",
        "jobs": [
          "信息系统支持专员",
          "IT服务台专员",
          "应用运维助理"
        ],
        "entry": "大专或本科",
        "preferred": "本科 + 云平台、网络或厂商认证",
        "why": "密码重置、权限申请、常见故障排查和软件安装正在被自助服务、远程管理和AI客服大量自动化。",
        "directionEn": "Routine IT Support and Account Configuration",
        "jobsEn": [
          "Information-systems Support Specialist",
          "IT Service Desk Specialist",
          "Application Operations Assistant"
        ],
        "entryEn": "Associate degree or bachelor’s degree",
        "preferredEn": "Bachelor’s degree + cloud platforms, networks or vendorcertification",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "标准化ERP、CRM配置与报表",
        "jobs": [
          "ERP实施助理",
          "CRM系统管理员",
          "企业应用配置专员"
        ],
        "entry": "本科",
        "preferred": "本科 + SAP、Oracle、Salesforce等项目或认证",
        "why": "标准模块配置、字段映射、报表搭建和培训材料生成越来越容易由低代码工具和AI完成。",
        "directionEn": "Standard ERP/CRM Configuration and Reporting",
        "jobsEn": [
          "ERP Implementation Assistant",
          "CRM Systems Administrator",
          "Enterprise Application Configuration Specialist"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Bachelor’s degree + SAP, Oracle, Salesforce and related credentialsprojects or certification",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      },
      {
        "direction": "基础数据维护与系统文档",
        "jobs": [
          "主数据专员",
          "系统文档专员",
          "数据治理助理"
        ],
        "entry": "大专或本科",
        "preferred": "本科 + SQL和数据治理基础",
        "why": "重复的数据清洗、字段检查、文档更新和流程记录很适合自动化，纯维护型岗位的发展空间会缩小。",
        "directionEn": "Basic Data Maintenance and System Documentation",
        "jobsEn": [
          "Master Data Specialist",
          "System Documentation Specialist",
          "Data Governance Assistant"
        ],
        "entryEn": "Associate degree or bachelor’s degree",
        "preferredEn": "bachelor’s degree",
        "whyEn": "The work is largely digital, repeatable and easy to review. AI can automate much of the first draft, routine analysis or documentation, reducing demand for purely execution-focused roles."
      }
    ],
    "border": [
      {
        "direction": "业务系统分析与需求管理",
        "jobs": [
          "系统分析师",
          "IT业务分析师",
          "需求分析师"
        ],
        "entry": "本科",
        "preferred": "本科或硕士 + 行业流程和项目经验",
        "why": "AI能帮助整理访谈和写需求文档，但不同部门真正想要什么、需求冲突如何处理、系统改动会影响谁，仍需要人协调。",
        "directionEn": "Business Systems Analysis and Requirements Management",
        "jobsEn": [
          "Systems Analyst",
          "IT Business Analyst",
          "Requirements Analyst"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "AI can prepare information and options, but the work still depends on stakeholder trust, negotiation, context and responsibility for implementation."
      },
      {
        "direction": "IT项目与数字产品实施",
        "jobs": [
          "IT项目协调员",
          "数字产品经理",
          "信息化PMO分析师"
        ],
        "entry": "本科",
        "preferred": "本科 + 项目经验；PMP或敏捷认证可加分",
        "why": "计划、会议纪要和进度报告可以自动生成，但跨部门推进、处理延期、控制预算和上线责任仍由项目负责人承担。",
        "directionEn": "IT Projects and Digital Product Implementation",
        "jobsEn": [
          "IT Project Coordinator",
          "Digital Product Manager",
          "Digital PMO Analyst"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Bachelor’s degree + project experience; PMP or agilecertificationcan strengthen applications",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      },
      {
        "direction": "企业系统与流程数字化改造",
        "jobs": [
          "ERP顾问",
          "业务流程分析师",
          "企业应用顾问"
        ],
        "entry": "本科",
        "preferred": "硕士、MBA或厂商认证 + 大型实施经验",
        "why": "标准配置会被AI加速，但要重做采购、财务、供应链或人力流程，必须理解组织权责和真实运营方式。",
        "directionEn": "Enterprise Systems and Process Digitalisation",
        "jobsEn": [
          "ERP Consultant",
          "Business Process Analyst",
          "Enterprise Applications Consultant"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree, MBA or vendorcertification + large implementation experience",
        "whyEn": "AI can accelerate the routine parts of this track, but people are still needed to interpret context, resolve trade-offs, coordinate stakeholders and take responsibility for delivery."
      }
    ],
    "safe": [
      {
        "direction": "网络安全治理与信息风险",
        "jobs": [
          "IT风险分析师",
          "信息安全治理顾问",
          "信息安全经理"
        ],
        "entry": "本科",
        "preferred": "硕士或CISA、CISM、CISSP等认证 + 工作经验",
        "why": "安全治理涉及法规、审计、风险接受和事故责任，AI可以发现问题，但最终标准和处置决定必须由组织负责人承担。",
        "directionEn": "Cybersecurity Governance and Information Risk",
        "jobsEn": [
          "IT Risk Analyst",
          "Information-security Governance Consultant",
          "Information Security Manager"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "Master’s degree or CISA, CISM, CISSP and related credentialscertification + professional experience",
        "whyEn": "The work involves changing threats, regulation, ethical trade-offs and accountability. AI can flag issues, but people must decide what risk is acceptable and own the consequences."
      },
      {
        "direction": "企业架构、解决方案与数据架构",
        "jobs": [
          "企业架构师",
          "解决方案架构师",
          "数据架构师"
        ],
        "entry": "本科",
        "preferred": "硕士可加分，核心岗位通常还需多年系统设计经验",
        "why": "大型企业往往同时存在旧系统、云平台、数据仓库和多家供应商，如何让它们安全稳定地协同需要长期经验和全局判断。",
        "directionEn": "Enterprise, Solution and Data Architecture",
        "jobsEn": [
          "Specialist Role",
          "Specialist Role",
          "Specialist Role"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "This track relies more heavily on domain judgement, complex trade-offs, accountability or original problem-solving, so AI is more likely to extend professional capability than remove the role."
      },
      {
        "direction": "IT战略与数字化转型管理",
        "jobs": [
          "IT战略顾问",
          "数字化转型经理",
          "IT总监或CIO发展路径"
        ],
        "entry": "本科",
        "preferred": "MBA、信息系统硕士或多年业务与IT管理经验",
        "why": "这类岗位要决定技术投资方向、选择供应商、推动组织变革并向管理层解释风险，核心价值来自领导、判断和责任。",
        "directionEn": "IT Strategy and Digital Transformation Management",
        "jobsEn": [
          "IT Strategy Consultant",
          "Digital Transformation Manager",
          "IT Director / CIO Career Path"
        ],
        "entryEn": "Bachelor’s degree",
        "preferredEn": "master’s degree + relevant project or professional experience",
        "whyEn": "Trust, cultural understanding, negotiation and live judgement are central to the role. AI can support preparation, but cannot fully replace the relationship or accountability."
      }
    ],
    "advice": [
      "学习时要同时掌握业务流程和技术基础，至少应接触数据库、系统分析、企业应用、项目管理与网络安全。",
      "不要把这个专业学成只会使用办公软件或某一套ERP；应理解系统为什么这样设计、数据怎样流动，以及改动会影响哪些部门。",
      "适合用真实企业场景做项目，例如设计订单系统、优化库存流程、规划CRM实施或评估信息安全风险。",
      "申请时应先查看课程表：优质项目通常既有商科课程，也有数据库、系统开发、数据通信、信息安全和项目实施内容。"
    ],
    "adviceEn": [
      "Combine quantitative literacy with a clear understanding of firms, markets, incentives, regulation and a specific industry.",
      "Build projects that move from a business question to evidence, analysis, trade-offs and a recommendation that could actually be implemented.",
      "Do not stop at dashboards or reports; learn to challenge data quality, explain causality and communicate decisions to stakeholders.",
      "A master’s degree is most useful for technical, research, regulated or leadership tracks—not as a substitute for relevant experience."
    ]
  }
];
const UI = {
  "zh": {
    "brandMain": "专业 × AI",
    "brandSub": "方向·岗位·学历地图",
    "navExplore": "探索专业",
    "navMethod": "判断方法",
    "navSources": "资料来源",
    "heroEyebrow": "AI ERA · UNIVERSITY MAJOR & CAREER ATLAS · 2026",
    "heroSubtitle": "AI时代大学专业与职业路径地图",
    "heroLead": "一站查看专业方向、未来岗位、学历要求和A-Level课程匹配，帮助学生更快理清选择。",
    "startExplore": "开始探索",
    "randomMajor": "随机查看一个专业",
    "panelTitle": "FUTURE SIGNALS",
    "panelDate": "2026.07 · V4.2.1.1",
    "high": "AI 高危区",
    "highDesc": "重复执行、套模板、容易检查",
    "highEx": "基础报表 · 模板化内容 · 常规制图",
    "border": "AI 骑线区",
    "borderDesc": "AI能做一部分，人仍需判断和落地",
    "borderEx": "常规分析 · 一般开发 · 标准咨询",
    "safe": "AI 安全区",
    "safeDesc": "依赖现场、责任、信任或原创研究",
    "safeEx": "临床 · 核心研发 · 复杂工程 · 谈判",
    "majors": "主流专业",
    "directions": "具体方向",
    "zones": "风险分区",
    "roles": "岗位与学历提示",
    "exploreEye": "EXPLORE THE ATLAS",
    "exploreTitle": "专业图谱：方向、岗位与学历",
    "exploreDesc": "一张卡片先看差异，点开后再看完整方向、岗位与学历路径。",
    "searchPlaceholder": "搜索专业、方向或岗位…",
    "sortDefault": "默认排序",
    "sortRiskDesc": "基础岗位受影响：大 → 小",
    "sortRiskAsc": "基础岗位受影响：小 → 大",
    "sortName": "按名称",
    "all": "全部",
    "legendHigh": "高危：基础岗位最容易减少",
    "legendBorder": "骑线：做得浅容易被替代",
    "legendSafe": "安全：更依赖判断、现场或责任",
    "legendNote": "风险落在具体方向和岗位上，专业名称本身说明不了全部。",
    "noMatch": "没有匹配的专业",
    "noMatchSub": "试试更短的关键词或切换专业类别。",
    "methodEye": "HOW TO READ THE MAP",
    "methodTitle": "AI分界线：看工作本身",
    "methodDesc": "从六个维度观察工作内容，了解AI更可能替代哪些任务。",
    "ringTop": "真正的分界线",
    "ringMain": "看工作本身",
    "ringSmall": "同一专业中，执行型岗位和判断型岗位的发展差异往往很大。",
    "ringNote": "每个专业拆成 9 个方向，再对应到岗位和学历要求。",
    "m1t": "屏幕内工作",
    "m1p": "文字、表格、代码和图片等纯数字化任务，更容易交给AI处理。",
    "m2t": "固定流程",
    "m2p": "流程、模板和规则越固定，AI越容易稳定完成。",
    "m3t": "快速验收",
    "m3p": "标准答案、自动测试和明确指标，会降低人工审核需求。",
    "m4t": "责任与后果",
    "m4p": "医疗、安全、工程签字、监管和重大投资，需要明确的责任主体。",
    "m5t": "人际信任",
    "m5p": "咨询、治疗、谈判、管理和采访，都离不开信任与现场判断。",
    "m6t": "现场与设备",
    "m6p": "实验、施工、制造、临床和野外工作充满现场变量，AI更适合提供辅助。",
    "principleSmall": "没有绝对安全的方向。",
    "principleMain": "让AI负责提速，把判断、沟通与责任留在人手里。",
    "strategyEye": "APPLICATION STRATEGY",
    "strategyTitle": "把申请优势，做在课程之外",
    "s1t": "不要只看专业名称，要看具体方向",
    "s1p": "同样是计算机，模板化网页开发和网络安全的前景差别很大；同样是传媒，内容搬运和调查新闻也完全不同。",
    "s2t": "给主专业再配一项实用能力",
    "s2p": "人文社科可以补统计和数据，商科可以补技术与行业知识，理工科可以补沟通、设计或法规。",
    "s3t": "项目不要只展示成品",
    "s3p": "申请材料和作品集应说明你发现了什么问题、怎样收集证据、为什么这样选择、如何测试，以及最后产生了什么影响。",
    "s4t": "先看目标岗位，再决定是否读研",
    "s4p": "临床、科研、核心研发和部分高端咨询往往需要硕士或博士；对执行型岗位，单纯增加学历不一定解决就业问题。",
    "sourcesEye": "EVIDENCE BASE",
    "sourcesTitle": "资料来源与使用边界",
    "sourcesDesc": "AI风险判断参考国际研究；岗位名称和学历要求参考英美官方职业资料，并结合专业培养路径整理。",
    "disclaimerTitle": "重要说明",
    "disclaimer1": "本网站提供专业规划参考，不涉及就业保证、薪资预测或专业排名。“常见入门学历”表示多数岗位的典型起点；临床心理、药学、医学物理、工程签字等岗位，请以目标国家或地区的注册与执照要求为准。",
    "disclaimer2": "研究整理日期：2026年7月14日。建议每 6–12 个月复核一次。",
    "footerText": "星海实验高级中学融致国际课程项目 · College Counseling 学生专业选择系统",
    "backTop": "返回顶部 ↑",
    "compare": "专业对比",
    "selected": "已选择",
    "clear": "清空",
    "startCompare": "开始对比",
    "close": "关闭",
    "overall": "整体判断",
    "highExample": "高危方向示例",
    "stableExample": "更稳方向示例",
    "educationQuick": "学历快速看",
    "jobsLabel": "岗位",
    "entryLabel": "起步",
    "coreLabel": "核心岗位",
    "openAll": "查看全部 9 个方向与岗位 →",
    "addCompare": "加入对比",
    "impactHigh": "基础岗位受影响较大",
    "impactSplit": "要看具体方向",
    "impactMid": "部分基础工作会减少",
    "impactStable": "整体相对稳定",
    "impactHighShort": "影响较大",
    "impactSplitShort": "方向分化明显",
    "impactMidShort": "中等影响",
    "impactStableShort": "相对稳定",
    "detailMeta": "方向 / 岗位 / 学历版",
    "detailStatus": "本页包含高危、骑线和相对安全三类方向。",
    "killLine": "AI影响最明显的工作特征",
    "zoneHighTag": "这些方向里的基础岗位最容易减少",
    "zoneBorderTag": "只会基础执行比较危险，能做复杂判断仍有机会",
    "zoneSafeTag": "更依赖专业判断、真人互动、现场经验或责任",
    "possibleJobs": "可能对应的岗位",
    "whyHere": "为什么放在这里",
    "entryDegree": "通常从什么学历起步",
    "advancedDegree": "想进入核心或高级岗位",
    "eduTitle": "按方向查看岗位和学历",
    "eduNote": "“起步学历”表示多数岗位的常见入口；“核心或高级岗位”说明哪些方向更看重读研、执照或行业经验。",
    "colZone": "方向所处位置",
    "colDirection": "具体方向",
    "colJobs": "可能从事的岗位",
    "colEntry": "通常从什么学历起步",
    "colAdvanced": "想做核心或高级岗位通常需要",
    "adviceTitle": "申请和学习这个专业时，建议重点准备什么",
    "compareTitle": "专业横向对比",
    "compareIntro": "横向查看各专业的方向、岗位和学历要求。",
    "compareMajor": "专业",
    "compareKill": "最容易被AI替代的工作特征",
    "compareHigh": "高危方向、岗位和起步学历",
    "compareSafe": "安全方向、岗位和起步学历",
    "compareDevelop": "安全方向进一步发展",
    "compareAdvice": "首要申读建议",
    "maxCompare": "最多同时比较 3 个专业。"
  },
  "en": {
    "brandMain": "MAJOR × AI",
    "brandSub": "Tracks · Roles · Education",
    "navExplore": "Explore",
    "navMethod": "How it works",
    "navSources": "Sources",
    "heroEyebrow": "AI ERA · UNIVERSITY MAJOR & CAREER ATLAS · 2026",
    "heroSubtitle": "A university major and career atlas for the AI era",
    "heroLead": "Explore subject fit, specialist pathways, future roles and education requirements in one place.",
    "startExplore": "Explore the atlas",
    "randomMajor": "Surprise me",
    "panelTitle": "FUTURE SIGNALS",
    "panelDate": "2026.07 · V4.2.1.1",
    "high": "High-exposure zone",
    "highDesc": "Repeatable, template-led and easy to review",
    "highEx": "Routine reporting · template content · basic drafting",
    "border": "Transition zone",
    "borderDesc": "AI handles part of the work; people still judge and deliver",
    "borderEx": "Applied analysis · general development · standard consulting",
    "safe": "More resilient zone",
    "safeDesc": "Relies on fieldwork, accountability, trust or original research",
    "safeEx": "Clinical work · core R&D · complex engineering · negotiation",
    "majors": "major fields",
    "directions": "specialised tracks",
    "zones": "risk zones",
    "roles": "role and education notes",
    "exploreEye": "EXPLORE THE ATLAS",
    "exploreTitle": "Major pathways: tracks, roles and education",
    "exploreDesc": "Scan the difference on each card, then open the full track, role and education map.",
    "searchPlaceholder": "Search majors, tracks or roles…",
    "sortDefault": "Default order",
    "sortRiskDesc": "Entry-level impact: high → low",
    "sortRiskAsc": "Entry-level impact: low → high",
    "sortName": "By name",
    "all": "All",
    "legendHigh": "High exposure: entry-level roles may shrink fastest",
    "legendBorder": "Transition: shallow execution is vulnerable",
    "legendSafe": "More resilient: judgement, fieldwork or accountability matter more",
    "legendNote": "The map evaluates specific tracks and roles—not whether an entire major is “good” or “bad”.",
    "noMatch": "No matching major",
    "noMatchSub": "Try a shorter keyword or another category.",
    "methodEye": "HOW TO READ THE MAP",
    "methodTitle": "The AI divide: look at the work",
    "methodDesc": "Six questions show whether a direction is easier to automate—or worth building for the long term.",
    "ringTop": "The real dividing line",
    "ringMain": "look at the work",
    "ringSmall": "Within one major, execution-led and judgement-led work can have completely different futures.",
    "ringNote": "Each major is split into nine tracks, then linked to roles and education requirements.",
    "m1t": "Screen-based work",
    "m1p": "Text, spreadsheets, code and image work is generally easier to automate than laboratory, equipment, construction or face-to-face work.",
    "m2t": "Fixed workflows",
    "m2p": "When the same workflow, template and rules apply every time, AI can execute more reliably.",
    "m3t": "Fast validation",
    "m3p": "Clear metrics, standard answers and automated tests make work easier to complete with less human review.",
    "m4t": "Accountability",
    "m4p": "Healthcare, safety, engineering sign-off, regulation and major investment decisions require accountable professionals.",
    "m5t": "Human trust",
    "m5p": "Therapy, consulting, negotiation, management and reporting depend on relationships, culture and live judgement.",
    "m6t": "Sites and equipment",
    "m6p": "Laboratories, construction, manufacturing, clinical and field settings contain unpredictable conditions that AI can usually assist with, not own.",
    "principleSmall": "No direction is absolutely safe.",
    "principleMain": "Use AI for speed; keep judgement, communication and accountability human.",
    "strategyEye": "APPLICATION STRATEGY",
    "strategyTitle": "Build your edge beyond the timetable",
    "s1t": "Look beyond the major title",
    "s1p": "Within computing, template web work differs sharply from cybersecurity; within media, content repackaging differs from investigative journalism.",
    "s2t": "Add one practical capability to your core subject",
    "s2p": "Humanities students can add statistics and data; business students can add technology and domain knowledge; STEM students can add communication, design or regulation.",
    "s3t": "Show the process, not only the final product",
    "s3p": "Applications and portfolios should show the problem, evidence, choices, testing, iteration and real-world impact—not just a polished output.",
    "s4t": "Start with target roles before deciding on postgraduate study",
    "s4p": "Clinical practice, research, core R&D and some advanced consulting often reward a master’s or doctorate. For routine execution roles, another degree alone may not solve the employment problem.",
    "sourcesEye": "EVIDENCE BASE",
    "sourcesTitle": "Sources and limits",
    "sourcesDesc": "AI exposure draws on international research. Role titles and education pathways draw on official UK and US career resources and typical university curricula.",
    "disclaimerTitle": "Important note",
    "disclaimer1": "This site is not an employment guarantee, salary forecast or ranking. “Typical entry education” describes a common route, not a universal rule. Clinical psychology, pharmacy, medical physics and licensed engineering roles must follow local registration and licensing requirements.",
    "disclaimer2": "Research compiled 14 July 2026. Review every 6–12 months.",
    "footerText": "Xinghai FusionVision Curriculum Center · College Counseling Major Choice System",
    "backTop": "Back to top ↑",
    "compare": "Compare majors",
    "selected": "selected",
    "clear": "Clear",
    "startCompare": "Compare",
    "close": "Close",
    "overall": "Overall view",
    "highExample": "Exposed track",
    "stableExample": "More resilient track",
    "educationQuick": "Education signal",
    "jobsLabel": "Roles",
    "entryLabel": "Entry",
    "coreLabel": "Core roles",
    "openAll": "View all 9 tracks and roles →",
    "addCompare": "Add to comparison",
    "impactHigh": "Entry-level roles face substantial pressure",
    "impactSplit": "Outcomes vary sharply by track",
    "impactMid": "Some routine work is likely to shrink",
    "impactStable": "Overall relatively resilient",
    "impactHighShort": "Higher exposure",
    "impactSplitShort": "Track-dependent",
    "impactMidShort": "Moderate exposure",
    "impactStableShort": "More resilient",
    "detailMeta": "Tracks / Roles / Education",
    "detailStatus": "The page below shows three exposed, three transitional and three more resilient tracks.",
    "killLine": "Where the replacement pressure is strongest",
    "zoneHighTag": "Entry-level roles in these tracks are most likely to shrink",
    "zoneBorderTag": "Routine execution is vulnerable; deeper judgement still matters",
    "zoneSafeTag": "These tracks rely more on specialist judgement, people, physical settings or accountability",
    "possibleJobs": "Representative roles",
    "whyHere": "Why it sits here",
    "entryDegree": "Typical entry education",
    "advancedDegree": "For core or senior roles",
    "eduTitle": "Roles and education by track",
    "eduNote": "“Typical entry education” is a common starting point, not an absolute rule. The final column shows where postgraduate study, licensing, certification or substantial experience tends to matter most.",
    "colZone": "Zone",
    "colDirection": "Track",
    "colJobs": "Representative roles",
    "colEntry": "Typical entry education",
    "colAdvanced": "For core or senior roles",
    "adviceTitle": "What to build before and during this degree",
    "compareTitle": "Major comparison",
    "compareIntro": "This comparison focuses on tracks, roles and education requirements—not a simplistic ranking.",
    "compareMajor": "Major",
    "compareKill": "Work most exposed to AI",
    "compareHigh": "Exposed tracks, roles and entry education",
    "compareSafe": "More resilient tracks, roles and entry education",
    "compareDevelop": "Further development for resilient tracks",
    "compareAdvice": "First application priority",
    "maxCompare": "You can compare up to three majors."
  }
};
const CATEGORY_EN = {
  "计算与数据": "Computing & Data",
  "工程与制造": "Engineering & Manufacturing",
  "自然与生命科学": "Natural & Life Sciences",
  "商业与经济": "Business & Economics",
  "创意传播与人文社科": "Creative, Media & Social Sciences"
};
const MAJOR_OVERVIEW_EN = {
  "cs": "Computer Science studies algorithms, software, systems and computation. AI is reducing demand for people who only implement clearly specified features, while increasing the value of engineers who understand complex systems, security, reliability and real-world domains.",
  "visual": "Visual Communication uses images, type, motion and information design to solve communication problems. Generative tools have made basic visual production abundant, so value is moving toward strategy, research, systems thinking and responsible creative direction.",
  "mech": "Mechanical Engineering combines mechanics, thermofluids, design, manufacturing and mechatronic systems. AI will accelerate CAD, simulation and optimisation, but physical constraints, testing, safety and system integration remain strongly human-led.",
  "psych": "Psychology studies behaviour, cognition and mental processes. Standardised assessment and basic content are increasingly automatable, while clinical judgement, therapeutic relationships, crisis work and rigorous research remain difficult to replace.",
  "media": "Media and Communication examines how information is created, distributed and interpreted. Routine content production is highly exposed, but original reporting, audience insight, public-interest communication and high-stakes reputation work remain valuable.",
  "acct": "Accounting measures, reports and assures financial information. Bookkeeping and standard reporting are rapidly automating, while audit judgement, controls, tax strategy, investigations and accountability continue to require qualified professionals.",
  "finance": "Finance studies capital allocation, markets, risk and investment. AI can automate research summaries and standard models, but complex transactions, risk ownership, client trust and decisions under uncertainty still depend on experienced people.",
  "civil": "Civil Engineering designs and maintains buildings, transport, water and urban infrastructure. Routine modelling is becoming faster, but site conditions, safety, regulation, construction delivery and professional sign-off keep core roles resilient.",
  "eee": "Electronic and Electrical Engineering covers circuits, electronics, communications, power and control. AI assists design and verification, while semiconductor architecture, power systems, embedded hardware and safety-critical integration demand deep expertise.",
  "mgmt": "Management examines how organisations set priorities, allocate resources and coordinate people. Administrative analysis is automating, while leadership, negotiation, organisational change and responsibility for outcomes remain distinctly human.",
  "phil": "Philosophy develops rigorous reasoning about knowledge, ethics, logic and society. Generic commentary is easy to generate, but original argument, conceptual precision, technology governance and interdisciplinary research retain strong value.",
  "swe": "Software Engineering focuses on building, operating and evolving reliable software. AI can generate routine code, but architecture, platform engineering, security, testing strategy and ownership of large systems remain high-value capabilities.",
  "bio": "Biology studies living systems from molecules to ecosystems. AI accelerates data analysis and literature work, while experimental design, mechanism discovery, field research and biosafety require specialised judgement and physical work.",
  "ai": "Artificial Intelligence develops models, systems and methods for machine perception, reasoning and action. Entry-level integration work is becoming easier, while foundation-model research, safety, robotics and high-stakes deployment require advanced expertise.",
  "trade": "International Trade examines cross-border exchange, logistics, regulation and market entry. Documentation and routine customer service are automating, while compliance, negotiation, geopolitical risk and resilient supply chains remain important.",
  "physics": "Physics studies matter, energy, space and fundamental laws. Routine calculations can be assisted by AI, but frontier theory, complex experiments, precision instruments and medical physics demand deep training and accountable practice.",
  "pharm": "Pharmacy connects drug science with safe and effective use of medicines. Information retrieval is automating, but clinical pharmacy, formulation, regulation, pharmacovigilance and drug discovery remain highly specialised and often licensed.",
  "math": "Mathematics develops abstract structures, proof, modelling and quantitative reasoning. Standard exercises are easy to automate, while pure research, advanced statistics, cryptography, optimisation and scientific computing remain valuable.",
  "chem": "Chemistry studies substances, reactions and molecular transformation. AI can speed literature review and screening, but novel synthesis, analytical method development, process safety and experimental validation require laboratory expertise.",
  "econ": "Economics studies choices, incentives, markets and public policy. Standard regressions and briefing notes are automatable, while causal inference, mechanism design, competition policy and high-stakes policy evaluation require stronger judgement.",
  "mse": "Materials Science and Engineering links structure, processing, properties and performance. AI supports screening and prediction, but advanced characterisation, failure analysis, manufacturing and new-material development remain experiment- and context-heavy.",
  "ds": "Data Science combines statistics, computing and domain knowledge to learn from data. Dashboard work and template modelling are exposed, while causal analysis, data products, governance and high-stakes decision systems remain valuable.",
  "de": "Design Engineering integrates design, technology, business and human needs. AI can generate concepts, but end-to-end product development, healthcare design, interactive systems and physical validation require multidisciplinary judgement.",
  "cheme": "Chemical Engineering designs processes that transform materials at scale. Routine simulation is accelerating, while process safety, scale-up, control, commissioning and low-carbon systems require site knowledge and professional accountability.",
  "bme": "Biomedical Engineering applies engineering to healthcare, diagnostics and human function. Basic signal processing is automatable, but medical devices, implants, clinical systems and regulation require deep technical and clinical understanding.",
  "soc": "Social Science studies institutions, communities, behaviour and public life. Generic summaries are exposed, while fieldwork, mixed-method research, policy evaluation and conflict-sensitive work depend on context, trust and evidence.",
  "ba": "Business Analytics combines statistics, data tools and commercial judgement to improve product, marketing, operations, supply-chain, pricing and risk decisions. Routine reporting is automating; value is shifting toward problem framing, causal reasoning and implementation.",
  "bism": "Business Information Systems Management connects business processes, data, enterprise technology and organisational change. Routine support and configuration are exposed, while systems analysis, architecture, cyber governance and transformation leadership remain valuable."
};

const categoryColors = {
  "计算与数据":"#176b87","工程与制造":"#7c5cbd","自然与生命科学":"#3d8b6d","商业与经济":"#d07b35","创意传播与人文社科":"#c14e69"
};
let currentLang="zh";
try{currentLang=localStorage.getItem("lang")||"zh";}catch(_){}
const state={category:"全部",query:"",sort:"default",compare:[]};
const grid=document.querySelector("#majorGrid"),filters=document.querySelector("#categoryFilters"),searchInput=document.querySelector("#searchInput"),sortSelect=document.querySelector("#sortSelect"),emptyState=document.querySelector("#emptyState"),majorDialog=document.querySelector("#majorDialog"),compareDialog=document.querySelector("#compareDialog"),compareTray=document.querySelector("#compareTray");
const t=k=>UI[currentLang][k]||UI.zh[k]||k;
const isEn=()=>currentLang==="en";
const catName=c=>isEn()?(CATEGORY_EN[c]||c):c;
const majorName=m=>isEn()?m.en:m.name;
const overview=m=>isEn()?(MAJOR_OVERVIEW_EN[m.id]||`Explore how AI may reshape ${m.en}, with attention to specialised tracks, roles and education requirements.`):m.overview;
const direction=x=>isEn()?x.directionEn:x.direction;
const jobs=x=>isEn()?x.jobsEn:x.jobs;
const entry=x=>isEn()?x.entryEn:x.entry;
const preferred=x=>isEn()?x.preferredEn:x.preferred;
const why=x=>isEn()?x.whyEn:x.why;
const advice=m=>isEn()?m.adviceEn:m.advice;
const colon=()=>isEn()?": ":"：";
const semicolon=()=>isEn()?"; ":"；";

function band(score){
  if(score>=70)return{label:t("impactHigh"),short:t("impactHighShort"),color:"var(--red)"};
  if(score>=55)return{label:t("impactSplit"),short:t("impactSplitShort"),color:"var(--orange)"};
  if(score>=40)return{label:t("impactMid"),short:t("impactMidShort"),color:"var(--yellow)"};
  return{label:t("impactStable"),short:t("impactStableShort"),color:"var(--green)"};
}
function allItems(m){return[...m.high,...m.border,...m.safe];}
function searchable(m){
 const itemText=allItems(m).flatMap(x=>[x.direction,x.directionEn,...x.jobs,...x.jobsEn,x.entry,x.entryEn,x.preferred,x.preferredEn,x.why,x.whyEn]);
 return[m.name,m.en,m.category,CATEGORY_EN[m.category],m.overview,MAJOR_OVERVIEW_EN[m.id],m.threshold,...itemText,...m.advice,...m.adviceEn].join(" ").toLowerCase();
}
function applyStaticI18n(){
 document.documentElement.lang=isEn()?"en":"zh-CN";
 document.title=isEn()?"MAJOR FUTURES | AI-era Major & Career Atlas V4.2.1.1":"MAJOR FUTURES｜星海融致专业选择系统 V4.2.1.1";
 document.querySelectorAll("[data-i18n]").forEach(el=>{el.textContent=t(el.dataset.i18n);});
 document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{el.placeholder=t(el.dataset.i18nPlaceholder);});
 document.querySelectorAll("[data-lang]").forEach(btn=>btn.classList.toggle("active",btn.dataset.lang===currentLang));
 sortSelect.innerHTML=`<option value="default">${t("sortDefault")}</option><option value="risk-desc">${t("sortRiskDesc")}</option><option value="risk-asc">${t("sortRiskAsc")}</option><option value="name">${t("sortName")}</option>`;
 sortSelect.value=state.sort;
}
function renderFilters(){
 const cats=["全部",...new Set(majors.map(m=>m.category))];
 filters.innerHTML=cats.map(c=>`<button class="${state.category===c?"active":""}" data-category="${c}">${c==="全部"?t("all"):catName(c)}</button>`).join("");
}
function visibleMajors(){
 let list=majors.filter(m=>(state.category==="全部"||m.category===state.category)&&searchable(m).includes(state.query.toLowerCase()));
 if(state.sort==="risk-desc")list.sort((a,b)=>b.risk-a.risk);if(state.sort==="risk-asc")list.sort((a,b)=>a.risk-b.risk);if(state.sort==="name")list.sort((a,b)=>majorName(a).localeCompare(majorName(b),isEn()?"en":"zh-CN"));return list;
}
function previewLine(label,item,cls){return`<div class="preview-row" style="--rowcolor:${cls}"><span>${label}</span><strong>${direction(item)}</strong><small>${t("jobsLabel")}${colon()}${jobs(item).slice(0,2).join(isEn()?", ":"、")}</small></div>`;}
function renderCards(){
 const list=visibleMajors();grid.innerHTML=list.map(m=>{const b=band(m.risk),checked=state.compare.includes(m.id);return`<article class="major-card" data-id="${m.id}" style="--accent:${b.color}"><div class="card-top"><span class="category-tag">${catName(m.category)}</span><span class="impact-badge">${t("overall")}${colon()}${b.short}</span></div><h3>${majorName(m)}</h3><span class="en">${isEn()?"":m.en}</span><p class="summary">${overview(m)}</p><div class="card-preview">${previewLine(t("highExample"),m.high[0],"var(--red)")}${previewLine(t("stableExample"),m.safe[0],"var(--green)")}<div class="preview-row degree-preview"><span>${t("educationQuick")}</span><strong>${direction(m.safe[0])}</strong><small>${t("entryLabel")}${colon()}${entry(m.safe[0])}${semicolon()}${t("coreLabel")}${colon()}${preferred(m.safe[0])}</small></div></div><div class="card-bottom"><span class="card-open">${t("openAll")}</span><label class="compare-toggle"><input type="checkbox" data-compare="${m.id}" ${checked?"checked":""}> ${t("addCompare")}</label></div></article>`;}).join("");emptyState.hidden=!!list.length;
}
function updateCompare(){
 compareTray.hidden=state.compare.length===0;const names=state.compare.map(id=>majorName(majors.find(m=>m.id===id))).join(" · ");document.querySelector("#compareNames").textContent=state.compare.length?isEn()?`${names} (${state.compare.length} / 3)`:`${names}（${state.compare.length} / 3）`:`0 / 3 ${t("selected")}`;document.querySelector("#openCompare").disabled=state.compare.length<2;renderCards();
}
function chips(items){return`<div class="job-chips">${items.map(x=>`<span>${x}</span>`).join("")}</div>`;}
function zone(title,tag,items,cls){return`<article class="zone ${cls}"><div class="zone-head"><h3>${title}</h3><span>${tag}</span></div><div class="direction-list">${items.map(x=>`<section class="direction-item"><h4>${direction(x)}</h4><div class="direction-line"><b>${t("possibleJobs")}</b>${chips(jobs(x))}</div><p class="direction-reason"><b>${t("whyHere")}</b>${why(x)}</p><div class="degree-inline"><span><b>${t("entryDegree")}</b>${entry(x)}</span><span><b>${t("advancedDegree")}</b>${preferred(x)}</span></div></section>`).join("")}</div></article>`;}
function educationRows(m){const groups=[[t("high"),m.high,"high"],[t("border"),m.border,"edge"],[t("safe"),m.safe,"safe"]];return groups.flatMap(([label,items,cls])=>items.map(x=>`<tr><td><span class="zone-pill ${cls}">${label}</span></td><td><strong>${direction(x)}</strong></td><td>${jobs(x).join(isEn()?", ":"、")}</td><td>${entry(x)}</td><td>${preferred(x)}</td></tr>`)).join("");}
function thresholdEn(m){const d=m.high.map(x=>direction(x)).join(", ");return`Replacement pressure is strongest when work in ${m.en} is screen-based, standardised and easy to review—especially in areas such as ${d}.`;}
function openMajor(id,matchSection=""){const m=majors.find(x=>x.id===id),b=band(m.risk),color=categoryColors[m.category];document.querySelector("#dialogContent").innerHTML=`<section class="detail-hero" style="--detail:${color}"><div class="detail-meta">${catName(m.category)} · V4.2.1.1 · ${t("detailMeta")}</div><div class="detail-title-row"><div><h2>${majorName(m)}</h2><p>${isEn()?m.name:m.en}</p></div></div><div class="detail-status"><span class="impact-badge" style="--accent:${b.color}">${t("overall")}${colon()}${b.label}</span><span>${t("detailStatus")}</span></div><p class="detail-overview">${overview(m)}</p></section>${matchSection}<div class="kill-line"><strong>${t("killLine")}</strong><p>${isEn()?thresholdEn(m):m.threshold}</p></div><div class="detail-body"><div class="zone-stack">${zone(t("high"),t("zoneHighTag"),m.high,"high")}${zone(t("border"),t("zoneBorderTag"),m.border,"edge")}${zone(t("safe"),t("zoneSafeTag"),m.safe,"safe")}</div><section class="detail-section"><h3>${t("eduTitle")}</h3><p class="section-note">${t("eduNote")}</p><div class="education-scroll"><table class="education-table"><thead><tr><th>${t("colZone")}</th><th>${t("colDirection")}</th><th>${t("colJobs")}</th><th>${t("colEntry")}</th><th>${t("colAdvanced")}</th></tr></thead><tbody>${educationRows(m)}</tbody></table></div></section><section class="detail-section advice-section"><h3>${t("adviceTitle")}</h3><ul class="advice-list">${advice(m).map(x=>`<li>${x}</li>`).join("")}</ul></section></div>`;majorDialog.style.setProperty("--detail",color);majorDialog.showModal();}
function compactItem(x){return`<li><strong>${direction(x)}</strong><small>${jobs(x).slice(0,2).join(isEn()?", ":"、")}${isEn()?" | ":"｜"}${t("entryLabel")}${colon()}${entry(x)}</small></li>`;}
function renderCompare(){const list=state.compare.map(id=>majors.find(m=>m.id===id)),cols=list.length,row=(label,cells,cls="")=>`<div class="compare-row ${cls}" style="--cols:${cols}"><strong>${label}</strong>${cells.join("")}</div>`;document.querySelector("#compareContent").innerHTML=`<div class="compare-wrap"><h2>${t("compareTitle")}</h2><p class="compare-intro">${t("compareIntro")}</p><div class="compare-table">${row(t("compareMajor"),list.map(m=>`<div>${majorName(m)}<small style="display:block;color:var(--muted)">${isEn()?m.name:m.en}</small></div>`),"compare-head")}${row(t("overall"),list.map(m=>`<div class="compare-cell"><strong style="color:${band(m.risk).color}">${band(m.risk).label}</strong></div>`))}${row(t("compareKill"),list.map(m=>`<div>${isEn()?thresholdEn(m):m.threshold}</div>`))}${row(t("compareHigh"),list.map(m=>`<div class="compare-cell"><ul class="compare-directions">${m.high.map(compactItem).join("")}</ul></div>`))}${row(t("compareSafe"),list.map(m=>`<div class="compare-cell"><ul class="compare-directions">${m.safe.map(compactItem).join("")}</ul></div>`))}${row(t("compareDevelop"),list.map(m=>`<div class="compare-cell"><ul>${m.safe.map(x=>`<li><strong>${direction(x)}</strong>${colon()}${preferred(x)}</li>`).join("")}</ul></div>`))}${row(t("compareAdvice"),list.map(m=>`<div>${advice(m)[0]}</div>`))}</div></div>`;compareDialog.showModal();}
function setLanguage(lang){currentLang=lang;try{localStorage.setItem("lang",lang);}catch(_){}applyStaticI18n();renderFilters();renderCards();updateCompare();if(majorDialog.open)majorDialog.close();if(compareDialog.open)compareDialog.close();}
filters.addEventListener("click",e=>{if(e.target.dataset.category){state.category=e.target.dataset.category;renderFilters();renderCards();}});
grid.addEventListener("change",e=>{const cb=e.target.closest("[data-compare]");if(!cb)return;const id=cb.dataset.compare;if(cb.checked&&state.compare.length>=3){cb.checked=false;alert(t("maxCompare"));return;}state.compare=cb.checked?[...state.compare,id]:state.compare.filter(x=>x!==id);updateCompare();});
grid.addEventListener("click",e=>{if(e.target.closest(".compare-toggle"))return;const card=e.target.closest(".major-card");if(card)openMajor(card.dataset.id);});
searchInput.addEventListener("input",e=>{state.query=e.target.value.trim();renderCards();});sortSelect.addEventListener("change",e=>{state.sort=e.target.value;renderCards();});
document.querySelectorAll("[data-lang]").forEach(btn=>btn.addEventListener("click",()=>setLanguage(btn.dataset.lang)));
document.addEventListener("keydown",e=>{if(e.key==="/"&&document.activeElement.tagName!=="INPUT"){e.preventDefault();searchInput.focus();}if(e.key==="Escape"){if(majorDialog.open)majorDialog.close();if(compareDialog.open)compareDialog.close();}});
document.querySelectorAll("[data-close]").forEach(btn=>btn.addEventListener("click",()=>btn.closest("dialog").close()));[majorDialog,compareDialog].forEach(d=>d.addEventListener("click",e=>{if(e.target===d)d.close();}));
document.querySelector("#clearCompare").addEventListener("click",()=>{state.compare=[];updateCompare();});document.querySelector("#openCompare").addEventListener("click",renderCompare);document.querySelector("#randomMajor").addEventListener("click",()=>openMajor(majors[Math.floor(Math.random()*majors.length)].id));
document.querySelector("#themeToggle").addEventListener("click",()=>{const dark=document.documentElement.dataset.theme==="dark",next=dark?"light":"dark";document.documentElement.dataset.theme=next;try{localStorage.setItem("theme",next);}catch(_){}});let savedTheme="light";try{savedTheme=localStorage.getItem("theme")||"light";}catch(_){}document.documentElement.dataset.theme=savedTheme;
applyStaticI18n();renderFilters();renderCards();updateCompare();
