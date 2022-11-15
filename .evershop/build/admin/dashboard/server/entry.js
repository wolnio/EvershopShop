import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Area from '@evershop/core/src/lib/components/Area';
Area.defaultProps.components = {
  adminMenu: {
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXGFsbFxDYXRhbG9nTWVudUdyb3VwLmpz: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXGFsbFxDYXRhbG9nTWVudUdyb3VwLmpz',
      sortOrder: 20,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\catalog\\pages\\admin\\all\\CatalogMenuGroup.js')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xhZG1pblxhbGxcQ2hlY2tvdXRNZW51R3JvdXAuanM=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xhZG1pblxhbGxcQ2hlY2tvdXRNZW51R3JvdXAuanM=',
      sortOrder: 40,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\checkout\\pages\\admin\\all\\CheckoutMenuGroup.js')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXENtc01lbnVHcm91cC5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXENtc01lbnVHcm91cC5qcw==',
      sortOrder: 50,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\admin\\all\\CmsMenuGroup.js')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXFF1aWNrTGlua3MuanM=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXFF1aWNrTGlua3MuanM=',
      sortOrder: 10,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\admin\\all\\QuickLinks.js')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xwcm9tb3Rpb25ccGFnZXNcYWRtaW5cYWxsXENvdXBvbk1lbnVHcm91cC5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xwcm9tb3Rpb25ccGFnZXNcYWRtaW5cYWxsXENvdXBvbk1lbnVHcm91cC5qcw==',
      sortOrder: 30,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\promotion\\pages\\admin\\all\\CouponMenuGroup.js')
    }
  },
  quickLinks: {
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXGFsbFxOZXdQcm9kdWN0UXVpY2tMaW5rLmpz: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXGFsbFxOZXdQcm9kdWN0UXVpY2tMaW5rLmpz',
      sortOrder: 20,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\catalog\\pages\\admin\\all\\NewProductQuickLink.js')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xwcm9tb3Rpb25ccGFnZXNcYWRtaW5cYWxsXE5ld0NvdXBvblF1aWNrTGluay5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xwcm9tb3Rpb25ccGFnZXNcYWRtaW5cYWxsXE5ld0NvdXBvblF1aWNrTGluay5qcw==',
      sortOrder: 30,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\promotion\\pages\\admin\\all\\NewCouponQuickLink.js')
    }
  },
  leftSide: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xhZG1pblxkYXNoYm9hcmRcQmVzdHNlbGxlcnMuanM=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xhZG1pblxkYXNoYm9hcmRcQmVzdHNlbGxlcnMuanM=',
      sortOrder: 20,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\checkout\\pages\\admin\\dashboard\\Bestsellers.js')
    },
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xhZG1pblxkYXNoYm9hcmRcU3RhdGlzdGljLmpz: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xhZG1pblxkYXNoYm9hcmRcU3RhdGlzdGljLmpz',
      sortOrder: 10,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\checkout\\pages\\admin\\dashboard\\Statistic.js')
    }
  },
  rightSide: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xhZG1pblxkYXNoYm9hcmRcTGlmZXRpbWVzYWxlcy5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xhZG1pblxkYXNoYm9hcmRcTGlmZXRpbWVzYWxlcy5qcw==',
      sortOrder: 10,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\checkout\\pages\\admin\\dashboard\\Lifetimesales.js')
    }
  },
  body: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXExheW91dC5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXExheW91dC5qcw==',
      sortOrder: 10,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\admin\\all\\Layout.js')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXE5vdGlmaWNhdGlvbi5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXE5vdGlmaWNhdGlvbi5qcw==',
      sortOrder: 10,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\admin\\all\\Notification.js')
    }
  },
  header: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXExvZ28uanM=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXExvZ28uanM=',
      sortOrder: 10,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\admin\\all\\Logo.js')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXFNlYXJjaEJveC5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXFNlYXJjaEJveC5qcw==',
      sortOrder: 20,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\admin\\all\\SearchBox.js')
    }
  },
  head: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXE1ldGEuanM=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXE1ldGEuanM=',
      sortOrder: 5,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\admin\\all\\Meta.js')
    }
  },
  adminNavigation: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXE5hdmlnYXRpb24uanM=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXE5hdmlnYXRpb24uanM=',
      sortOrder: 10,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\admin\\all\\Navigation.js')
    }
  },
  content: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cZGFzaGJvYXJkXExheW91dC5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cZGFzaGJvYXJkXExheW91dC5qcw==',
      sortOrder: 10,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\admin\\dashboard\\Layout.js')
    },
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cZGFzaGJvYXJkXFBhZ2VIZWFkaW5nLmpz: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cZGFzaGJvYXJkXFBhZ2VIZWFkaW5nLmpz',
      sortOrder: 5,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\admin\\dashboard\\PageHeading.js')
    }
  }
} 