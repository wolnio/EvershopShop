
      import React from 'react';
      import ReactDOM from 'react-dom';
      import Area from '@evershop/core/src/lib/components/Area';
      import Hydrate from '@evershop/core/src/lib/components/react/client/Hydrate';
      
Area.defaultProps.components = {
  'icon-wrapper': {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xmcm9udFN0b3JlXGFsbFxNaW5pQ2FydC5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xmcm9udFN0b3JlXGFsbFxNaW5pQ2FydC5qcw==',
      sortOrder: 10,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\checkout\\pages\\frontStore\\all\\MiniCart.js')
    }
  },
  content: {
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xmcm9udFN0b3JlXGNhcnRcU2hvcHBpbmdDYXJ0Lmpz: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xmcm9udFN0b3JlXGNhcnRcU2hvcHBpbmdDYXJ0Lmpz',
      sortOrder: 1,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\checkout\\pages\\frontStore\\cart\\ShoppingCart.js')
    }
  },
  shoppingCartRight: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xmcm9udFN0b3JlXGNhcnRcU3VtbWFyeS5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xmcm9udFN0b3JlXGNhcnRcU3VtbWFyeS5qcw==',
      sortOrder: 10,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\checkout\\pages\\frontStore\\cart\\Summary.js')
    }
  },
  body: {
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcZnJvbnRTdG9yZVxhbGxcTGF5b3V0Lmpz: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcZnJvbnRTdG9yZVxhbGxcTGF5b3V0Lmpz',
      sortOrder: 1,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\frontStore\\all\\Layout.js')
    },
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcZnJvbnRTdG9yZVxhbGxcTm90aWZpY2F0aW9uLmpz: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcZnJvbnRTdG9yZVxhbGxcTm90aWZpY2F0aW9uLmpz',
      sortOrder: 10,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\frontStore\\all\\Notification.js')
    }
  },
  header: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcZnJvbnRTdG9yZVxhbGxcTG9nby5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcZnJvbnRTdG9yZVxhbGxcTG9nby5qcw==',
      sortOrder: 1,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\frontStore\\all\\Logo.js')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcZnJvbnRTdG9yZVxhbGxcTWVudS5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcZnJvbnRTdG9yZVxhbGxcTWVudS5qcw==',
      sortOrder: 5,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\frontStore\\all\\Menu.js')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcZnJvbnRTdG9yZVxhbGxcTW9iaWxlTWVudS5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcZnJvbnRTdG9yZVxhbGxcTW9iaWxlTWVudS5qcw==',
      sortOrder: 5,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\frontStore\\all\\MobileMenu.js')
    }
  },
  head: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcZnJvbnRTdG9yZVxhbGxcTWV0YS5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcZnJvbnRTdG9yZVxhbGxcTWV0YS5qcw==',
      sortOrder: 5,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\frontStore\\all\\Meta.js')
    }
  },
  shoppingCartLeft: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xwcm9tb3Rpb25ccGFnZXNcZnJvbnRTdG9yZVxjYXJ0XENvdXBvbi5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xwcm9tb3Rpb25ccGFnZXNcZnJvbnRTdG9yZVxjYXJ0XENvdXBvbi5qcw==',
      sortOrder: 20,
      component: require('D:\\REACT\\evershop-app\\node_modules\\@evershop\\core\\src\\modules\\promotion\\pages\\frontStore\\cart\\Coupon.js')
    }
  }
} 
ReactDOM.hydrate(
        <Hydrate/>,
        document.getElementById('app')
      );