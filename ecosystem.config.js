module.exports = {
  apps: [{
    name: 'peterwestmedia',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-185-17-38.eu-central-1.compute.amazonaws.com',
      key: 'C://Users//simon//Documents//Programming//Websites//Keys//AWS-Webserver-KepPair.pem',
      ref: 'origin/master',
      repo: 'https://github.com/peterwest-1/peterwestmedia',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
