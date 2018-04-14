module.exports = {
  apps: [{
    name: 'peterwestmedia',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-57-68-23.eu-central-1.compute.amazonaws.com',
<<<<<<< HEAD
      key: 'C:\\Users\\peterwest_1\\Documents\\Programming\\Miscellaneous\\aws-ubuntu-linux.pem',
=======
      key: 'C:\Users\peterwest_1\Documents\Programming\Miscellaneous\aws-ubuntu-linux.pem',
>>>>>>> 0818f1269872865326a6cc8ebf02cf1fdb5fc7c0
      ref: 'origin/master',
      repo: 'https://github.com/peterwest-1/peterwestmedia',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
