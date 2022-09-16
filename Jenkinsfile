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
        nvm(version: '16.15')
      }
    }

    stage('npm') {
      steps {
        sh 'npm install'
      }
    }

  }
}