pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git(url: 'https://github.com/umutiq/ts-base', branch: 'dev')
      }
    }

    stage('NVM') {
      steps {
        sh '''export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh" && nvm install --lts &&
nvm use --lts'''
      }
    }

    stage('npm') {
      steps {
        sh 'npm install && npm test'
      }
    }

  }
}