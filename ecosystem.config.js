module.exports = {
  apps: [{
    name: 'peterwestmedia',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-57-68-23.eu-central-1.compute.amazonaws.com',
      key: '~/.ssh/aws-ubuntu-linux.pem',
      ref: 'origin/master',
      repo: 'https://github.com/peterwest-1/peterwestmedia',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
