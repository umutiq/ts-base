pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git(url: 'https://github.com/umutiq/ts-base', branch: 'dev')
      }
    }

    stage('error') {
      steps {
        nvm(version: '16.15', nvmInstallURL: 'https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh') {
          sh 'npm install'
        }

      }
    }

    stage('npm') {
      steps {
        sh 'npm install'
      }
    }

  }
}