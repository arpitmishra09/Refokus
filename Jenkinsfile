pipeline {
    agent any

    tools {
        nodejs 'node-20'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('frontend') {
                    sh 'node -v'
                    sh 'npm -v'
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy (DEV)') {
            when {
                branch 'develop'
            }
            steps {
                echo 'Deploying to DEV environment'
            }
        }

        stage('Deploy (PROD)') {
            when {
                branch 'prod'
            }
            steps {
                echo 'Deploying to PRODUCTION environment'
            }
        }
    }

    post {
        success {
            echo '✅ Build successful'
        }
        failure {
            echo '❌ Build failed'
        }
        always {
            cleanWs()
        }
    }
}
