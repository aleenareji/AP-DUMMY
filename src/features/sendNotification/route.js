import SendNotification from './SendNotification';
  
  export default {
    path: '/dashboard/send-notification',
    name: 'SendNotification',
    childRoutes: [
      { path: 'send-notification',
        name: 'SendNotification',
        component: SendNotification,
        isIndex: true,
      },
    ],
  };