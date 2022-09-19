pipeline {
    agent any
    tools {
        nodejs "node"
    }
    stages {
        stage('Clone Git') {
            steps {
                git(url: 'https://github.com/umutiq/ts-base.git', branch: 'dev', credentialsId: 'jenkins')
            }
        }
    }
}