pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git(url: 'https://github.com/umutiq/ts-base', branch: 'dev')
      }
    }

    stage('') {
      steps {
        sh '''nvm install --lts &&
nvm use --lts'''
      }
    }

  }
}