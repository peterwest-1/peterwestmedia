module.exports = {
  apps: [{
    name: 'peterwestmedia',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-196-182-115.eu-central-1.compute.amazonaws.com',
      key: 'C://Users//simon//Documents//Programming//AWS//aws-pwm.pem',
      ref: 'origin/master',
      repo: 'https://github.com/peterwest-1/peterwestmedia',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
