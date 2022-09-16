pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git(url: 'https://github.com/umutiq/ts-base', branch: 'dev')
      }
    }

    stage('Log') {
      steps {
        sh 'npm --version'
        tool 'node'
      }
    }

  }
}