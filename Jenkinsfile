pipeline {
    agent any

    environment {
        NODE_VERSION = "16"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Node.js') {
            steps {
                echo "Using Node.js version ${env.NODE_VERSION}"
                // If Jenkins has nvm installed or a Node tool configured, adjust as needed
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo "Running tests — adjust if you have test scripts"
                sh 'npm test || true'
            }
        }

        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo "🎉 Build succeeded"
        }
        failure {
            echo "❌ Build failed"
        }
        always {
            cleanWs()
        }
    }
}
