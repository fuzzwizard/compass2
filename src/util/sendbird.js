import SendBird from 'sendbird';

import {SENDBIRD_CONFIG} from './envconfig';

const sendbird = new SendBird({appId: SENDBIRD_CONFIG.appId});

const sendbirdConnect = (userEmail, username, callback) => {
  sendbird.connect((user, error) => {

  });
};

