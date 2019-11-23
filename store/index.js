export const state = () => ({
  sections: {
    home: {
      english_title: 'Home',
      chinese_title: '博英咨询',
      english_content: '',
      chinese_content: ''
    },
    about_us: {
      english_title: 'About Us',
      chinese_title: '关于我们',
      english_content: '',
      chinese_content: '',
      background_image_url: ''
    },
    services: {
      english_title: 'Services',
      chinese_title: '我们的服务',
      english_content: '',
      chinese_content: '',
      background_image_url: ''
    },
    clients: {
      english_title: 'Clients',
      chinese_title: '解决方案',
      english_content: '',
      chinese_content: '',
      background_image_url: ''
    },
    candidates: {
      english_title: 'Candidates',
      chinese_title: '人才培训',
      english_content: '',
      chinese_content: '',
      background_image_url: ''
    },
    blog: {
      english_title: 'Market Insight',
      chinese_title: '市场观察',
      list: [],
      background_image_url: ''
    },
    contact_us: {
      english_title: 'Contact Us',
      chinese_title: '联系我们',
      english_content: '',
      chinese_content: '',
      background_image_url: ''
    },
    privacy_policy: {
      english_title: 'Privacy Policy',
      chinese_title: '隐私政策',
      english_content: '',
      chinese_content: '',
      background_image_url: ''
    }
  },
  currentSectionName: 'home',
  language_names: {
    english: {
      english: 'EN',
      chinese: 'ZH'
    },
    chinese: {
      english: '英',
      chinese: '中'
    }
  },
  currentLanguageName: 'english',
  footerIsShow: true,
  drawerIsShow: false,
  menuItems: [
    'home',
    'about_us',
    'services',
    'clients',
    'candidates',
    'blog',
    'contact_us'
  ]
})

export const mutations = {
  setSection(state, sectionName) {
    state.currentSectionName = sectionName
  },
  setHome(state, homeData) {
    const {
      english_title,
      chinese_title,
      english_content,
      chinese_content,
      background_image_url
    } = homeData
    state.sections = {
      ...state.sections,
      home: {
        ...state.sections.home,
        english_title,
        chinese_title,
        english_content,
        chinese_content,
        background_image_url
      }
    }
  },
  setAboutUs(state, aboutUsData) {
    const {
      english_title,
      chinese_title,
      english_content,
      chinese_content,
      background_image_url
    } = aboutUsData
    state.sections = {
      ...state.sections,
      about_us: {
        ...state.sections.about_us,
        english_title,
        chinese_title,
        english_content,
        chinese_content,
        background_image_url
      }
    }
  },
  setServices(state, servicesData) {
    const {
      english_title,
      chinese_title,
      english_content,
      chinese_content,
      background_image_url
    } = servicesData
    state.sections = {
      ...state.sections,
      services: {
        ...state.sections.services,
        english_title,
        chinese_title,
        english_content,
        chinese_content,
        background_image_url
      }
    }
  },
  setClients(state, clientsData) {
    const {
      english_title,
      chinese_title,
      english_content,
      chinese_content,
      background_image_url
    } = clientsData
    state.sections = {
      ...state.sections,
      clients: {
        ...state.sections.clients,
        english_title,
        chinese_title,
        english_content,
        chinese_content,
        background_image_url
      }
    }
  },
  setCandidates(state, candidatesData) {
    const {
      english_title,
      chinese_title,
      english_content,
      chinese_content,
      background_image_url
    } = candidatesData
    state.sections = {
      ...state.sections,
      candidates: {
        ...state.sections.candidates,
        english_title,
        chinese_title,
        english_content,
        chinese_content,
        background_image_url
      }
    }
  },
  setBlog(state, blogData) {
    const { list, background_image_url } = blogData
    state.sections = {
      ...state.sections,
      blog: {
        ...state.sections.blog,
        list,
        background_image_url
      }
    }
  },
  setContactUs(state, contactUsData) {
    const {
      english_title,
      chinese_title,
      english_content,
      chinese_content,
      background_image_url
    } = contactUsData
    state.sections = {
      ...state.sections,
      contact_us: {
        ...state.sections.contact_us,
        english_title,
        chinese_title,
        english_content,
        chinese_content,
        background_image_url
      }
    }
  },
  setPrivacyPolicy(state, privacyPolicyData) {
    const {
      english_title,
      chinese_title,
      english_content,
      chinese_content,
      background_image_url
    } = privacyPolicyData
    state.sections = {
      ...state.sections,
      privacy_policy: {
        ...state.sections.privacy_policy,
        english_content,
        chinese_content,
        background_image_url
      }
    }
  },
  setLanguage(state, languageName) {
    state.currentLanguageName = languageName
  },
  showFooter(state) {
    state.footerIsShow = true
  },
  hideFooter(state) {
    state.footerIsShow = false
  },
  showDrawer(state) {
    state.drawerIsShow = true
  },
  hideDrawer(state) {
    state.drawerIsShow = false
  },
  toggleDrawer(state) {
    state.drawerIsShow = !state.drawerIsShow
  }
}
